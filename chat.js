// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



