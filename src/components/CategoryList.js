import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  //   constructor(props) {
  //     super(props);
  //     state:{};
  //   }  // eskiden böyle propsu çekmek gerekiyormuş
  state = {
    categories: []
   
  };
 getCategories = () => { 
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  }
    componentDidMount() { 
    this.getCategories();
    }
  render() {
    return (
      <div>
        {/* hangi objenin title  derken şu şekilde gösteriyoruz {this.props.info.title} */}
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.ChangeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
