import React, { Component } from "react";
import Navi from "./components/Navi";
import { Container, Row, Col } from "reactstrap";
import Infobox from "./components/Infobox";
import Content from "./components/Content";
export default class App extends Component {

  render() {
      // let titleProduct = "Product List";
  // let titleCategory = "Category List";
  //bunun yerine encapsulation yapalım

    return (
      <div className="App">
   <Container>
      <Row>
        <Col xs={12} md={1}>
          <Navi />
        </Col>
        <Col xs={12} md={3}>
          <Infobox />
        </Col>
        <Col xs={12} md={8}>
          <Content />
        </Col>
      </Row>
    </Container>
      </div>
    );
  }
}
