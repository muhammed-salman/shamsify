<!DOCTYPE html>
<html>
<head>
    <base href="/shamsify/"/>
	<title>Shamsify</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/media.css">
</head>
<body ng-app="MyApp">
	<div class="container-fluid">
		<header>
			<top-navi></top-navi>
		</header>
		<ui-view></ui-view>	
	</div>
	<!-- Libraries -->
    <script src="lib/angular.min.js"></script>
    <script src="lib/angular-ui-router.min.js"></script>

    <!-- Modules -->
    <script src="src/myapp/myapp.module.js"></script>
    <script src="src/myapp/data.module.js"></script>
    <!-- Routes -->
    <script src="src/routes.js"></script>

    <!-- 'MyApp' module artifacts -->
    <script src="src/myapp/myapp.service.js"></script>
    <script src="src/myapp/myapp.directives.js"></script>
    <script src="src/myapp/nav.component.js"></script>
    <script src="src/myapp/protfolios-section.component.js"></script>
    <script src="src/myapp/resume.controller.js"></script>
    <script src="src/myapp/protfolios.controller.js"></script>
    <script src="src/myapp/nav.controller.js"></script>
    <script src="src/myapp/blog.controller.js"></script>
    <script src="src/myapp/learncode.controller.js"></script>
    <script src="src/myapp/resources.controller.js"></script>
	<footer class="row">
		<nav class="footer__nav">
				<ul class="navbar-elements--bottom">
					<li><a ui-sref='home'>Home</a></li>
					<li><a ui-sref='protfolios'>Protfolios</a></li>
					<li><a ui-sref='learncode'>Learn to Code</a></li>
					<li><a ui-sref='blog'>Blog</a></li>
					<li><a ui-sref='resources'>Resources</a></li>
					<li><a ui-sref='about'>About</a></li>
					<li><a ui-sref='contact'>Contact</a></li>
				</ul>
				<button type="button" id="bttn--responsive" class="navbar-toggle navbar-inverse" toggle-class data-target="#myNavbar">
		        	<span class="icon-bar"></span>
		        	<span class="icon-bar"></span>
		        	<span class="icon-bar"></span>
		      	</button>
		</nav>
		<div class="rights">&copy;<?php echo date('Y');?> Muhammed Salman Shamsi. All rights reserved.</div>
	</footer>
</body>
</html>