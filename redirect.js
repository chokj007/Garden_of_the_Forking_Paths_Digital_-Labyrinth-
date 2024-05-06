
    // Function to redirect to another page
    function redirectToPage() {
        window.location.href = "index.html"; 
    }
    function resetTimer() {
        clearTimeout(timeoutId);
        startTimer();
    }
    function startTimer() {
        timeoutId = setTimeout(redirectToPage, 300000); 
    }

    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keypress", resetTimer);

    var timeoutId;
    startTimer();
