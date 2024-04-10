window.onload = function() {
    const circleContainer = document.getElementById('circle-container');
    const text = document.getElementById('text');
    
    const circleCount = 30; // Total number of circles
    const maxZIndex = 2;
    const pages = ['page1.html', 'page2.html', 'page3.html', 'page4.html', 'page5.html', 'page6,html', 'page7.html', 'page8.html']; // Add more page URLs as needed
    const dummyCircleProbability = 0.5; 
    
    for (let i = 0; i < circleCount; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      const diameter = Math.floor(Math.random() * 50) + 30; // Random diameter between 30 and 80 pixels
      circle.style.width = diameter + 'px';
      circle.style.height = diameter + 'px';
      circle.style.top = Math.random() * 80 + '%';
      circle.style.left = Math.random() * 80 + '%';
      circle.style.zIndex = Math.floor(Math.random() * maxZIndex) + 1;
      
      // webpage or dummy deciding function
      if (Math.random() > dummyCircleProbability) {
        const randomPageIndex = Math.floor(Math.random() * pages.length);
        circle.onclick = function() {
          const newWindow = window.open(pages[randomPageIndex], '_blank', 'width=500,height=500');
          if (newWindow) {
            newWindow.focus();
          } else {
            alert('Popup blocker is enabled. Please allow popups for this site.');
          }
        };
    } else {
        // dummy circle function
        circle.onclick = function() {
          alert('Virus released.');
          setTimeout(() => {
            window.location.href = 'nonexistent_page.html';
          }, 1000); 
        };
      }
      
      circleContainer.appendChild(circle);
    }
  };
  