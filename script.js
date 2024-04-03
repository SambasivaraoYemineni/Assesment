
// Array of images (in reality, you should have a variety of different images)
var images = [
    src="image1.jpeg",
    src="image2.jpeg",
    src="image3.jpeg",
    src="image4.jpeg",
    src="image5.jpeg",
    src="image6.jpeg"
    

];

// Function to display a random image from the images array
function displayRandomImage() {
    var randomIndex = Math.floor(Math.random() * images.length);
    var imageUrl = images[randomIndex];
    var captchaImage = document.getElementById("captcha-image");
    captchaImage.src = imageUrl;
}

// Function to validate the captcha
function validateCaptcha() {
    var userInput = document.getElementById("captcha-input").value;
    var expectedValue = "some_value"; 
    if (userInput === expectedValue) {
        alert("Captcha is correct!");
    } else {
        alert("Captcha is incorrect. Please try again.");
    }
}
