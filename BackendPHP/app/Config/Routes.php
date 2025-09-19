<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->Post('regestion', 'Home::regestion');
$routes->get('allMovies', 'Movie::fetchAllMovies');