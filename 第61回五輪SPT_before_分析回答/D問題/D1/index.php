<?php

function loadAnswers($filename){
    $file = fopen($filename,"r");
    $answers = [];

    fgetcsv($file);
    while (($data = fgetcsv($file)) !== false){
        $answers[$data [0]] = $data[1];
    }
    fclose($file);
    return $answers;
}

?>