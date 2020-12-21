<?php
	include 'conn.php';
	session_start();
	
	$_POST = json_decode(file_get_contents("php://input"), true);
	
	$email =$_POST['email'];
	$password =$_POST['password'];
	
	$result = '';
	
	$sql = $conn->query("Select username from user where email = '$email' and password ='$password'");
	
	
	$result = mysqli_query($conn,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
		
      if($count == 1) {
         $_SESSION['login_user'] = $email;
		 $result = "Success";
         
      }else {
         $error = "Invalid login credentials";
      }
	
	
	echo json_encode($result);
	mysqli_close($conn);
?>