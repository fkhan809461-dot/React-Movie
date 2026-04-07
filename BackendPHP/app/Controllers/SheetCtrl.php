<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
 use App\Models\SheetModel;
use App\Models\SheetBooking;

class SheetCtrl extends BaseController
{
   public function __construct(){
        $this->moviesModel= new SheetModel();
       $this->BookingSheetModel= new SheetBooking(); 
    }

    
    public function fetchAllSheet()
    {
    

                $allRecord= $this->moviesModel->allSheetGet();
           
            return    $this->response->setJSON($allRecord);

    }

    public function sheetBookCtrl(){

               $allSheets= $this->BookingSheetModel->allBookingSheet();
           
            return    $this->response->setJSON($allSheets);

    }



}
