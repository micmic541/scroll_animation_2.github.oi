const $doc = document;
const $targets = $doc.querySelectorAll('.animateTarget');
console.log($targets);

console.log("画面の高さ", window.innerHeight);
$doc.addEventListener('scroll',function(){
    for(let i = 0; i < $targets.length; i++){
        const getElementDistance = $targets[i].
        getBoundingClientRect().top + $targets[i].clientHeight * .5;
        if (innerHeight > getElementDistance){
            $targets[i].classList.add('show');
        }
    }
})