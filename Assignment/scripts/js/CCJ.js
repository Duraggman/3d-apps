$(document).ready(function () {
    // Initialize popover and modal
    $('[data-bs-toggle="popover"]').popover();
    $('[data-bs-toggle="modal"]').modal();
}
);

// Function to switch pages
function pageSwitch(selected) {
    // List of page IDs
    const pages = ['Home-Page', 'Sprite-Page', 'Coke-Page'];

    // Hide all pages
    pages.forEach(page => {
        document.getElementById(page).style.display = 'none';
    });

    // Show the selected page
    document.getElementById(selected).style.display = 'block';

    // Change page look based on selected page
    pageLook(selected);

    // Function to change page look
    function pageLook(selected) {
        // Change background, header and footer colours based on selected page
        if (selected === 'Home-Page') {
            document.body.style.backgroundColor = 'rgba(182, 231, 243, 1.0)';
            document.getElementById('header').style.backgroundColor = '#760003';
            document.getElementById('footer').style.backgroundColor = '#760003';
            document.getElementById('dM').style.backgroundColor = '#760003';
            document.getElementById('modal-btn').style.backgroundColor = '#760003';
            document.getElementById('nav_brand').style.color = 'white';
        } else if (selected === 'Sprite-Page') {
            document.body.style.backgroundColor = 'white';
            document.getElementById('header').style.backgroundColor = '#00B140';
            document.getElementById('footer').style.backgroundColor = '#00B140';
            document.getElementById('dM').style.backgroundColor = '#00B140';
            document.getElementById('modal-btn').style.backgroundColor = '#00B140';
            document.getElementById('nav_brand').style.color = 'white';
        } else if (selected === 'Coke-Page') {
            document.body.style.backgroundColor = 'white';
            document.getElementById('header').style.backgroundColor = '#FF0000';
            document.getElementById('footer').style.backgroundColor = '#FF0000';
            document.getElementById('dM').style.backgroundColor = '#FF0000';
            document.getElementById('modal-btn').style.backgroundColor = '#FF0000';
            document.getElementById('nav_brand').style.color = 'black';

        }
    }
}

