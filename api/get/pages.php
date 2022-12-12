<?php
require_once '../connection.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    var_dump(http_response_code(401));
    exit();
}


$sql = "SELECT * FROM pages";
$stmt = $pdo->prepare($sql);
$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
exit();