<todo>

  <!-- layout -->
  <h3>{ opts.title }</h3>

  <ul>
    <li class='red-li' each={ item, i in items }>{ item }</li>
  </ul>

  <form onsubmit={ add }>
    <input>
    <button>Add #{ items.length + 1 }</button>
  </form>

  <!-- style -->
  <style scoped>
    .red-li {
      font-size: 24px;
      color: red;
    }
  </style>

  <!-- logic -->
  <script>
    this.items = []

    add(e) {
      var input = e.target[0]
      this.items.push(input.value)
      input.value = ''
    }
  </script>

</todo>
