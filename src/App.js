import React, {Component} from 'react';
import { Provider } from 'react-redux';
import styles  from './App.css';
import Switch from '@material-ui/core/Switch';
import {store} from './Store/Store';


class App extends Component {
  state = {
    checked: false
  }
  handleChange = () => {
    this.setState(state => {
      return {
        checked: !state.checked
      }
    })
  }
  render () {
    return (
      <Provider store={store}>
      <div className={styles.App}>
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          value="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      <h1>This will be our app</h1>
      </div>
      </Provider>
    );
  }
}

export default App;
