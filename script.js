
const cards = document.getElementsByTagName('button');


var table=[];
var checked=[];
var canGet=true;

for(let i=0; i<cards.length;i++){
    cards[i].style.fontSize="0px";
    
    cards[i].addEventListener('click', cardClick)
}
cards[36].style.fontSize="15px";


function cardClick(e){

    if(canGet==true){
        if(table.length<2)
        {
            e.target.style.background="white"
            table.push(e.target); 
            console.log(e.target.textContent)
            e.target.style.fontSize="15px";
            console.log(e.target.textContent)
            console.log(table)
        }
        if(table.length==2){
            canGet=false;
            if(table[0].className===table[1].className){
                equalCard()
            }
            else {
                notequalCard()
            }
        }
    }
}

function equalCard(){
    table[0].style.background = 'grey';
    table[1].style.background = 'grey';
    checked.push(table[0],table[1])
    setTimeout(remove, 1000);

    if(checked.length===cards.length-1){
        setTimeout(show, 1000);
    }
}

function notequalCard(){
    console.log(canGet)
    setTimeout(function(){
        table[0].style.fontSize="0px";
        table[1].style.fontSize="0px";
        table[0].style.background = 'url(obrazek.jpeg)';
        table[1].style.background = 'url(obrazek.jpeg)';
        table[1].style.fontSize="0px";
        table=[];
        canGet=true;
        
    },1000)
    
}


function remove(){
    table[0].style.visibility='hidden';
    table[1].style.visibility='hidden';
    table=[];
    canGet=true;
}

function show(){
    document.getElementById("end").style.display='block'
    document.getElementById("rdiv").style.display='block'
}





