<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DakokuModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'dp_user_id',
        'dp_target_date',
        'dp_syukin_time',
        'dp_entry_time',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'dp_user_id', 'id');
    }
}
