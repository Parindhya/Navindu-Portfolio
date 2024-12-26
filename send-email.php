<?php
require 'vendor/autoload.php';  // Include Composer's autoloader

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize it
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set recipient email address (the email you want the message sent to)
    $to = "archanaoverseer@gmail.com";

    // Set the subject of the email
    $subject = "New Message from $name";

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Set up the SMTP server
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Use Gmail's SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'archanaoverseer@gmail.com';  // Your Gmail address
        $mail->Password = 'Highway@99';  // Your Gmail password or App Password (if 2FA is on)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Set the sender's email and name
        $mail->setFrom($email, $name);

        // Add the recipient
        $mail->addAddress($to);

        // Set the subject and body of the email
        $mail->isHTML(true);  // Allow HTML content
        $mail->Subject = $subject;
        $mail->Body = "You have received a new message from the contact form on your website.<br><br>";
        $mail->Body .= "Name: $name<br>";
        $mail->Body .= "Email: $email<br><br>";
        $mail->Body .= "Message:<br>$message";  // Append the message to the body

        // Send the email
        if ($mail->send()) {
            echo "Message has been sent successfully.";
        } else {
            echo "Message could not be sent.";
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
