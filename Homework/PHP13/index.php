<?php
 class HumanName {
	 public $name;
	 public $lastName;
	 public $fullName;

	 public function setHumanName($firstName)
	 {
		$this->name = $firstName;
		return $this;
	 }

	 public function setHumanLastName($lastName)
	 {
		 $this->lastName = $lastName;
		 return $this;
	 }

	 public function getHumanName()
	 {
		return $this->fullName = $this->name . $this->lastName;
	 }

 }

$firstHuman = new HumanName();
$secondHuman = new HumanName();

$firstHumanFullInfo = $firstHuman->setHumanName('Tomas ')->setHumanLastName('Tomaitis')->getHumanName();
$secondHumanFullInfo = $secondHuman->setHumanName('Petras ')->setHumanLastName('Petraitis')->getHumanName();

echo 'Hello ' . $firstHumanFullInfo . ' I am ' . $secondHumanFullInfo . ' it is nice to meet you.';
?>

