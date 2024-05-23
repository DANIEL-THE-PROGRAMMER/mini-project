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
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/apis";
import { useEffect } from "react";
import { SelectDatas } from "../store/reducer/dataSlice";
import { DataState } from "../store/reducer/dataSlice";

export default function Objects() {
  const dispatch: AppDispatch = useDispatch();

  const Datas = useSelector(SelectDatas);

  useEffect(() => {
    async function getData() {
      await dispatch(fetchData());
    }
    getData();
  }, []);

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
          <MyTable datas={Datas} status={"loading"} error={null} />
        </Box>
      </Box>
    </>
  );
}

const MyTable = ({ datas }: DataState) => {
 

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
          {datas.datas?.map((row, index) => (
            <TableRow key={index}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.uniqueId}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.lastupdate}</TableCell>
              <TableCell>{row.positionId}</TableCell>
              <TableCell>{row.groupId}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>{row.contact}</TableCell>
              <TableCell>{row.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
