
    	var colorBox = d3.selectAll('span')
    		.on('mouseover', function (d){
          console.log('test2')
    			d3.select(this)
    			.style('background-color', function(d){
    				if (this.className === 'one') {
    					return 'BurlyWood'
    				}

    				if (this.className === 'two') {
    					return 'Tan'
    				}

    				if (this.className === 'three') {
    					return 'RosyBrown'
    				}

    				if (this.className === 'four') {
    					return 'SandyBrown'
    				}
    				if (this.className === 'five') {
    					return 'Goldenrod'
    				}

    				if (this.className === 'six') {
    					return 'DarkGoldenrod'
    				}

    				if (this.className === 'seven') {
    					return 'Peru'
    				}

    				if (this.className === 'eight') {
    					return 'Chocolate'
    				}
    				if (this.className === 'nine') {
    					return 'SaddleBrown'
    				}

    				if (this.className === 'ten') {
    					return 'Sienna'
    				}

    				if (this.className === 'eleven') {
    					return 'Brown'
    				}

    				if (this.className === 'twelve') {
    					return 'Maroon'
    				}
    			})
    			.style('color', function(d){
    				if (this.className === 'one') {
    					return 'BurlyWood'
    				}

    				if (this.className === 'two') {
    					return 'Tan'
    				}

    				if (this.className === 'three') {
    					return 'RosyBrown'
    				}

    				if (this.className === 'four') {
    					return 'SandyBrown'
    				}
    				if (this.className === 'five') {
    					return 'Goldenrod'
    				}

    				if (this.className === 'six') {
    					return 'DarkGoldenrod'
    				}

    				if (this.className === 'seven') {
    					return 'Peru'
    				}

    				if (this.className === 'eight') {
    					return 'Chocolate'
    				}
    				if (this.className === 'nine') {
    					return 'SaddleBrown'
    				}

    				if (this.className === 'ten') {
    					return 'Sienna'
    				}

    				if (this.className === 'eleven') {
    					return 'Brown'
    				}

    				if (this.className === 'twelve') {
    					return 'Maroon'
    				}
    			})


    		})

        function outputtext(){

          var clearTxt = d3.select("#user_text")
            .html("");



          var delimiter = /(\W+)/;

          var textinput = document.getElementById("userInput");
          var text = textinput.elements["user_message"].value;

          //console.log(text);

          var tokens = text.split(delimiter);

          //console.log(tokens);


          for (var i = 0; i < tokens.length; i++) {

            var replaceBr = tokens[i].replace(/\n/gi, "<br>");

            console.log(replaceBr);

            var newSpan = d3.select("#user_text").append("span")
              .html(replaceBr);


              }

              var color_scale = d3.scale.linear()
                  .domain([0, 5, 10, 50])
                  .range([ '#DAA520','#D2691E','#FF1493', 'red'])


            /*  var color_scale = d3.scale.linear()
                  .domain([0, 3, 5, 8, 10, 50])
                  .range([ '#F8F8FF','#FFD700', '#A0522D', '#D2691E', '#FF1493', 'red'])
                  */

              var colorBox = d3.selectAll("span")
                .on('mouseover', function(d){
                  console.log("test");

                  var txt = this.innerHTML.length;

                  d3.select(this)
                  .style('background-color', function(d){
                    return color_scale(txt)
                  })
                  .style('color', function(d){
                    return color_scale(txt)
                  })



                  console.log(txt);


                })



          }
