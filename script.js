document.getElementById('funButton').addEventListener('mouseover', function () {
    // Get the dimensions of the viewable area
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get the dimensions of the button
    const buttonWidth = this.offsetWidth;
    const buttonHeight = this.offsetHeight;

    // Calculate the maximum allowable position to stay within the visible area
    const maxX = viewportWidth - buttonWidth;
    const maxY = viewportHeight - buttonHeight;

    // Calculate random position within the visible area
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Set the new position of the button
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});

document.getElementById('yesButton').addEventListener('click', function () {
    // Get the h3 element
    const h3Element = document.querySelector('h3');

    // Update the content of the h3 tag
    h3Element.textContent = 'Ok bro';
});
