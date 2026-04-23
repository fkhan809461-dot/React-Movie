<?php

namespace App\Controllers;

use CodeIgniter\HTTP\ResponseInterface;
use App\Models\VenusModel;
use Config\Validation;

class Venus extends BaseController
{

    public function __construct()
    {
        $this->venusModel = new VenusModel();
    }

    public function createVenus()
    {
        $data = $this->request->getJSON(true); 


        $validation = \Config\Services::validation();
         
     $validation->setRules([
        'name'      => ['label' => 'Venue Name',     'rules' => 'required|min_length[3]|max_length[100]'],
        'address'   => ['label' => 'Address',         'rules' => 'required|min_length[3]|max_length[200]'],
        'state'     => ['label' => 'State',           'rules' => 'required|min_length[2]|max_length[100]'],
        'city'      => ['label' => 'City',            'rules' => 'required|min_length[2]|max_length[100]'],
        'post_code' => ['label' => 'Zip/Post Code',   'rules' => 'required|min_length[4]|max_length[10]'],
    ]);

    
        if (!$validation->run($data)) {
        return $this->response
            ->setStatusCode(422)
            ->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors(),
            ]);
    }


        $this->venusModel->createNewVenus($data);


        return $this->response
            ->setContentType('application/json')

            ->setJSON([
            
                'status' => 'success',
                'data'   => $data,
                  'message' => 'Venue created successfully!'
            ]);
    }
}