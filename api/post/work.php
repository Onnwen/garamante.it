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

$Query = "INSERT INTO Garamante.works (title, description_preview, description, type_id, cover_image_id, repository_url) VALUES (:title, :descriptionPreview, :description, :typeId, :coverImageUrl, :repositoryUrl);";
try {
    $pre = $pdo->prepare($Query);
} catch (Exception $e) {
    echo $e->getMessage();
    exit;
}

$pre->bindParam(':title', $title);
$pre->bindParam(':descriptionPreview', $descriptionPreview);
$pre->bindParam(':description', $description);
$pre->bindParam(':typeId', $typeId);
$pre->bindParam(':coverImageUrl', $target_file_cover);
$pre->bindParam(':repositoryUrl', $repository);

$pre->execute();

exit;