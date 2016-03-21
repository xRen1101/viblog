<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('post_id')->unsigned();
            $table->string('link');
            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
        });

        $faker = Faker\Factory::create();

        $limit = 6;

        for ($i = 0; $i < $limit; $i++) {
            DB::table('images')->insert([ //,
                'link' => $faker->imageUrl(640, 480, 'cats'),
                'post_id' => 10
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('images');
    }
}
