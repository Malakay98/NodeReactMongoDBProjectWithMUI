import { makeStyles } from '@mui/styles'

// Export makeStyles that have a callback function wich return an object
export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alingItems: 'center',
    },
    heading: {
        color: 'rgba(0, 183, 255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
}));
