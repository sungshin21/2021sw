<?php
$conn = mysqli_connect(
    $db_host="localhost",
    $db_user="root",
    $db_password="",
    $db_name="sungshin");


$filtered = array(
    'id'=>mysqli_real_escape_string($conn, $_POST['id']),
    'place'=>mysqli_real_escape_string($conn, $_POST['place']),
    'name'=>mysqli_real_escape_string($conn, $_POST['name']),
    'adress'=>mysqli_real_escape_string($conn, $_POST['adress']),
    'user_name'=>mysqli_real_escape_string($conn, $_POST['user_name']),
    'tel'=>mysqli_real_escape_string($conn, $_POST['tel']),
    'time'=>mysqli_real_escape_string($conn, $_POST['time']),
    'mood'=>mysqli_real_escape_string($conn, $_POST['mood']),
    'recommend'=>mysqli_real_escape_string($conn, $_POST['recommend']),
    'plus'=>mysqli_real_escape_string($conn, $_POST['plus'])
  );

$sql = "
  INSERT INTO topic
    (stNUM, name, temperature, created)
    VALUES(
      '{$filtered['id']}',
      '{$filtered['place']}',
      '{$filtered['name']}',
      '{$filtered['adress']}',
      '{$filtered['user_name']}',
      '{$filtered['tel']}',
      '{$filtered['time']}',
      '{$filtered['mood']}',
      '{$filtered['recommend']}',
      '{$filtered['plus']}',
        NOW()
    )
";
$result = mysqli_query($conn, $sql);
if($result === false){
  echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
  error_log(mysqli_error($conn));
} else {
  echo '성공했습니다. <a href="create.php">돌아가기</a>';
}
?>