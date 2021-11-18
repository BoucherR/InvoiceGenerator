import { Box, Typography, } from '@mui/material'

let Preparation = (props) => {
    let currentDate = props.date.toLocaleDateString();
    let dateCopy = new Date(props.date);
    let dueDate = new Date(
        dateCopy.setDate(props.date.getDate() + 14)) // Two weeks from now
        .toLocaleDateString();
    let invoiceNum = props.invoiceNum;

    return (
        <Box sx={{ paddingRight: '50px', paddingTop: '25px' }}>
            <Typography variant='subtitle1' sx={{ textAlign: 'right' }}>
                INVOICE #:
            </Typography>
            <Typography variant='subtitle2' sx={{ textAlign: 'right' }}>
                {invoiceNum}
            </Typography>
            <Typography variant='subtitle1' sx={{ textAlign: 'right' }}>
                DATE:
            </Typography>
            <Typography variant='subtitle2' sx={{ textAlign: 'right' }}>
                {currentDate}
            </Typography>
            <Typography variant='subtitle1' sx={{ textAlign: 'right' }}>
                INVOICE DUE DATE:
            </Typography>
            <Typography variant='subtitle2' sx={{ textAlign: 'right' }}>
                {dueDate}
            </Typography>
        </Box>
    );
}

export default Preparation;
