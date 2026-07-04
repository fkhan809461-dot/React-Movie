<?php

namespace App\Models;

use CodeIgniter\Model;

class SheetBooking extends Model
{
    protected $table            = 'booking_seats';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['booking_id', 'event_id', 'user_id', 'seat_id', 'price', 'booking_status'];


    // public function allBookingSheet()
    // {

    //     //    return  $this->where('booking_status','Y')->findAll();

    // }

    public function allBookingSheet($id)
    {
        return $this->db->table('seats')
            ->select('seats.id, seats.seat_number, seats.price,bs.booking_status')
            ->join(
            'booking_seats bs',
            'bs.seat_id = seats.id AND bs.event_id = ' . $id . ' AND bs.booking_status = "Y"',
            'left'
        )
            // ->where('bs.event_id', $id)
             ->orderBy('seats.id', 'ASC')
            ->get()
            ->getResultArray();
    }


    public function BookingSeatsM($data)
    {
        // print_r($data);

        // die;

        $this->insert($data);
        return 'Seats booked successfully';
    }


}
