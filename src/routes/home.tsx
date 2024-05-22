import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import SearchInput from "../components/searchinput";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/apis";
import {  useEffect } from "react";



export default function Home() {
  //const [data, setData] = useState([])

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const response = await dispatch(fetchData());

      console.log(response);
    }
    getData();
  },);



  return (
    <>
      <Box>
        <Box
          sx={{
            minHeight: "70px",
            boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.1); ",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchInput />
        </Box>
        <Box
          sx={{
            padding: "10px",
          }}
        >
          <MyTable />
        </Box>
      </Box>
    </>
  );
}



const MyTable = () => {
  const rows = [
    {
      id: "1",
      name: "John Doe",
      uniqueid: "123456",
      status: "Active",
      disabled: false,
      lastupdate: "2024-05-20T12:00:00Z",
      positionId: 1,
      groupId: 1,
      phone: "123-456-7890",
      model: "Model X",
      contact: "john@example.com",
      category: "Category A",
      attributes: { key1: "value1", key2: "value2" },
    },
    {
      id: "1",
      name: "John Doe",
      uniqueid: "123456",
      status: "Active",
      disabled: false,
      lastupdate: "2024-05-20T12:00:00Z",
      positionId: 1,
      groupId: 1,
      phone: "123-456-7890",
      model: "Model X",
      contact: "john@example.com",
      category: "Category A",
      attributes: { key1: "value1", key2: "value2" },
    },
    {
      id: "1",
      name: "John Doe",
      uniqueid: "123456",
      status: "Active",
      disabled: false,
      lastupdate: "2024-05-20T12:00:00Z",
      positionId: 1,
      groupId: 1,
      phone: "123-456-7890",
      model: "Model X",
      contact: "john@example.com",
      category: "Category A",
      attributes: { key1: "value1", key2: "value2" },
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>Объекты </TableCell>
            <TableCell>Группы </TableCell>
            <TableCell>Действия </TableCell>
            <TableCell>Иконка</TableCell>
            <TableCell>Фотография </TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>Создатель </TableCell>
            <TableCell>Учетны записи</TableCell>
            <TableCell>Категория </TableCell>
            <TableCell>Тип Объекта </TableCell>
            <TableCell>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.uniqueid}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.lastupdate}</TableCell>
              <TableCell>{row.positionId}</TableCell>
              <TableCell>{row.groupId}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>{row.contact}</TableCell>
              <TableCell>{row.category}</TableCell>
              {/* Add more table cells for additional columns */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};