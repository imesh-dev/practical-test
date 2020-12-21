<?php
	$conn = new mysqli("localhost","root","","exam");
	
	if($conn->connect_error){
		die("error connecting");
	}
?>