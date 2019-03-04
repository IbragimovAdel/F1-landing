<?php

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$carmodel = $_POST['user_carmodel'];
$order = $_POST['order'];

$token = "733330102:AAGZ5YbIxj7umx_pv9q3GCUYJmBJGH-jCeo";
$chat_id = "289365492";
//289365492
//gavrilova.f1@gmail.com
$txt = "";

if($order === ""){
    $order = "нет";
}

$arr = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Марка автомобиля: ' => $carmodel,
    'Выбор: ' => $order
);

foreach($arr as $key => $value){
    $txt .= "<b>".$key."</b>".$value."%0A";
};

mail("gavrilova.f1@gmail.com","Заявка с сайта","Имя: ".$name.". Телефон: ".$phone.". Марка автомобиля: ".$carmodel." Выбор: ".$order);
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if($sendToTelegram){
    header('Location: ../ok.html');
    return true;
} else {
    header('Location: ../fail.html');
    return false;
}

?>