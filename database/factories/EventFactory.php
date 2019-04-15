<?php
use Faker\Generator as Faker;
$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(),
        'date_event' => $faker->dateTime(),
        'description' => $faker->text(),
        'reminder' => $faker->dateTime(),
        'street' => $faker->sentence(),
        'city' => $faker->sentence(),
        'postal_code' => $faker->sentence(),
        'price'=> $faker->numberBetween(10,2000),
        'author' =>factory ('App\User')->create()->id
    ];
});
