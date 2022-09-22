 $(function(){

    $.ajax({

      url: "./json/recomand.json",

      dataType: "json",

      success : function(data){

        if(data.length>0){

          for(var i in data){

            $("#recomand > .item").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>');      
            $("#recomand > .item").eq(i).append('<p><a href="#">'+"<span>"+data[i].brand+"</span>"+data[i].product+"</a></p>");                             
            $("#recomand > .item").eq(i).append("<span>"+data[i].price+"</span>");
          }
        }
      }
    });
  });