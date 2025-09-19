<?php

namespace App\Controllers;

use App\Models\UserModel;

class Home extends BaseController
{


  public function regestion()
  {

    // echo "00000000"; die;

    $data = $this->request->getJSON(true);

    if(!empty($data)){




    $user_data = [
      'name' => $data['name'],
      'email' => $data['email'],
      'password' => $data['password'],
    ];

    // print_r($user_data); die;

    $user_model =  new UserModel;


    $user_model = $user_model->userSave($user_data);

    if ($user_data) {

      $result = 'True';

      return   $this->response->setJSON(['success' => true]);
    }
  }
}
}
