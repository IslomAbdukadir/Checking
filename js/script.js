$(".investigation__content").hide();
$(".complaint__content").hide();
$(".complaint").click(function () { 
    $(".complaint__content").show();
});
$(".exit1").click(function () { 
    $(".complaint__content").hide();
});
$(".investigation").click(function () { 
    $(".investigation__content").show();
});
$(".exit2").click(function () { 
    $(".investigation__content").hide();
});

