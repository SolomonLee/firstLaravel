<?php
namespace App\Facades\Spider\Constellation;

use Illuminate\Support\Facades\Facade;
use Sunra\PhpSimple\HtmlDomParser;
use App\Models\Constellation;

class ConstellationSpider extends Facade {
    private static $allowTitle = [
        [
          'title'=> "整體",
          'col_name'=> "conclusion",
        ],
        [
          'title'=> "愛情",
          'col_name'=> "love",
        ],
        [
          'title'=> "事業",
          'col_name'=> "work",
        ],
        [
          'title'=> "財運",
          'col_name'=> "money",
        ]
      ];

    public function process()
    {
        $this->run();
    }

    protected static function getFacadeAccessor() { return 'payment'; }

    public static function run() 
    {
        echo "開始更新\n";
        $url = "https://astro.click108.com.tw/";
        $html = HtmlDomParser::file_get_html($url, false, null, 0 );
      
          
        foreach($html->find("div[class=STAR12_BOX]") as $classSTAR12_BOX)
        {
           
        foreach($classSTAR12_BOX->find("a") as $tagA)
          {
            $_url = urldecode(substr(strstr($tagA->href,'RedirectTo='), 11)) . "&iAcDay=" .date("Y-m-d");
            echo $_url . "<br>";
            echo "準備更新 - $tagA->plaintext\n";
            $_constellation_row = Constellation::where('name', $tagA->plaintext)->first();
            if(!$_constellation_row) {
              echo "尚未有 - $tagA->plaintext - 即將新增資料\n";
              $_constellation_row = new Constellation;
            } 
            
            ConstellationSpider::setConstellation(
              [
                'name'=> $tagA->plaintext,
                'content'=> ConstellationSpider::parseSubPage($_url)
              ],
              $_constellation_row
            );
            $_constellation_row->save();
            echo "完成 - $tagA->plaintext\n";
          }
        }
        echo "更新完成\n";
    }
    
    protected static function parseSubPage($url) {
        $html = HtmlDomParser::file_get_html($url, false, null, 0 );

        $date = "";
        foreach($html->find("select[id=iAcDay]") as $idiAcDay)
        {
          $date = $idiAcDay->find("option[selected=selected]", 0)->plaintext;
        }
  
        $comments = [];
        foreach($html->find(".TODAY_CONTENT") as $classTODAY_CONTENT) {
            $level = 0;
            $title = "";
            $comment = "";

            $hasTitle = false;
            foreach($classTODAY_CONTENT->find("p") as $p)
            {
                $pos = strpos($p->plaintext, '運勢');
                if($pos !== false && !$hasTitle)
                {
                    $title = strstr($p->plaintext, '運勢', true);

                    $_tmep_level = strpos(strstr($p->plaintext, '運勢'), '☆');
                    if($_tmep_level === false) $_tmep_level = 21;
                    
                    $level = ($_tmep_level - 6) / 3;
                    $hasTitle = true;
                }
                else {
                    $comment = $p->plaintext;

                    $col_name_index = array_search($title, array_column(ConstellationSpider::$allowTitle, 'title'));
                    if($col_name_index !== false){
                        $comments[] = [
                            "col_name" => ConstellationSpider::$allowTitle[$col_name_index]['col_name'],
                            "level" => $level,
                            "title" => $title,
                            "comment" => $comment
                        ];
                    }

                    $level = 0;
                    $title = "";
                    $comment = "";
                    $hasTitle = false;
                }
            }
        }
  
        $imgUrl = "";
        foreach($html->find(".STARBABY") as $classSTARBABY) {
            $_img = $classSTARBABY->find("img",0);
            $imgUrl = $_img->src;
        }
  
        return [
          'date' => $date,
          'comments' => $comments,
          'imgUrl' => $imgUrl
        ];
    }
  
    protected static function setConstellation($attr, &$_constellation_row) {
        $_constellation_row->name = $attr['name'];
        $_constellation_row->date_text = $attr['content']['date'];
        $_constellation_row->img = $attr['content']['imgUrl'];

        foreach($attr['content']['comments'] as $comment) {
            $_constellation_row[$comment['col_name']] = json_encode(
                [
                    'level' => $comment['level'],
                    'title' => $comment['title'],
                    'comment' => $comment['comment']
                ]
            );
        }
    }
}
