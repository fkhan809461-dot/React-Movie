<?php

namespace App\Controllers;

use App\Models\UserModel;
use PhpParser\Builder\Function_;

class Home extends BaseController
{


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
            'isLoggedIn'=> true
        ]);

        return $this->response->setJSON(['success' => true, 'data' =>$data]);
    }
}




public function AllreadyLogin(){
$data= $this->request->getJSON(true);

print_r($data); die;

  $user_model = new UserModel;
 $user_id = $user_model->checkUser($email,$password);


}


 public function getSessionUser()
{
    $session = session();

    if ($session->has('isLoggedIn') && $session->get('isLoggedIn')) {
        return $this->response->setJSON([
            'loggedIn' => true,
            'id'       => $session->get('id'),
            'name'     => $session->get('name'),
            'email'    => $session->get('email')
        ]);
    }

    return $this->response->setJSON(['loggedIn' => false]);
}

}
