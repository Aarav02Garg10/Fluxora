/**
 * 
 * @param {string} cdn - The another file cdn to add in script.
 * @returns {void} Nothing
 */
let main = async cdn => {
    let data = await fetch(cdn);
    let element = document.createElement('script');
    element.src = 'https://cdnjs.cloudflare.com/ajax/libs/js-sha3/0.9.3/sha3.min.js';
    document.body.appendChild(element);
    const checkHash = sha3.shake128(data,196);
    const hash = '7b54cd13d835ab32d0e0c6114f5ee1f9d27380069177de4a';
    if(checkHash !== hash)
        console.error('There is a error with the framework. Report to the website maker.');
    else{
        let Framework = document.createElement('script');
        Framework.src = cdn;
        document.body.appendChild(Framework)
    }
}
main('https://cdn.jsdelivr.net/gh/Aarav02Garg10/Fluxora@v1.0.2/v1.0.0/Main.js');
