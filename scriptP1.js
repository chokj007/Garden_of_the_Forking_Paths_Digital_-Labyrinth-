document.addEventListener("DOMContentLoaded", function() {
    var paragraph = document.querySelector('.typing-animation');
    console.log(paragraph); 
    var words = paragraph.textContent.split(' ');
    paragraph.innerHTML = '';

    words.forEach(function(word) {
        var wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' '; 
        paragraph.appendChild(wordSpan);
    });

    // Apply typing animation to each word
    var wordSpans = document.querySelectorAll('.typing-animation span'); 
    console.log(wordSpans); 
    wordSpans.forEach(function(wordSpan, index) {
        setTimeout(function() {
            wordSpan.style.opacity = '1'; 
        }, index * 200); 
    });
});

(function() {
    // Function to create glitch effect
    function createGlitch() {
        document.body.classList.add('glitch-effect');
        setTimeout(function() {
            document.body.classList.remove('glitch-effect');
        }, 500); 
    }

    function isScrolledToBottom() {
        return (window.innerHeight + window.scrollY) >= document.body.scrollHeight;
    }

    function handleScroll() {
        if (isScrolledToBottom()) {
            createGlitch();
            //  makes sure there arent multiple glitches
            window.removeEventListener('scroll', handleScroll);
        }
    }

    function handleButtonClick() {
        // Create glitch effect
        createGlitch();
        // setTimeout(function() {
        //     window.location.href = 'Page3.html';
        // }, 2000); // 2 seconds
    }

    window.addEventListener('scroll', handleScroll);

    var button = document.getElementById('nextButton');
    if (button) {
        button.addEventListener('click', handleButtonClick);
    } else {
        console.error('Button element not found!');
    }
})();
