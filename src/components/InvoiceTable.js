import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid'

let InvoiceTable = (props) => {
    let { data, date } = props;

    let [monthlyData, setMonthlyData] = useState(null);

    useEffect(() => {
        if (data === null || date === null) return;
        let filteredData = data.filter(entry =>
            entry.data[0].split("-")[1] === date.toDateString().slice(4, 7)
        );
        setMonthlyData(filteredData);

        let tempTotal = 0;
        filteredData.forEach(function (element) {
            tempTotal = tempTotal + parseFloat(element.data[4].substring(1));
        });
        props.setTotal(tempTotal);
    }, [data, date, props])

    return (
        <Grid container justifyContent='center'>
            <Grid item xs={10}>

                <Table size="small" aria-label="a dense table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Job</TableCell>
                            <TableCell align="right">Hours</TableCell>
                            <TableCell align="right">Rate</TableCell>
                            <TableCell align="right">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {monthlyData === null ?
                            <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ fontSize: '7pt' }}>NAN</TableCell>
                                <TableCell sx={{ fontSize: '7pt' }}>NAN</TableCell>
                                <TableCell align="right" sx={{ fontSize: '7pt' }}>NAN</TableCell>
                                <TableCell align="right" sx={{ fontSize: '7pt' }}>NAN</TableCell>
                                <TableCell align="right" sx={{ fontSize: '7pt' }}>NAN</TableCell>
                            </TableRow>
                            :
                            monthlyData.map((row) => (
                                <TableRow
                                    key={row.data[0]}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" sx={{ fontSize: '7pt' }}>
                                        {
                                            row.data[0]
                                        }
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '7pt' }}>{row.data[1]}</TableCell>
                                    <TableCell align="right" sx={{ fontSize: '7pt' }}>{row.data[2]}</TableCell>
                                    <TableCell align="right" sx={{ fontSize: '7pt' }}>{row.data[3]}</TableCell>
                                    <TableCell align="right" sx={{ fontSize: '7pt' }}>{row.data[4]}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
}

export default InvoiceTable;