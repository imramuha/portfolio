import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../api";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      project: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    console.log("project =>", this.state.id);

    await api.getProject(this.state.id).then((project) => {
      this.setState({
        project: project.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    return (
      <div class="projectContainer">
        <div class="projectDetails">
          <div class="projectHeader">
            <h2>
              <Link to="/projects">  <span>
                <FontAwesomeIcon icon={"arrow-left"} />
              </span> Projects </Link>
            </h2>
            <h3>Technologies</h3>
            <div class="projectTechnologies">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <div class="projectBody">
            <h4>Discover</h4>
            <h4>Define</h4>
            <h4>Design</h4>
            <h4>Develop</h4>
            <h4>Deploy</h4>
            <h4>Deliver</h4>
            <h4>Discover</h4>
            <h4>Define</h4>
            <h4>Design</h4>
            <h4>Develop</h4>
            <h4>Deploy</h4>
            <h4>Deliver</h4>
            <h4>Discover</h4>
            <h4>Define</h4>
            <h4>Design</h4>
            <h4>Develop</h4>
            <h4>Deploy</h4>
            <h4>Deliver</h4>
            <h4>Discover</h4>
            <h4>Define</h4>
            <h4>Design</h4>
            <h4>Develop</h4>
            <h4>Deploy</h4>
            <h4>Deliver</h4>
            <h4>Discover</h4>
            <h4>Define</h4>
            <h4>Design</h4>
            <h4>Develop</h4>
            <h4>Deploy</h4>
            <h4>Deliver</h4>
            <h4>Discover</h4>
            <h4>Define</h4>
            <h4>Design</h4>
            <h4>Develop</h4>
            <h4>Deploy</h4>
            <h4>Deliver</h4>
            <h4>Design</h4>
            <h4>Develop</h4>
            <h4>Deploy</h4>
            <h4>Deliver</h4>
            <h4>Design</h4>
            <h4>Develop</h4>
            <h4>Deploy</h4>
            <h4>Deliver</h4>
            <h4>Design</h4>
            <h4>Develop</h4>
            <h4>Deploy</h4>
            <h4>Deliver</h4>
            <h4>Design</h4>
            <h4>Develop</h4>
            <h4>Deploy</h4>
            <h4>Deliver</h4>
            <h4 id="discover">Discover</h4>
          </div>
        </div>
        <div class="projectNav">
          <div class="projectNavHeader">
            <h3>{this.state.project.name}</h3>
            <h6>
              <FontAwesomeIcon icon={["fab", "github-square"]} />
            </h6>
          </div>
          <div class="projectNavTitles">
            <h4><a href="#discover">Discover</a></h4>
            <ul>
              <li>Briefing</li>
            </ul>
            <h4><a href="#define">Define</a></h4>
            <ul>
              <li>Analyse</li>
              <li>Planning</li>
            </ul>
            <h4><a href="#design">Design</a></h4>
            <ul>
              <li>Sitemap</li>
              <li>Wireframes</li>
              <li>Wireflow</li>
              <li>Style guide</li>
              <li>Visual designs</li>
            </ul>
            <h4><a href="#develop">Develop</a></h4>
            <ul>
              <li>Code snippets</li>
              <li>Schermafbeeldingen</li>
            </ul>
            <h4><a href="#deploy">Deploy</a></h4>
            <ul>
              <li>Handleiding</li>
            </ul>
            <h4><a href="#deliver">Deliver</a></h4>
            <ul>
              <li>Deployment guide</li>
            </ul>
          </div>
          <div class="projectNavCode">
            <h3>link to project code</h3>
            <h6>
              <a>
                <FontAwesomeIcon icon={["fab", "github-square"]} />
              </a>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
