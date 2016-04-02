<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title', 'text', 'embed_url'
    ];

    public function images() {
        return $this->hasMany('App\Image');
    }
}
