<sel>
    <h3 id='title'>test sel</h3>

var d3 = require('d3')
    this.on('mount', function() {
        d3.select('sel').html('<h1 style="color:green;"><b>hacked</b></h1>')
      // right after tag is mounted on the page
    })
    console.log(d3.version)
</sel>
