<?php
	session_start();

	if (!isset($_SESSION['username'])) {
		$_SESSION['msg'] = "You must log in first";
		header('location: login.php');
	}

	if (isset($_GET['logout'])) {
		session_destroy();
		unset($_SESSION['username']);
		header("location: login.php");
	}

?>

<!DOCTYPE html5>
<html>
<head>
	<title>Home</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<link href="css/reset.css" rel="stylesheet">
		<link href="../css/main.css" rel="stylesheet">
		<link href="css/regist.css" rel="stylesheet" >
		<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="js/modernizr-2.6.2.min.js"></script>
		<script type="text/javascript" src="js/skrollr.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
	<header>
		<a class="menu-icon">

		<span></span>

		<nav class="menu visuallyhidden">
			<ul>
				<li><a href="#home">Home</a></li>
				<li><a href="#work">Survey</a></li>
				<li><a href="#about">About </a></li>
				<li><a href="#about">Game </a></li>
				<li><a href="#contact">Login</a></li>
			</ul>
		</nav>
	</header>
	<div class="header">
		<h2>Home Page</h2>
	</div>
	<div class="content">

		<!-- notification message -->
		<?php if (isset($_SESSION['success'])) : ?>
			<div class="error success" >
				<h3>
					<?php
						echo $_SESSION['success'];
						unset($_SESSION['success']);
					?>
				</h3>
			</div>
		<?php endif ?>

		<!-- logged in user information -->
		<?php  if (isset($_SESSION['username'])) : ?>
			<p>Welcome <strong><?php echo $_SESSION['username']; ?></strong></p>
			<p> <a href="index.php?logout='1'" style="color: red;">logout</a> </p>
		<?php endif ?>
	</div>

</body>
</html>
