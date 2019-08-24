import React, { Component } from "react";
import { Provider } from "react-redux";
import FormHolder from "./components/FormHolder/FormHolder";
import { store } from "./Store/Store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FormHolder />
      </Provider>
    );
  }
}

export default App;
