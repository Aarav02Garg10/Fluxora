
//This is for definition class

const dfn = document.querySelectorAll(.definition h1,h2,h3,h4);
if(dfn){
dfn.forEach(define =>{
    define.insertAdjacentHTML('afterend','<br>');
})
let tag = document.querySelector('.button-special-movetext');
let par = document.createElement('<p>');
par.textContent = tag.textContent;
par.classList.add('text-hide');
tag.insertAdjacentElement('afterend',par);
}
//This is to use fetch api or fetch data from a server.
async function hahoha(fetcher) {
    const data = await fetch(fetcher);
    return data;
}
let yay = (element)=>{
    var ahh = 1;

    while(take(`fetch${ahh}`)){
        let haho = take(`fetch${ahh}`);
        const stringMake = haho.getAttribute('haho');
        const fetched = hahoha(stringMake);
        switch(haho.getAttribute('retrieve')){

            case "parseJSON":
                haho.textContent = JSON.parse(fetched);
                break;

            case "makeJSON":
                haho.textContent = JSON.stringify(fetched);
                break;

            default:
                haho.textContent = fetched;
        }
        ahh++;
    }
}
if(take('incFetch',false)){
    yay();
}
