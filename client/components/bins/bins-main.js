import React, {Component} from "react";
import {createContainer} from "meteor/react-meteor-data";
import {Bins} from "../../../imports/collections/bins";
import BinsEditor from "./bins-editor";
import BinViewer from "./bins-viewer";
import BinsShare from "./bins-share";

class BinsMain extends Component {

  render() {
    return(
      <div>
        <BinsEditor bin={this.props.bin}/>
        <BinViewer bin={this.props.bin}/>
        <BinsShare bin={this.props.bin}/>
      </div>

      );
  }
}


export default createContainer ((props) => {
  const {binId} = props.params;
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return {bin: Bins.findOne(binId)};
},BinsMain);
