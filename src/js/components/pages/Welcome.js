import React from 'react';
import ReactWinJS from 'react-winjs';
let {
  Component
} = React;
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
      <ReactWinJS.Rating maxRating={3} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);