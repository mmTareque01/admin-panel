import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FiUpload } from "react-icons/fi";

import Header from "../../components/Header";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [upLoading, setUploading] = useState(false);
  const [file, setFile] = useState("./user.png");

  console.log(file);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                name="fullName"
                error={!!touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  style={{ backgroundColor: "#00404a" }}
                  value={role}
                  label={"userRole"}
                  name="userRole"
                  onChange={
                    (handleChange,
                    (e) => {
                      setRole(e.target.value);
                    })
                  }
                >
                  {[
                    "Admin",
                    "Assistant Admin",
                    "Country Manager",
                    "Executive",
                    "Director",
                  ].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <PhoneInput
                country={"bd"}
                inputStyle={{ width: "213%" }}
                style={{ color: "#000" }}
                onChange={(value, country) => {
                  let data = JSON.stringify({
                    countryCode: country.countryCode,
                    dialCode: "+" + country.dialCode,
                    phoneNumber: value.slice(country.dialCode.length),
                  });
                  setPhoneNumber(data);
                }}
                enableSearch={true}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                name="confirmPassword"
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{ gridColumn: "span 2" }}
              />
              <>
                <FormLabel style={{ color: "#000" }}>
                  {"Profile Picture"}
                </FormLabel>
                {file && (
                  <Avatar
                    src={file}
                    sizes=""
                    sx={{
                      width: 100,
                      height: 100,
                      marginBottom: 2,
                      border: "1px solid grey",
                    }}
                  />
                )}
                <label htmlFor="contained-button-file">
                  <ImageUpload
                    accept="image/png,image/jpg ,image/jpeg"
                    id="contained-button-file"
                    type="file"
                    onChange={(e) =>
                      setFile(URL.createObjectURL(e.target.files[0]))
                    }
                  />
                  <Button
                    startIcon={
                      upLoading ? <CircularProgress size={20} /> : <FiUpload />
                    }
                    disabled={upLoading}
                    variant="contained"
                    component="span"
                  >
                    Upload
                  </Button>
                </label>
              </>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const ImageUpload = styled("input")({
  display: "none",
});

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  fullName: yup.string().required("required"),
  // userRole: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  // phoneNumber: yup
  //   .string()
  //   .matches(phoneRegExp, "Phone number is not valid")
  //   .required("required"),
  password: yup.string().required("required"),
  confirmPassword: yup.string().required("required"),
});
const initialValues = {
  fullName: "",
  userRole: "",
  email: "",
  contact: "",
  password: "",
  confirmPassword: "",
};

export default Form;
