import React, {Component} from "react";
import {Link} from "react-router-dom";

import CategoryPreview from "../components/CategoryPreview";

class ProjectPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: this.props.project,
            isLoading: false
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="projectPreview">
                    <div className="projectPreviewContainer">
                        <div className="projectPreviewBody">
                            <div class="projectPreviewImage">
                                <Link to={"/project/" + this.props.project._id}>
                                    {this.state.project.logo.length > 0 ? <img src={require(`../assets/images/${this.state.project.logo}`)} alt="project" /> : <img src={require("../assets/images/yin.jpg")} alt="project" />}
                                </Link>
                            </div>
                            <div className="projectPreviewInfo">
                                <div className="projectPreviewTitle">
                                    <h3>{this.state.project.name}</h3>
                                    <h5>
                                        {this.state.project.year}
                                    </h5>
                                </div>
                                <div className="projectPreviewIntro">

                                    {/*--<h5>Intro</h5>*/}
                                    <p>{this.state.project.info}</p>
                                    {/* <Link to={"/project/" + this.props.project._id}>for more...</Link>*/}
                                </div>
                                <div className="projectPreviewTechnologies">
                                    <h5>Technologies</h5>
                                    <ul>

                                        {this
                                            .state
                                            .project
                                            .categories
                                            .map((category, index) => (<CategoryPreview
                                                key={this.state.project.categories[index]}
                                                category={category}/>))}
                                    </ul>
                                </div>
                                <div className="projectPreviewButtons">
                                    {this.state.project.frontend.length !== 0 && <a href={this.state.project.frontend} target="_blank" rel="noopener noreferrer">
                                        <button>
                                            <span class="button-text">Front</span>
                                            <span class="button-text">end</span>
                                        </button>
                                    </a>}

                                    {this.state.project.backend.length !== 0 && <a href={this.state.project.backend} target="_blank" rel="noopener noreferrer">
                                        <button>
                                            <span class="button-text">Back</span>
                                            <span class="button-text">end</span>
                                        </button>
                                    </a>}
                                    {this.state.project.live.length !== 0 && <a href={this.state.project.live} target="_blank" rel="noopener noreferrer">
                                        <button>
                                            <span class="button-text">Live</span>
                                        </button>
                                    </a>}
                     
                                    {this.state.project.pdf.length !== 0 && <a href={require(`../assets/pdfs/${this.state.project.pdf}`)} target="_blank" rel="noopener noreferrer">
                                        <button trailingicon="picture_as_pdf"> 
                                            <span class="button-text">PDF</span>
                                        </button>
                                    </a>}
                                    {this.state.project.github.length !== 0 && <a href={this.state.project.github} target="_blank" rel="noopener noreferrer">
                                        <button>
                                            <span class="button-text">Git</span>
                                            <span class="button-text">Hub</span>
                                        </button>
                                    </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectPreview;
