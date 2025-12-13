<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table            = 'user';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'id',
        'name',
        'email',
        'password',
        'created_at'
    ];



    public function userSave($data)
    {

        $this->insert($data);
    }


    public function checkUser($email, $password)
    {

        $bulder =  $this->table('user');
        $bulder->where('email', $email);
        $bulder->where('password', $password);
        $query = $bulder->get();

        if ($query->getNumRows() > 0) {
            return true;
        }
    }
}
