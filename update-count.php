<?php
$data = json_decode(file_get_contents('php://input'), true);
if (isset($data['count'])) {
    file_put_contents('join-count.json', json_encode(["count" => $data['count']]));
}
?>
