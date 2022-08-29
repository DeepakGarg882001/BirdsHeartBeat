const router = require("../Rootroutes");
const Support_Col = require("../../DataBase/collections/supportedCmp");
const upload = require("../../middleware/uploadFile");
const UserCol = require("../../DataBase/collections/users");

router.post("/admin/add/new/support", upload, async (request, response) => {
  try {
    const { companyName, companyLink, adminId, adminName } = request.body;

    if (!companyLink || !companyName || !adminId || !adminName) {
      return response
        .status(401)
        .json({ error: "Please fill the form Completely !" });
    }

    const isUserRight = await UserCol.findOne({ _id: adminId });

    if (!isUserRight || isUserRight.userRole.role === "member") {
      return response.status(401).json({ error: "UnAuthorised User !" });
    }
    
    const FileArray = [];

    request.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: element.size,
      };

      FileArray.push(file);
    });

    if (FileArray.length === 0) {
      return response
        .status(401)
        .json({ error: "Please Provide Company Logo !" });
    }

    const finalData = {
      companyLink,
      companyName,
      companyLogo: FileArray,
      adminId,
      adminName,
    };

    const saveData = await Support_Col.create(finalData);
    if (!saveData) {
      return response.status(401).json({ error: "Process Failed !" });
    }

    response.status(201).json({ message: " Successfully Saved !" });
  } catch (error) {
    response.status(501).json({ error });
  }
});
