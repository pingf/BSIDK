import React from 'react';
import Button from './components/button';
import Button0 from './components/button0';

React.render(
    <div>
        <Button onclick={clickHandler}>click me123</Button>
        <Button0 onclick={clickHandler}>click me again</Button0>
    </div>,
    document.getElementById('app')
);

function clickHandler(){
    console.log('haha123');
}
