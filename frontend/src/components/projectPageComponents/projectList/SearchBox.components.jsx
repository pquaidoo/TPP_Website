import { Component } from "react";
import "./project-list.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder="Search Project or Contrubtor"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
