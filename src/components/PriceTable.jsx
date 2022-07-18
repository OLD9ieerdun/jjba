import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(type, time, price) {
  return {type, time, price};
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 24,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const rows = [
  createData('Дневной (6:00-16:00)', '1 месяц', 2000),
  createData('Дневной (6:00-16:00)', '3 месяца', 5000),
  createData('Ночной (16:00-00:00)', '1 месяц', 3000),
  createData('Ночной (16:00-00:00)', '3 месяца', 7500),
  createData('Полный (6:00-00:00)', '1 месяц', 4000),
  createData('Полный (6:00-00:00)', '3 месяца', 10000),
];

export default function PriceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Вид абонемента</StyledTableCell>
            <StyledTableCell align="center">Срок</StyledTableCell>
            <StyledTableCell align="right">Цена</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.type}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.type}
              </StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}