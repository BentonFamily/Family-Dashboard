// config.js
window.config = {
  wifiName: "BenBen",
  wifiPassword: "CarHenRobMea!123",
  calendarEmail: "benton.family19@gmail.com",

  // Parent PIN to unlock the routine section
  parentPin: "0207",          // change this

  // Show/hide bedtime extras
  showRobinMedical: true,     // show “Robin: cream & inhaler”
  hideSetClocks: false,       // hide “Set clocks” if you want

  // Your Apps Script endpoints
  summaryUrl: "https://script.google.com/macros/s/AKfycbwBIGo4EnzoGMU7y6jG7VITAiH6o0aVnQr9rlO9IQ6GdXlwz9eOyw0x5nfP1bEkEfLNzg/exec", // GET
  choreSubmitUrl: "https://script.google.com/macros/s/AKfycbzkkjsvihexCz6KixbW0MPjEx1KX8ZnUS-RmEPkbtfFbIKLoF7U6wYMxOGN6ujZT4SFWg/exec", // POST

  // Keep true if you want it unlocked by default during your testing
  defaultUnlocked: false
};
