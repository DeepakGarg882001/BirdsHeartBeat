const router = require("../Rootroutes");
const Contact_Col = require("../../DataBase/collections/contactUS");
const adminAuthenticate = require("../../middleware/adminAuthenticate");

router.post("/contact/status", adminAuthenticate, async (request, response) => {
  try {
   console.log(request.body);
    const { userId, progress, messageId } = request.body;

    if (!userId || !progress || !messageId) {
      return response.status(401).json({ error: "UnAuthorised User!" });
    }

    const getMessage = await Contact_Col.findOne({ _id: messageId });
    if (!getMessage) {
      return response.status(401).json({ error: "Process Failed!" });
    }

    if (progress === "attending") {
      console.log(getMessage);
      if (getMessage.progress != "none") {
         return response.status(401).json({ error: "UnAuthorised User!" });
       }
      const attendClient = await Contact_Col.findOneAndUpdate(
        { _id: messageId },
        { progress, "attendingBy.userId": userId }
      );

      if (!attendClient) {
        return response.status(401).json({ error: "Process failed" });
      }

      response.status(201).json({ message: "Successfully Updated!" });
    } else if (progress === "failed" || progress === "completed") {
      if (getMessage.progress != "attending") {
        return response.status(401).json({ error: "UnAuthorised User!" });
      }

      const closeClient = await Contact_Col.findOneAndUpdate(
        { _id: messageId },
        { progress, "closedBy.userId": userId }
      );

      if (!closeClient) {
        return response.status(401).json({ error: "Process failed" });
      }

      response.status(201).json({ message: "Successfully Updated!" });
    } else {
      return response.status(401).json({ error: "UnAuthorised User!" });
    }
  } catch (error) {
    response.status(500).json({ error });
  }
});
