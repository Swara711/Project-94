
var firebaseConfig = {
      apiKey: "AIzaSyDfhwMAq3Vcxfq7VkURr9_jH_CQ2l2zKMs",
      authDomain: "kwitter-3fec2.firebaseapp.com",
      projectId: "kwitter-3fec2",
      storageBucket: "kwitter-3fec2.appspot.com",
      messagingSenderId: "794742743870",
      appId: "1:794742743870:web:7103c37edbe82eaed9c26f"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();
