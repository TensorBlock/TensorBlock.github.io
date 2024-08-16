// Function to focus the input field
function focusInput() {
    document.getElementById('commandInput').focus();
}

// Focus the input field and display the intro section when the page loads
window.onload = function() {
    focusInput();
    navigate('intro'); // Display the intro section by default
};

// Add event listener for the command input
document.getElementById('commandInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const command = e.target.value.toLowerCase();
        e.target.value = '';
        navigate(command);
    }
});

// Function to handle navigation
function navigate(command) {
    document.getElementById('command-output').innerHTML = ''; // Clear previous output
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');

    if (command === 'intro') {
        document.getElementById('intro').style.display = 'block';
    } else if (command === 'articles') {
        document.getElementById('articles').style.display = 'block';
    } else if (command === 'team') {
        document.getElementById('team').style.display = 'block';
    } else if (command === 'back') {
        document.getElementById('articles').style.display = 'block';
    } else if (document.getElementById(command)) {
        document.getElementById(command).style.display = 'block';
    } else {
        document.getElementById('command-output').innerHTML = 'Unknown command: ' + command;
    }
    focusInput(); // Ensure the input field is focused after navigation
}

// Function to display article content
function displayArticle(articleId) {
    document.getElementById('command-output').innerHTML = ''; // Clear previous output
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById(articleId).style.display = 'block';
    focusInput(); // Ensure the input field is focused after displaying an article
}
