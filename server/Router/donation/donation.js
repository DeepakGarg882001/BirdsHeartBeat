const router = require("../Rootroutes");
const PaytmChecksum = require("paytmchecksum");
const { v4: uuidv4 } = require("uuid");

router.post("/donate", async (request, response) => {

  try {
    const { amount } = request.body;
    const TotalAmount = amount;

    console.log(TotalAmount);
    
    const mid = process.env.MID_PAYTM;
    const MERCHANT_KEY = process.env.MERCHANT_KEY;
    const website = process.env.WEBSITE;
    const custId  = process.env.CUSTOMER_ID;
    const chnlID = process.env. CHANNEL_ID;
    const indsType = process.env. INDUSTRY_TYPE;
    const orderId = uuidv4();
    const callback = process.env.PAYTM_CALL_BACK;


    let paytmParams = {};

    paytmParams['MID'] = mid,
    paytmParams['WEBSITE'] = website,
    paytmParams['CHANNEL_ID'] = chnlID,
    paytmParams['INDUSTRY_TYPE_ID'] =indsType,
    paytmParams['ORDER_ID'] =orderId,
    paytmParams['CUST_ID'] =custId,
    paytmParams['TXN_AMOUNT'] = TotalAmount,
    paytmParams['CALLBACK_URL'] = callback;
    
 
    let createChecksum= await PaytmChecksum.generateSignature(paytmParams,MERCHANT_KEY);
      
    let params={
         ...paytmParams,"CHECKSUMHASH":createChecksum
    }

   response.status(201).json(params);

  } catch (error) {
    console.log(error);
  }
});
