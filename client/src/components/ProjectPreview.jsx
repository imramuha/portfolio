import React, {Component} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import api from "../api";

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
                                    <img src="https://via.placeholder.com/150/150" alt="project"/>
                                </Link>
                            </div>
                            <div className="projectPreviewInfo">
                                <div className="projectPreviewTitle">
                                    <h3>{this.state.project.name}</h3>
                                    <h5>
                                        2023{this.state.project._date}
                                    </h5>
                                </div>
                                <div className="projectPreviewIntro">

                                    <h5>Intro</h5>
                                    <p>This is the intro for this project, it is about..</p>
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
                                    <button>
                                        <span class="button-text">Front</span>
                                        <span class="button-text">end</span>
                                    </button>

                                    <button>
                                        <span class="button-text">Back</span>
                                        <span class="button-text">end</span>
                                    </button>
                                    <button>
                                        <span class="button-text">PDF</span>
                                    </button>
                                    <button>
                                        <span class="button-text">Git</span>
                                        <span class="button-text">Hub</span>
                                    </button>
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
