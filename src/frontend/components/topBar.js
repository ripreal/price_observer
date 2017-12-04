/* TitleMenuRaw.jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { SelectField } from 'react-md';

const TopBar = props => <SelectField {...props} />;

TopBar.propTypes = {
  id: PropTypes.string.isRequired,

  // Injected by the Toolbar component
  className: PropTypes.string,
  toolbar: PropTypes.bool,
  position: PropTypes.string,
};

TopBar.defaultProps = {
  defaultValue: 'All',
  menuItems: ['All', 'Family', 'Friends', 'Coworkers'],
};
export default TopBar;