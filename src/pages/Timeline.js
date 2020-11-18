import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '16px 25px',
    },
  secondaryTail: {
    backgroundColor: theme.palette.primary.main,
      },
}));

export default function CustomTimeline() {
    const classes = useStyles();

    return (
      <div>
        <Box display="auto" p={3} bgcolor="#b7babf" >
        <h2 className="heading-timeline" align='center' padding='5px'>Timeline</h2>
      <Timeline align="left" className="timeline">
      <TimelineItem >
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2018 to present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={6} className={classes.paper}>
            <Typography className="date-timeline" variant="h6" component="h1">
              DHI A/S - Project Manager | Biologist | Webmaster
            </Typography>
            <Typography>Because you need strength</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className="date-timeline" variant="body2" color="textSecondary">
           2015 - 2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography className="date-timeline" variant="h6" component="h1">
              Medical Product Executive | Freelancer
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           2009 - 2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              DHI Water & Environment (M) Sdn. Bhd | Environmental Scientist
            </Typography>
            <Typography>Assistant Consultant, Hydrographic Surveyor</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           2013 - 2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
         </TimelineDot>
           </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Radius International | Part Time | Event Organiser
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
          </Timeline>
          </Box>
        </div>
    );
  }
