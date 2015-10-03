var React = require('react');
var Button = require('./Button');
React.render(
  <Button onclick={clickHandle}>click</Button>,
  document.getElementById('app')
);

function clickHandle(){
    console.log('haha');
}
