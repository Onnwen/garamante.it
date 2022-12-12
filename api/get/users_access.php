<?php
require_once '../connection.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    var_dump(http_response_code(401));
    exit();
}


$sql = "SELECT CONCAT(users.first_name, ' ', users.last_name) AS user_name, coalesce(users_connections.ip,'localhost') as ip, users_connections.date, coalesce(users_connections.country,'localhost') as country FROM users INNER JOIN users_connections ON users.id = users_connections.user_id ORDER BY users_connections.date DESC LIMIT 5;";
$stmt = $pdo->prepare($sql);
$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
exit();