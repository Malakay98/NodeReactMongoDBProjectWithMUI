import react, { useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'

// Import the hooks
import { useDispatch } from 'react-redux';

// Import the component that export in the component folder
import Posts from './components/posts/posts.js';
import Form from './components/form/form.js';

// Import the component that export in the actions folder
import { getPosts } from './actions/posts.js'

// Import Styles
import useStyles from './styles'

// Import the img for the example
import memories from './images/memories.png'


const App = () => {
  // Pass the id as a number
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()  => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  const refreshPage = () => {
    window.location.reload(false)
  }

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memories} alt='memories' height='0'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              {/* Posts component */}
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* Form component */}
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
