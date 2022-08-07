let div1 = document.getElementsByTagName('div')[0]
let div2 = document.getElementsByTagName('div')[1]
let div3 = document.getElementsByTagName('div')[2]
let div4 = document.getElementsByTagName('div')[3]
let div5 = document.getElementsByTagName('div')[4]
let div6 = document.getElementsByTagName('div')[5]
let textColor = document.getElementsByTagName('p')[0]
let answer = document.getElementById('answer')
   

  let color1 = function corAleatoria1() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  div1.style.background = `rgba(${r}, ${g}, ${b})`;

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
 
     sessionStorage.setItem('certo', (Math.random()*6))

     let ramdom = function colorText(){
        
        let test = Math.floor(Math.random() * 6);
        aleatorio = document.getElementsByClassName('ball')[test]
        textColor.innerHTML= aleatorio.style.background
        
    }
      ramdom() 

      div1.addEventListener('click', function (object) {
       let select = object.target.style.background
       if (select === textColor.innerHTML) {
        answer.innerHTML= 'Acertou!'
        sessionStorage.setItem('resultado','acertou')}
        else {
            answer.innerHTML= 'Errou! Tente novamente!!'
            sessionStorage.setItem('resultado','errou')
            
        }
       })
       div2.addEventListener('click', function (object) {
        let select = object.target.style.background
        if (select === textColor.innerHTML) {
            answer.innerHTML= 'Acertou!'
            sessionStorage.setItem('resultado','acertou')}
            else {
                answer.innerHTML= 'Errou! Tente novamente!!'
                sessionStorage.setItem('resultado','errou')
                
            }
           })
        div3.addEventListener('click', function (object) {
            let select = object.target.style.background
            if (select === textColor.innerHTML) {
                answer.innerHTML= 'Acertou!'
                sessionStorage.setItem('resultado','acertou')}
                else {
                    answer.innerHTML= 'Errou! Tente novamente!!'
                    sessionStorage.setItem('resultado','errou')
                    
                }
               })
            div4.addEventListener('click', function (object) {
                let select = object.target.style.background
                if (select === textColor.innerHTML) {
                    answer.innerHTML= 'Acertou!'
                    sessionStorage.setItem('resultado','acertou')}
                    else {
                        answer.innerHTML= 'Errou! Tente novamente!!'
                        sessionStorage.setItem('resultado','errou')
                        
                    }
                   })
                div5.addEventListener('click', function (object) {
                    let select = object.target.style.background
                    if (select === textColor.innerHTML) {
                        answer.innerHTML= 'Acertou!'
                        sessionStorage.setItem('resultado','acertou')}
                        else {
                            answer.innerHTML= 'Errou! Tente novamente!!'
                            sessionStorage.setItem('resultado','errou')
                            
                        }
                       })
                    div6.addEventListener('click', function (object) {
                        let select = object.target.style.background
                        if (select === textColor.innerHTML) {
                            answer.innerHTML= 'Acertou!'
                            sessionStorage.setItem('resultado','acertou')}
                            else {
                                answer.innerHTML= 'Errou! Tente novamente!!'
                                sessionStorage.setItem('resultado','errou')
                                
                            }
                           })


      
    


   