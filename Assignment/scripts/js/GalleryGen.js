$(document).ready(function () {
    // Define the number of columns
    var numberOfColumns = 2; // Set your desired number of columns here

    // Initialize a counter to track the current column
    var currentColumn = 0;

    // Create a new table row
    var newRow = $('<tr></tr>');

    //Ajax call to hook.php
    $.ajax({
        url: 'scripts/php/hook.php',
        method: 'GET',
        dataType: 'json',
        //If successful, run this function
        success: function (data) {
            //For each image in the data array
            $.each(data, function (index, value) {
                //Create a new table cell
                var newCell = $('<td id="gallery_cell"></td>');
                //Create a new link
                var newLink = $('<a href="3dapps/Assignment/' + value + '"></a>');
                //Create a new image
                var newImage = $('<img class="img-thumbnail" src="3dapps/Assignment/' + value + '" "/>');
                //Append the image to the link
                newLink.append(newImage);
                //Append the link to the table cell
                newCell.append(newLink);
                //Append the table cell to the current row
                newRow.append(newCell);

                // Increment the current column
                currentColumn++;

                // If the current column reaches the number of columns, reset it and append the row to the table
                if (currentColumn >= numberOfColumns) {
                    $('.gallery').append(newRow);
                    // Create a new row
                    newRow = $('<tr></tr>');
                    currentColumn = 0;
                }
            });

            // Append any remaining cells in the last row
            if (currentColumn > 0) {
                $('.gallery').append(newRow);
            }
        },
        //If unsuccessful, run this function
        error: function (error) {
            //Alert the user that the request failed
            alert('Error: ' + error);
        }
    });
});