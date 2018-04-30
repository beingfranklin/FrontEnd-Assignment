
var name = document.getElementById('uname').value;;
var pw = document.getElementById('pw').value;;

// storing input from register-form
function store() {
    console.log("fun1")
    localStorage.setItem('uname', uname.value);
    localStorage.setItem('pw', pw.value);
    alert('Registered In');
}

function ulogin(){
    var storedName = localStorage.getItem('uname');
    var storedPw = localStorage.getItem('pw');
    console.log("fun1")
    // entered data from the login-form
    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}