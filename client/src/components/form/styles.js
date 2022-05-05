
import { makeStyles } from '@mui/styles';
import { border } from '@mui/system';

export default makeStyles(() => ({
  root: {
    // This is the convention to select the child selector to write class for.
    // This means that any child containing the class name MuiTextField-root will have the margin css rules in it
    '& .MuiTextField-root': {
      margin: '10px',
    },
  },
  paper: {
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    margin: '10px',
  },
  buttonSubmit: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  buttonClear: {
    background: 'linear-gradient(45deg, #0F7173 30%, #77A0A9 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    marginTop: '10px',
    padding: '0 30px',
  }
}));
