<?php
$myfile = fopen("/var/log/nginx/error.log", "r") or die("Unable to open file!");
echo fread($myfile,filesize("/var/log/nginx/error.log"));
fclose($myfile);