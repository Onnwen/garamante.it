<?php
require_once('../connection.php');


$title = $_POST['title'] ?? '';
$description = $_POST['description'] ?? '';
$descriptionPreview = $_POST['descriptionPreview'] ?? '';
$repository = $_POST['repository'] ?? '';
$typeId = $_POST['typeId'] ?? '';
$cover = $_FILES["cover"];

$target_dir_cover = "/var/www/html/Garamante-Website/contents/portfolio/covers/";

$target_file_cover = $target_dir_cover . $cover["name"];

move_uploaded_file($cover["tmp_name"], $target_file_cover);

try {
    $pdo->beginTransaction();
    $pdo->exec("INSERT INTO images (alias_text, url) VALUES ('$title' cover image, '$target_file_cover')");
    $pdo->exec("INSERT INTO works (title, description, description_preview, repository_url, type_id, cover_image_id) VALUES ('$title', '$description', '$descriptionPreview', '$repository', '$typeId', LAST_INSERT_ID())");
    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    echo $e->getMessage();
    exit;
}

exit;