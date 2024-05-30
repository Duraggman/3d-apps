<?php
// Specify the path to the thumbnail images
$directory = '../../assets/images/gallery/thumbnails';
// Only load files with the following extensions
$allowed_extensions = array('jpg', 'jpeg', 'gif', 'png');
$file_parts = array();
// Response message
$response = "";
// Opens the directory to parse the images
$dir_handle = opendir($directory);

// Iterate through all the files
$files = [];
while ($file = readdir($dir_handle)) {
    // First check for hidden files
    if (substr($file, 0, 1) != '.') {
        // Split each file name to extract the file extension
        $file_components = explode('.', $file);
        // Grab the extension token
        $extension = strtolower(array_pop($file_components));
        // Is this file a valid image. If so, add it to the response
        if (in_array($extension, $allowed_extensions)) {
            // Build an array with the file path
            $files[] = $directory . '/' . $file;
        }
    }
}

closedir($dir_handle);

// Return the response as a JSON encoded string
echo json_encode($files);
?>