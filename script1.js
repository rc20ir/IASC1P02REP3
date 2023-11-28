// Function to display current date and time
function displayDateTime() {
  const footer = document.getElementById("footer");
  const datetimeElement = document.getElementById("datetime");

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const currentDateTime = new Date().toLocaleString('en-US', options);

  datetimeElement.innerHTML = "&copy; " + currentDateTime;
}

// Function to dynamically fill Prevention Tips
function fillPreventionTips() {
  const preventionTips = [
    "Exercise regularly to keep your body and mind healthy.",
    "Maintain a balanced diet rich in fruits, vegetables, and whole grains.",
    "Practice stress management techniques such as meditation or deep breathing.",
    "Schedule regular health check-ups to monitor your well-being."
  ];

  const preventionSection = document.getElementById("prevention");

  // Display a random prevention tip
  const randomTip = preventionTips[Math.floor(Math.random() * preventionTips.length)];
  preventionSection.innerHTML += `<p><strong>Random Tip:</strong> ${randomTip}</p>`;
}

// Run functions when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
  displayDateTime();
  fillPreventionTips();
});
