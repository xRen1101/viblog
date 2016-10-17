<?php
$requestUri = $_SERVER['REQUEST_URI'];
$httpHost = $_SERVER['HTTP_HOST'];

$title = "VeeBlog";
$url = "http://${httpHost}";
$image = "http://${httpHost}/resources/assets/images/bg.jpg";
$description = "Labas. Aš Vitarė. O čia mano blogas.";

if (strpos($requestUri, 'posts') !== false) {

    $postsRequestUrl = "http://${httpHost}/api/v1${requestUri}";

    $json = file_get_contents($postsRequestUrl);
    $data = json_decode($json);

    if (isset($data)) {
        $title = $data->title;
        if(count($data->images) > 0) {
            $image = $data->images[0]->link;
        }
        $description = $data->text;
        $url = "http://${httpHost}${requestUri}";
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta property="og:image" content="<?php echo $image ?>" />
        <meta property="og:title" content="<?php echo $title ?>"/>
        <meta property="og:url" content="<?php echo $url ?>" />
        <meta property="og:description" content="<?php echo $description ?>"/>
    </head>
</html>