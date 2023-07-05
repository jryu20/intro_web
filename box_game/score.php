#!/usr/local/bin/php
<?php 
session_save_path(__DIR__.'/sessions/');
session_name('shutTheBox');
session_start();

header('Content-Type: text/plain; charset=utf-8');
$user = $_COOKIE['username'];
$score = $_POST['score'];

if (isset($_COOKIE['username']) && isset($_POST['score'])) {
	$file = @fopen('scores.txt', 'a');
	fwrite($file, $user." ".$score."\n");
	fclose($file);
} else {
	echo "Either the user or the score was not posted.";
}

?>