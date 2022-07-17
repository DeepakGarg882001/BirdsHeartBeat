const router = require("./routes");
const PaytmChecksum = require("paytmchecksum");

router.post("/donate", async (request, response) => {
  try {
    const rupay = request.body.rupay;

    console.log(rupay);

    const mid = process.env.MID_PAYTM;
    const ngo = process.env.NGO_NAME;

    var paytmParams = {};

    paytmParams.body = {
      requestType: "Payment",
      mid: mid,
      websiteName: ngo,
      txnAmount: {
        value: rupay,
        currency: "INR",
      },
    };

    const MERCHANT_KEY = process.env.MERCHANT_KEY;

    const makePaytmCheck = PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body),MERCHANT_KEY)
      
    makePaytmCheck.then((checksum) => {

        console.log("generateSignature Returns: " + checksum);

    //           paytmParams.head = {
    //     signature: checksum,
    //   };

    //   var post_data = JSON.stringify(paytmParams);

    //   var options = {
    //     hostname: "securegw-stage.paytm.in" /* for Production */, // hostname: 'securegw.paytm.in',

    //     port: 443,
    //     path: `/theia/api/v1/initiateTransaction?mid=${mid}`,
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Content-Length": post_data.length,
    //     },
    //   };

    //   var response = "";
    //   var post_req = https.request(options, function (post_res) {
    //     post_res.on("data", function (chunk) {
    //       response += chunk;
    //     });

    //     post_res.on("end", function () {
    //       console.log("Response: ", response);
    //     });
    //   });

    //   post_req.write(post_data);
    //   post_req.end();
    });
  } catch (error) {
    response.status(401).json({ error });
  }
});
