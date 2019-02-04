<?php

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$carmodel = $_POST['user_carmodel'];
$order = $_POST['order'];

$token = "733330102:AAGZ5YbIxj7umx_pv9q3GCUYJmBJGH-jCeo";
$chat_id = "259993783";

$txt = "";

if($order === ""){
    $order = "нет";
}

$arr = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Марка автомобиля: ' => $carmodel,
    'Заказ: ' => $order
);

foreach($arr as $key => $value){
    $txt .= "<b>".$key."</b>".$value."%0A";
};

mail("ibragimovadel2001@gmail.com","Заявка с сайта","Имя: ".$name.". Телефон: ".$phone.". Марка автомобиля: ".$carmodel);
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if($sendToTelegram){
    header('Location: index.html');
    return true;
} else {
    header('Location: index.html');
    return false;
}

?>