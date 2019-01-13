
function validpwd (){
    var pwd=document.getElementById('password').value;

    if(pwd.length>16 || pwd.length<5){
        alert("密码错误");
        return false;
    }
    return true;
}
