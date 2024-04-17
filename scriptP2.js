document.addEventListener("DOMContentLoaded", function() {
    // Get the paragraph element by its class
    var paragraph = document.querySelector('.typing-animation');
    console.log(paragraph); // Check if paragraph is selected correctly
    var words = paragraph.textContent.split(' ');
    // Clear the paragraph content
    paragraph.innerHTML = '';

    // Iterate through each word and wrap it with a span element
    words.forEach(function(word) {
        var wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' '; 
        paragraph.appendChild(wordSpan);
    });

    // Apply typing animation to each word
    var wordSpans = document.querySelectorAll('.typing-animation span'); // Use .typing-animation span
    console.log(wordSpans); // Check if wordSpans are selected correctly
    wordSpans.forEach(function(wordSpan, index) {
        setTimeout(function() {
            wordSpan.style.opacity = '1'; // Make the word visible
        }, index * 200); // Delay the appearance of each word
    });
});

