<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type');
        });

        DB::table('post_types')->insert([
            'type' => 'Travel'
        ]);

        DB::table('post_types')->insert([
            'type' => 'Parkour'
        ]);

        DB::table('post_types')->insert([
            'type' => 'Skating'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('post_types');
    }
}
