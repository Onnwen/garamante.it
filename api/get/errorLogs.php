<?php
require_once '../auth.php';

try {
    $errorLog = fopen("/var/log/nginx/error.log", "r") or throw new Exception("Unable to open file!");
    echo fread($errorLog, filesize("/var/log/nginx/error.log"));
    fclose($errorLog);
}
catch (Exception $e) {
    echo "Nessun dato disponibile.";
}