$(document).ready(function() {
    //html태그가 다 로딩되고나서
    // ready의 익명함수가 실행된다.
    // DOM TREE가 다 완성되고나면
    my_key_down();
});

function move_left() {
    $("#box").stop().animate({"left" : "-=50px"}, 50);
}

function move_right() {
    $("#box").stop().animate({"left" : "+=50px"}, 50);
}

function move_top() {
    $("#box").stop().animate({"top" : "-=50px"}, 50);
}

function move_bottom() {
    $("#box").stop().animate({"top" : "+=50px"}, 50);
}
function my_key_down() {
    $(document).on("keydown", keyEventFnc);
            //  어디서든지 키가 눌렀을때, KeyEventtfnc 함수를 실행한다.
            function keyEventFnc(e) {
                // 매개변수 e에는 이벤트 객체정보가 넘어온다.
                var direct="";

                switch (e.keyCode) {
                    case 37: 
                        direct = "LEFT";
                        move_left();
                        break;
                    case 38:
                        direct = "TOP";
                        move_top();
                        break;
                    case 39:
                        direct = "RIGHT";
                        move_right();
                        break;
                    case 40:
                        direct = "BOTTOM";
                        move_bottom();
                        break;
                }

                if (direct) {
                    $("#user_id").val(direct);
                }
            }
}