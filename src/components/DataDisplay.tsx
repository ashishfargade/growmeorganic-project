import { useEffect, useState } from "react";
import { Data } from "../models/Interfaces";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export const DataDisplay : React.FC = () => {
  const navigate = useNavigate();

  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);

  const handleSelectionModelChange = (
    selectionModel: GridRowSelectionModel
  ) => {
    setSelectedRows(selectionModel);
  };

  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async (): Promise<void> => {
    try {
      const rawData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((res) => res.json());

      const mappedData: Data[] = rawData.map((item: any) => ({
        id: item.id,
        userId: item.userId,
        title: item.title,
        body: item.body,
      }));

      setData(mappedData);

      // console.log(mappedData[0]);
      // console.log(data[10]);

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "USER ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "TITLE",
      width: 200,
      editable: true,
    },
  ];

  const rows: Data[] = data.map((row) => ({
    id: row.id,
    userId: row.userId,
    title: row.title,
  }));

  const handleClick = (): void => {
    console.log(selectedRows);
  };

  const logout = (): void => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <>
      {
        <Container sx={{ width: "50%", pt: 3 }}>
          <DataGrid
            columns={columns}
            rows={rows}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            rowSelectionModel={selectedRows}
            onRowSelectionModelChange={handleSelectionModelChange}
            checkboxSelection
            disableRowSelectionOnClick
          />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            
            <Button sx={{ mt: 3 }} variant="contained" onClick={logout}>
              Logout
            </Button>

            <Button sx={{ mt: 3 }} variant="contained" onClick={handleClick}>
              Send
            </Button>
          </Box>
        </Container>
      }
    </>
  );
};
