<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    var_dump(http_response_code(401));
    exit();
}
