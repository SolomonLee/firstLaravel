<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Facades\Spider\Constellation\ConstellationSpider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        
        $this->app->bind('ConstellationSpider', function(){

            return new ConstellationSpider;
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
