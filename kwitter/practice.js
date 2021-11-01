const firebaseConfig = {
    apiKey: "AIzaSyBMom4zfLiuESo2ZEDNgtWaYXmzBg8Abrc",
    authDomain: "kwitter-71545.firebaseapp.com",
    projectId: "kwitter-71545",
    storageBucket: "kwitter-71545.appspot.com",
    messagingSenderId: "718920180833",
    appId: "1:718920180833:web:72025d6abc1a3f7ffe3620"
  };
  
  const app = initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value ;
    firebase.database.ref('/').child(user_name).update({
        purpose:"addinguser"
    });
}
