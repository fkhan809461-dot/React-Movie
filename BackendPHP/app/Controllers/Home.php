<?php

namespace App\Controllers;

use App\Models\UserModel;
use PhpParser\Builder\Function_;

use App\Models\ContactModel;

class Home extends BaseController
{


    public function __construct(){
 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");


    }
    public function regestion()
    {
        $data = $this->request->getJSON(true);

        if (!empty($data)) {
            $session = session();

            $user_data = [
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => $data['password'],
            ];

            $user_model = new UserModel;
            $user_id = $user_model->userSave($user_data);

            // Save session
            $session->set([
                'id'        => $user_id,
                'name'      => $data['name'],
                'email'     => $data['email'],
                'isLoggedIn' => true
            ]);

            return $this->response->setJSON(['success' => true, 'data' => $data]);
        }
    }




    public function AllreadyLogin()
    {
        $data = $this->request->getJSON(true);

        print_r($data);
        die;

        $user_model = new UserModel;
        $user_id = $user_model->checkUser($email, $password);
    }


    // public function getSessionUser()
    // {
    //     // $session = session();

    //     // if ($session->has('isLoggedIn') && $session->get('isLoggedIn')) {
    //     //     return $this->response->setJSON([
    //     //         'loggedIn' => true,
    //     //         'id'       => $session->get('id'),
    //     //         'name'     => $session->get('name'),
    //     //         'email'    => $session->get('email')
    //     //     ]);
    //     // }

    //     // // return $this->response->setJSON(['loggedIn' => false]);

    //     //    return $this->response
    //     // ->setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    //     // ->setHeader('Access-Control-Allow-Credentials', 'true')
    //     // ->setJSON($response);

    //     if ($this->request->getMethod() === 'options') {
    //     return $this->response
    //         ->setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    //         ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    //         ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    //         ->setHeader('Access-Control-Allow-Credentials', 'true')
    //         ->setStatusCode(200);
    // }

    // $session = session();

    // $response = [
    //     'loggedIn' => false
    // ];

    // if ($session->has('isLoggedIn') && $session->get('isLoggedIn')) {
    //     $response = [
    //         'loggedIn' => true,
    //         'id'       => $session->get('id'),
    //         'name'     => $session->get('name'),
    //         'email'    => $session->get('email')
    //     ];
    // }

    // return $this->response
    //     ->setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    //     ->setHeader('Access-Control-Allow-Credentials', 'true')
    //     ->setJSON($response);


    // }




public function getSessionUser()
{
    if ($this->request->getMethod() === 'options') {
        return $this->response
            ->setHeader('Access-Control-Allow-Origin', 'http://localhost:5174')
            ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
            ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
            ->setHeader('Access-Control-Allow-Credentials', 'true')
            ->setStatusCode(200);
    }

    $session = session();

    $response = [
        'loggedIn' => false
    ];

    if ($session->has('isLoggedIn') && $session->get('isLoggedIn')) {
        $response = [
            'loggedIn' => true,
            'id'       => $session->get('id'),
            'name'     => $session->get('name'),
            'email'    => $session->get('email')
        ];
    }

    return $this->response
        ->setHeader('Access-Control-Allow-Origin', 'http://localhost:5174')
        ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
        ->setHeader('Access-Control-Allow-Credentials', 'true')
        ->setJSON($response);
}
    public function contactUs()
    {


        $data = $this->request->getJSON(true);

            
        $contactData= [
            'first_name' => $data['name'],
            'last_name' => $data['lastName'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'message' => $data['message']
        ];


        $user_model = new ContactModel;
        $user_model->saveContactData($contactData);

    }
}
