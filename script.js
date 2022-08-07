let div1 = document.getElementsByTagName('div')[0]
let div2 = document.getElementsByTagName('div')[1]
let div3 = document.getElementsByTagName('div')[2]
let div4 = document.getElementsByTagName('div')[3]
let div5 = document.getElementsByTagName('div')[4]
let div6 = document.getElementsByTagName('div')[5]
let textColor = document.getElementsByTagName('p')[0]
   

  let color1 = function corAleatoria1() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  div1.style.background = `rgba(${r}, ${g}, ${b})`;
  console.log(div1.style.background);

   }
color1();
   

let color2 = function corAleatoria2() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    div2.style.background = `rgba(${r}, ${g}, ${b})`;
     }
  color2();

  let color3 = function corAleatoria3() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    div3.style.background = `rgba(${r}, ${g}, ${b})`;
     }
     color3();

     let color4 = function corAleatoria4() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    div4.style.background = `rgba(${r}, ${g}, ${b})`;
     }

    color4();

    let color5 = function corAleatoria5() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    div5.style.background = `rgba(${r}, ${g}, ${b})`;
     }
    color5();

let color6 = function corAleatoria6() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    div6.style.background = `rgba(${r}, ${g}, ${b})`;
     }
     color6();
 
     function colorText(){
        textColor.innerHTML= div1.style.background
     }

     textColor.innerHTML = div1.style.background  

   