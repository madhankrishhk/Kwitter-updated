
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBMom4zfLiuESo2ZEDNgtWaYXmzBg8Abrc",
      authDomain: "kwitter-71545.firebaseapp.com",
      databaseURL: "https://kwitter-71545-default-rtdb.firebaseio.com",
      projectId: "kwitter-71545",
      storageBucket: "kwitter-71545.appspot.com",
      messagingSenderId: "718920180833",
      appId: "1:718920180833:web:72025d6abc1a3f7ffe3620"
    };
    
    // Initialize Firebase 
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname-"+Room_names);
      row = "<div class'room_name' id="+room_name+ "onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";   
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}