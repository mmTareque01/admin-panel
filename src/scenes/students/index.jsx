import React from 'react'
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Table_Data from '../../components/TableData';

export default function Students() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = Table_Data(['Name', 'Phone Number', 'Last Certificate', 'Program'], [{field:"Action", btn_txt:'View'}])
  

  const mockDataTeam = [
    {
      id: 1,
      name: "Jon Snow",
      phone_number: "(665)121-5454",
      program: "BBA",
      last_certificate: "HSC",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      phone_number: "(421)314-2288",
      program: "BBA",
      last_certificate: "HSC",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      phone_number: "(421)314-2288",
      program: "BBA",
      last_certificate: "HSC",
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      phone_number: "(421)314-2288",
      program: "BBA",
      last_certificate: "HSC",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      phone_number: "(421)314-2288",
      program: "BBA",
      last_certificate: "HSC",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      phone_number: "(421)314-2288",
      program: "BBA",
      last_certificate: "HSC",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      phone_number: "(421)314-2288",
      program: "BBA",
      last_certificate: "HSC",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      phone_number: "(421)314-2288",
      program: "BBA",
      last_certificate: "HSC",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      phone_number: "(421)314-2288",
      program: "BBA",
      last_certificate: "HSC",
    },
    {
      id: 10,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      phone_number: "(421)314-2288",
      program: "BBA",
      last_certificate: "HSC",
    },
    {
      id: 11,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      phone_number: "(421)314-2288",
      program: "BBA",
      last_certificate: "HSC",
    },
  ];
  return (
    <div>
      <Box m="20px">
      <Header title="STUDENTS" subtitle="Managing Students" />
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

