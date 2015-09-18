<weight-item>
    <div>
        <span class='item-text'>{opts.text}</span>
        <span class='item-value' onclick={add}>{opts.value}</span>
    </div>
    <script>
      add(e){
        value = parseInt(e.target.innerHTML);
        e.target.innerHTML=value+1;
      }
    </script>
</weight-item>
