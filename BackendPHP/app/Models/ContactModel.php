<?php

namespace App\Models;

use CodeIgniter\Model;

class ContactModel extends Model
{
    protected $table            = 'contact_us';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields = [
    'first_name',
    'last_name',
    'email',
    'phone',
    'message'
];


    public function saveContactData($data){
  
       return  $this->insert($data);

    }

}
