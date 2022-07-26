import { Set_Donation_Gain_Data } from "../reduxConstants";

const DonationGainReducer = (data = [], action) => {

  switch (action.type) {

    case Set_Donation_Gain_Data:
      data = action.data;
      return data;

    default:
      return data;
  }
  
};

export default DonationGainReducer;
