<?php

namespace App\Models;

use CodeIgniter\Model;

class SheetModel extends Model
{
    protected $table            = 'seats';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['id','screen_id', 'seat_number', 'price', 'seat_type'];


    public function allSheetGet(){
        
       return  $this->findAll();

    }


}
