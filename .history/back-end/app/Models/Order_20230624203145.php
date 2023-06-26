<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory; 
    protected $fillable = [
        'product_name',
        'product_quantity',
        'full_name',
        'location',
        'payment_method',
        'delivery_offer',
        'user_id'
    ];
$table = 'ordersr'
     public function user(){
        return $this->belongsTo(User::class);
     }
}

