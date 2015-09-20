<weight-item>
    <div>
        <span class='item-text'>{opts.text}</span>
        <span class='item-value' onclick={add}>{opts.value.v}</span>
    </div>

    <script>
      add(e){
        opts.value.pp();
      }
      this.on('mount updated',function(){
        d3.selectAll('weight-item').select('div')
        .style('border', function(d,i){
          return '1px solid';
        })
        .style('width', function(d,i){
          if(d.value.v<100)
          return d.value.v*100+'px';
          else{
            return d.value.v+'px';
          }
        });
        this.parent.update();
      })
    </script>
</weight-item>
