const router = require("../Rootroutes");
const UserCol = require("../../DataBase/collections/users");
const adminAuthenticate = require("../../middleware/adminAuthenticate");

router.post(
  "/member/acc/play",
  adminAuthenticate,
  async (request, response) => {
    try {
      console.log(request.body);

      const { adminId, accPlay, userId } = request.body;

      if (!adminId || !accPlay || !userId) {
        return response
          .status(401)
          .json({ error: "Please Provide all Crediantial" });
      }

      const isUserExist = await UserCol.findOne({ _id: userId });
      console.log(isUserExist);
      if (!isUserExist) {
        return response.status(401).json({ error: "User Does Not Exist!" });
      }

      const changePlay = await UserCol.findOneAndUpdate(
        { _id: userId },
        {
          userAccPlay: { accPlay: accPlay },
          $push: { userAccPlayChanges: { accPlay: accPlay, adminId: adminId } },
        }
      );
      console.log(changePlay);
      if (!changePlay) {
        return response.status(401).json({ error: "Process Failed !" });
      }

      response.status(200).json({ message: "Successfully Updated !" });
    } catch (error) {
      response.status(500).json({ error });
    }
  }
);
