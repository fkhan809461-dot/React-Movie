<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
 use App\Models\MovieModel;

class Movie extends BaseController
{
    public function fetchAllMovies()
    {
     
                $moviesModel= new MovieModel();

                $allRecord= $moviesModel->allMoviesGet();
           
            return    $this->response->setJSON($allRecord);

    }
}
