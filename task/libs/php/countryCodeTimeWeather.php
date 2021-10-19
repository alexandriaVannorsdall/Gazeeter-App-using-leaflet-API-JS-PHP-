<?php

ini_set('display_errors', 'On');
error_reporting(E_ALL);

$executionStartTime = microtime(true);

$url="http://api.geonames.org/countryCodeJSON?formatted=true&lat=" . $_REQUEST['lat'] . '&lng' . $_REQUEST['lng'] . 
 '&type' . $_REQUEST['type'] .  '&lang' . $_REQUEST['lang'] . '&radius' . $_REQUEST['radius'] . '&username=Aless81$style=full';




?>