const mongoose = require("mongoose");

const UserDoc = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    occupation_Address: {
      type: String,
      required: true,
      select: false,
    },
    occupation: {
      type: String,
      required: true,
    },
    addhar_no: {
      type: Number,
      required: true,
      select: false,
    },
    image: {
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
      },
    },
    userRole: {
      role: {
        type: String,
        default: "member",
      },
    },
    userRolChanges: [
      {
        role: {
          type: String,
        },
        adminId: {
          type: String,
        },
        adminName: {
          type: String,
        },
      },
    ],
    address: {
      type: String,
      default: "address not found",
    },
    date: {
      type: Date,
      default: Date.now(),
    },

    userAccPlay: {
      accPlay: {
        type: String,
        default: "running",
      },
    },
    userAccPlayChanges: [
      {
        accPlay: {
          type: String,
        },
        adminId: {
          type: String,
        },
      },
    ],
    socialAcc: {
      instagram: {
        type: String,
      },
      facebook: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      youtube: {
        type: String,
      },
      github: {
        type: String,
      },
      whatsApp: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const UserCol = mongoose.model("USER", UserDoc);

module.exports = UserCol;
