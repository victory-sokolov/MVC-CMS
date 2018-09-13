<?php


namespace Engine;

use Engine\Core\Database\QueryBuilder;
use Engine\DI\DI;

abstract class Model
{
    /***
     * @var \Engine\DI\DI
     */
    protected $di;

    protected $db;

    protected $config;

    public $queryBuilder;


    /**
     * Controller constructor.
     * @param DI $di
     */
    public function __construct(\Engine\Di\DI $di)
    {
        $this->di        = $di;
        $this->db        = $this->di->get('db');
        $this->config    = $this->di->get('config');

        $this->queryBuilder = new QueryBuilder();
    }

}