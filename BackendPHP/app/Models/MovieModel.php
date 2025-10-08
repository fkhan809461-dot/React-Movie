<?php

namespace App\Models;

use CodeIgniter\Model;

class MovieModel extends Model
{
    protected $table            = 'movie';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['id','title', 'description', 'language', 'movie_poster'];


    public function allMoviesGet(){
        
       return  $this->findAll();

    }


    public function singelMovieDetails($id){
         $this->where('id',$id);
         return $this->first();
    }



    









}
