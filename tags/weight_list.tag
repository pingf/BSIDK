<weight-list>
    <div each={item in items}>
      <weight-item text={item.text} value={item.value}></weight-item>
    </div>
    <style scoped>
    div {
        position: relative;
    }
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
        .transition()
        .duration(1000)
        .style("top",function(d,i){
          var p = pos();
          // console.log(i,p[i])
          return (p[i]-i)*32+'px'
        })
        .style('background','red')
      })

      var self=this;
     function pos(){
       var len=self.items.length;
       var values=new Array(len);
       for (var i = 0; i < len; ++i){
         values[i]=self.items[i].value.v;
       }

       var sorted = values.slice().sort(function(a,b){return b-a})
       return values.slice().map(function(v){ return sorted.indexOf(v)+1 });       

       var origin=values.slice()
       values.sort()
       var indices=new Array(len)
       for (var i = 0; i < len; ++i){
         indices[i]=values.indexOf(origin[i]);
       }
       console.log(indices)
       return indices;
     }
     function sortWithIndeces(toSort) {
       for (var i = 0; i < toSort.length; i++) {
         toSort[i] = [toSort[i], i];
       }
       toSort.sort(function(left, right) {
         return left[0] < right[0] ? -1 : 1;
       });
       toSort.sortIndices = [];
       for (var j = 0; j < toSort.length; j++) {
         toSort.sortIndices.push(toSort[j][1]);
         toSort[j] = toSort[j][0];
       }
       return toSort.sortIndices;
     }


    </script>

</weight-list>
