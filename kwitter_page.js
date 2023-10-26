
const firebaseConfig = {

      apiKey: "AIzaSyAl4pgEpFHc67tVcEiEhStkYpevMoJr64o",
    
      authDomain: "letschatapp-479ce.firebaseapp.com",
    
      projectId: "letschatapp-479ce",
    
      storageBucket: "letschatapp-479ce.appspot.com",
    
      messagingSenderId: "113727051407",
    
      appId: "1:113727051407:web:cc193c2c59bfecfe1402fa"
    
    };
    
     firebase.initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() 
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });

     document.getElementById("msg").value = "";
}
