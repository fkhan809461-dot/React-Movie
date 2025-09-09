<?php

namespace App\Controllers;
use App\Models\UserModel;
class Home extends BaseController
{


    public function regestion()
    {

        // echo "00000000"; die;

      $data= $this->request->getJSON(true);
          
      $user_data= [
        'name'=> $data['name'],
        'last_name'=> $data['last_name'],
        'email'=> $data['email'],
        'password'=> $data['password'],
      ];
  
      $user_model=  new UserModel;
      
  
      $user_model= $user_model->userSave($user_data);
            
           if($user_data){
          
            $result= 'True';

              $this->response->setJSON($result);
           }
         

    }

}
