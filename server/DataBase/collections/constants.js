const mongoose = require("mongoose");

const ConstDoc = new mongoose.Schema({
     
    total_donation_gain :{
        type:Number,
        default:0
    },
    total_donation_utilised:{
        type:Number,
        default:0
    },
    total_food_amount:{
        type:Number,
        default:0
    },
    total_material_amount:{
        type:Number,
        default:0
    },
    total_health_amount:{
        type:Number,
        default:0
    },
    total_nest_amount:{
        type:Number,
        default:0
    },
    total_others_amount:{
        type:Number,
        default:0
    }

});

const Const_Col = mongoose.model("CONSTANT",ConstDoc);

module.exports = Const_Col;