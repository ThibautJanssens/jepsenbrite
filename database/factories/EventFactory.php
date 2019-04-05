<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'event_name' => $faker->name(),
        'event_date' => $faker->date(),
        'event_address' => $faker->text(),
        'event_description' => $faker->text(),
        'event_price' => $faker->randomDigit(),
        'event_author' => $faker->numberBetween($min = 1, $max = 10)

    ];
});
