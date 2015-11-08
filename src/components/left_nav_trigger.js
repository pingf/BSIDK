import React from 'react';
import Radium from 'radium';
//import color from 'color';

import mui from 'material-ui';

let IconMenu = mui.IconMenu;
let IconButton = mui.IconButton;
const MenuItem = require('material-ui/lib/menus/menu-item');


class LeftNavTrigger extends React.Component {

    render() {

        let button = (
            <IconButton iconClassName="fa fa-500px" tooltip="hello world"/>
        );
        return (
            <div>
                <IconMenu iconButtonElement={button} openDirection='bottom-right'>
                    <MenuItem primaryText="Refresh"/>
                    <MenuItem primaryText="Send feedback"/>
                    <MenuItem primaryText="Settings"/>
                    <MenuItem primaryText="Help"/>
                    <MenuItem primaryText="Sign out"/>
                </IconMenu>
            </div>
        );
    }
}

export
default
Radium(LeftNavTrigger);