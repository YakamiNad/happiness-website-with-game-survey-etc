<?php 
	session_start();

	// variable declaration
	$username = "";
	$errors = array(); 
	$_SESSION['success'] = "";

	// connect to database
	$db = pg_connect("host=soit-db-pro-2.ucc.usyd.edu.au port=5432 dbname=y17s2i1003_dngu4013 user=y17s2i1003_dngu4013 password=470539527");	

	// REGISTER USER
	if (isset($_POST['reg_user'])) {
		// receive all input values from the form
		$username = pg_escape_string($db, $_POST['username']);
		$password_1 = pg_escape_string($db, $_POST['password_1']);
		$password_2 = pg_escape_string($db, $_POST['password_2']);

		// form validation: ensure that the form is correctly filled
		if (empty($username)) { array_push($errors, "Username is required"); }
		if (empty($password_1)) { array_push($errors, "Password is required"); }

		if ($password_1 != $password_2) {
			array_push($errors, "The two passwords do not match");
		}

		// register user if there are no errors in the form
		if (count($errors) == 0) {
			$password = md5($password_1);//encrypt the password before saving in the database
			$query = "INSERT INTO users (username, password) 
					  VALUES('$username', '$password')";
			pg_query($db, $query);

			$_SESSION['username'] = $username;
			$_SESSION['success'] = "You are now logged in";
			header('location: index.php');
		}

	}

	// ... 

	// LOGIN USER
	if (isset($_POST['login_user'])) {
		$username = pg_escape_string($db, $_POST['username']);
		$password = pg_escape_string($db, $_POST['password']);

		if (empty($username)) {
			array_push($errors, "Username is required");
		}
		if (empty($password)) {
			array_push($errors, "Password is required");
		}

		if (count($errors) == 0) {
			$password = md5($password);
			$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
			$results = pg_query($db, $query);

			if (pg_num_rows($results) == 1) {
				$_SESSION['username'] = $username;
				$_SESSION['success'] = "You are now logged in";
				header('location: index.php');
			}else {
				array_push($errors, "Wrong username/password combination");
			}
		}
	}

?>
