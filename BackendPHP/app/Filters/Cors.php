<?php 

// use CodeIgniter\HTTP\RequestInterface;
// use CodeIgniter\HTTP\ResponseInterface;
// use CodeIgniter\Filters\FilterInterface;

// class Cors implements FilterInterface
// {
//     public function before(RequestInterface $request, $arguments = null)
//     {
//         // Handle preflight (OPTIONS) requests immediately
//         if ($request->getMethod(true) === 'OPTIONS') {
//             $response = service('response');
//             $response->setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//             $response->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//             $response->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//             $response->setStatusCode(200);
//             $response->send();   // 👈 send back immediately
//             exit;
//         }
//     }

//     public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
//     {
//         $response->setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//         $response->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//         $response->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     }
// }

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class Cors implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $origin = $request->getHeaderLine('Origin');

        // Allow only your React app
        $allowedOrigins = ['http://localhost:5173'];

        if (in_array($origin, $allowedOrigins)) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
            header('Access-Control-Allow-Credentials: true');
        }

        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            exit(0); // stop preflight request
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null) {}
}
