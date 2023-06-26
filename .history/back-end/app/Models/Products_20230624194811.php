<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_name',
        'price',
        'img',
        'rating',
        'category'
    ];



     public function user(){
        return $this->belongsTo(User::class);
     }
}


