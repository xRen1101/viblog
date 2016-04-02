<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('text');
            $table->string('embed_url');
            $table->timestamps();
        });

        $faker = Faker\Factory::create();

        $limit = 10;

        for ($i = 0; $i < $limit; $i++) {
            DB::table('posts')->insert([ //,
                'title' => $faker->text(40),
                'text' => $faker->text(200),
                'created_at' => $faker->dateTime($max = 'now')
            ]);
        }

        DB::table('posts')->insert([ //,
            'title' => $faker->text(40),
            'embed_url' => 'https://www.youtube.com/watch?v=2h0geB9bRbE',
            'created_at' => $faker->dateTime($max = 'now')
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('posts');
    }
}
