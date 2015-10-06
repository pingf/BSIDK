import React from 'react'
import Button from './button'

React.render(
  <Button onclick={clickHandle}>click</Button>,
  document.getElementById('app')
);

function clickHandle(){
    console.log('haha');
}
