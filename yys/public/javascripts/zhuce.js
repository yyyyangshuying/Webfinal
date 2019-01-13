
function oneset() {
    check();
    var pwd = document.getElementById('passWord').value;
    var usn = document.getElementById('userName').value;
    if (usn.length != 6) {
        alert("用户名输入错误");
        return false;
    }else if (pwd.length > 16 || pwd.length < 5) {
        alert("密码输入错误");
        return false;
    }else if(document.getElementById("passWord").value != document.getElementById("repassWord").value){
        document.getElementById("warning").innerHTML = "两次密码的输入不一致";
        return false;
    }return true;

}

