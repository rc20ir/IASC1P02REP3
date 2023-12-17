function displayDateTime() {
  const footer = document.getElementById("footer");
  const datetimeElement = document.getElementById("datetime");

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const currentDateTime = new Date().toLocaleString('en-US', options);

  datetimeElement.innerHTML = "&copy; " + currentDateTime;
}


function fillPreventionTips() {
  const preventionTips = [
    "Exercise regularly to keep your body and mind healthy.",
    "Maintain a balanced diet rich in fruits, vegetables, and whole grains.",
    "Practice stress management techniques such as meditation or deep breathing.",
    "Schedule regular health check-ups to monitor your well-being.",
    "Manage your blood pressure and blood sugar regularly.",
    "Stay away from any smoking, as it is a risk factor of MetS.",
    "Limit any alcohol consumption to a moderate amount.",
    "Get adequate sleep by aiming for 7-9 hours per night.",
    "Get adequate exposure to sunlight for vitamin D or consider supplements if sunlight exposure is limited."
  ];

  const preventionSection = document.getElementById("prevention");


  const randomTip = preventionTips[Math.floor(Math.random() * preventionTips.length)];
  preventionSection.innerHTML += `<p><strong>Random Tip:</strong> ${randomTip}</p>`;
}


document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);

      if (targetId === 'prevention') {

        window.location.href = 'prevention.html';
      } else {

        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });


  displayDateTime();
  fillPreventionTips();
});
