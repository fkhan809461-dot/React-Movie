<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
 use App\Models\SheetModel;

class SheetCtrl extends BaseController
{
   public function __construct(){
        $this->moviesModel= new SheetModel();
    }

    
    public function fetchAllSheet()
    {
    

                $allRecord= $this->moviesModel->allSheetGet();
           
            return    $this->response->setJSON($allRecord);

    }



}
