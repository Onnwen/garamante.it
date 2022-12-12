<?php
require_once('connection.php');
shell_exec('git pull');

$user_id = $_POST['user_id'] ?? '';

$sql = "INSERT INTO Garamante.chronology (user_id, event_id, content_name) VALUES (:userId, 1, 'garamante.it')";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':userId', $user_id);
$stmt->execute();