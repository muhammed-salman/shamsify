<?php
// process.php
$path =$_SERVER['DOCUMENT_ROOT'].'/lib/php/functions.php';
require_once $path;
//echo $path;
$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data

// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);

// validate the variables ========
if (empty($_POST['firstName']))
  $errors['firstName'] = 'First Name is required.';
else{
  $firstName=sanitizeString($_POST['firstName']);
   if(!validateName($firstName)){
    $errors['firstName'] = 'Invalid First Name.';
   } 
}

if (empty($_POST['lastName']))
  $errors['lastName'] = 'Last Name is required.';
else{
  $lastName=sanitizeString($_POST['lastName']);
   if(!validateName($lastName)){
    $errors['lastName'] = 'Invalid Last Name.';
   } 
}
if (empty($_POST['email']))
  $errors['email'] = 'Email is required.';
else{
  $email=sanitizeEmail($_POST['email']);
   if(!$email){
    $errors['email'] = 'Invalid Email.';
   } 
}
if (empty($_POST['subject']))
  $errors['subject'] = 'Subject is required.';
else{
  $subject=sanitizeString($_POST['subject']);
  if(!$subject){
    $errors['subject'] = 'Invalid Subject.';
  } 
}
if (empty($_POST['message']))
  $errors['message'] = 'Message is required.';
else{
  $message=sanitizeString($_POST['message']);
   if(!$message){
    $errors['message'] = 'Invalid Message.';
   } 
}
// return a response ==============

// response if there are errors
if (!empty($errors)) {
  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors']  = $errors;
} else {
  $emailto = 'talktoshamsi@gmail.com';
  $toname = 'Muhammed Salman Shamsi';
  $emailfrom = 'muhammedsalman@shamsi.dev';
  $fromname = $firstName.' '.$lastName;
  $params = '-f ' . $emailfrom;
  // $from="muhammedsalman@shamsify.com";
  // if there are no errors, return a message
  // $to="talktoshamsi@gmail.com";
  // $headers="From: ".$from."\r\n";
  // $headers.="Reply-To: ".$email."\r\n";
  // $headers .= "CC: talktoshamsi@gmail.com\r\n";
  // $headers .= "MIME-Version: 1.0\r\n";
  // $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  $headers = 
    'Return-Path: ' . $emailfrom . "\r\n" . 
    'From: ' . $fromname . ' <' . $emailfrom . '>' . "\r\n" . 
    'X-Priority: 3' . "\r\n" . 
    'X-Mailer: PHP ' . phpversion() .  "\r\n" . 
    'Reply-To: ' . $fromname . ' <' . $email . '>' . "\r\n" .
    'MIME-Version: 1.0' . "\r\n" . 
    'Content-Transfer-Encoding: 8bit' . "\r\n" . 
    'Content-Type: text/plain; charset=UTF-8' . "\r\n";
  
  if($test = mail($emailto, $subject, $message, $headers, $params)){
    $data['success'] = true;
    $data['message'] = "Thank You! I'll get back to you shortly!";
  }
  else{
    $data['success'] = false;
    $data['message'] = "Oops! We are currently unable to send your message! Please mail directly to muhammedsalman@shamsi.dev.\nSorry for the inconvinence. We will fix the problem ASAP.";
  }
  
}
// return all our data to an AJAX call
echo json_encode($data);
?>
