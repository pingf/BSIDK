<todo2>

  <!-- layout -->
  <h3>{ opts.title }</h3>
  <h1>haha123</h1>
  <ul id='auto_list'>
    <li each={ item, i in items } id={item}>
      <p onclick={click} style={move(i)}>{ item }</p>
    </li>
  </ul>

  <form onsubmit={ add }>
    <input>
    <button>Add #{ items.length + 1 }</button>
  </form>
    <style scoped>
/*li:nth-child(1)  { -webkit-transform: translate3d(0, 0%, 0); transform: translate3d(0, 0%, 0); }
li:nth-child(2):hover  { -webkit-transform: translate(0, 100%); transform: translate(0, 100%); }
li:nth-child(3)  { -webkit-transform: translate3d(0, 200%, 0); transform: translate3d(0, 200%, 0); }
li:nth-child(4)  { -webkit-transform: translate3d(0, 300%, 0); transform: translate3d(0, 300%, 0); }*/
    ul {
        list-style-type: none; padding: 0; position: relative;
        border: 1px solid black; height: 390px; overflow-y: auto; overflow-x: hidden;
        width: 200px;
    }
    ul li {
        height: 50px; width: 100%; line-height: 50px; padding-left: 20px;
        border: 1px solid blue; background: #eee;
        position: absolute; top: 0; left: 0;
        -webkit-transition: all .5s linear;
        transition: all .5s linear;
    }
    </style>

    <script>

i=1
        this.items = []
     window.setInterval(function(){
       console.log(this.items)
        // for(i in this.items){
          t=document.getElementById(i)//this.items[i])
          console.log(t);
          console.log('hahahahah');
          var trans='translate(0,'+100*i+'%)';
          console.log(trans);
          t.style.transform=trans;
          i=i+1;
        // }
        console.log('haha')
    },500);

    this.on('mount', function(){
      console.log('mount')
    }.bind(this))



    add(e) {
      console.log('add')
      var input = e.target[0]
      console.log(auto_list)
      // this.auto_list.appendChild('<li id='+'"input"'+'>'+input+'</li>')
      this.items.push(input.value)
      input.value = ''
      // a=document.getElementById(input)
      // console.log(a)
      // this.update()
    }

    click(e){
      console.log(e.target)
    }
    </script>
</todo2>
