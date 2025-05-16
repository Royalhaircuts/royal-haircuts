// Initialize lucide icons
lucide.createIcons();

// Appointment form submission handler
document.getElementById('appointment-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Appointment successfully booked!');
});
