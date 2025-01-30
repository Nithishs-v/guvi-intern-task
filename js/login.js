
$(document).ready(function(){
    $("#login-form").submit(function (e){

        e.preventDefault();

        // Retriving the username and password
        var email = $("input[name='email']").val();
        var password = $("input[name='password']").val();
        // alert(username);

        $.ajax({
            url: "login.php",
            method: "POST",
            data: {
                email: email,
                password: password,
            },
            success: function (resp) {
                // alert(data);
                var res = JSON.stringify(resp);
                var res_status = JSON.parse(res);
                // alert(res_status[33] + "   " +res_status);
                if(res_status[33]=='t'){
                    alert("User Successfully Login");
                    var url = "profile.php";
                    $(location).attr('href',url);
                }
                else{
                    alert("Invalid Credentials");
                }
                
            },
            error: function(xhr, textStatus, errorThrown){
                console.log(xhr.responseText);
            },
            
        });

    });
});

