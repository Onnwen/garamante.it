<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    var_dump(http_response_code(401));
    exit();
}

$myfile = fopen("/var/log/nginx/access.log", "r") or die("Unable to open file!");
echo fread($myfile,filesize("/var/log/nginx/access.log"));
fclose($myfile);