// Define the elements to randomly add
const elements = [
    '<p>For a moment I thought that Richard Madden might in some way have divined my desperate intent. At once I realizedthat this would be impossible. The advice about turning always to the left reminded me that such was the common formula for finding the central courtyard of certain labyrinths. I know something about labyrinths. Not for nothing am I the greatgrandson of Tsui Pen. He was Governor of Yunnan and gave up temporal power to write a novel with more characters than there are in the Hung Lou Meng, and to create a maze in which all men would lose themselves. He spent thirteen years on these oddly assorted tasks before he was assassinated by a stranger. His novel had no sense to it and nobody ever found his labyrinth. </p>',
    '<h3>In ten minutes I had developed my plan. The telephone directory gave me the name of the one person capable of passing on the information. He lived in a suburb of Fenton, less than half an hour away by train.</h3>    ',
    '<h2>"The word is chess."</h2>'
  ];
  
  // Define the time interval to add the elements (in milliseconds)
  const interval = 50000; // Add an element every 50 seconds
  
  // Function to generate a random number between 0 and 1
  function generateRandomNumber() {
    return Math.random();
  }
  
  // Function to add a random element to the webpage
  function addRandomElement() {
    // Generate a random number
    const randomNumber = generateRandomNumber();
  
    // Add an element if the random number is less than 0.5
    if (randomNumber < 0.5) {
      // Choose a random element from the array
      const randomElement = elements[Math.floor(Math.random() * elements.length)];
  
      // Add the element to the webpage
      const container = document.querySelector('#random-elements-container');
      container.insertAdjacentHTML('beforeend', randomElement);
    }
  
    // Call the function again after the specified interval
    setTimeout(addRandomElement, interval);
  }
  
  // Call the function to add random elements to the webpage
  addRandomElement();
  