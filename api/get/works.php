<?php
require_once '../connection.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    var_dump(http_response_code(401));
    exit();
}


$sql = "SELECT works.id, title, description_preview, description, images.url as cover_image_url, works_type.name as type, repository_url
FROM works
         INNER JOIN works_type ON works.type_id = works_type.id
         INNER JOIN images ON works.cover_image_id = images.id
         ORDER BY works.order";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$works = $stmt->fetchAll(PDO::FETCH_ASSOC);
foreach ($works as $key => $work) {
    $works[$key]['description_preview'] = urldecode($work['description_preview']);
    $works[$key]['description'] = urldecode($work['description']);
}

echo json_encode($works);
exit();
