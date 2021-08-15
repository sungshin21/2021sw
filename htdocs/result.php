<?php 
$con=mysqli_connect("localhost", "root", "", "sungshin") or die ("실패!");
$sql ="SELECT * FROM sw21";
$ret= mysqli_query($con, $sql);
if ($ret) {
    //echo mysqli_num_rows($ret),"건이 조회됨..<br><br>";
    $count = mysqli_num_rows($ret);
}
else {
    echo "sw21 테이블 조회 실패!"."<br>";
    echo "실패 원인: " .mysqli_error($con);
    exit();
}
echo "<h1>영업소 등록 조회 결과</h1>";
echo "<TABLE boader=1>";
echo "<TR>";
echo "<TH>아이디</TH><TH>영업소 지역</TH><TH>영업소 이름</TH><TH>영업소 주소</TH><TH>상업주 이름</TH><TH>상업주 전화번호</TH><TH>분위기</TH><TH>영업시간</TH><TH>추천대상</TH><TH>추가설명</TH>";
echo "</TR>";

while ($row = mysqli_fetch_array($ret)) {
    echo "<TR>";
    echo "<TD>",$row["id"], "</TD>";
    echo "<TD>",$row["place"], "</TD>";
    echo "<TD>",$row["name"], "</TD>";
    echo "<TD>",$row["adress"], "</TD>";
    echo "<TD>",$row["user_name"], "</TD>";
    echo "<TD>",$row["tel"], "</TD>";
    echo "<TD>",$row["mood"], "</TD>";
    echo "<TD>",$row["time"], "</TD>";
    echo "<TD>",$row["recommend"], "</TD>";
    echo "<TD>",$row["plus"], "</TD>";
    echo "</TR>";
}
mysqli_close($con);
echo "</TABLE>";
?>