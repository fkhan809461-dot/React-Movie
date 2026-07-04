<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->Post('regestion', 'Home::regestion');
// just these two lines for allMovies
// $routes->options('allMovies', 'Movie::preflight');

$routes->get('getMoviesDetails/(:any)', 'Movie::getMoviesDetails/$1');

$routes->get('allMovies', 'Movie::fetchAllMovies', ['filter' => 'apiauth']);


$routes->get('getSessionUser', 'Home::getSessionUser');


$routes->get('fetchAllSheet','SheetCtrl::fetchAllSheet');
$routes->post('AllreadyLogin','Home::AllreadyLogin');
$routes->get('SheetAllreadyBook/(:any)','SheetCtrl::sheetBookCtrl/$1');
$routes->post('contactUs','Home::contactUs');

// Admin Roughts

$routes->options('createVenus', 'Venus::createVenus'); //
$routes->post('createVenus', 'Venus::createVenus');
$routes->options('createEvent', 'EventCtrl::createEvent');
$routes->post('createEvent', 'EventCtrl::createEvent');
// $routes->options('getAllVenus', 'EventCtrl::getAllVenus');
$routes->get('getAllVenus', 'EventCtrl::getAllVenus');
$routes->get('getAllEvent', 'EventCtrl::getAllEvent');
$routes->post('paymentVerify', 'PaymentCtrl::payment');
$routes->post('saveBookingSeats', 'SheetCtrl::saveBookingSeats');
$routes->get('getEventById/(:any)/(:any)', 'Movie::getMovieByIdModel/$1/$2');