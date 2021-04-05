
const validExtensions = ['mov', 'mp4', 'mjpeg', 'avi', 'h264'];
const videoExtensionInfo = document.getElementById('valid-extensions-info');
const extensionInfo = validExtensions.reduce((prev, cur) => prev + ' | ' + cur, '');
videoExtensionInfo.innerText = videoExtensionInfo.innerText + extensionInfo;

const progressP = document.getElementById('show-progress-p');

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
var storage = firebase.storage();
const submitBtn = document.getElementById("fileSubmitBtn");
function handleSubmit(){
    const input = document.getElementById("fileinput");
    const file = input.files[0];

    if(file){
        
        if(!isVideoType(file.name))
        {
            alert(`${file.name} is not a valid video format.`);

            return;
        }

        progressP.innerText = 'Uploading video...';
        let randomID = makeid(20);
        let fileName = `${randomID}-${file.name}`;
        ref = storage.ref(fileName);

        ref.put(file).then(() => {
            progressP.innerText = 'Done uploading.';
            alert("Sucessfully submitted your file. Thank you!");
        });
    }else{
        alert("You have not selected any file.");
    }
}

// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function getExtension(filename)
{
    let  parts = filename.split('.');
    return parts[parts.length - 1];
}

function isVideoType(filename) {

    let ext = getExtension(filename);
    if(validExtensions.includes(ext.toLowerCase()))
    {
        return true;
    }

    return false;
}


submitBtn.onclick = handleSubmit;