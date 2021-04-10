<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Constellation extends Model
{
    use HasFactory;
    protected $table = 'constellation_info';
    public $incrementing = false;
    public $timestamps = false;
}
