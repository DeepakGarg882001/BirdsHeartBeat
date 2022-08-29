const router = require("../Rootroutes");
const User_Col = require("../../DataBase/collections/users");
const admin_1Authenticate = require("../../middleware/admin_1Authenticate");

router.get(
  "/users/members/show/admin",
  admin_1Authenticate,
  async (request, response) => {
    try {
      const query = request.query.key;

      console.log(query);

      const getMembers = await User_Col.find({
        $or: [
          { name: { $regex: query, $options: "i" } },
          { email: { $regex: query, $options: "i" } },
        ],
        "userRole.role": "admin",
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
