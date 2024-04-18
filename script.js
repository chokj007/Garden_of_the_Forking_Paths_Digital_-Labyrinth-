document.addEventListener("DOMContentLoaded", function() {
  const circleContainer = document.getElementById('circle-container');
  const numCircles = 30; // Adjust as needed
  // const mainText = document.getElementById('blur');
  const circles = []; // Array to store circle positions and radii

  // Function to generate random number within a range
  function getRandom(min, max) {
      return Math.random() * (max - min) + min;
  }

  // Function to generate random position within the viewport
  function getRandomPosition(radius) {
      let posX, posY;
      do {
          posX = getRandom(0, window.innerWidth - 2 * radius);
          posY = getRandom(0, window.innerHeight - 2 * radius);
          // Check if the new circle overlaps with existing circles
          var overlap = circles.some(circle => {
              const dx = circle.x - posX;
              const dy = circle.y - posY;
              const distance = Math.sqrt(dx * dx + dy * dy);
              return distance < circle.radius + radius;
          });
      } while (overlap);
      return { x: posX, y: posY };
  }

  // generate random radius
  function getRandomRadius() {
      return getRandom(20, 100); // Adjust min and max radius as needed
  }

  // Create circles
  for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      // Set random radius
      const radius = getRandomRadius();
      circle.style.width = radius + 'px';
      circle.style.height = radius + 'px';

      // Set random position without overlapping
      const position = getRandomPosition(radius);
      circle.style.left = position.x + 'px';
      circle.style.top = position.y + 'px';

      // Store circle position and radius
      circles.push({ x: position.x + radius, y: position.y + radius, radius: radius });

      // //  z-index trial
      // circle.style.zIndex = 1;

      //hover effect
      circle.addEventListener('mouseenter', function() {
          circle.style.transform = 'scale(1.5)';
          circle.style.opacity = '0.7';
          circle.style.backgroundColor = '#680000';
      });

      circle.addEventListener('mouseleave', function() {
          circle.style.transform = 'scale(1)';
          circle.style.opacity = '1';
          circle.style.backgroundColor = '#c00505';
      });

      //links to Page
      if (i === 0) {
          const link = document.createElement('a');
          link.href = 'Page1.html';
          const innerCircle = document.createElement('div');
          innerCircle.classList.add('circle');
          link.appendChild(innerCircle);
          // Set random position for the circle with the link
          const linkPosition = getRandomPosition(radius);
          link.style.position = 'absolute';
          link.style.left = linkPosition.x + 'px';
          link.style.top = linkPosition.y + 'px';
          circleContainer.appendChild(link);

          link.addEventListener('mouseenter', function() {
              innerCircle.style.backgroundColor = '#ff0000'; 
              innerCircle.style.animation = 'blink 1s infinite'
          });

          link.addEventListener('mouseleave', function() {
              innerCircle.style.backgroundColor = '#c00505'; 
          });
      } else {
          circleContainer.appendChild(circle);
      }
  }
});
