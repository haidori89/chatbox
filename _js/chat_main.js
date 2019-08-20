window.onload = function () {

}
var textmgs;
var check = false;
var msgcounter = 0;
var ans;
var dt;
var time;

function send() {
    dt = new Date();
    time = dt.getHours() + ":" + dt.getMinutes();
    textmgs = id_input.value;
    var newmsg = new Msgclass(id_parent, textmgs, time);
    newmsg.addtohtml();
    if (check == false) {
        ans = setInterval(start_answer, 2000);
        id_typing.style.display = "block";
        check = true;
    }
}

function start_answer() {
    dt = new Date();
    time = dt.getHours() + ":" + dt.getMinutes();
    id_typing.style.display = "none";
    if (textmgs == "hello" || textmgs == "שלום") {
        var answer = "hello";
    } else {
        var num = Math.random() * tamplate_ar.length;
        var num = Math.round(Math.floor(num));
        answer = tamplate_ar[num];
    }
    var answeradd = new Showanswer(id_parent, answer, time);
    answeradd.addtohtmlans();
    id_send.onclick.disabled = true;
    clearInterval(ans);
}

function alwaysdown() {
    var element = document.getElementById("id_parent");
    element.scrollTop = element.scrollHeight;
}