$(".investigation__content").hide();
$(".complaint__content").hide();
$(".comment__content").hide();
$(".comment__content2").hide();
$(".find__content").hide();
$(".cookies__content").hide();

$(".cookies").click(function () { 
    $(".cookies__content").show();
});

$(".complaint").click(function () { 
    $(".complaint__content").show();
});
$(".investigation").click(function () { 
    $(".investigation__content").show();
});
$(".comment__btn").click(function () { 
    $(".comment__content").show();
});
$(".comment__btn2").click(function () { 
    $(".comment__content2").show();
});
$(".find__btn").click(function () { 
    $(".find__content").show();
});
$(".exit").click(function () { 
    $(".complaint__content").hide();
    $(".investigation__content").hide();
    $(".comment__content").hide();
    $(".comment__content2").hide();
    $(".find__content").hide();
    $(".cookies__content").hide();
});
$(".exit__cookies").click(function () { 
    $("#cookies").hide();
});

/* Cookies */
$(document).ready(function(){
    $("#cookies").addClass("display");
     $("#close-cookies").click(function(){ 
      event.preventDefault();
      $("#cookies").addClass("close-cookies");
    });
  });
