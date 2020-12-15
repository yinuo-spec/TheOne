<?php
header("content:text/html;charset=utf8");
$n=$_GET["username"];
$p=$_GET["password"];
$link=mysqli_connect('localhost','root','','qqq');
mysqli_set_charset($link,"utf-8");
$sql = "select * from register where name='$n' and password = '$p'";
$result=mysqli_query($link,$sql);
if(mysqli_fetch_assoc($result)){
    echo 1;
}else{
    echo 0; 
}
?>