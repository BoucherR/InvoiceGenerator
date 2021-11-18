import { Box, Typography, } from '@mui/material'

let Preparation = (props) => {
    return (
        <Box sx={{ paddingLeft: '50px', paddingTop: '25px' }}>
            <Typography variant='h6'>
                Prepared for:
            </Typography>
            <Typography variant='subtitle2'>
                {props.firstParent} and {props.secondParent}
            </Typography>
            <Typography variant='subtitle2'>
                {props.houseCity}
            </Typography>
            <Typography variant='subtitle2'>
                {props.provCountry}
            </Typography>
            <Box sx={{ paddingTop: '40px' }}>
                <Typography variant='button'>
                    Patient: {props.name}
                </Typography>
            </Box>
        </Box>
    );
}

export default Preparation;
