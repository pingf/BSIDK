import React from 'react';
import Button from './components/button';

React.render(
    <Button>click me123</Button>,
    document.getElementById('app')
);

function clickHandle(){
    console.log('haha123');
}
