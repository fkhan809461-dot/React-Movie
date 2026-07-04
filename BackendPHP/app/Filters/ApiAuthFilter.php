<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class ApiAuthFilter implements FilterInterface
{
    private function getAllowedOrigin(RequestInterface $request): string
    {
        $allowedOrigins = [
            'http://localhost:5173',
            'http://localhost:5174',
        ];

        $origin = $request->getHeaderLine('Origin');
        return in_array($origin, $allowedOrigins) ? $origin : $allowedOrigins[0];
    }

    public function before(RequestInterface $request, $arguments = null)
    {
        $origin = $this->getAllowedOrigin($request);

        // HANDLE PREFLIGHT REQUEST
        if (strtoupper($request->getMethod()) === 'OPTIONS') {
            return service('response')
                ->setStatusCode(200)
                ->setHeader('Access-Control-Allow-Origin', $origin)
                ->setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Requested-With, x-api-key')
                ->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        }

        $validApiKey = getenv('API_SECRET_KEY');
        $sentKey = $request->getHeaderLine('X-API-KEY');

        if (empty($sentKey) || $sentKey !== $validApiKey) {
            return service('response')
                ->setStatusCode(401)
                ->setHeader('Access-Control-Allow-Origin', $origin)
                ->setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Requested-With, x-api-key')
                ->setJSON([
                    'status' => false,
                    'message' => 'Unauthorized'
                ]);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        $origin = $this->getAllowedOrigin($request);

        $response->setHeader('Access-Control-Allow-Origin', $origin);
        $response->setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Requested-With, x-api-key');
        $response->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }
}



// namespace App\Filters;

// use CodeIgniter\HTTP\RequestInterface;
// use CodeIgniter\HTTP\ResponseInterface;
// use CodeIgniter\Filters\FilterInterface;

// class ApiAuthFilter implements FilterInterface
// {
//     public function before(RequestInterface $request, $arguments = null)
//     {
//         // HANDLE PREFLIGHT REQUEST
//         if (strtoupper($request->getMethod()) === 'OPTIONS') {

//             return service('response')
//                 ->setStatusCode(200)
//                 ->setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
//                 ->setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Requested-With, x-api-key')
//                 ->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//         }

//         $validApiKey = getenv('API_SECRET_KEY');
//         $sentKey = $request->getHeaderLine('X-API-KEY');

//         if (empty($sentKey) || $sentKey !== $validApiKey) {

//             return service('response')
//                 ->setStatusCode(401)
//                 ->setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
//                 ->setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Requested-With, x-api-key')
//                 ->setJSON([
//                     'status' => false,
//                     'message' => 'Unauthorized'
//                 ]);
//         }
//     }

//     public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
//     {
//         $response->setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//         $response->setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Requested-With, x-api-key');
//         $response->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     }
// }