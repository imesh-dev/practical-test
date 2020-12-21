<?php
	include 'conn.php';
	
	$id = $_GET['id'];
	
	$sql = "DELETE from crudtest where id = $id";
	
	$result ="";
	
	if ($conn->query($sql) ==TRUE){
		$result="delete data success";
	}else {
		$result = "Error in delete ". $conn->error;
	}
	
	echo json_encode($result);
	$conn->close();
?>