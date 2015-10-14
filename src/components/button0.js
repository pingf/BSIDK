'use strict';

import React from 'react';
export default
class Button0 extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.onclick}>
                Hello, world.
            </button>
        );
    }
}
