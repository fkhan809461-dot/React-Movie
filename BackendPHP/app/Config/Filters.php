<?php

namespace Config;

use CodeIgniter\Config\Filters as BaseFilters;
use App\Filters\Cors;
use App\Filters\ApiAuthFilter;
use CodeIgniter\Filters\CSRF;

class Filters extends BaseFilters
{
public array $aliases = [
    'csrf'          => \CodeIgniter\Filters\CSRF::class,
    'toolbar'       => \CodeIgniter\Filters\DebugToolbar::class,
    'honeypot'      => \CodeIgniter\Filters\Honeypot::class,
    'invalidchars'  => \CodeIgniter\Filters\InvalidChars::class,
    'secureheaders' => \CodeIgniter\Filters\SecureHeaders::class,
    'forcehttps'    => \CodeIgniter\Filters\ForceHTTPS::class,
    'pagecache'     => \CodeIgniter\Filters\PageCache::class,
    'performance'   => \CodeIgniter\Filters\PerformanceMetrics::class,

  
    'cors'          => \App\Filters\CorsFilter::class,  
    'apiauth'       => \App\Filters\ApiAuthFilter::class,
];

    public array $required = [
        'before' => [
            'forcehttps',
            'pagecache',
        ],
        'after' => [
            'pagecache',
            'performance',
            'toolbar',
        ],
    ];

    public array $globals = [
        'before' => [
            'cors',  
        ]

    ];

    public array $methods = [];
    public array $filters = [];
}