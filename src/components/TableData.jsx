import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Table_Data=(data=[], button_clm=[])=>{
    let navigateTo = useNavigate()
    let table_column = [{ field: "id", headerName: "ID" }]
    data.map(item=>{
        table_column.push({
            field: item.replace(/\s/g, "_").toLowerCase(),
            headerName: item,
            flex: 1,
        })
    })

    if(button_clm){
      button_clm.map(itm=>{
          table_column.push(
            {
                field: itm.field.replace(/\s/g, "_").toLowerCase(),
                headerName: itm.field,
                flex: 1,
                renderCell: (access) => {
                  return (
                    <Box
                      // width="60%"
                      // m="0 auto"
                      // p="5px"
                      display="block"
                      textAlign={'center'}
                      justifyContent="center"
                      backgroundColor="#fff"
                      borderRadius="4px"
                    >
                      <Button 
                      sx={{
                        width: "60%",
                        borderRadius: "4px"
                      }}
                      onClick={()=>navigateTo(itm.path?itm.path:`profile?name=${access.row.name}&uid=${access.row.id}`)}>{itm.btn_txt}</Button>
                    </Box>
                  );
                },
              },
        )
        })
    }

    return table_column
}
export default Table_Data;