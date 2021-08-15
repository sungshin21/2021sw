<?php
$con=mysqli_connect("localhost", "root", "", "sungshin") or die ("실패!");

$id=$_POST['id'];
$place=$_POST['place'];
$name=$_POST['name'];
$adress=$_POST['adress'];
$user_name=$_POST['user_name'];
$tel=$_POST['tel'];
$mood=$_POST['mood'];
$time=$_POST['time'];
$recommend=$_POST['recommend'];
$plus=$_POST['plus'];

$sql ="INSERT INTO SW21 VALUES('".$id."', '".$place."','".$name."', '".$adress."','".$user_name."','".$tel."', '".$mood."', '".$time."','".$recommend."', '".$plus."' )";

$ret= mysqli_query($con, $sql);
  echo "<h1>신규 회원 입력 결과</h1>";
 if ($ret) {
      echo "데이터가 성공적으로 입력됨.";
  }
  else{
      echo "데이터 입력에 실패함!!", "<br>";
      echo "실패원인: ".mysqli_error($con);}
?>

