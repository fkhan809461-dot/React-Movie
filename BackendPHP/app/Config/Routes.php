<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->Post('regestion', 'Home::regestion');
$routes->get('allMovies', 'Movie::fetchAllMovies');
$routes->get('getMoviesDetails/(:any)','Movie::getMoviesDetails/$1');
$routes->get('getSessionUser','Home::getSessionUser');