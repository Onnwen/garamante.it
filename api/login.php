<?php
require_once 'connection.php';

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username = :username";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':username', $username);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['hashed_password'])) {
    $logSql = "INSERT INTO users_connection (user_id, ip, country) VALUES (:user_id, :ip, :country)";
    $stmt = $pdo->prepare($logSql);
    $stmt->bindParam(':user_id', $user['id']);
    $stmt->bindParam(':ip', $_SERVER['HTTP_CF_CONNECTING_IP']);
    $stmt->bindParam(':country', $_SERVER['HTTP_CF_IPCOUNTRY']);
    $stmt->execute();

    $_SESSION['user_id'] = $user['id'];
    $_SESSION['username'] = $user['username'];
    $_SESSION['email'] = $user['email'];

    $userData = [
        'user_id' => $user['id'],
        'username' => $user['username'],
        'email' => $user['email'],
        'firstName' => $user['first_name'],
        'lastName' => $user['last_name'],
    ];
}
else {
    $userData = [
        'user_id' => null,
    ];

}

echo json_encode($userData);
exit();
