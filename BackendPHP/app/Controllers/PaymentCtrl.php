<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use App\Models\PaymentModel;

class PaymentCtrl extends BaseController
{
    public function payment()
    {
     $jsonData = $this->request->getJSON();

    //  print_r($jsonData);
    // die;
     $storeData = [
    
        'userId'=> $jsonData->userId,
        'booking_id' => $jsonData->booking_id,
        'transaction_id' => $jsonData->transaction_id,
        'payment_method' => $jsonData->payment_method,
        'status' => $jsonData->status,
        'amount' => $jsonData->amount,
        'event_id' => $jsonData->event_id 
     ];


     
    //  print_r($storeData);
    // die;

        $paymentModel = new PaymentModel();
        $paymentId = $paymentModel->createPayment($storeData);

        // print_r($storeData); die;
        
       return $paymentId
        ? $this->response->setStatusCode(200)->setJSON([
            'status'  => 'success',
            'message' => 'Payment successfully',
          ])
        : $this->response->setStatusCode(422)->setJSON([
            'status'  => 'error',
            'message' => 'Failed to create payment',
          ]);
        
}
}
