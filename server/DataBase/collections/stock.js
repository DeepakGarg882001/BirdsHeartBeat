const mongoose = require("mongoose");


const Stock_Doc = new mongoose.Schema({
   
    totalItems:{
        type:Number
    },
    remainingItems:{
        type:Number
    },
    itemImage:[Object],
    itemName:{
        type:String
    },
    itemCategory:{
        type:String
    },
    itemPrice:{
        type:Number
    },
    totalAmount:{
        type:Number
    },
    sender:{
        userId:{
            type:String
        },
        location:{
            type:String
        },
        date:{
            type:Date
        }

    },
    receiver:{
        userId:{
            type:String
        },
        location:{
            type:String
        },
        date:{
            type:Date,
            default:"not received yet"
        },
        accepted:{
            type:String,
            default:"pending"
        }
    },

    distribute:[
        {
            memberName:{
                type:String
            },
            memberId:{
                type:String
            },
            date:{
                type:Date
            },
            accepted:{
                type:String,
                default:"none"
            },
            executed:{
                type:String,
                default:"none"
            }

        }
    ]

    
    


});


const Stock_Col = mongoose.model("STOCK",Stock_Doc);

module.exports = Stock_Col;