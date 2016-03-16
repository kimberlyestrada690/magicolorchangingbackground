var myArray = ["blue","red","purple","pink","green"];
colorIndex = 0;


$(document).ready(function(){
  $("#smile").click(function(){
    $("body").css("background-color", myArray [colorIndex]);
    colorIndex= colorIndex + 1;
    if(colorIndex==myArray.length){
      colorIndex= 0
    }
  });
      for(var i=0; i<myArray.length; i=i+ 1){
        $("#frown").append("<li>"+myArray[i]+"</li>");
        console.log(myArray[i]);
      }
  
});
