<?php
require_once '../auth.php';

try {
    $accessLog = fopen("/var/log/nginx/access.log", "r") or throw new Exception("Unable to open file!");
    echo fread($accessLog, filesize("/var/log/nginx/access.log"));
    fclose($accessLog);
}
catch (Exception $e) {
    echo "Nessun dato disponibile.";
}