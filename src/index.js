import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { reducer } from "./reducers";

//import createStore from redux, as it is only affecting redux. This creates the "state" to be stored and passed
import { createStore } from "redux";

//Import Provider from react-redux, as it will be affecting both. This passes the store from Redux to my React App
import { Provider } from "react-redux";

import "bulma/css/bulma.css";
import "./styles.scss";

//initial setup of state to be used by the redux store
// function reducer() {
//   return {
//     additionalPrice: 0,
//     car: {
//       price: 26395,
//       name: "2019 Ford Mustang",
//       image:
//         "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
//       features: []
//     },
//     store: [
//       { id: 1, name: "V-6 engine", price: 1500 },
//       { id: 2, name: "Racing detail package", price: 1500 },
//       { id: 3, name: "Premium sound system", price: 500 },
//       { id: 4, name: "Rear spoiler", price: 250 }
//     ]
//   };
// }

//create redux store
const store = createStore(reducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  //passing my redux store to App by wrapping it
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
