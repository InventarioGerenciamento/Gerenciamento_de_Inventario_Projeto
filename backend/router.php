<?php
declare(strict_types=1);

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
if ($path === '/api') {
    require __DIR__ . DIRECTORY_SEPARATOR . 'api.php';
    exit;
}

return false;
