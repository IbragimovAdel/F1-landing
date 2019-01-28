$(function(){
    $('#form').submit(function(){
        var name = $("#form").find("#name").text();
        var phone = $("#form").find("#phone").text();
        var model = $("#form").find("#model").text();

        $.ajax({
            type: "POST",
            url: "../php/sendMessage.php",
            success: function(){
                alert(123)
            },
            error: function(text,error){
                alert(text+" "+error)
            }
        })
    })
})