<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
       //$this->call(UsersTableSeeder::class);
        DB::table('users')->insert([
            'name' => "admin",
            'email' => "admin@admin.com",
            'password' => bcrypt('secret'),
        ]);
    }
}
