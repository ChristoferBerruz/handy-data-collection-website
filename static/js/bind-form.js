var firebaseConfig = {
    apiKey: "AIzaSyBHdWLX3v3L8pNOvBGRAHm3cUMs4sRhnpY",
    authDomain: "handy-data-collection.firebaseapp.com",
    projectId: "handy-data-collection",
    storageBucket: "handy-data-collection.appspot.com",
    messagingSenderId: "320639564616",
    appId: "1:320639564616:web:816585b9f57aa64dd5517d",
    measurementId: "G-X0BKGQ9XDN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const submitBtn = document.getElementById("fileSubmitBtn");
function handleSubmit(){
    const input = document.getElementById("fileinput");
    const file = input.files[0];

    if(file){
        alert("Sucessfully submitted your file. Thank you!");
    }else{
        alert("You have not selected any file.");
    }
}
submitBtn.onclick = handleSubmit;