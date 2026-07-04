<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class CorsFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $allowedOrigins = [
            'http://localhost:5173',
            'http://localhost:5174',
        ];

        $origin = $request->getHeaderLine('Origin');
        $allowOrigin = in_array($origin, $allowedOrigins) ? $origin : $allowedOrigins[0];

        header("Access-Control-Allow-Origin: $allowOrigin");
        header('Access-Control-Allow-Headers: Content-Type, X-API-KEY, x-api-key');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

        if (strtolower($request->getMethod()) === 'options') {
            http_response_code(200);
            exit();
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // nothing
    }
}