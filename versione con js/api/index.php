<?php

include_once __DIR__ . '/../db/index.php';

$arraynonfiltrato = [];

foreach($database as $elem){

    $arraynonfiltrato[] = $elem;
    
}

header('Content-type: application/json');

echo json_encode( $arraynonfiltrato );

?>