<dt3>

  <!-- layout -->
  <h3>hiahiahiahia</h3>

  <ul>
    <li each={ item, i in items }>
      <p>{ item }</p>
    </li>
  </ul>

  <script>
      this.items=[
        'a','b','c','d'
      ]

  var data =[
    { width: 100, color: 23},
    { width: 150, color: 40},
    { width: 200, color: 63},
    { width: 350, color: 33},
  ]
  this.on('mount',function(){
      var sel = d3.select('dt3').selectAll('li').data(data);
      sel.exit().remove();
      sel.attr('class','h-bar')
      .style('width', function(d,i){
        return d.width+'px';
      }).style('border-style', function(d,i){
         return 'solid';
      });
    });
  </script>
</dt3>
