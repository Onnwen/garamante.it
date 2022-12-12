<?php
require_once '../connection.php';

//if (!isset($_SESSION['user_id'])) {
//    var_dump(http_response_code(401));
//    exit();
//}

$sql = "SELECT CONCAT(users.first_name, ' ', users.last_name) as user, date, content_name, name as event
FROM chronology
         INNER JOIN chronology_events ON chronology.event_id = chronology_events.id
         INNER JOIN users ON chronology.user_id = users.id ORDER BY date DESC LIMIT 10";
$stmt = $pdo->prepare($sql);
$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
exit();
