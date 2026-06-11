// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
myName.innerHTML = "My Name is David";
myHobby.innerHTML = "I like to play games";
myLocation.innerHTML = "I live in Indiana";




});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener("click", function() {
image.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWk1NGFudDJ3eWRrY2VteXZhMHVkMGN5Ym1iaDc4NGxkNTB2ZWJ1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EnaDBEa8Q7eVdW3Jac/giphy.gif";

});

// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener("click", function() {
image.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjNjM2hyMnNwZTduYWpuczZ1b3lsd2FlbG11ajM1a3J5MGozM21jdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BxXYI0SBorAcl7okoq/giphy.gif"
});

// BONUS
// 7. Try using different event types for your buttons.
