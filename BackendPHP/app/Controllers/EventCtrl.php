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
    
    
        $data = $this->request->getPost();
        $image = $this->request->getFile('image');

  
    // print_r($this->request->getPost()); die;

     $validation = \Config\Services::validation();
         
     $validation->setRules([
        'title'      => ['label' => 'Title',     'rules' => 'required|min_length[3]|max_length[100]'],
        'description'   => ['label' => 'Description',         'rules' => 'required|min_length[3]|max_length[200]'],
        'category'     => ['label' => 'Category',           'rules' => 'required|min_length[2]|max_length[100]'],
        'venue_id'      => ['label' => 'Venue ID',            'rules' => 'required|min_length[1]|max_length[100]'],
            'image' => [

        'label' => 'Image',

        'rules' => 'uploaded[image]
                    |is_image[image]
                    |mime_in[image,image/jpg,image/jpeg,image/png,image/webp]
                    |max_size[image,2048]',

    ],

     'start_date'      => ['label' => 'Start Date',            'rules' => 'required'],

    ]);

    
        if (!$validation->withRequest($this->request)->run()) {
            //    print_r($validation->getErrors()); die;
        return $this->response
            ->setStatusCode(422)
            ->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors(),
            ]);
    }





     if ($image && $image->isValid() && !$image->hasMoved()) {
    
        $newName = $image->getRandomName();
    
        $image->move(FCPATH . 'uploads/events/', $newName);

        $data['image'] = $newName;
    }

    // print_r($data); die;


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


        // print_r($venues); die;

        return $this->response
            ->setContentType('application/json')
            ->setJSON([
                'status' => 'success',
                'data'   => $venues,
            ]);
    }

         public function getAllEvent()
         {
            
        $events = $this->eventModel->getAllEventModel();

        return $this->response
            ->setContentType('application/json')
            ->setJSON([
                'status' => 'success',
                'data'   => $events,
            ]);
    }

 
    public function getEventById($id)
    {
    
        
        
        $event = $this->eventModel->getEventByIdModel($id);
        print_r($event);
        die;

        if (!$event) {
            return $this->response
                ->setStatusCode(404)
                ->setJSON([
                    'status' => 'error',
                    'message' => 'Event not found',
                ]);
        }

        return $this->response
            ->setContentType('application/json')
            ->setJSON([
                'status' => 'success',
                'data'   => $event,
            ]);
    }
    
}
