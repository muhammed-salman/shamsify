<!DOCTYPE html>
<html>
<head>
	<title>Shamsify</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body ng-app="MyApp">
	<header>
		<top-navi></top-navi>
	</header>
	<div class="container-fluid">
		<div class="row container__featured-image">
			<div class="container__featured-image__content">
				<h2>Hi! I am Muhammed Salman Shamsi</h2>
				<q class="block-element">Let's Build Something Wonderful Together</q>
				<div class="text-italics sm-font">I am here to build long lasting relationships with my clients and student community.</div>
			</div>
		</div>
		<section class="row">
			<div id="about">
				<h1 class="text-center">Hi!</h1>
				<p class="text-justify">I'm a web developer and assistant professor based in Mumbai Metropolitan Region (MMR), India. I have passion for database and web development. I love to create, teach and design applications for web and mobile devices</p>
			</div>
			<div class="my-image">
				<div class="myphoto_circle--large"></div>
			</div>
		</section>
		<section class="row">
			<div id="why-me">
				<h2>Why Me?</h2>
				<p class="text-center">
					<ul>
						<li>M.Tech Level expertise at database system and design patterns.</li>
						<li>My passion for programming and getting at the <b>crux</b> of the problem.</li>
						<li>2 years volunteer experience in building web applications.</li>
						<li>2.5 years of experience in teaching database and web technologies.</li>
						<li>Effectively resolve challenging issues.
						Unique ability to work independently and still keep my heads and other stakeholders informed.</li>
						<li>Skilled at explaining complex concept easily to any novice person.</li>
					</ul>
				</p>
				<a class="anchor-bttn--blackborder" href="#">What I've done</a>
				<a class="anchor-bttn--blackborder" href="#">What I can do</a>
				
			</div>
				
		</section>
		<section class="row">
			<protfolio-section></protfolio-section>
		</section>
		<section class="row">
			<div class="container__featured-msg">
			Want to have an aesthetically pleasing and working website <a href="#">Discover How</a>
			</div>	
		</section>
		
	</div>
	<!-- Libraries -->
    <script src="lib/angular.min.js"></script>
    <script src="lib/angular-ui-router.min.js"></script>

    <!-- Modules -->
    <script src="src/myapp/myapp.module.js"></script>
    <!-- <script src="src/menuapp/data.module.js"></script> -->
    <!-- Routes -->
    <script src="src/routes.js"></script>

    <!-- 'MenuApp' module artifacts -->
    <!-- <script src="src/myapp/menudata.service.js"></script> -->
    <script src="src/myapp/nav.component.js"></script>
    <script src="src/myapp/protfolios.component.js"></script>
    <!-- <script src="src/myapp/nav.controller.js"></script> -->
    <!-- <script src="src/myapp/items.component.js"></script> -->
    <!-- <script src="src/myapp/item-detail.controller.js"></script> -->
	<footer>
		<div class="rights">&copy;<?php echo date('Y');?> Muhammed Salman Shamsi. All rights reserved.</div>
		<nav class="footer__nav">
				<ul>
					<li><a href='#'>Home</a></li>
					<li><a href='#'>Protfolios</a></li>
					<li><a href='#'>Learn to Code</a></li>
					<li><a href='#'>Blog</a></li>
					<li><a href='#'>Resources</a></li>
					<li><a href='#'>About</a></li>
					<li><a href='#'>Contact</a></li>
					<li><a href='#'>Terms of Service</a></li>
					<li><a href='#'>Privacy</a></li>
				</ul>
		</nav>
	</footer>
</body>
</html>