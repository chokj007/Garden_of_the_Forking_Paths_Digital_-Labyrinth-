var texts = [
    "read closely...",
    "watching you",
    "51.409999, -2.334510",
    "01010110 01101001 01110010 01110101 01110011",
    "afha4wiot", 
    "Malware can be beautiful", 
    " \/°.,°\/",
    "( 6 6 )",
    "(_)_)V",
    ".... .. ... / .. ... / -... ..- - ..- - .. --- ..- .-..",
    "╭∩╮(ΘĹ̯Θ)╭∩╮",
    "read closely...",
    "watching you",
    "51.409999, -2.334510",
    "01010110 01101001 01110010 01110101 01110011",
    "afha4wiot", 
    "Malware can be beautiful", 
    " \/°.,°\/",
    "( 6 6 )",
    "(_)_)V",
    ".... .. ... / .. ... / -... ..- - ..- - .. --- ..- .-..",
    "╭∩╮(ΘĹ̯Θ)╭∩╮",
    "read closely...",
    "watching you",
    "51.409999, -2.334510",
    "01010110 01101001 01110010 01110101 01110011",
    "afha4wiot", 
    "Malware can be beautiful", 
    " \/°.,°\/",
    "( 6 6 )",
    "(_)_)V", 
    ".... .. ... / .. ... / -... ..- - ..- - .. --- ..- .-..",
    "╭∩╮(ΘĹ̯Θ)╭∩╮"
];
var currentIndex = 0;

function accept() {
    window.close();
    window.location.href = 'Page2.html';
}

function displayTextInOrder() {
    if (currentIndex < texts.length) {
        var textBox = document.createElement("div");
        textBox.className = "textBox"; 
        textBox.textContent = texts[currentIndex];

        var xPos = Math.floor(Math.random() * (window.innerWidth - 200)); 
        var yPos = Math.floor(Math.random() * (window.innerHeight - 100)); 
        textBox.style.position = "absolute";
        textBox.style.left = xPos + "px";
        textBox.style.top = yPos + "px";

        document.body.appendChild(textBox);

        currentIndex++;

        var randomInterval = Math.floor(Math.random() * (30000 - 5000 + 1)) + 5000;

        setTimeout(displayTextInOrder, randomInterval);
    }
}

setTimeout(function() {
    displayTextInOrder();
}, 20000);


function openWindows() {
    window.close(); // Close the current window 
    // const1 = "P3a.html"
    // const2 = "P3b.html"
    // const3 = "P3c.html"
    // const4 = "P3d.html"
    // const5 = "P3e.html"
    // const6 = "P3f.html"

    var urls = [
        "P3a.html",
        "P3b.html",
        "P3c.html",
        "P3d.html",
        "P3e.html",
        "P3f.html",
    ];
    var openedWindows = []; // Array to store references to the opened windows

    for (let i = 0; i < urls.length; i++) {
        // Open each URL and store the window reference
        openedWindows[i] = window.open(urls[i], '', 'width=400,height=400');
        // openedWindows[i] = window.open(const1, const2, const3, const4, const5, const6, '', 'width=400,height=400');
        
    }

    // Set a timeout to close each opened window after 5 minutes
    setTimeout(function() {
        for (let i = 0; i < openedWindows.length; i++) {
            if (openedWindows[i] && !openedWindows[i].closed) {
                openedWindows[i].close(); // Close the window if it's open
            }
        }
        window.location.href = 'index.html'; 
    }, 300000); 
}

// function openWindows() {
//     var urls = [
//         "P3a.html",
//         "P3b.html",
//         "P3c.html",
//         "P3d.html",
//         "P3e.html",
//         "P3f.html",
//     ];
//     var openedWindows = []; // Array to store references to the opened windows

//     // Open each URL
//     urls.forEach((url, i) => {
//         openedWindows[i] = window.open(url, '', 'width=400,height=400');
//     });

//     // Set a timeout to close each opened window after 5 minutes
//     setTimeout(function() {
//         for (let i = 0; i < openedWindows.length; i++) {
//             if (openedWindows[i] && !openedWindows[i].closed) {
//                 openedWindows[i].close(); // Close the window if it's open
//             }
//         }
//         window.location.href = 'index.html'; 
//     }, 300000); 
// }


