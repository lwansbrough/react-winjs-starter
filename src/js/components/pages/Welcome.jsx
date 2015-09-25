import React from 'react';
import { ToggleSwitch } from 'react-winjs';
const { Component } = React;
import { connect } from 'react-redux';

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    config: state.config
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    
  };
}

class Welcome extends Component {
  render() {
    return (
      <ToggleSwitch
        title="WiFi"
        checked={true}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);