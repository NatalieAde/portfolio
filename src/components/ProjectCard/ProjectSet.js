import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import Projects from './Projects';

class ProjectSet extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <Grid container spacing={4}>  
          {Projects.map(project => {
            return (
              <Grid item xs={4}>
            <ProjectCard 
              image={project.image}
              title={project.projectTitle}
              description={project.description}
              techStack={project.techStack}
              link={" "}/>
          </Grid>
            )
          })}
        </Grid>
      </div>
    );
  }
  
}

export default ProjectSet;
