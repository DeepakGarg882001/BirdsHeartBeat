const router = require("../Rootroutes");
const PaytmCheckSum = require("paytmchecksum");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded({ extended: true });
const DonationGain_Col = require("../../DataBase/collections/donationGain");
const Const_Col = require("../../DataBase/collections/constants");

router.post('/callback',encoder,async (request, response) => {
    
      
      console.log(request.body);
     
      try {
         
            const previousChecksum = request.body.CHECKSUMHASH;
            const Params = request.body;
            const MERCHANT_KEY = process.env.MERCHANT_KEY;
            const responseCode = request.body.RESPCODE;
            const frontURL = process.env.FRONT_END_URL;

            // Now delete this checksum from body
            delete request.body.CHECKSUMHASH;
            

            // Now verify the checksum is valid or not
            const isCheckSumValid = await PaytmCheckSum.verifySignature(Params, MERCHANT_KEY, previousChecksum);

            if (isCheckSumValid) {
               console.log("chacksum verified");

               // now check the Payment status and send its response to Client side
               delete request.body.MID;
               delete request.body.RESPMSG;

               if(responseCode === '01'){
                  
                    await DonationGain_Col.create(request.body);

                    const getConstants = await Const_Col.findOne();
                   
                    const totalDonation = getConstants.total_donation_gain;
                    const txnAmount = Number(request.body.TXNAMOUNT);
                   
                    const UpdatedDonation = totalDonation + txnAmount;
                   
                    // update totalDonation value;

                    await Const_Col.findOneAndUpdate({total_donation_gain:UpdatedDonation});

               }

               response.redirect(`${frontURL}/txnStatus`+`${responseCode}`);

               
            } else {
               response.status(500).json({ error: "something went wrong" });
            }

         

      } catch (error) {
         response.status(500).json({ error });
      }

   });