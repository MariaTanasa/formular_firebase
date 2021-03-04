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

// Reference contactInfo collections
let contactInfo = firebase.database().ref("info");
var id = 0;
// Listen for a submit
document.querySelector(".form").addEventListener("submit", submitForm);
var id = 0;

function submitForm(e) {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let ora = document.querySelector("#ora").value;
    let profesor = document.querySelector("#profesor").value;
    let sala = document.querySelector("#sala").value;
    // console.log(email, ora, profesor, sala);

    saveContactInfo(email, ora, profesor, sala);

    document.querySelector("#form").reset();
}

// Save infos to Firebase
function saveContactInfo(email, ora, profesor, sala) {
    id++;
    var status = true;
    var rootRef = firebase.database().ref();
    var userRef = rootRef.child('user');
    var newContactInfo = userRef.push();

    newContactInfo.set({
        id: id,
        status: status,
        email: email,
        ora: ora,
        profesor: profesor,
        sala: sala,
    }, function(error) {
        console.log("error" + error);
    });
    // console.log("saveContact");

}

function retrieveData() {
    var ref = firebase.database().ref('user/');
    var cnt = 0;

    ref.on("value", function(snapshot) {
        snapshot.forEach(snap => {
            var elem = snap.val();
            cnt++;
            elem.status = false;
            console.log(elem.status);
            // console.log(elem.email);
            // console.log(elem.ora);
            // console.log(elem.profesor);
            document.getElementById("retrieve").innerHTML += `
            <div> 
            <p>Email: ${elem.email}<br/>
            Interval: ${elem.ora}<br/>
            Profesor: ${elem.profesor}<br/>
            Sala: ${elem.sala}<br/></p><br/><br/>`

        })
    })
}

// retrieveData();