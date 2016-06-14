$(document).ready(function () {
url = "http://127.0.0.1:4567/api/episode/create";

$("#submit").on("click", function(e){
    e.preventDefault();

    data = $("form#registro").serialize();
    console.log(data);
    $.ajax({
        type: "post",
        url: url,
        crossDomain: true,
        beforeSend: function() {$.mobile.loading("show")},
        complete: function() {$mobile.loading("hide")},
        data: data,
        dataType: "json",
        success: function (res) {
            console.log("OK");
        },
        error: function() {
            console.log("error");
        }
    });
})

});
