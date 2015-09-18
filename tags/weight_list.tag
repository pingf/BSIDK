<weight-list>
    <div each={item in items}>
      <weight-item text={item.text} value={item.value}></weight-item>
    </div>

    <script>
      this.items=[
        {text:'haha',value:1},
        {text:'hiahia',value:4},
        {text:'hehe',value:2},
        {text:'jesse',value:100},
        {text:'meng',value:200},
        {text:'chao',value:400},
      ]
    </script>
</weight-list>
