<?php
function sanitizeString($str)
{
	$str=trim($str);
	$str=strip_tags($str);
	$str=addslashes($str);
	return $str;
}
function validateName($str){
	if (preg_match("/[^a-zA-Z ]/", $str))
		return false;
	else
		return true;
}

function sanitizeEmail($str)
{
	$str=trim($str);
	$str= filter_var($str,FILTER_SANITIZE_EMAIL);
	return $str;
}
?>