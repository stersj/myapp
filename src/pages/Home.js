import React from 'react';
import Logo from '../images/esyl1.jpg';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) =>({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  },
       }));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="home-main">
      <Box display="flex" p={3} bgcolor="#383434">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h1 id="home-heading">Home</h1></Paper>
        </Grid>
        <Grid item xs={4} id="grid-2" direction="row">
          <Paper className={classes.paper}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra ex eu nulla fringilla porttitor. Maecenas lectus tortor, viverra a tincidunt ornare, euismod vitae lectus. Nulla vel fringilla ex, a euismod elit. Ut id orci non nunc feugiat condimentum. Vestibulum lobortis convallis augue, a porttitor odio varius eu. Proin eget augue mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse mollis nunc odio, vitae pretium ligula venenatis sit amet. Nam laoreet ullamcorper urna, sed tempus lorem placerat a. Donec fermentum laoreet tellus at luctus.

In ut tincidunt enim. Sed mattis ante neque, sed luctus tellus blandit eget. Duis consequat ac orci eu gravida. Donec blandit erat non diam sollicitudin, nec pellentesque magna egestas. Nam egestas eros leo, in commodo turpis porttitor vel. Cras lacinia dui id urna elementum, sed commodo ex semper. Etiam ut condimentum elit. Vestibulum sollicitudin id nisl ut sollicitudin. Vivamus non mollis justo.

Vivamus lacinia aliquam sem quis fringilla. Integer venenatis et ligula nec sollicitudin. Aenean et volutpat tortor. Cras justo ante, vulputate quis lectus vel, ullamcorper vestibulum augue. Sed sit amet metus consequat, pretium urna sit amet, porta risus. Vestibulum laoreet est in auctor aliquet. Donec ut ligula a leo porta tristique. Aenean ut mi turpis. Fusce eget sem vestibulum, sagittis augue ut, euismod est. Pellentesque finibus mauris sit amet fermentum dapibus. Proin laoreet vel tellus in condimentum. Curabitur in laoreet felis, id laoreet felis.

Fusce eget pretium mauris. Quisque a tortor sit amet tortor malesuada commodo a vitae erat. Etiam efficitur velit libero, id mollis ipsum egestas ut. Vestibulum dignissim nibh cursus ultrices iaculis. Donec mi ante, volutpat nec pretium vel, lobortis eu nunc. Vestibulum commodo vehicula leo, vitae ornare ex semper ac. Nunc porta, lorem id fringilla convallis, odio nisl scelerisque augue, et efficitur lorem ipsum nec nisl. Nullam at lectus ex. Nulla quis sagittis libero, ut posuere ex. Nullam mollis, lorem bibendum egestas blandit, mauris nisi euismod eros, at dapibus mi sapien nec purus.</p></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        </Grid>
        </Box>
      <Grid container spacing={3}> 
        <Grid item xs={3} >
          <Paper className={classes.paper}>Lorem Ipsun</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      
    </div> 
          
  );
}

export default Home;