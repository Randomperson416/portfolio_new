document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simple validation (if you want to add more)
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    document.querySelector(".profile-picture").addEventListener("click", () => {
      alert("You clicked on the profile picture!");
  });

    // You can add your custom form submission logic here
    // For now, we'll just log the form data in the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    // After submission, show a success message (if you'd like)
    alert("Thank you for your message! I'll get back to you soon.");
    
    // Optionally, you can reset the form
    document.getElementById("contact-form").reset();
  });  