<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class AutoUpdateJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $dataTime = '';
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $dataTime)
    {
        $this->dataTime = $dataTime;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        \Log::info('自動更新開始時間 : ' . $this->dataTime);
        app()->make('ConstellationSpider')->run();
    }
}
