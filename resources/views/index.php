<?php
if (strpos($_SERVER["HTTP_USER_AGENT"], "facebookexternalhit/") !== false ||
    strpos($_SERVER["HTTP_USER_AGENT"], "Facebot") !== false){
   require_once('fb_crawler.php');
} else {
   require_once('app.php');
}