const router = require("../Rootroutes");
const User_Col = require("../../DataBase/collections/users");
const adminAuthenticate = require("../../middleware/adminAuthenticate");

router.get(
  "/users/members/not/admin",
  adminAuthenticate,
  async (request, response) => {
    try {
      const query = request.query.key;

      console.log(query);

      const getMembers = await User_Col.find({
        $or: [
          { name: { $regex: query, $options: "i" } },
          { email: { $regex: query, $options: "i" } },
        ],
        "userRole.role": "member",
      }).sort({ updatedAt: -1 });

      console.log(getMembers);
      if (!getMembers) {
        return response.status(401).json({ error: "Process Failed !" });
      }

      response.status(200).json({ data: getMembers });
    } catch (error) {
      response.status(501).json({ error });
    }
  }
);
