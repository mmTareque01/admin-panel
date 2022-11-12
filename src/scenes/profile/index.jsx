import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
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
import ProfileInfoBox from "../../components/profile";
import { countries } from "../../data/countryData";

export default function Profile() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const userData = [
    { id: 1, field: "name", label: "Name", value: "John Doe" },
    {
      id: 2,
      field: "phone",
      label: "Phone",
      value: JSON.stringify({
        countryCode: "bd",
        dialCode: "+880",
        phoneNumber: "1878044600",
      }),
      type: "phoneInput",
    },
    { id: 3, field: "email", label: "Email", value: "john@example.com" },
    {
      id: 4,
      field: "gender",
      label: "Gender",
      value: "Female",
      type: "genderDropdown",
      options: ["Male", "Female", "Other"],
    },
    {
      id: 5,
      field: "last_academic_qualification",
      label: "Last Academic Qualification",
      value: "Bachelor of science",
    },
    {
      id: 6,
      field: "last_academic_result",
      label: "Last Academic Result",
      value: "3.23",
    },
    {
      id: 7,
      field: "about_yourself",
      label: "About Yourself",
      value:
        "Afterward, a JavaScript file should format automatically once you save it. Now you don't need to worry about your code formatting anymore, because Prettier takes care of it. Prettier comes with a few options which you can apply globally too; which I like to do for my personal projects:",
      type: "multiline",
    },
    {
      id: 8,
      field: "country",
      label: "Country",
      value: "BD-Bangladesh",
      type: "countryDropdown",
      options: countries,
    },
  ];

  return (
    <>
      <Box m="20px">
        <Header
          title="MENTORS APPLICATIONS"
          subtitle="Managing Mentors Applications"
        />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <Typography>Student's about</Typography>
          <Grid container spacing={3}>
            {userData.map((data, idx) => (
              <ProfileInfoBox data={data} idx={idx} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
