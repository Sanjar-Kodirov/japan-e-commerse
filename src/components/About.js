import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Box } from '@mui/system';
import { Typography } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('運営会社名', 'R.ホールディングス株式会社'),
    createData('代表者名', '板橋 良'),
    createData('創立', '0000年00月'),
    createData('創立', "〒266-0031 千葉県千葉市緑区おゆみ野2-15-9"),
    createData('電話番号', "000-000-0000"),
    createData('お問い合わせ', 'お問い合わせは、原則メールにて承ります ＞ お問い合わせフォームよりお問い合わせください。'),
];

export default function BasicTable() {
    return (
        <Box sx={{ padding: "3rem 0 5rem 0"}}>
            <Container>
                <Typography variant='h2' sx={{padding: "2rem 0"}} align="center">
                    会社概要
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { borderBottom: 1, borderRadius: "0" } }}
                                >
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "1px solid black", borderTop: "1px solid black", padding: "2rem 1.5rem", backgroundColor: "neutral.100", width: 325}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left" sx={{ borderBottom: "1px solid black", borderTop: "1px solid black", padding: "1rem .5rem" }}>{row.calories}</TableCell>
                                    <TableCell align="left" sx={{ borderBottom: "1px solid black", borderTop: "1px solid black", padding: "1rem .5rem" }}>{row.fat}</TableCell>
                                    <TableCell align="left" sx={{ borderBottom: "1px solid black", borderTop: "1px solid black", padding: "1rem .5rem" }}>{row.carbs}</TableCell>
                                    <TableCell align="left" sx={{ borderBottom: "1px solid black", borderTop: "1px solid black", padding: "1rem .5rem" }}>{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}