import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    // helper to create consistent spacing between the elements of your UI
    margin: '10px',
  },
  actionDiv: {
    textAlign: 'center',
  },
}));