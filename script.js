const button = document.getElementById('play');
const chordsModal = document.getElementById('insert-chords-modal');
const insertChordsBtn = document.getElementById('insert-chords-btn')
// figuring frets variable
const eString = document.getElementById('E-tab');
const fFret = document.getElementById('first-fret');
const Etab = parseFloat(eString.getAttribute("x2"));
const fret = parseFloat(fFret.getAttribute("x2"));
const sFret = Etab - fret
// svg container
const svgContainer = document.getElementById('svg-container')

chordsModal.style.display = "none";

button.addEventListener("click", function(){
    console.log('e6');
    const e6 = new Audio('assets/guitar-sounds/default-sounds/e6.wav');
    e6.play();    
})

insertChordsBtn.addEventListener("click", function(){
    console.log('click insert');
    chordsModal.style.display = "block";
})

svgContainer.addEventListener('click', (event) => {
    const x = event.offsetX
    const y = event.offsetY
    console.log(`x: ${x} and y: ${y}`)

    if(x > 113){
        console.log('im in first fret');
        console.log(x)
        if(y >= 0 && y < 10 ){
            console.log('im in e string')
            const e1 = new Audio('assets/guitar-sounds/first-fret-sounds/f1E.wav');
            e1.play()
        }
        if(y >= 10 && y < 20){
            console.log('im in a string')
            const a = new Audio('assets/guitar-sounds/first-fret-sounds/f1A.wav');
            a.play()
        }
    }
})

