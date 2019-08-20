function Msgclass(_parent,_textmsg,_time){
this.parent = _parent;
this.textmsg = _textmsg;
this.time = _time;
}

Msgclass.prototype.addtohtml = function(){
    var newbox = document.createElement("div");
    this.parent.appendChild(newbox);
    newbox.className = "d-flex justify-content-start mb-4";
    newbox.innerHTML = `<div class="img_cont_msg">
    <img src="_images/A-ROBOT.png" class="rounded-circle user_img_msg">
</div>
<div class="msg_cotainer">
    ${this.textmsg}
    <span class="msg_time">${this.time}</span>
</div>`
msgcounter++
msg_num.innerHTML = msgcounter;
id_input.value="";
id_input.disabled = true;
alwaysdown();
}
function Showanswer(_parent,_answer,_date){
    this.parent = _parent;
    this.answer = _answer;
    this.date = _date;
}
Showanswer.prototype.addtohtmlans = function(){
    var newbox = document.createElement("div");
    this.parent.appendChild(newbox);
    newbox.className = "d-flex justify-content-end mb-4";
    newbox.innerHTML=`			<div class="msg_cotainer_send">
    ${this.answer}
    <span class="msg_time_send">${this.date}</span>
</div>
<div class="img_cont_msg">
<img src="_images/administrator.png" class="rounded-circle user_img_msg">
</div>`
msgcounter++;
msg_num.innerHTML = msgcounter;
id_input.disabled = false;
clearInterval(ans);
alwaysdown();
check=false;
}