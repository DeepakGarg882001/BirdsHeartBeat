const router = require("../Rootroutes");
const User_Col = require("../../DataBase/collections/users");
const adminAuthenticate = require("../../middleware/adminAuthenticate");

router.post(
  "/member/acc/create/admin",
  adminAuthenticate,
  async (request, response) => {
    try {
      const { userId, adminId, adminName, action } = request.body;

      if (!userId || !adminId || !adminName || !action) {
        return response
          .status(401)
          .json({ error: "Please Provide all credentials!" });
      }

      const isUserExist = await User_Col.findOne({ _id: userId });

      if (!isUserExist) {
        return response.status(401).json({ error: "User Does Not Exist" });
      }

      const changeUserRole = await User_Col.findOneAndUpdate(
        { _id: userId },
        {
          userRole: { role: action },
          $push: { userRolChanges: { role: action, adminId, adminName } },
        }
      );

      if (!changeUserRole) {
        return response.status(401).json({ error: "Process Failed !" });
      }

      response.status(200).json({ message: "Successfully Updated !" });
    } catch (error) {
      response.status(501).json({ error });
    }
  }
);
