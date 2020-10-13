function textsizesmall(){
    var x = document.querySelectorAll('p');
    var y = document.querySelectorAll('h1');
    var i;
    for (i = 0; i < x.length; i++) 
    {
    x[i].style.fontSize = '15px';
    }   
    for (i = 0; i < x.length; i++) 
    {
    y[i].style.fontSize = '30px';
    }
}

function textsizemedium(){
    var x = document.querySelectorAll('p');
    var y = document.querySelectorAll('h1');
    var i;
    for (i = 0; i < x.length; i++) 
    {
    x[i].style.fontSize = '20px';
    }   
    for (i = 0; i < x.length; i++) 
    {
    y[i].style.fontSize = '35px';
    }
}

function textsizelarge(){
    var x = document.querySelectorAll('p');
    var y = document.querySelectorAll('h1');
    var i;
    for (i = 0; i < x.length; i++) 
    {
    x[i].style.fontSize = '35px';
    }   
    for (i = 0; i < x.length; i++) 
    {
    y[i].style.fontSize = '50px';
    }
}


$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});

var counter = 1;
$(function () {
    $(".hidden").hide().removeClass("hidden");
    $(".slides .slide").first().show();
    $(".dots span").first().addClass("onactive");
    var count = 1;
    console.log(count);
    setInterval(() => {
      $(".slides .slide:visible").fadeOut(function () {
        console.log(count);  
        curSlide = (count % $(".slides .slide").length) + 1;
        count++;
        console.log(count)
        $(".slides .slide:nth-child(" + curSlide + ")").fadeIn();
        $(".dots span.onactive").removeClass("onactive");
        $(".dots span:nth-child(" + curSlide + ")").addClass("onactive");
      });
    }, 10000);
  });

//$(".next").click(function(){
    //$(".slides .slide:visible").fadeOut(function () {
        //var Slide = ( counter % $(".slides .slide").length) + 1;
        //counter++;
        //console.log(counter)
        //$(".slides .slide:nth-child(" + Slide + ")").fadeIn();
      //  $(".dots span.onactive").removeClass("onactive");
    //    $(".dots span:nth-child(" + Slide + ")").addClass("onactive");
  //    });
//})  
    
    //$(".prev").click(function(){
    //    $(".slides .slide:visible").fadeOut(function () {
    //        curSlide = (counter++ % $(".slides .slide").length) - 1;
    //        $(".slides .slide:nth-child(" + curSlide + ")").fadeIn();
    //        $(".dots span.onactive").removeClass("onactive");
    //        $(".dots span:nth-child(" + curSlide + ")").addClass("onactive");
    //      });
    //})
