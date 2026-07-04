<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
 use App\Models\SheetModel;
use App\Models\SheetBooking;

class SheetCtrl extends BaseController
{

   public function __construct(){

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");


        $this->moviesModel= new SheetModel();
       $this->BookingSheetModel= new SheetBooking(); 
    }

    
    public function fetchAllSheet()
    {
    

                $allRecord= $this->moviesModel->allSheetGet();
           
            return    $this->response->setJSON($allRecord);

    }

    public function sheetBookCtrl($id){

               $allSheets= $this->BookingSheetModel->allBookingSheet($id);

            //    print_r($allSheets); die;
           
            return    $this->response->setJSON($allSheets);

    }

        public function saveBookingSeats(){

            $data = $this->request->getJSON();

              $seats = $data->seat_number;
            // print_r($seat);
            // die;
             foreach ($seats as $seat) {

            $SheetData = [
                'user_id' => $data->user_id,
                'booking_id' => $data->booking_id,
                'transaction_id' => $data->transaction_id,
                // 'seat_number' => $data->seat_number,
                 'seat_id'        => $seat->id,
                 'seat_number'    => $seat->seat_number,
                 'price'          => $seat->price,
                 'event_id'    => $data->eventId,
                 'booking_status' => 'Y',
            ];

            // print_r($SheetData);
            $result = $this->BookingSheetModel->BookingSeatsM($SheetData);
            // return $this->response->setJSON($result);
             }
            // die;


        }

    }

