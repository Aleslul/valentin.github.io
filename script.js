let docTitle  = document.title;
window.addEventListener("blur", () =>{
    document.title = "Regresa acá ctmr";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener( 'mouseover', function () {
    const randomX = parseInt(Math.random()*500);
    const randomY = parseInt(Math.random()*500);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
})