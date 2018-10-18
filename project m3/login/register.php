<?php include('server.php'); ?>
<!DOCTYPE html5>
<html>
	<head>
		<title>Log In</title>
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

		<div>
		    <form name="thisForm1" method="post" action="register.php">
				<?php include('errors.php'); ?>
				<label>User ID</label>
				<input type="text" id="username" name="username" placeholder="Username..." value="<?php echo $username; ?>">

				<label>Password</label>
				<input type="password" id="password" name="password_1" placeholder="Password...">

				<label>Password</label>
				<input type="password" id="password" name="password_2" placeholder="Password...">



				<button type="submit" class="but" name="reg_user">Register</button>


				 Already a member?<button onclick="window.location.href='login.html'" class="but">Log in</button>
			 </form>


		</div>

</body>
</html>
