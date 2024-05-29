// Switching the pages 
function pageSwitch(selected) {
    // List of page IDs
    const pages = ['Home-Page', 'Sprite-Page'];

    // Hide all pages
    pages.forEach(page => {
        document.getElementById(page).style.display = 'none';
    });

    // Show the selected page
    document.getElementById(selected).style.display = 'block';

    // Change page look based on selected page
    pageLook(selected);
}

function pageLook(selected) {
    // Change background, header and footer colours based on selected page
    if (selected === 'Home-Page') {
        document.body.style.backgroundColor = 'rgba(182, 231, 243, 1.0)';
        document.getElementById('header').style.backgroundColor = '#760003';
        document.getElementById('footer').style.backgroundColor = '#760003';
        document.getElementById('dM').style.backgroundColor= '#760003';;
    
    } else if (selected === 'Sprite-Page') {
        document.body.style.backgroundColor = 'white';
        document.getElementById('header').style.backgroundColor = '#00B140';
        document.getElementById('footer').style.backgroundColor = '#00B140';
        document.getElementById('dM').style.backgroundColor= '#00B140';;
    }
}