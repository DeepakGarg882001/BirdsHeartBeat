import React, {  useState } from "react";

import { Form, Field, Formik } from "formik";
import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const PostWorkBill = () => {
  
  

  const dispatch = useDispatch();
  const userID = "2345446";
  const userName= "Deepak Garg";

  // const postData = {
  //   type: "",
  //   userId: userID,
  //   userName: userName,
  //   amount: 0,
  //   location: {
  //     latitude: "",
  //     longitude: "",
  //   },
  //   profile: []
  // };

  // const Validation = "";

  const [fileObj ,setFileObj ] = useState([]);
  const [fileArray ,setFileArray]=useState([]);

  const handleFile=(e)=>{
    console.log(e.target.files);
    const oneFileData = e.target.files;
    // const [file] = e.target.files;
    console.log((e.target.files).length)
    setFileObj(...fileObj,e.target.files);
    // console.log(files);

    for (let i = 0; i < 4; i++) {
      setFileArray(...fileArray,URL.createObjectURL(fileObj[i]));
      // this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
  }
    // console.log(fileObj[{}].length)
    console.log(fileObj);
    console.log(fileArray);
    // setImg(URL.createObjectURL(file));
    // console.log(file);
  }
  console.log(fileObj);
  

  // const [file] = files;
  // console.log(img);
  
  return (
    <>
        <input type="file" multiple name={fileObj} onChange={(e)=>handleFile(e)}/>
      
        {/* { fileObj ?
          fileObj[0].map((file,index)=>{
            return(
              <>
              <img src={URL.createObjectURL(file[index])} />
              </>
            );
          }) : null
        } 
      */}
      {/* <div>
        <Formik
          initialValues={postData}
          validationSchema={Validation}
          onSubmit={(values,props) => {
             console.log(values);
             let data = new FormData();
        values.profile.forEach((photo, index) => {
          data.append(`photo${index}`, values.profile[index]);
        });

        console.log(data);
          }}
        >
        {(formik)=>{

       return(
          <Form>

            <Field as="select" name="type">
              <option value=""> Select </option>
              <option value="food"> Food </option>
              <option value="material"> Material </option>
              <option value="health"> Health </option>
              <option value="nest"> Nest </option>
              <option value="others"> Others </option>
            </Field>

            <Field as={TextField} label="Amount" type="number" name="amount" />

            <Field as={TextField} label="latitute" type="number" name="location.latitude" />

            <Field as={TextField} label="longitude" type="number" name="location.longitude" />

            <Field accept="image/*" id="file"
                name="profile"
                type="file"
                onChange={(event) => {
                  const files = event.target.files;
                  let myFiles =Array.from(files);
                  formik.setFieldValue("profile", myFiles);
                }}
                multiple   />
            <button type="submit"> Submit</button>
          </Form>
          )
        }}
        </Formik>
      </div> */}

      <h1> Hi , Please post your work</h1>
    </>
  );
};

export default PostWorkBill;
