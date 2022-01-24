$(".investigation__content").hide();
$(".complaint__content").hide();
$(".comment__content").hide();
$(".comment__content2").hide();
$(".find__content").hide();

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
});

