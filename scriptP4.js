document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    var modal = document.getElementById("webcamModal");
    var video = document.getElementById("webcamStream");
    var text = document.getElementById("greetingText");
    var span = document.getElementsByClassName("close")[0];

    var faceTracker;
    // When the user scrolls down half the page, show the modal and start webcam
    window.onscroll = function () {
        if (document.body.scrollTop > document.body.scrollHeight / 2 || document.documentElement.scrollTop > document.documentElement.scrollHeight / 2) {
            modal.style.display = "block";
            startWebcamAndFaceTracking(); 
        }
    };

    function startWebcamAndFaceTracking() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
                text.style.display = "block";

                // // Start face tracking
                // faceTracker = ml5.faceTracker('models/face');
                // faceTracker.on('predict', gotFaces); // listen for the 'predict' event
                // // Disable right-click menu
                // video.addEventListener('contextmenu', function (e) {
                //     e.preventDefault();
                // });
            })
            .catch(function (err) {
                console.error("Error accessing the webcam: ", err);
            });
    }

    // function gotFaces(faces) {
    //     if (faces.length > 0) {
    //         let face = faces[0]; // consider only the first detected face
    //         let landmarks = face.landmarks;
    //         let leftEye = landmarks.getLeftEye()[0];
    //         let rightEye = landmarks.getRightEye()[3];
    //         let deltaX = rightEye._x - leftEye._x;

    //         if (deltaX > 50) { 
    //             document.querySelector('.Bkg4').style.backgroundColor = '#fff';
    //         } else {
    //             // If face is looking towards the screen
    //             document.querySelector('.Bkg4').style.backgroundColor = '#8B0000'; 
    //         }
    //     }
    // }
    

    // span.onclick = function () {
    //     closeModal();
    // };

    // function closeModal() {
    //     modal.style.display = "none";
    //     stopWebcamAndFaceTracking();
    // }

    // function stopWebcamAndFaceTracking() {
    //     var stream = video.srcObject;
    //     var tracks = stream.getTracks();

    //     tracks.forEach(function (track) {
    //         track.stop();
    //     });

    //     video.srcObject = null;

    //     if (faceTracker) {
    //         faceTracker.removeAllListeners(); // remove all event listeners
    //         faceTracker.stop();
    //     }
    // }

    setTimeout(function () {
        closeModal();
        window.location.href = "index.html"; 
    }, 300000); 
});
