import React from "react";
import { TextField } from "@mui/material";

const Multiline = ({ data }) => {
  return (
    <TextField
      id="outlined-multiline-flexible"
      //    label='Multiline'
      multiline
      maxRows={4}
      name={data.field}
      value={data.value}
      // onChange={
      //   (formik.handleChange,
      //   (e) => {
      //     let newArr = [...userData];
      //     newArr[data.id - 1].value = e.target.value;
      //     setUserData(newArr);
      //   })
      // }
      //  disabled={!editProfile}
      style={{
        width: "100%",
        // backgroundColor: editProfile ? "#FFF" : "#ededed",
        fontSize: "16px",
        borderRadius: "5px",
      }}
    />
  );
};

export default Multiline;
