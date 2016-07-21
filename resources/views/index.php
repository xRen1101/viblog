<?php
if (preg_match("/facebook|facebot/i", $_SERVER['HTTP_USER_AGENT'])){
   require_once('fb_crawler.php');
} else {
   require_once('app.php');
}