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
        let command = e.target.value.toLowerCase();
        e.target.value = '';

        // Map single letters to commands
        const commandMap = {
            'b': 'blurb',
            'a': 'articles',
            't': 'team',
            'c': 'contact',
            'r': 'researches'
        };

        // If the command is a single letter, map it to the corresponding command
        if (command.length === 1 && commandMap[command]) {
            command = commandMap[command];
        }

        navigate(command);
    }
});

function navigate(command) {
    document.getElementById('command-output').innerHTML = ''; // Clear previous output
    // Hide all sections except for the intro section
    document.querySelectorAll('#dynamic-content .section').forEach(section => section.style.display = 'none');

    if (command === 'articles') {
        document.getElementById('articles').style.display = 'block';
    } else if (command === 'team') {
        document.getElementById('team').style.display = 'block';
    } else if (command === 'blurb') {
        document.getElementById('blurb').style.display = 'block';
    } else if (command === 'contact') {
        document.getElementById('contact').style.display = 'block';
    } else if (command === 'researches') {
        document.getElementById('researches').style.display = 'block';
    } else if (document.getElementById(command)) {
        document.getElementById(command).style.display = 'block';
    } else {
        document.getElementById('command-output').innerHTML = 'Unknown command: ' + command;
    }
    // Ensure intro section is always displayed
    document.getElementById('intro').style.display = 'block';
    focusInput(); // Ensure the input field is focused after navigation
}

function displayArticle(articleId) {
    document.getElementById('command-output').innerHTML = ''; // Clear previous output
    document.querySelectorAll('#dynamic-content .section').forEach(section => section.style.display = 'none');
    document.getElementById(articleId).style.display = 'block';
    // Ensure intro section is always displayed
    document.getElementById('intro').style.display = 'block';
    focusInput(); // Ensure the input field is focused after displaying an article
}
