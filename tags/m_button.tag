<m-button>
    <button type={opts.type} onclick={click} ><yield /></button>
    <style scoped>
    button {
      display: inline-block; /*inline-block的作用是相当于float但之后的元素无需清浮动*/

      color: black;
      background-color: #999999;
      border-color: #333333;

      margin-bottom: 0;
      padding: .5em 1em;

      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.2;

      text-align: center;
      vertical-align: middle;

      white-space: normal;

      border: 1.5px solid;
      border-radius: 5%;


      touch-action: manipulation;
      cursor: pointer;
      /*保证类hover和active时的渐变效果*/
      transition: background-color 300ms ease-out,border-color 300ms ease-out;
    }
    button:hover {
      background-color:#cccccc;
      border-color: #666666;
    box-shadow: 0 0 10px #9ecaed;
    }
    button:active {
      background-color:#ffffff;
      border-color: #999999;
    }

    </style>
    <script>
      this.text = opts.text;
      click(e){
        console.log('click inside')
      }
    </script>
</m-button>
