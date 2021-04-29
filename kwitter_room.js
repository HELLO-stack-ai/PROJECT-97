
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDSt7s_rOmR68t9QPE8j-EpWuYLAci3BIs",
      authDomain: "lets-chat-app-2cb0e.firebaseapp.com",
      databaseURL: "https://lets-chat-app-2cb0e-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-2cb0e",
      storageBucket: "lets-chat-app-2cb0e.appspot.com",
      messagingSenderId: "558417531831",
      appId: "1:558417531831:web:00439cb7803c68a9898e32",
      measurementId: "G-BWEHPMJD3Q"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);
          window.location="lets-chat_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code
console.log("RoomName- " + Room_names);
row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
      localStorage.setItem("Room_name", name);
      window.location="lets-chat_page.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
