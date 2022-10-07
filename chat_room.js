var firebaseConfig = {
    apiKey: "AIzaSyDtSwBaa_uoeUWU18xZHYY_wQMA_JY2V9s",
    authDomain: "lets-chat-web-app-bb937.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-bb937-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-bb937",
    storageBucket: "lets-chat-web-app-bb937.appspot.com",
    messagingSenderId: "432828306074",
    appId: "1:432828306074:web:279f95965de4e08b750523"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName'('this.id') >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
  

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpouse: "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

}


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.loaction = "kwitter_page.html";
}

