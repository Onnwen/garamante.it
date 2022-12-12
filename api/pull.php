<?php
require_once('connection.php');
shell_exec('git pull');

$user_id = $_POST['user_id'] ?? '';

try {
    $pdo->beginTransaction();
    $pdo->exec("INSERT INTO Garamante.chronology (user_id, event_id, date, content_name) VALUES (" . $user_id . ", 1, DEFAULT, 'garamante.it')");
    $pdo->commit();
}
catch (Exception $e) {
    $pdo->rollBack();
    echo $e->getMessage();
    exit;
}