import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import api from "../api";

class CategoryPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.category,
            category: [],
            isLoading: false
        };
    }

    componentDidMount = async() => {
        this.setState({isLoading: true});

        try {
            const response = await api.getCategory(this.state.id);
            const categoryData = response.data.data;

            this.setState({
                category: Array.isArray(categoryData)
                    ? categoryData
                    : [categoryData],
                isLoading: false
            });
        } catch (error) {
            console.error("Error fetching category:", error);
            this.setState({isLoading: false});
        }
    };

    renderIcon = (name) => {
        switch (name) {
            case "Laravel":
                return <FontAwesomeIcon icon={["fab", "laravel"]}/>;
            case "GitHub":
                return <FontAwesomeIcon icon={["fab", "github-square"]}/>;
            case "Vue.js":
                return <FontAwesomeIcon icon={["fab", "vuejs"]}/>;
            case "HTML":
                return <FontAwesomeIcon icon={["fab", "html5"]}/>;
            case "CSS":
                return <FontAwesomeIcon icon={["fab", "css3"]}/>;
            case "Sass":
                return <FontAwesomeIcon icon={["fab", "sass"]}/>;
            case "PHP":
                return <FontAwesomeIcon icon={["fab", "php"]}/>;
            case "JavaScript":
                return <FontAwesomeIcon icon={["fab", "js"]}/>;
            case "MongoDB":
                return <FontAwesomeIcon icon={["fas", "database"]}/>;
            case "MySQL":
                return <FontAwesomeIcon icon={["fas", "database"]}/>;
            case "Python":
                return <FontAwesomeIcon icon={["fab", "python"]}/>;
            case "Node.js":
                return <FontAwesomeIcon icon={["fab", "node"]}/>;
            case "Angular":
                return <FontAwesomeIcon icon={["fab", "angular"]}/>;
            case "React":
                return <FontAwesomeIcon icon={["fab", "react"]}/>;
                // Add more cases as needed for additional icons
            default:
                return null;
        }
    };

    render() {
        const {category, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <React.Fragment>
                {category.map((category) => (
                    <li key={category._id}>
                        {this.renderIcon(category.name)}
                        <p>
                            {category.name}
                        </p>
                    </li>
                ))}
            </React.Fragment>
        );
    }
}

export default CategoryPreview;