/*document.addEventListener("DOMContentLoaded", () => {
    let linksCollection = document.querySelectorAll('header nav ul li a');
    linksCollection.forEach((link)=> {
        link.addEventListener("click", (e) => {
            
            alert("Navegara a " + e.target.href);
        });
    })
});*/

document.addEventListener("DOMContentLoaded", () => {
    let btnLeft= null;
    let btnRight = null;
    
    const track = document.querySelector('.track');
    let currentSlide=0;
    const slides = track.querySelectorAll('.hero-panel');
    let nav = null;
    const slideTopLimit=slides.length-1;
    let direction= 1; //1=derecha, -1=izquierda
    const waitingTime=3000; //3 segundos 3*1000
    const carruzel = document.querySelector(".carruzel");
    console.log("slides found: ", slides);
    let timeoutID=null

    //se puede declarar funciones dentro de otra funcion
    function moveSlide(){
        let nextSlide = currentSlide + direction;
        if(nextSlide < 0){
            nextSlide = 1;
            direction = 1;
        }

        if (nextSlide>slideTopLimit){
            nextSlide=slideTopLimit-1;
            direction=-1;
        }
        renderSlide(nextSlide);
        
    }

    function renderSlide(moveTo){
        if(timeoutID){
            clearTimeout(timeoutID);
        }
        track.style.transform = `translateX(calc(100vw * ${moveTo*-1} )) `;
        
        nav.children[currentSlide].classList.remove('active');
        nav.children[moveTo].classList.add('active');
        
        currentSlide=moveTo;
        tickFunction();
    }

    function renderNavigation() {
        btnLeft = document.createElement('BUTTON');
        btnLeft.textContent = "<";
        btnLeft.classList.add("btn-left");
        btnLeft.addEventListener('click', ()=>{
            if(currentSlide > 0) {
                renderSlide(currentSlide -1);
            }
        });
        btnRight = document.createElement('BUTTON');
        btnRight.textContent = ">";
        btnRight.classList.add("btn-right");
        btnRight.addEventListener('click', ()=>{
            if(currentSlide < slideTopLimit) {
                renderSlide(currentSlide + 1);
            }
        });
        carruzel.appendChild(btnLeft);
        carruzel.appendChild(btnRight);


        nav = document.createElement("DIV");
        nav.classList.add('nav');
        slides.forEach(
            (slide, index)=>{
                const btn = document.createElement("BUTTON");
                btn.textContent = (index + 1);
                btn.addEventListener('click', ()=>{
                    renderSlide(index);
                });
                nav.appendChild(btn);
            }
        );
        carruzel.appendChild(nav);
    }

    const tickFunction = () => {
        timeoutID = setTimeout(moveSlide, waitingTime)
            
        
    }
    renderNavigation();
    tickFunction();

});
