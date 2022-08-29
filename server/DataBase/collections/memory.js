const mongoose = require("mongoose");

const Memory_Doc = new mongoose.Schema({
    images:{
        fileName: {
            type: String,
          },
          filePath: {
            type: String,
          },
          fileType: {
            type: String,
          },
          fileSize: {
            type: String,
          }
    }
});

const Memory_Col = mongoose.model("MEMORY",Memory_Doc);

module.exports = Memory_Col;