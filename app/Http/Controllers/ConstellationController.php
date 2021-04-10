<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Constellation;
use App\Http\Controllers\SimpleHtmlController;

class ConstellationController extends Controller
{
    //
    public function get() {
        $constellations = Constellation::select('name','destiny_all as all','destiny_love as love','destiny_work as work','destiny_money as money','img_url as img','date')->get();
        echo json_encode($constellations);
    }

    public function update() {
        // $htmlController = new SimpleHtmlController;
        $html = file_get_contents("https://astro.click108.com.tw/");
        $dom = new \DomDocument();
        $internalErrors = libxml_use_internal_errors(true);

        $dom->loadHTML($html); 
        $domx = new \DomXPath($dom);

        $elements = $domx->query("//*[contains(@class, 'STAR12_BOX')]");
        if (!is_null($elements)) {
            foreach ($elements as $element) {
                $link = $element->getElementsByTagName('a');

          
              $nodes = $link->hasChildNodes() [0];
              foreach ($nodes as $node) {
                if(!is_null($node->attributes))
                {
                    if(!is_null($node->attributes->item(0)))
                     echo json_encode($node->attributes->item(0)) . "\n";
                }
              }
            }
        }

        
        libxml_use_internal_errors($internalErrors);
          // echo json_encode($htmlController->DomSeletor($domx, "STAR12_BOX"));
        // echo json_encode(file_get_contents($url));
    }

}
