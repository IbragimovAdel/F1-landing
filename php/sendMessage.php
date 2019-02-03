<?php

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$carmodel = $_POST['user_carmodel'];

$token = "733330102:AAGZ5YbIxj7umx_pv9q3GCUYJmBJGH-jCeo";
$chat_id = "259993783";

$arr = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Марка автомобиля: ' => $carmodel
);

foreach($arr as $key => $value){
    $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if($sendToTelegram){
    header('Location: index.html');
    return true;
} else {
    header('Location: index.html');
    return false;
}

?>