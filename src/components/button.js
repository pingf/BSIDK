'use strict';

import React from 'react';
export default
class Button extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.onclick}>
                Hello, world1234567.
            </button>
        );
    }
}
