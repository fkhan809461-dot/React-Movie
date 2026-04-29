<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use App\Models\EventModel;
use App\Models\VenusModel;


class EventCtrl extends BaseController
{

    public function __construct()
    {
        $this->eventModel = new EventModel();
        $this->venusModel = new VenusModel();
    }

    public function createEvent()
    {
    
    $data = $this->request->getJSON(true); 
  
    // print_r($data); die;

     $validation = \Config\Services::validation();
         
     $validation->setRules([
        'title'      => ['label' => 'Title',     'rules' => 'required|min_length[3]|max_length[100]'],
        'description'   => ['label' => 'Description',         'rules' => 'required|min_length[3]|max_length[200]'],
        'category'     => ['label' => 'Category',           'rules' => 'required|min_length[2]|max_length[100]'],
        'venue_id'      => ['label' => 'Venue ID',            'rules' => 'required|min_length[1]|max_length[100]'],
    ]);

    
        if (!$validation->run($data)) {
        return $this->response
            ->setStatusCode(422)
            ->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors(),
            ]);
    }


        $this->eventModel->createEventModel($data);


        return $this->response
            ->setContentType('application/json')

            ->setJSON([
            
                'status' => 'success',
                'data'   => $data,
                'message' => 'Event created successfully!'
            ]);    }



         public function getAllVenus()
    {
        $venues = $this->venusModel->getAllVenus();

        return $this->response
            ->setContentType('application/json')
            ->setJSON([
                'status' => 'success',
                'data'   => $venues,
            ]);
    }

}
