<weight-list>
    <div each={item in items}>
      <weight-item text={item.text} value={item.value}></weight-item>
    </div>
<style>
/*div {
transition: all 3s linear;
}*/
</style>
    <script>
    console.log(this)
      this.items=[
        {text:'haha',value:new V(1)},
        {text:'hiahia',value:new V(4)},
        {text:'hehe',value:new V(2)},
        {text:'hehe2',value:new V(3)},
      ]

      function V(value) {
        this.v = value;
        this.pp = function (){
          this.v=this.v+1;
        }
      };

      this.on('mount',function(){
        var sel = d3.select('weight-list').selectAll('weight-item').data(this.items);
      });

      this.on('updated', function(){

        d3.selectAll('weight-item').select('div')
        .style("position","relative")
        .style("top","0px")
        .transition()
        .duration(3000)
        .style("top","300px")
        .style('background','red')
        .transition()
        .duration(2000)
        .style('background','blue')
        .style("top","100px");
      })

     function pos(){
       var len=self.items.length;
       var values=[];
       var indices = new Array(len);

       for(i in this.items){
         values.append(self.items.v);
       }
       for (var i = 0; i < len; ++i) indices[i] = i;
       indices.sort(function (a, b) { return values[a] < values[b] ? -1 : values[a] > values[b] ? 1 : 0; });
       return indices;
     }
    </script>
</weight-list>
