<?php
header('content-type:text/html;charset=utf-8');
$link=mysqli_connect('localhost','root','','qqq');
mysqli_set_charset($link,"utf8");
$sql = "select * from good_names";
$result=mysqli_query($link,$sql);
$ar1 = [];
while($row=mysqli_fetch_assoc($result)){
    array_push($ar1,$row);
}
echo json_encode($ar1);
?>