import React from 'react';
let {
  Component
} = React;
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ConfigActions from '../actions/config';

var styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
};

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    config: state.config
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    onAlert: (text) => dispatch(alert(text))
  };
}

class App extends Component {
  
  componentDidMount() {
    let { dispatch } = this.props;
    dispatch(ConfigActions.fetch());
  }
  
  render() {
    
    return (
      <div>
        <Link to="/welcome">Go to Welcome page</Link>
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);