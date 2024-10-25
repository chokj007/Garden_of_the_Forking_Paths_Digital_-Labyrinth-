document.addEventListener("DOMContentLoaded", function() {
    var paragraph = document.querySelector('.typing-animation');
    var words = paragraph.textContent.split(' ');
    paragraph.innerHTML = '';

    words.forEach(function(word) {
        var wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' '; 
        paragraph.appendChild(wordSpan);

        var dobInput = document.getElementById('dob-input');
    dobInput.addEventListener('input', function(event) {
        // Filter out non-numeric characters
        var newValue = event.target.value.replace(/\D/g, ''); //figure this line out again
        event.target.value = newValue;
    });

    });

    var wordSpans = document.querySelectorAll('.typing-animation span'); 
    wordSpans.forEach(function(wordSpan, index) {
        setTimeout(function() {
            wordSpan.style.opacity = '1'; 
            if (index === wordSpans.length - 1) {
                showReload(); // Call function to show "Unknown issue" and "Reload" button
            }
        }, index * 200); 
    });

    function showReload() {
        var reloadContainer = document.getElementById('reload-container');
        reloadContainer.style.display = 'block'
    }

    // Reload button functionality
    document.getElementById('reload-btn').addEventListener('click', function() {
        document.body.style.backgroundColor = 'white';
        var reloadContainer = document.getElementById('reload-container');
        var para2 = document.getElementById('para2');
        var formContainer = document.getElementById('form-container');
        var rightSideText = document.querySelector('.rightside');
        var leftSideText = document.querySelector('.leftside');
        var MainImage2 = document.querySelector('.Mainimage.two')

        reloadContainer.style.display = 'none';
        para2.style.display = 'none'
        MainImage2.style.display = 'none'
        rightSideText.style.display = 'block';
        leftSideText.style.display = 'block';

              rightSideText.style.transition = 'top 1s';
              rightSideText.style.top = '50';
      
              leftSideText.style.transition = 'top 1s';
              leftSideText.style.top = '50';

        formContainer.style.display = 'block';
    });

    document.getElementById('send-btn').addEventListener('click', function() {
        var nameInput = document.getElementById('name-input').value;
        var dobInput = document.getElementById('dob-input').value;

        if (nameInput && dobInput) {
            window.location.href = 'Page3.html'
        } else {
            alert('Please fill out all fields.');
        }
    });
});
