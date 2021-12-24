const imageTable = document.getElementsByClassName("imagesContainer")[0];
const Start = document.querySelector("button");
let images = new Array();
for(let i =1;i<13;i++){
    let imgDiv = document.createElement("div");
    let newImg = document.createElement("img");
    newImg.src=`./images/unknown.jpeg`;
    newImg.classList.add("image");
    imgDiv.appendChild(newImg);

    imageTable.appendChild(imgDiv);

}
/************************generation des indices pour les numeroter les images************************ */
var buffer = new Array();
var imgIndexes = new Array();
var randomIndexes = new Array();
let startingIndex = 0;
Start.addEventListener("click",e=>{
    buffer=[]
    Start.textContent="Restart"
    imageTable.childNodes.forEach(child=>{
        child.firstChild.style.removeProperty("animation");
        setTimeout(() => {
            child.firstChild.style.borderColor="crimson";
            child.firstChild.src=`./images/unknown.jpeg`;
            child.firstChild.style.animation="animation .5s ease backwards";
        });
    })
    imgIndexes=[]
    while(imgIndexes
    .length<6){
        var r = Math.floor(Math.random()*100+1)%14+1;
        if(imgIndexes
        .indexOf(r)==-1) imgIndexes.push(r);
    }
    imgIndexes =imgIndexes.concat(imgIndexes);
    /************************generation des indices pour melongef*************************** */
    randomIndexes=[]
    while(randomIndexes
    .length<12){
        var e = Math.floor(Math.random()*100)%12;
        if(randomIndexes.indexOf(e)==-1){
            randomIndexes.push(e)
            imageTable.children[randomIndexes.length-1].firstChild.imgIndexCompar=imgIndexes[e];
            imageTable.children[randomIndexes.length-1].firstChild.imgIndex=e;
        }
    }

    if(startingIndex==0){
        start();
        startingIndex+=1;
    }

})

function start(){
    imageTable.childNodes.forEach((img,index)=>{
        img.firstChild.addEventListener("click",()=>{
            Test(img,index);
        })
    })
}

/*********************************************************** */
function Test(img,index){
    console.log(imgIndexes);
    img.firstChild.style.removeProperty("animation")
    setTimeout(() => {
        img.firstChild.style.animation="animation .7s  ease";
        setTimeout(()=>{img.firstChild.src=`./images/${imgIndexes[randomIndexes[index]]}.jpeg`;},300);
        if(img.firstChild.src.toString().slice(29)=="unknown.jpeg") buffer.push([img.firstChild.imgIndexCompar,img.firstChild.imgIndex]);
        if(buffer.length==2){
            if(buffer[0][0]==buffer[1][0] &&buffer[0][1]!=buffer[1][1] ){
                console.log("dkhal")
                buffer=[]
            }else{
                setTimeout(()=>{
                    imageTable.childNodes.forEach(e=>{
                        console.log(e.firstChild.imgIndex)
                        if(e.firstChild.imgIndex == buffer[0][1] ||e.firstChild.imgIndex == buffer[1][1]){
                            console.log([buffer[0][1],buffer[1][1]])
                            e.firstChild.src=`./images/unknown.jpeg`;
                        }
                        });
                        buffer=[]
                },900)
            }
        }
    });
}
