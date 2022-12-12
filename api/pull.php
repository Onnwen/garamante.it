<?php
require_once('connection.php');

$user_id = $_POST['user_id'] ?? '';

$sql = "INSERT INTO Garamante.chronology (user_id, event_id, content_name) VALUES (:user_id, 1, 'garamante.it')";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();

$result = array();
exec('sh pull.sh', $result,  $return);
if (!$return) {
    echo "pulled";
} else {
    echo "not pulled";
}
echo "<pre>";
foreach ($result as $line) {
    echo $line . "\n";
}
echo "</pre>";