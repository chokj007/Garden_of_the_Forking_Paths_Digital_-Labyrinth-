function accept() {
    window.close();
    window.location.href = 'Page2.html';
}

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
    window.location.href = 'Index.html';
}, 300000); // 5 minutes in milliseconds
}