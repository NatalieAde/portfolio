import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Styles from './HeaderStyle';
import ANDphoto from './me.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(Styles);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
                <Avatar alt="natalie" src={ANDphoto} className={classes.bigAvatar} />
            </Grid> 
            <Grid container justify="center" alignItems="center">
                <h1 className={classes.nameHeader}>Natalie Adeyinka</h1>
            </Grid>
            <Grid container justify="center" alignItems="center">
                <Typography variant="body2" color="textSecondary" component="p"className={classes.headerText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper magna tellus, sed efficitur quam rutrum in. Sed sem elit, imperdiet in feugiat a, efficitur at erat. Nullam congue efficitur ligula, sed aliquet urna. Duis accumsan magna a sapien placerat, non bibendum nisi commodo. Integer in velit venenatis lacus egestas dapibus. Quisque et mollis diam, sed cursus nunc. Donec quis malesuada diam. Aliquam id laoreet mi.
                </Typography>
            </Grid>
             <Grid container justify="center" alignItems="center">
                <a href="http://linkedin.com/in/natalie-adeyinka-796abb15b">
                  <Avatar className={classes.purpleAvatar}>
                      <LinkedInIcon />
                  </Avatar>
                </a>
                <a href="mailto:natalieade@outlook.co.uk">
                  <Avatar className={classes.orangeAvatar}>
                      <EmailIcon />
                  </Avatar>
                </a>
            </Grid>
        </Grid>   
      </Grid>
      <hr className={classes.hr}/>
    </div>
  );
}