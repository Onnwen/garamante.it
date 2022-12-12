<?php
require_once('connection.php');
shell_exec('git pull');

$user_id = $_POST['user_id'] ?? '';

$sql = "INSERT INTO Garamante.chronology (user_id, event_id, date, content_name) VALUES (:userId, 1, DEFAULT, 'garamante.it')";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':userId', $user_id);
$stmt->execute();