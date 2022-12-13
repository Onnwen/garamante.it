<?php
require_once '../auth.php';
require_once '../connection.php';

$sql = "SELECT CONCAT(users.first_name, ' ', users.last_name) as user, date, content_name, name as event
FROM chronology
         INNER JOIN chronology_events ON chronology.event_id = chronology_events.id
         INNER JOIN users ON chronology.user_id = users.id ORDER BY date DESC LIMIT 5";
$stmt = $pdo->prepare($sql);
$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
exit();
