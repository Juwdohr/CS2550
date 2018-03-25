const loginBtn = document.getElementById('loginBtn');
const userInfo = document.querySelector('span.userInfo');
const inputs = document.querySelectorAll('.userInfo input');
const user = {};

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const type = e.target.innerText;
  switch (type) {
    case 'Login':
      user.username = inputs[0].value;
      user.password = inputs[1].value;
      login(user, loggedIn);
      break;
    case 'Logout':
      console.log('Need to create a logout function.');
      break;
    default:

  }

});

const login = ({username, password}, callback) => {
  const data = `userName=${username}&password=${password}`;
  const url = `http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php`;
  const request = new XMLHttpRequest();
  request.open("POST", url)
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200 ){
      const msg = document.querySelector('span.msg');
      response = JSON.parse(request.response);
      if(response.result === "invalid") {
        msg.innerText = "Username or Password Incorrect";
        msg.classList.add('active');
      } else {
        store(response);
        callback(response)
      }
    }
  }
  request.send(data);
}

const store = (info) => {
  localStorage['cs2550timestamp'] = JSON.stringify(info);
}

const loggedIn = ({userName, timestamp}, el) => {
  location.href="./sudoku/"
}
