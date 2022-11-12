import { styled } from "@mui/material/styles";

const Input_Field = styled("input")((props) => ({
  backgroundColor: props.edit ? "#FFF" : "#ededed",
  border: props.edit ? "1px solid grey" : "none",
  width: "100%",
  margin: "0px",
  padding: "15px 10px",
  fontSize: "16px",
  borderRadius: "5px",
  "&:focus": {
    outline: "none",
  },
}));

function InputField({ data }) {
  return (
    <Input_Field
      id={data.id}
      name={data.field}
      // onChange={formik.handleChange}
      defaultValue={data.value}
      //  disabled={!editProfile}
      //    edit={editProfile}
    />
  );
}

export default InputField;
