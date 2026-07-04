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



         public function getMovieByIdModel($id,$userId)
    {
//         print_r($id);
// die;
    return     $this->select('movie.title,
         movie.movie_poster, 
         shows.show_time as shows_time,
         COUNT(booking_seats.user_id) as total_tickets'
         )
                     ->join('shows', 'shows.movie_id = movie.id')
                     ->join('booking_seats', 'booking_seats.event_id  = movie.id', 'left')
                     ->where('movie.id', $id)
                     ->where('booking_seats.user_id', $userId)
                     ->first();

//                       echo $this->db->getLastQuery();
//     die;
      
}









}
