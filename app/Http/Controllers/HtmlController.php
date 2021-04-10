<?php

class SimpleHtmlController
{   
    private $html = null;
    private $results = [];

    public function load($url) {
        $html = file_get_contents($url);
        if(is_null($html) || $html == "")
            return false;

        $results = [$html];
        return true;
    }

    public function reset(){
        $results = $html;
        return $this;
    }

    public function selector($type, $target) {
        foreach ($results as $result) {
            switch ($type) {
                case "class":
                    break;
                case  "attr":
                    break;
                case "tag":
                    break;
                case "id":
                    break;
            }
        }
        return $this;
    }

    // target string array 
    // [ "attr", "content" ]
    public function findValue($targets) {
        foreach ($results as $result) {
            foreach ($targets as $target) {
                switch ($target) {
                    case "attr":
                        break;
                    case  "class":
                        break;
                    case  "content":
                        break;
                }
            }
        }

        return $this;
    }
    
    public function getResult($target) {
        return $results;
    }
}
