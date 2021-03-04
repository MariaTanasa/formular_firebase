// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAUcnZKVdGrcQ3YuiRCQDkTFweEVn35Ujc",
    authDomain: "spacehack-74f4f-default-rtdb.firebaseapp.com",
    databaseURL: " https://spacehack-74f4f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "spacehack-74f4f-default-rtdb",
    storageBucket: "spacehack-74f4f-default-rtdb.appspot.com",
    messagingSenderId: "108697593174",
    appId: "1:108697593174:web:fd0e5c40e04f3468b2e2f7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function retrieveData() {
    var ref = firebase.database().ref('user/');
    var cnt = 0;

    ref.on("value", function(snapshot) {
        snapshot.forEach(snap => {
            if (snap.key !== "undefined") {
                var elem = snap.val();
                cnt++;
                document.getElementById("retrieve").innerHTML += `
            <tr class="head">
            <th>Cerere ${cnt}</th>
            <th>Status ${cnt}</th>
         </tr>
        <tr class="test">
            <td>Email: ${elem.email}<br/>
            Interval: ${elem.ora}<br/>
            Profesor: ${elem.profesor}<br/>
            Sala: ${elem.sala}</td>
           
            <td><button onclick="setStatus(\'${snap.key}\')" class="btn">Rezolvata</button></td>
        </tr>`
            }
        })
    })
}

function setStatus(id) {
    var userRef = firebase.database().ref(`/user/${id}`)
    var status = false;
    userRef.update({
        "status": false
    })
    window.location.reload();
}

retrieveData();