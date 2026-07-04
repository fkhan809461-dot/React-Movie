<?php

namespace App\Controllers;

use App\Models\UserModel;
use PhpParser\Builder\Function_;

use App\Models\ContactModel;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
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
        $user_model = new UserModel;

         $existingUser = $user_model->where('email', $data['email'])->first();

        //  print_r($existingUser);
            // die;/

        if ($existingUser) {

        // echo "Email already registered. Please login!";

            return $this->response->setJSON([
                'success' => false,
                'emailExist' =>  $data['email'],
                'message' => 'Email already registered. Please login!',
            ]);
        }


        $user_id = $user_model->userSave([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => password_hash($data['password'], PASSWORD_DEFAULT),
        ]);

// print_r($user_id);
// die;
         $payload = [
            'iat'   => time(),
            'exp'   => time() + (60 * 60 * 2),
            'id'    => $user_id,
            'name'  => $data['name'],
            'email' => $data['email'],
        ];

         $token = JWT::encode($payload, getenv('JWT_SECRET_KEY'), 'HS256');


        return $this->response->setJSON([
            'success' => true,
            'id'      => $user_id,
            'token'   => $token,
        ]);
    }
}




    public function AllreadyLogin()
    {
        $data = $this->request->getJSON(true);

        $email = $data['email'];
        $password = $data['password'];


        $user_model = new UserModel;
        $user = $user_model->where('email', $email)->first();

        if (!$user) {
        return $this->response->setStatusCode(401)->setJSON([
            'success' => false,
            'message' => 'Email not found!'
        ]);
    }

    if (!password_verify($password, $user['password'])) {
        return $this->response->setStatusCode(401)->setJSON([
            'success' => false,
            'message' => 'Wrong password!'
        ]);
    }

    $payload = [
        'iat'   => time(),
        'exp'   => time() + (60 * 60 * 2),
        'id'    => $user['id'],
        'name'  => $user['name'],
        'email' => $user['email'],
    ];

    $token = JWT::encode($payload, getenv('JWT_SECRET_KEY'), 'HS256');
    return $this->response->setJSON([
        'success' => true,
        'token'   => $token,
        'id'      => $user['id'],
    ]);

    }


 public function getSessionUser()
    {

        $authHeader = $this->request->getHeaderLine('Authorization');
        $token = str_replace('Bearer ', '', $authHeader);

            if (empty($token)) {
        return $this->response->setJSON(['loggedIn' => false]);
    }

try {
        //  verify token — user cannot fake this
        $decoded = JWT::decode($token, new Key(getenv('JWT_SECRET_KEY'), 'HS256'));

        return $this->response->setJSON([
            'loggedIn' => true,
            'id'       => $decoded->id,
            'name'     => $decoded->name,
            'email'    => $decoded->email,
        ]);

    } catch (\Exception $e) {
        // token invalid or expired
        return $this->response->setJSON(['loggedIn' => false]);
    }
        

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
