//Basic React component that renders a material-ui
//raised button with the text "Default"

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

class MButton extends React.Component {
  render() {
    return (
        <RaisedButton label="Default" />
    );
  }
}

export default MButton;
