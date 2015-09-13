<todo>

  <!-- layout -->
  <h3>{ opts.title }</h3>

  <ul>
    <li each={ item, i in items }>
      <p class={i%2 ? 'red':'green'}>{ item }</p>
    </li>
  </ul>

  <form onsubmit={ add }>
    <input>
    <button>Add #{ items.length + 1 }</button>
  </form>

    this.items = []

    add(e) {
      var input = e.target[0]
      this.items.push(input.value)
      input.value = ''
    }
</todo>
