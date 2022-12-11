<?php
require_once '../connection.php';

$sql = "SELECT works.id, title, description_preview, cover_image_url, works_type.name as type, repository_url
FROM works
         INNER JOIN works_type ON works.type_id = works_type.id;
         INNER JOIN images ON works.cover_image_id = images.id";
$stmt = $pdo->prepare($sql);
$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
exit();
