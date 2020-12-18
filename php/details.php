<?php
header("content:text/html;charset=utf-8");
$id = $_GET['id'];  
$link=mysqli_connect('localhost','root','','qqq');
mysqli_set_charset($link,"utf8");
$sql = "select * from good_names where id='$id'";
$result=mysqli_query($link,$sql);
$ar1 = [];
while($row=mysqli_fetch_assoc($result)){
    array_push($ar1,$row);
}
echo json_encode($ar1);
?>