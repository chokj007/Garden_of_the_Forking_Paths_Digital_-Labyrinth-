document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    var modal = document.getElementById("webcamModal");

    // Get the video element
    var video = document.getElementById("webcamStream");

    // Get the text element
    var text = document.getElementById("greetingText");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user scrolls down half the page, show the modal and start webcam
    window.onscroll = function () {
        if (document.body.scrollTop > document.body.scrollHeight / 2 || document.documentElement.scrollTop > document.documentElement.scrollHeight / 2) {
            modal.style.display = "block";
            startWebcam();
        }
    };

    // Function to start webcam
    function startWebcam() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
                // Show greeting text after video starts
                text.style.display = "block";
                // Disable right-click context menu on video
                video.addEventListener('contextmenu', function (e) {
                    e.preventDefault();
                });
            })
            .catch(function (err) {
                console.error("Error accessing the webcam: ", err);
            });
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        closeModal();
    };

    // Function to close modal and stop webcam
    function closeModal() {
        modal.style.display = "none";
        stopWebcam();
    }

    // Function to stop webcam
    function stopWebcam() {
        var stream = video.srcObject;
        var tracks = stream.getTracks();

        tracks.forEach(function (track) {
            track.stop();
        });

        video.srcObject = null;
    }

    // Timer to close modal and redirect after 5 minutes
    setTimeout(function () {
        closeModal();
        // Redirect to another webpage
        window.location.href = "https://example.com"; // Replace with your desired URL
    }, 300000); // 5 minutes in milliseconds
});
