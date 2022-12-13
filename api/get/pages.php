<?php
require_once '../auth.php';
require_once '../connection.php';

$sql = "SELECT * FROM pages";
$stmt = $pdo->prepare($sql);
$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
exit();