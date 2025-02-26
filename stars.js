function createStar() {
  console.log("Criando estrela");
  const star = document.createElement('div');
  star.className = 'star';

  
  // Random size between 1px and 3px
  const size = 1 + Math.random() * 2;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  
  // Random position from top of screen
  const startX = Math.random() * window.innerWidth;
  star.style.left = `${startX}px`;
  
  // Random animation duration between 2 and 4 seconds
  const duration = 3 + Math.random() * 2;
  star.style.animation = `fallingStar ${duration}s linear forwards`;
  
  document.getElementById('stars').appendChild(star);
  
  // Remove star after animation
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

function createStars() {
  // Create 3-5 stars at once
  const starCount = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < starCount; i++) {
    setTimeout(() => createStar(), Math.random() * 200);
  }
}

function startStarAnimation() {
  // Create new stars every 100-200ms
  const delay = 50 + Math.random() * 50;
  createStars();
  setTimeout(startStarAnimation, delay);
}

// Start star animation
startStarAnimation();