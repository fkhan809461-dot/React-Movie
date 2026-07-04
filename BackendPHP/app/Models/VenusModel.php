<?php

namespace App\Models;

use CodeIgniter\Model;

class VenusModel extends Model
{
    protected $table            = 'venues';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['name','address','city','state','post_code'];

    protected bool $allowEmptyInserts = false;
    protected bool $updateOnlyChanged = true;

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';



    public function createNewVenus($data)
    {
        return $this->insert($data);
    }


    public function getAllVenus()
    {
        return $this->findAll();
    }


}
