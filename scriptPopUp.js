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
    "read closely...",
    "watching you",
    "51.409999, -2.334510",
    "01010110 01101001 01110010 01110101 01110011",
    "afha4wiot", 
    "Malware can be beautiful", 
    " \/°.,°\/",
    "( 6 6 )",
    "(_)_)V",
    "read closely...",
    "watching you",
    "51.409999, -2.334510",
    "01010110 01101001 01110010 01110101 01110011",
    "afha4wiot", 
    "Malware can be beautiful", 
    " \/°.,°\/",
    "( 6 6 )",
    "(_)_)V"
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

        var randomInterval = Math.floor(Math.random() * (60000 - 5000 + 1)) + 5000;

        setTimeout(displayTextInOrder, randomInterval);
    }
}

setTimeout(function() {
    displayTextInOrder();
}, 20000);


function openWindows() {
    window.close();
    var urls = [
        'P3a.html',
        'P3b.html',
        'P3c.html',
        'P3d.html',
        'P3e.html',
        'P3f.html',
    ];
    for (let i = 0; i < 6; i++) {
        window.open(urls[i], '', 'width=400,height=400');
    }

setTimeout(function() {
    for (let i = 0; i < 6; i++) {
        if (window.opened[i] && !window.opened[i].closed) {
            window.opened[i].close();
        }
    }
    window.location.href = 'index.html';
}, 300000); // 5 minutes in milliseconds
}
