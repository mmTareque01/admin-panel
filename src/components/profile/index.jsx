import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  useMediaQuery,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import InputField from "./InputField";
import GenderDropdown from "./GenderDropdown";
import Multiline from "./Multiline";
import CountryDropdown from "./CountryDropdown";
import Phone_Input from "./PhoneInput";

const Label = styled("label")((props) => ({
  paddingLeft: "8px",
  display: "block",
  textTransform: "uppercase",
  fontSize: "13px",
  fontWeight: 600,
  marginBottom: 5,
  color: "grey",
  fontFamily: "Roboto,Helvetica,Arial,sans-serif",
}));

function ProfileInfoBox({ data, idx }) {
  console.log(data.type);
  return (
    <Grid item xs={12} sm={6} key={idx}>
      <Box dispaly="flex" flexDirection="column">
        <Label htmlFor={data.name}>{data.label}</Label>
        {(() => {
          switch (data.type) {
            case "genderDropdown":
              return <GenderDropdown data={data} />;
            case "multiline":
              return <Multiline data={data} />;
            case "countryDropdown":
              return <CountryDropdown data={data} />;
            case "phoneInput":
              return <Phone_Input data={data} />;
            default:
              return <InputField data={data} />;
          }
        })()}
      </Box>
    </Grid>
  );
}

export default ProfileInfoBox;
