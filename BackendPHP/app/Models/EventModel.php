<?php

namespace App\Models;

use CodeIgniter\Model;

class EventModel extends Model
{
    protected $table            = 'event';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['title', 'description', 'category', 'image', 'venue_id', 'start_date'];

    protected bool $allowEmptyInserts = false;
    protected bool $updateOnlyChanged = true;



    public function createEventModel($data)
    {

        $this->insert($data);
        return $this->getInsertID();
    }


    public function getAllEventModel()
    {
        return $this->select('event.title, event.description, event.category, event.image,event.start_date, venues.name as venue_name, venues.address as venue_address')
                     ->join('venues', 'venues.id = event.venue_id')
                     ->findAll();
    }

//     public function getEventByIdModel($id)
//     {
// //         print_r($id);
// // die;
//         // return $this->select('event.title, event.description, event.category, event.image, event.start_date, venues.name as venue_name, venues.address as venue_address')
//         //              ->join('venues', 'venues.id = event.venue_id')
//         //              ->where('event.id', $id)
//         //              ->first();
//         return $this->select('*')
//                         ->where('id', $id)
//                         ->first();

// }
}