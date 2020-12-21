<?php
	include 'conn.php';
	
	$sql = $conn->query("SELECT id,name,username,email FROM user");
	$result = array();
	
	while($data= $sql->fetch_assoc()){
		$result[] = $data;
	}
	
	echo json_encode($result);
	
	mysqli_close($conn);
?>