'use stric';
{
const btn =document.getElementById('btn1');
btn.addEventListener('click',()=>{
    const n = Math.floor(Math.random()*9);
  
  
    switch(n){
        case 0:
            btn.textContent = '学べば学ぶほど、自分がどれだけ無知であるか思い知らされる。自分の無知に気づけば気づくほど、より一層学びたくなる。 ☆アインシュタイン☆';
            break;
            case 1:
                btn.textContent = '人生には、二つの道しかない。一つは、奇跡などまったく存在しないかのように生きること。もう一つは、すべてが奇跡であるかのように生きることだ。 ☆アインシュタイン☆' ;
                break;    
                case 2:
            btn.textContent = '成功者になろうとするのではなく、むしろ価値のある人間になろうとしなさい。☆アインシュタイン☆';
            break;
             case 3:
            btn.textContent = '世界とは、鏡のようなもの。それを変えるには　あなたを変えるしかない。 ☆アレイスター・クロウリー☆' ;
            break;
             case 4:
            btn.textContent = '過去が現在に影響を与えるように、未来も現在に影響を与える。☆ニーチェ☆' ;
            break;
             case 5:
            btn.textContent = ' 雨と晴れは必ずやって来る。大切な事はその両方を幸運だと捉える心構えだ。☆孫正義☆' ;
            break;
              case 6:
            btn.textContent = ' 成功する者と失敗する者の違いは、頭の差より性格の差の方が大きい。☆孫正義☆' ;
            break;
              case 7:
            btn.textContent = '善にも強ければ、悪にも強いというのが、もっとも強力な力である。☆ニーチェ☆' ;
            break;
              case 8:
            btn.textContent = '人は何を笑いの対象にするかで、その人の人格がわかる。☆ニーチェ☆';
            break;
           
            }
    
    });
    
    }