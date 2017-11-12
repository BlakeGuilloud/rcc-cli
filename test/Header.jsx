import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  state = {};

  render() {
    const props = {};

    return (
      <div>Hello from Header</div>
    );
  }
}

Header.displayName = 'Header';

Header.propTypes = {};

const mapStateToProps = (state) => {
  const { example } = state;

  return {
    example: example.examples,
  };
};

const actions = {

};

export default connect(mapStateToProps, actions)(Header);
