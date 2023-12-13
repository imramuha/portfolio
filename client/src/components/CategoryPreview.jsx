import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await api.getCategory(this.state.id);
      const categoryData = response.data.data;

      this.setState({
        category: Array.isArray(categoryData) ? categoryData : [categoryData],
        isLoading: false
      });
    } catch (error) {
      console.error("Error fetching category:", error);
      this.setState({ isLoading: false });
    }
  };

  renderIcon = (name) => {
    switch (name) {
      case "Laravel":
        return <FontAwesomeIcon icon={["fab", "laravel"]} />;
      case "GitHub":
        return <FontAwesomeIcon icon={["fab", "github-square"]} />;
      case "Vue.js":
        return <FontAwesomeIcon icon={["fab", "vuejs"]} />;
      // Add more cases as needed for additional icons
      default:
        return null;
    }
  };

  render() {
    const { category, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <React.Fragment>
        {category.map((category) => (
          <li key={category._id}>
            <h6>
              <p>
                {this.renderIcon(category.name)}
                {category.name}
              </p>
            </h6>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

export default CategoryPreview;