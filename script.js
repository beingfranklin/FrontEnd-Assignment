
// var uname = document.getElementById('uname').value;;
// var pw = document.getElementById('pw').value;;

// // storing input from register-form
// function store() {
//     console.log("fun1")
//     localStorage.setItem('uname', uname);
//     localStorage.setItem('pwd', pw);
//     alert('Registered In');
// }

// function ulogin(){
//     var storedName = localStorage.getItem('uname');
//     var storedPw = localStorage.getItem('pwd');
//     console.log("fun2")
//     // entered data from the login-form
//     var userName = document.getElementById('userName');
//     var userPw = document.getElementById('userPw');
//     if(userName.value == storedName && userPw.value == storedPw) {
//         alert('You are loged in.');
//     }else {
//         alert('ERROR.');
//     }
// }


const form = document.getElementById('form');
form.addEventListener('submit', (event)=> {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
});

const button = document.getElementById('storage');
button.addEventListener('click', ()=>{
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  document.getElementById('app').innerHTML = username + ' ' + password;
});
