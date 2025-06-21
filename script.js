

  // Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyDLi5PAwIzbJniMa_iBcorHwHLZz2BYNgQ",
    authDomain: "smart-web-page.firebaseapp.com",
    databaseURL: "https://smart-web-page-default-rtdb.firebaseio.com",
    projectId: "smart-web-page",
    storageBucket: "smart-web-page.appspot.com",
    messagingSenderId: "79991393087",
    appId: "1:79991393087:web:4674b545587164e08be18a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  document.getElementById('Submit-register').addEventListener('click', function () {
    const username = document.getElementById('Username').value.trim().toLowerCase();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('Password').value;
    const rePassword = document.getElementById('Re-password').value;

    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    const usersRef = database.ref("users");

    // Step 1: Check email
    usersRef.orderByChild("email").equalTo(email).once("value", function (emailSnap) {
      if (emailSnap.exists()) {
        alert("Email is already registered!");
        return;
      }

      // Step 2: Check username
      usersRef.orderByChild("username").equalTo(username).once("value", function (userSnap) {
        if (userSnap.exists()) {
          alert("Username is already taken!");
          return;
        }

        // Step 3: Register new user
        usersRef.push({
          username: username,
          email: email,
          password: password  // ⚠ Not secure for production
        }).then(() => {
          alert("Registration Successful!");
          document.querySelector('form').reset();
        }).catch((error) => {
          console.error("Error saving data:", error);
        });

      });
    });
  });


  document.getElementById('loginbtn').addEventListener('click', function changestyle() {


    setTimeout(() =>{
    const element = document.getElementById('register');
     element.style.backgroundColor = "black";
     element.style.width = '50%';
     element.style.clipPath ='polygon(0 0, 100% 0, 75% 100%, 0 100%)'
    },2000)

});

document.getElementById('loginbtn').addEventListener('click', function () {
  // Hide Register box

  setTimeout(() => {
  document.getElementById('h1-lo').style.display = 'none';
  document.getElementById('h111').style.display = 'inline';
  document.getElementById('h112').style.display = 'inline';
  document.getElementById('h113').style.display = 'inline';
  document.getElementById('h1-re').style.display = 'none';
  
  const loginBox = document.getElementById('Login');
  loginBox.style.display = 'block';
  loginBox.style.backgroundColor = 'aliceblue';
  loginBox.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
  console.log("running")
  },2000)
});


document.getElementById('loginbtn').addEventListener('click', function () {
    document.getElementById('register').classList.toggle('reg-cont-login');
});

document.getElementById('Register').addEventListener('click', function () {
  document.getElementById('Login').classList.toggle('log-cont-animation');
  
})

document.getElementById('loginbtn').addEventListener('click', function(){

    setTimeout(() =>{  
    const hide = document.getElementById('hide');
    hide.style.display = 'none';
    },2000)

})



document.getElementById('loginbtn').addEventListener('click', function () {

  setTimeout(() => {  
    const div = document.getElementById('div');
    div.style.display = 'block';
  },2000)
});

document.getElementById('Register').addEventListener('click', function () {
  setTimeout(()=>{
    document.getElementById('register').style.display='block';
  },2000)
})


document.getElementById('Register').addEventListener('click', function () {

  setTimeout(() =>{

  // Reset all changes made above
  document.getElementById('h1-re').style.display = '';
  
  
  document.getElementById('div').style.display = 'none'; // Optional: Hide login
  document.getElementById('h111').style.display = 'none';
  document.getElementById('h112').style.display = 'none';
  document.getElementById('h113').style.display = 'none';


  const hideee = document.getElementById('register');
  hideee.style.backgroundColor = 'aliceblue'
  hideee.style.clipPath ='polygon(0 0, 100% 0, 100% 100%, 0 100%)'

},2000)  

});

document.getElementById('Register').addEventListener('click', function (){

  setTimeout(() =>{
    const backk = document.getElementById('hide');
    backk.style.display = 'block';
  },2000)

});

document.getElementById('Register').addEventListener('click', function (){

    setTimeout(() =>{
      document.getElementById('h1-lo').style.display = 'block';

    const back = document.getElementById('Login');
       back.style.backgroundColor = '';
       back.style.clipPath = '';
    },2000)
    
});


