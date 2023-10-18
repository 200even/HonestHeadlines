// Function to handle button click and analytics
function handleButtonClick() {
  // Replace this with your analytics tracking code
  // Example: Send an event to Google Analytics
  // Replace 'YOUR_ANALYTICS_ID' with your actual Google Analytics ID
  // You can use any analytics service or method you prefer
  sendAnalyticsEvent('Button Clicked');

  // Navigate to the website
  window.open('https://www.honestheadlines.com', '_blank');
}

// Function to send analytics event (replace with your analytics code)
function sendAnalyticsEvent(eventName) {
  // Replace with your actual analytics tracking code
  // Example: Google Analytics
  // Replace 'YOUR_ANALYTICS_ID' with your actual Google Analytics ID
  // gtag('event', eventName, {
  //   'event_category': 'Popup Interaction'
  // });
}

// Add a click event listener to the button element
document.getElementById('button').addEventListener('click', handleButtonClick);