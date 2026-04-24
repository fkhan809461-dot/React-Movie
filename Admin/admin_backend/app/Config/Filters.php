<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;
use App\Filters\Cors;                  // ✅ Import the class

class Filters extends BaseConfig
{
    public array $aliases = [
        'csrf'      => \CodeIgniter\Filters\CSRF::class,
        'toolbar'   => \CodeIgniter\Filters\DebugToolbar::class,
        'honeypot'  => \CodeIgniter\Filters\Honeypot::class,
        'cors'      => \App\Filters\Cors::class,   // ✅ Register it here
    ];

    public array $globals = [
        'before' => [
            'cors',    // ✅ Apply before everything
        ],
        'after' => [],
    ];

    public array $methods = [];
    public array $filters = [];
}