var name = document.getElementById('uname');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('uname', uname.value);
    localStorage.setItem('pw', pw.value);
}