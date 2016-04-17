<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends BaseModel
{
    protected $fillable = [
        'title', 'text', 'embed_url'
    ];

    public function images() {
        return $this->hasMany('App\Image');
    }

    public function type()
    {
        return $this->belongsTo('App\PostType', 'type_id');
    }
}
