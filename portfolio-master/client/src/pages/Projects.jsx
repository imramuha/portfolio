import React, { Component } from "react";
import api from "../api";

import ProjectPreview from "../components/ProjectPreview";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      columns: [],
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getProjects().then((projects) => {
      this.setState({
        projects: projects.data.data,
      });
    });
  };

  render() {
    const { projects } = this.state;

    let showTable = true;
    if (!projects.length) {
      showTable = false;
    }

    return (
      <React.Fragment>
        <div className="projectsContainer">
          <div className="projectsHeader">
            <h1>Projects</h1>
          </div>
         <div class="projectsBody"> {showTable &&
            this.state.projects.map((project) => (
              <ProjectPreview key={project._id} project={project} />
            ))}
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
