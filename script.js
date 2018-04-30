var name = document.getElementById('uname');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('uname', uname.value);
    localStorage.setItem('pw', pw.value);
}

function ulogin(){
    var storedName = localStorage.getItem('uname');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

}