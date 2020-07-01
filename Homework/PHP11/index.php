
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>PHP 11</title>
	</head>

	<body>
		<form method="get">
			<input type="number" name="first_corner">
			<input type="number" name="second_corner">
			<input type="submit">
		</form>
	</body>
	<?php
	$firstCorner = $_GET['first_corner'];
	$secondCorner = $_GET['second_corner'];

	function rectangleResult($firstCorner, $secondCorner)
	{
		$result = $firstCorner * $secondCorner;
		return $result;
	}
	echo rectangleResult($firstCorner, $secondCorner);
?>

</html>
