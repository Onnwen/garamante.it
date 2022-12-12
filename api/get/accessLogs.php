<?php
$myfile = fopen("/var/log/nginx/access.log", "r") or die("Unable to open file!");
echo fread($myfile,filesize("/var/log/nginx/access.log"));
fclose($myfile);