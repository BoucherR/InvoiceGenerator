import { useState, } from 'react';
import { Box, Grid, Typography, } from '@mui/material'
import Preparation from './components/Preparation';
import InvoiceInfo from './components/InvoiceInfo';
import InvoiceTable from './components/InvoiceTable';

let colors = {
    'green': ['#b3e6b3', '#8cd98c'],
    'blue': ['#a8c2fb', '#86abf9'],
    'salmon': ['#FFC6C4', '#FFA8A8',],
    'purple': ['#d8b2d8', '#b266b2'],
    'yellow': ['#ffd276', '#ffbf3c'],
}

let Invoice = (props) => {
    let [total, setTotal] = useState(0);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ height: '10vh', backgroundColor: colors[props.color][0] }}>
                    <Typography color='#ffffff' variant="h5" sx={{ 'text-align': 'right', paddingTop: '10px', paddingRight: '25px' }}>
                        Firstname Lastname
                    </Typography>
                    <Typography color='#ffffff' variant="h6" sx={{ 'text-align': 'right', paddingRight: '25px' }}>
                        ABA Therapist
                    </Typography>
                </Box>
            </Grid >
            <Grid item xs={12}>
                <Box sx={{ height: '25vh', }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Preparation
                                houseCity={props.houseCity}
                                provCountry={props.provCountry}
                                name={props.name}
                                firstParent={props.firstParent}
                                secondParent={props.secondParent}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InvoiceInfo
                                date={props.date}
                                invoiceNum={props.invoiceNum}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Box sx={{ height: '0.5vh', width: '100vw', backgroundColor: colors[props.color][0] }} />
            <Grid item xs={12}>
                <Box sx={{ height: '54.5vh', width: '100vw' }}>
                    <InvoiceTable
                        data={props.data}
                        date={props.date}
                        setTotal={setTotal}
                    />
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ height: '10vh', backgroundColor: colors[props.color][0] }}>
                    <Box sx={{ paddingTop: '3vh', paddingLeft: '10px' }}>
                        <Typography variant="body2">
                            Payment can be made by e-transfer to:
                        </Typography>
                        <Typography variant="body2">
                            firstnameLastname@gmail.com
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ height: '10vh', backgroundColor: colors[props.color][1] }}>
                    <Box sx={{ paddingTop: '3vh', paddingRight: '15px' }}>
                        <Typography variant="body1" sx={{ textAlign: 'right' }}>
                            TOTAL:
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'right' }}>
                            {'$' + total}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid >

    );
}

export default Invoice;
