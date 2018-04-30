
var uname = document.getElementById('uname').value;;
var pw = document.getElementById('pw').value;;

// storing input from register-form
function store() {
    console.log("fun1")
    localStorage.setItem('uname', uname);
    localStorage.setItem('pwd', pw);
    alert('Registered In');
}

function ulogin(){
    var storedName = localStorage.getItem('uname');
    var storedPw = localStorage.getItem('pwd');
    console.log("fun2")
    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}