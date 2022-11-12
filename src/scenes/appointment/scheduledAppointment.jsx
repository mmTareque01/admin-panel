import React from 'react'
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Table_Data from '../../components/TableData';

export default function ScheduledAppointmentApplication() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = Table_Data(['Student', 'Mentor', 'Date', 'Time', 'Query'])
  

  const mockDataTeam = [
    {
      id: 1,
      student: "Jon Snow",
      mentor: "jonsnow@gmail.com",
      date: 35,
      time: "(665)121-5454",
      query: "Canada",
      working_for: "Student Visa",
    },
    {
      id: 2,
      student: "Cersei Lannister",
      mentor: "cerseilannister@gmail.com",
      date: 42,
      time: "(421)314-2288",
      query: "Canada",
    },
    {
      id: 3,
      student: "Jaime Lannister",
      mentor: "jaimelannister@gmail.com",
      date: 45,
      time: "(422)982-6739",
      query: "Canada",
    },
    {
      id: 4,
      student: "Anya Stark",
      mentor: "anyastark@gmail.com",
      date: 16,
      time: "(921)425-6742",
      query: "Canada",
    },
    {
      id: 5,
      student: "Daenerys Targaryen",
      mentor: "daenerystargaryen@gmail.com",
      date: 31,
      time: "(421)445-1189",
      query: "Canada",
    },
    {
      id: 6,
      student: "Ever Melisandre",
      mentor: "evermelisandre@gmail.com",
      date: 150,
      time: "(232)545-6483",
      query: "Canada",
    },
    {
      id: 7,
      student: "Ferrara Clifford",
      mentor: "ferraraclifford@gmail.com",
      date: 44,
      time: "(543)124-0123",
      query: "Canada",
    },
    {
      id: 8,
      student: "Rossini Frances",
      mentor: "rossinifrances@gmail.com",
      date: 36,
      time: "(222)444-5555",
      query: "Canada",
    },
    {
      id: 9,
      student: "Harvey Roxie",
      mentor: "harveyroxie@gmail.com",
      date: 65,
      time: "(444)555-6239",
      query: "Canada",
    },
    {
      id: 10,
      student: "Harvey Roxie",
      mentor: "harveyroxie@gmail.com",
      date: 65,
      time: "(444)555-6239",
      query: "CanadaCanadaCanadaCana",
    },
    {
      id: 11,
      student: "Harvey Roxie",
      mentor: "harveyroxie@gmail.com",
      date: 65,
      time: "(444)555-6239",
      query: "Canada",
    },
  ];
  return (
    <div>
      <Box m="20px">
      <Header title="APPOINTMENT" subtitle="Managing Scheduled Appointments" />
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

