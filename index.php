<!DOCTYPE html>
<html>
<head>
    <base href="/shamsify/"/>
	<title>Shamsify</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
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
    <script src="src/myapp/nav.component.js"></script>
    <script src="src/myapp/protfolios-section.component.js"></script>
    <!-- <script src="src/myapp/protfolios.component.js"></script> -->
    <script src="src/myapp/resume.controller.js"></script>
    <script src="src/myapp/protfolios.controller.js"></script>
    <script src="src/myapp/nav.controller.js"></script>
    <script src="src/myapp/blog.controller.js"></script>
    <!-- <script src="src/myapp/items.component.js"></script> -->
    <!-- <script src="src/myapp/item-detail.controller.js"></script> -->
	<footer class="row">
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