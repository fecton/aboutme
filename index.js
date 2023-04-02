// Define global variables and constants
const header1 = document.getElementById("header1");
const lastModified = document.getElementById("last_modified");
const animationInterval = 100; // in milliseconds

let spacingIndex = 0;
let spacingDirection = -1;
const letterSpacings = [2, 4, 6, 8, 10, 12, 14];

const lastModifiedDate = new Date(2023, 2, 21); // year, month (0-indexed), day
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Validate the month value in the date
if (lastModifiedDate.getMonth() < 0 || lastModifiedDate.getMonth() > 11) {
  console.error("[ERROR] The month isn't in the interval [1,12]");
} else {
  const formattedDate = `${lastModifiedDate.getDate()} ${months[lastModifiedDate.getMonth()]} ${lastModifiedDate.getFullYear()}`;
  lastModified.textContent = `Last Updated: ${formattedDate}`;
}

// Define functions
function animateHeaderText() {
  header1.style.letterSpacing = `${letterSpacings[spacingIndex]}px`;
  if (spacingIndex === 0 || spacingIndex === letterSpacings.length - 1) {
    spacingDirection *= -1;
  }
  spacingIndex += spacingDirection;
}

// Start the animation interval
setInterval(animateHeaderText, animationInterval);