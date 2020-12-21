<?php
	include 'conn.php';
	session_start();
	
	$_POST = json_decode(file_get_contents("php://input"), true);
	
	$id =$_POST['email'];
	$name =$_POST['password'];
	
	$result = '';
	
	$sql = $conn->query("Select username from user where email = '$email'");
	
	
	$result = mysqli_query($conn,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
		
      if($count == 1) {
         session_register("myusername");
         $_SESSION['login_user'] = $myusername;
		 $result = "Success";
         
      }else {
         $error = "Invalid login credentials";
      }
	
	
	echo json_encode($result);
	mysqli_close($conn);
?>