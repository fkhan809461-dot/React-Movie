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
    protected $allowedFields    = ['title', 'description', 'category', 'venue_id'];

    protected bool $allowEmptyInserts = false;
    protected bool $updateOnlyChanged = true;



    public function createEventModel($data)
    {
    
    // print_r($data);
    // die;

        $this->insert($data);
        return $this->getInsertID();
    }



}
