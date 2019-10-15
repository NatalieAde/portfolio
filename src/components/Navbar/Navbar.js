import React from 'react';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Styles from './NavbarStyle';
import Header from '../Header/Header';
import ProjectSet from '../ProjectCard/ProjectSet';
import Timeline from '../Timeline/Timeline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


  class Navbar extends React.Component {
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick(this);
    }

    handleClick() {
      //change colour of text when on that page
      //in-style?? or different file??
    }

    render() {
      const { classes } = this.props;
      return (
        <Router>
          <div className={this.props.classes.root} >
            <AppBar color={"secondary"}>
              <Toolbar>
                <Typography variant="h6" > 
                  <Link to='/' className={classes.title}>About Me </Link>
                </Typography>
                <Typography variant="h6" > 
                  <Link to='/pro' className={classes.title}>Projects</Link>
                </Typography>
                <Typography variant="h6" > 
                  <Link to='/experience' className={classes.title}>Experience</Link> 
                </Typography>
              </Toolbar>
            </AppBar>
            {/* <Switch> looks through each <Route> element and renders them in the order they appear, based on 
            whether or not they match the current URL. Only one can be rendered at a time */}
            <Switch>
              <Route exact path="/">
                <Header />
              </Route>
              <Route exact path="/pro">
                <ProjectSet />
              </Route>
              <Route exact path="/experience">
                <Timeline />
              </Route>
            </Switch> 
          </div>
        </Router> 
      );
  }
}

export default withStyles(Styles)(Navbar);