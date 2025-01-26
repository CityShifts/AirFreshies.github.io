   
        var r_text = new Array ();
        r_text[0] = "London";
        r_text[1] = "Edinburgh";
        r_text[2] = "Cardiff";
        r_text[3] = "Cambridge";
        r_text[5] = "Windsor";
        r_text[4] = "Liverpool";
        r_text[6] = "Grimsby";
        r_text[7] = "Manchester";
        r_text[8] = "Leeds";
        r_text[9] = "Reading";
        r_text[10] = "Hampshire";
        r_text[11] = "Southampton";
        
        
            var r_map = new Array ();
        r_map[0] = "https://i.imgur.com/zOlmhmC.png";
        r_map[1] = "https://i.imgur.com/zOlmhmC.png";
        r_map[2] = "https://i.imgur.com/zOlmhmC.png";
        r_map[4] = "https://i.imgur.com/zOlmhmC.png";
        r_map[5] = "https://i.imgur.com/zOlmhmC.png";
        r_map[6] = "https://i.imgur.com/zOlmhmC.png";
        
         
        var r_product = new Array ();
        r_product[0] = "Your Design On A Scented Air Freshener";

             setInterval(function(){ $(".custom-social-proof").stop().slideToggle('slow'); }, 3000);
              $(".custom-close").click(function() {
                $(".custom-social-proof").stop().slideToggle('slow');
              });
                setInterval(function(){    
                    var myNumber = Math.floor(7*Math.random());
                    $("#map1").attr("src",r_map[myNumber]);
                     $('#country').text(r_text[myNumber]);
        
                      $('#product').text(r_product[Math.floor(7*Math.random())]);
                     var timeVal = Math.floor(7*Math.random());
             
                     $('#time').text(timeVal);
                 
                  
             //console.log(timeVal); 
         }, 6000);