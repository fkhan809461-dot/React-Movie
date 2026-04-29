<?php


// $routes->options('(:any)', function () {
//     return response()
//         ->setStatusCode(200)
//         ->setHeader('Access-Control-Allow-Origin', '*')
//         ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//         ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
// });

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->get('/', 'Home::index');

// ✅ Add this — preflight request needs OPTIONS method
// $routes->options('createVenus', 'Venus::createVenus');
// $routes->post('createVenus', 'Venus::createVenus');

$routes->options('createVenus', 'Venus::createVenus'); //
$routes->post('createVenus', 'Venus::createVenus');
$routes->options('createEvent', 'EventCtrl::createEvent');
$routes->post('createEvent', 'EventCtrl::createEvent');
$routes->get('getAllVenus', 'EventCtrl::getAllVenus');