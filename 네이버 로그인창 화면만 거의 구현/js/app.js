
$(document).ready(function(){
    safe_notice();
    login_maintain();
    ip_security();
    random_image();
    select_lang();
})

function safe_notice() {
    $(".safe_notice>img").click(function() {
        $(".safe_notice, .tri").hide();        
    })
}

function login_maintain() {
    var select = ".login_check>span"
    $(select).click(function() {
        if ($(select).hasClass("login_on") == true) {
            $(select).removeClass("login_on");
            $(select).addClass("login_off");
        } else if ($(select).hasClass("login_off") == true) {
            $(select).removeClass("login_off");
            $(select).addClass("login_on");
        }
    })
}

function ip_security() {
    var select = ".pc_check>span";
    var on = "ip_on";
    var off = "ip_off";
    $(select).click(function() {
        if ($(select).hasClass(on) == true) {
            $(select).removeClass(on);
            $(select).addClass(off);
        } else if ($(select).hasClass(off) == true) {
            $(select).removeClass(off);
            $(select).addClass(on);
        }
    })
}

function random_image() {
    var choice = Math.ceil(random() * 3);
    // Math.random() 함수가 생성하는 값
    // 0~1사이
    // 0.00000...1~0.999999 -Math.random()
    // 0.00000...3~2.999999 -Math.random() * 3
    // 1~3                  -Math.ceil(Math.random()*3)
    // Math.ceil - 올림함수
    if (choice == 1 ) {
        $(".whale_wrap>img").attr("src", "./images/whale.png")
    } else if (choice == 2) {
        $(".whale_wrap>img").attr("src", "./images/pay_point.png")
    } else if (choice == 3) {
        $(".whale_wrap>img").attr("src", "./images/security_login.png")
    }
}

function select_lang() {
    var text="";
    $("select").on("change", function () {
        text = $("select option:selected").val();
        alert(text);

        if(text == "English") {
            $("#id").attr("placeholder", "Username");
            $("#pw").attr("placeholder", "Password");
        }
    });
}