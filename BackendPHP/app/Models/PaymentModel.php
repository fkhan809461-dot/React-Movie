<?php

namespace App\Models;

use CodeIgniter\Model;

class PaymentModel extends Model
{
    protected $table            = 'payments';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['booking_id', 'transaction_id', 'event_id','payment_method', 'status', 'amount'];

    protected bool $allowEmptyInserts = false;
    protected bool $updateOnlyChanged = true;



    public function createPayment($data)
    {
            //    print_r($data); die;    

        $this->insert($data);
        return 'Payment successfully';
    }
}