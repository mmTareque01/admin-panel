import React from 'react'
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Table_Data from '../../components/TableData';

export default function ProfileUpdateApplication() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = Table_Data(['Name', 'Phone Number', 'Email', 'Mentor Of', 'Working For'], {field:"Action", btn_txt:'View'})
  

  const mockDataTeam = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone_number: "(665)121-5454",
      mentor_of: "Canada",
      working_for: "Student Visa",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone_number: "(421)314-2288",
      mentor_of: "Canada",
      working_for: "Student Visa",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone_number: "(422)982-6739",
      mentor_of: "Canada",
      working_for: "Student Visa",
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      age: 16,
      phone_number: "(921)425-6742",
      mentor_of: "Canada",
      working_for: "Student Visa",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      age: 31,
      phone_number: "(421)445-1189",
      mentor_of: "Canada",
      working_for: "Student Visa",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: 150,
      phone_number: "(232)545-6483",
      mentor_of: "Canada",
      working_for: "Student Visa",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      age: 44,
      phone_number: "(543)124-0123",
      mentor_of: "Australia",
      working_for: "Student Visa",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: 36,
      phone_number: "(222)444-5555",
      mentor_of: "Canada",
      working_for: "Student Visa",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone_number: "(444)555-6239",
      mentor_of: "Germany",
      working_for: "Student Visa",
    },
    {
      id: 10,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone_number: "(444)555-6239",
      mentor_of: "Canada",
      working_for: "Student Visa",
    },
    {
      id: 11,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone_number: "(444)555-6239",
      mentor_of: "Bangladesh",
      working_for: "Student Visa",
    },
  ];
  return (
    <div>
      <Box m="20px">
      <Header title="PROFILE APPLICATIONS" subtitle="Mentors Profile Update Applications" />
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
        <DataGrid 
        checkboxSelection 
        rows={mockDataTeam} 
        columns={columns} 
        components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
    </div>
  )
}

