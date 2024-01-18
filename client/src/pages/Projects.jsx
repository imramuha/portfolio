import React, {Component} from "react";
import api from "../api";

import ProjectPreview from "../components/ProjectPreview";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            columns: []
        };
    }

    componentDidMount = async() => {
        this.setState({isLoading: true});

        await api
            .getProjects()
            .then((projects) => {
                this.setState({projects: projects.data.data});
            });
    };

    render() {
        const {projects} = this.state;

        let showTable = true;
        if (!projects.length) {
            showTable = false;
        }

        return (
            <React.Fragment>
                <div className="projectsContainer">
                    <div className="projectsHeader">
                        <div className="projectsHeaderTitle">
                            <h2>Portfolio</h2>
                            <p>
                                <i>currently in development</i>
                            </p>
                        </div>
                        <div className="projectsHeaderCredentials">
                            <h3>Sample Login for all projects</h3>
                            <p><i>admin@imramuha.com</i></p>
                            <p><i>admin123</i></p>
                        </div>
                    </div>
                    <div class="projectsBody">
                        {showTable && this
                            .state
                            .projects
                            .map((project) => (<ProjectPreview key={project._id} project={project}/>))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Projects;
