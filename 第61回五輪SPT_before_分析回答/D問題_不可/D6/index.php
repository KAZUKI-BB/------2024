<?php
session_start();

function uploadImage() {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        $_SESSION['uploaded_image'] = $target_file;
        return true;
    }
    return false;
}

function cropImage($x, $y, $width, $height) {
    $filename = $_SESSION['uploaded_image'];
    list($orig_width, $orig_height) = getimagesize($filename);
    $image_type = exif_imagetype($filename);
    switch ($image_type) {
        case IMAGETYPE_JPEG:
            $img = imagecreatefromjpeg($filename);
            break;
        case IMAGETYPE_PNG:
            $img = imagecreatefrompng($filename);
            break;
        case IMAGETYPE_GIF:
            $img = imagecreatefromgif($filename);
            break;
        default:
            return false;
    }
    $crop = imagecrop($img, ['x' => $x, 'y' => $y, 'width' => $width, 'height' => $height]);
    if ($crop !== false) {
        $cropped_image_path = 'uploads/crop-' . basename($filename);
        imagejpeg($crop, $cropped_image_path);
        imagedestroy($crop);
        $_SESSION['cropped_image'] = $cropped_image_path;
        return true;
    }
    return false;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES["fileToUpload"])) {
        uploadImage();
    } elseif (isset($_POST["crop"])) {
        cropImage($_POST['x'], $_POST['y'], $_POST['width'], $_POST['height']);
    }
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>Image Cropper</title>
<style>
    #imageCanvas {
        border: 1px dashed black;
    }
</style>
</head>
<body>
    <?php if (!empty($_SESSION['uploaded_image']) && empty($_SESSION['cropped_image'])) : ?>
        <img id="imageCanvas" src="<?php echo $_SESSION['uploaded_image']; ?>" alt="Uploaded Image">
        <form method="post">
            <input type="hidden" name="x" value="50">
            <input type="hidden" name="y" value="50">
            <input type="hidden" name="width" value="200">
            <input type="hidden" name="height" value="150">
            <button type="submit" name="crop">切り抜く</button>
        </form>
    <?php elseif (!empty($_SESSION['cropped_image'])) : ?>
        <img src="<?php echo $_SESSION['cropped_image']; ?>" alt="Cropped Image">
        <a href="<?php echo $_SESSION['cropped_image']; ?>" download>ダウンロード</a>
    <?php else : ?>
        <form method="post" enctype="multipart/form-data">
            Select image to upload:
            <input type="file" name="fileToUpload" id="fileToUpload">
            <input type="submit" value="Upload Image" name="submit">
        </form>
    <?php endif; ?>
</body>
</html>
