// function redactText() {
//     const elements = document.querySelectorAll('#content p');
//     elements.forEach(element => {
//         const redactChance = Math.random();
//         if (redactChance < 0.3) { 
//             const redactStart = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
//             setTimeout(() => {
//                 const text = element.textContent;
//                 const redactPosition = Math.floor(Math.random() * (text.length - 10));
//                 const redactedText = text.substring(0, redactPosition) + '<span class="redacted">' + text.substring(redactPosition, redactPosition + 10) + '</span>' + text.substring(redactPosition + 10);
//                 element.innerHTML = redactedText;
//             }, redactStart * 1000);
//             console.log('running');
//         }
//     });
// }

// document.getElementById('restartButton').addEventListener('click', function() {
//     const redactedElements = document.querySelectorAll('.redacted');
//     const threshold = 0.5 * document.querySelectorAll('#content p').length;
//     if (redactedElements.length > threshold) {
//         location.reload();
//     }
// });

// redactText();
