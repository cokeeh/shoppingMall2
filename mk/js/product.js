$(function(){

    $.ajax({

      url: "./json/product.json",

      dataType: "json",

      success : function(data){

        if(data.length>0){

          for(var i in data){

            $("#product > .item").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>');      
            $("#product > .item").eq(i).append('<p><a href="#">'+"<span>"+data[i].brand+"</span>"+data[i].product+"</a></p>");                             
            $("#product > .item").eq(i).append("<span>"+data[i].price+"</span>");
            $("#product > .item").eq(i).append("<h4>"+"<strike>"+data[i].original+"<strike>"+"</h4>");

          }
        }
      }
    });
  });