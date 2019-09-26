import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { removeFeature, buyItem } from "../src/actions";

//IMPORT CONNECT FROM REACT-REDUX - TO HAVE REACT GET INFO FROM REDUX
import { connect } from "react-redux";

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dispatch an action here to add an item
    props.buyItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//Pass information from Redux state to the props of App, used in connect
const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

//Exports the result of the connect function, using mapStateToProps as a callback, and App as the component
export default connect(
  mapStateToProps,
  { removeFeature, buyItem }
)(App);
