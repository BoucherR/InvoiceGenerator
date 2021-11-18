import { Link } from 'react-router-dom';

import { TextField, Card, Grid, Box, CardHeader, Button, MenuItem } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

import NewCSVReader from './components/CSVReader'

let Home = (props) => {
    let propsFilled = () => {
        let a = (
            props.name === '' ||
            props.date === null ||
            props.invoiceNum === '' ||
            props.houseCity === '' ||
            props.provCOuntry === '' ||
            props.date === null ||
            props.data === null ||
            props.firstParent === '' ||
            props.secondParent === ''
        );

        return a;
    }

    return (
        <Box>
            <Box sx={{ height: '10vh', backgroundColor: '#b3e6b3' }}>
                <Grid container justifyContent="center" >
                    <Grid item xs={12}>
                        <Box sx={{ paddingTop: '5px' }} />
                    </Grid>
                    {propsFilled() ?
                        <Grid item xs={4}>
                            <Box sx={{ paddingTop: '15px' }}>
                                <Button variant='contained' disabled sx={{ backgroundColor: '#8cd98c', }}>
                                    Please Fill Info ...
                                </Button>
                            </Box>
                        </Grid>
                        :
                        <Grid item xs={9}>
                            <Box sx={{ paddingTop: '15px' }}>
                                <Button component={Link} to="/Invoice" variant='contained' sx={{ backgroundColor: '#8cd98c', minWidth: '450px' }}>
                                    <span>Generate Invoice: {props.name}_{props.date.toLocaleDateString()}</span>
                                </Button>
                            </Box>
                        </Grid>
                    }
                </Grid>
            </Box>
            <Box sx={{ height: '125vh', backgroundColor: '#8cd98c', padding: '10px' }}>
                <Card sx={{ backgroundColor: '#ffffff', }}>
                    <CardHeader title="Invoice Info Entry" />
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={10} >
                            <NewCSVReader
                                setData={props.setData}
                            />
                        </Grid>
                        <Grid item xs={10} >
                            <TextField
                                required
                                id="outlined-required"
                                label="Patient Name"
                                onChange={(event) => {
                                    props.setName(event.target.value);
                                }}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    minWidth: '440px',
                                }}
                            />
                        </Grid>
                        <Grid item xs={10} >
                            <TextField
                                required
                                id="outlined-required"
                                label="First Parent Name"
                                onChange={(event) => {
                                    props.setFirstParent(event.target.value);
                                }}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    minWidth: '440px',
                                }}
                            />
                        </Grid>
                        <Grid item xs={10} >
                            <TextField
                                required
                                id="outlined-required"
                                label="Second Parent Name"
                                onChange={(event) => {
                                    props.setSecondParent(event.target.value);
                                }}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    minWidth: '440px',
                                }}
                            />
                        </Grid>
                        <Grid item xs={5} >
                            <TextField
                                required
                                id="outlined-required"
                                label="Invoice Number"
                                onChange={(event) => {
                                    props.setInvoiceNum(event.target.value);
                                }}
                                sx={{
                                    backgroundColor: '#ffffff',
                                }}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                value={props.color}
                                label="Invoice Color"
                                select
                                onChange={(event) => {
                                    props.setColor(event.target.value)
                                }}
                                sx={{ minWidth: '200px' }}
                            >
                                <MenuItem value={'green'}>Green</MenuItem>
                                <MenuItem value={'blue'}>Blue</MenuItem>
                                <MenuItem value={'salmon'}>Salmon</MenuItem>
                                <MenuItem value={'purple'}>Purple</MenuItem>
                                <MenuItem value={'yellow'}>Yellow</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={5} >
                            <TextField
                                required
                                id="outlined-required"
                                label="House and City"
                                onChange={(event) => {
                                    props.setHouseCity(event.target.value);
                                }}
                                sx={{
                                    backgroundColor: '#ffffff',
                                }}
                            />
                        </Grid>
                        <Grid item xs={5} >
                            <TextField
                                required
                                id="outlined-required"
                                label="Province and Country"
                                onChange={(event) => {
                                    props.setProvCountry(event.target.value);
                                }}
                                sx={{
                                    backgroundColor: '#ffffff',
                                }}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StaticDatePicker
                                    openTo="day"
                                    value={props.date}
                                    onChange={(newDate) => {
                                        props.setDate(newDate);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Box >
    )
}

export default Home;
