$(".investigation__content").hide();
$(".complaint__content").hide();
$(".comment__content").hide();
$(".comment__content2").hide();
$(".find__content").hide();
$(".cookies__content").hide();
$(".header__list2").hide();
let body = document.querySelector("body");

$(".cookies").click(function () {
    // $(".cookies__content").show();
    alert("Политика конфиденциальности: Использование данного веб-сайта означает принятие Пользовательского соглашения, Политики cookies и нижеследующей юридической информации. Содержащаяся на сайте информация может касаться финансовых услуг или финансовой деятельности форекс-дилеров, не имеющих лицензию ЦБ и членства в СРО, в соответствии с Федеральным законом от 13.03.2006 г. №38-ФЗ «О рекламе». Используя сайт, Вы подтверждаете, что не находитесь на территории Российской Федерации. Предлагаемые к заключению договоры или финансовые инструменты являются высокорискованными и могут привести к потере внесенных денежных средств в полном объеме. До совершения сделок следует ознакомиться с рисками, с которыми они связаны. Вся представленная на сайте Forex-Ratings.ru информация (отзывы, новости брокеров, комментарии, анализы, котировки, прогнозы или другие информационные материалы, а также информация, представленная партнерами), включая графическую информацию о форекс-компаниях, брокерах и ДЦ, носит исключительно информационный характер и не является прямым указаниями к инвестированию. OBHSS.com не несет ответственности за возможные потери, в т.ч. неограниченную потерю средств, которая может возникнуть прямо или косвенно из-за использования данной информации. Редакция вебсайта не несет ответственность за содержание комментариев и отзывов пользователей о форекс-компаниях. Вся ответственность за содержание возлагается на комментаторов. Перепечатка материалов возможна только с разрешения редакции сайта.")
    // body.style.overflow = "hidden"
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
    $(".header__list2").hide();
    $(menu).show();
});
$(".exit__cookies").click(function () {
    $("#cookies").hide();
});

/* Cookies */
$(document).ready(function () {
    $("#cookies").addClass("display");
    $("#close-cookies").click(function () {
        event.preventDefault();
        $("#cookies").addClass("close-cookies");
    });
});


var menu = document.querySelector(".header__menu");
var list = document.querySelector(".list");
var list2 = document.querySelector(".header__list2");

$(menu).click(function () {
    $(menu).hide();
    $(".header__list2").show();
});

