import React, { Component } from "react";
import ReactTags from "react-tag-autocomplete";

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [{ id: 1, name: "Apples" }, { id: 2, name: "Pears" }],
      suggestions: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" }
      ]
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // const tags = this.state.tags.map(element => element.name);
    // this.props.handleChange(tags);
  }

  handleDelete(i) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  }

  handleAddition(tag) {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  }

  render() {
    return (
      <ReactTags
        tags={this.state.tags}
        suggestions={this.state.suggestions}
        handleDelete={this.handleDelete.bind(this)}
        handleAddition={this.handleAddition.bind(this)}
      />
    );
  }
}

export default Autocomplete;
