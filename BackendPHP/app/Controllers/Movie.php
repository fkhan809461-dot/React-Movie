<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use App\Models\MovieModel;

class Movie extends BaseController
{



    public function __construct(){
        $this->moviesModel= new MovieModel();


 
    // header("Access-Control-Allow-Origin: *");
    // header("Access-Control-Allow-Headers: Content-Type, Authorization");
    // header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");




    }

public function preflight()
{
    return $this->response->setStatusCode(200);
}

    public function fetchAllMovies()
    {
     

    //  header('Access-Control-Allow-Origin: *');
    // header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, X-API-KEY');
    // header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

        $allRecord= $this->moviesModel->allMoviesGet();
        
    return $this->response->setJSON([
        'status' => true,
         'data'   => $allRecord
    ]);

           
            // return    $this->response->setJSON($allRecord);

    }


    public function getMoviesDetails($id){

    
    
    $allRecord= $this->moviesModel->singelMovieDetails($id);
       
        return $this->response->setJSON($allRecord);

    }



         public function getMovieByIdModel($id,$userId)
    {
// print_r($id);
//         die;

        $event = $this->moviesModel->getMovieByIdModel($id,$userId);
  

        if (!$event) {
            return $this->response
                ->setStatusCode(404)
                ->setJSON([
                    'status' => 'error',
                    'message' => 'Movie not found',
                ]);
        }

        return $this->response
            ->setContentType('application/json')
            ->setJSON([
                'status' => 'success',
                'data'   => $event,
            ]);
    }


}
