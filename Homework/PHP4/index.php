<?php
	$title = 'PHP4';
	$cities = ['Berlynas', 'Roma', 'Londonas'];
	$cities[] = 'Tokijas';

	$cities2 = ['Tokijas' => '13.6', 'Vasingtonas' => '0.6', 'Maskva' => '11.5'];
	$cities2['Londonas'] = 8.6;
	print_r($cities);
	echo '<br><br>';
	print_r($cities2);
?>



<!DOCTYPE html>
<html lang="lt">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title><?php echo $title ?></title>
	</head>

	<body>
		<ul>
			<li>
				<?php
				echo $cities[1]
				?>
			</li>
		</ul>
		<ul>
			<li>
				<?php
				echo 'Gyventoju skaicius: ' . $cities2['Tokijas'] . ' mln.'
				?>
			</li>
		</ul>
	</body>
</html>
