<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
 use App\Models\MovieModel;

class Movie extends BaseController
{

    public function __construct(){
        $this->moviesModel= new MovieModel();
    }

    public function fetchAllMovies()
    {
     
                // $moviesModel= new MovieModel();

                $allRecord= $this->moviesModel->allMoviesGet();
           
            return    $this->response->setJSON($allRecord);

    }


    public function getMoviesDetails($id){

    
    $allRecord= $this->moviesModel->singelMovieDetails($id);
       
        return $this->response->setJSON($allRecord);

    }

}
