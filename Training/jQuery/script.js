//Hide And Show Effects
// $(function () {
//     $("#hide").click(function () {
//         $("h2#intro").hide();
//     });
//     $("#show").click(function () {
//         $("h2#intro").show();
//     });

// });

//toggle Effects
$(document).ready(function () {
    $("#hide").click(function () {
        $("h2#intro").toggle(1000);
    });
});

$(document).ready(function () {
    $("p").dblclick(function () {
        $(this).hide(1000);
    });
});

// $(document).ready(function () {
//     $("#p1").mouseenter(function () {
//         alert("You entered p1!");
//     });
// });
//Multiple event
$(document).ready(function () {
    $(".intro").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });
});

//Fade Effect
$(document).ready(function () {
    $("#fade").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(2000);
    });
});

//Slide Effect
$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle(4000);
    });
    $("#stop").click(function () {
        $("#panel").stop();
    });
});

//Enimation
$(document).ready(function () {
    $("#animate").click(function () {
        var div = $("#animation");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
        div.animate({ fontSize: '30px' }, "slow");
    });
});

//Remove 
$(document).ready(function () {
    $("button").click(function () {
        $("p").remove(".intro");
    });
});