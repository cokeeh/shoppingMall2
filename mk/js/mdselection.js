$(function(){

    $.ajax({

      url: "./json/mdselection.json",

      dataType: "json",

      success : function(data){

        if(data.length>0){

          for(var i in data){

            $(".item2").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>');      
            $(".item2").eq(i).append('<p><a href="#">'+"<span>"+data[i].brand+"</span>"+data[i].product+"</a></p>");                             
            $(".item2").eq(i).append("<span>"+data[i].price+"</span>");
          }
        }
      }
    });
  });