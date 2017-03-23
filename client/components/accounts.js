import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Template} from "meteor/templating";
import {Blaze} from "meteor/blaze";

class Accounts extends Component {

  componentDidMount() {
    //Render the blaze accounts form then find the div
    // we just rendered in the render method and place
    // the blaze accounts form in that div
   this.view = Blaze.render(Template.loginButtons,
    ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    //go find the form we created and destroy them
    // we need to clean up those forms ourselves
    Blaze.remove(this.view);
  }

  render() {
    return(

      <div ref="container"></div>
      );
  }
}

export default Accounts;
