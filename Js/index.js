//Gender

let gender = document.querySelectorAll(".gender-pic");
gender = [...gender]; // converting nodelist to array


for(let i = 0; i<gender.length; i++){
 
    gender[i].addEventListener("click" , function(){
    
     if(gender[i].value == "male"){
            gender[i].classList.add('click'); //adding the class to the button which is selected
            gender[i+1].classList.remove('click'); //removing the class from  the next button 
            
          }

          else if(gender[i].value== "female"){
            gender[i].classList.add('click'); //adding the class to the button which is selected
            gender[i-1].classList.remove('click'); //removing the class from  the prev button 
           
          }

    });
   
   
}



// Age

let age = 0;

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
    window.localStorage.setItem("finalAge" , value);
}

age = localStorage.getItem("finalAge"); //final age


//Weight

let weight = 0;

function Slide(value) {
    document.getElementById('weightRange').innerHTML = value + "kg";
    window.localStorage.setItem("finalWeight" , value);
}
weight = localStorage.getItem("finalWeight"); //final weight



//height
let scale = document.querySelectorAll(".height-choice input");
scale = [...scale];

let height = document.querySelector(".height-range input");


let finalScale = [];

  for(let i = 0; i<scale.length; i++){
  
    scale[i].addEventListener("click", function(){
    
      // cetimeter part of the scale
        if(scale[i].value == "CM"){
          
          scale[i].classList.add('select'); //adding the class to the button which is selected
          scale[i+1].classList.remove('select');
          height.max = 300;
          height.min = 40;
          height.value = 220;
          heightRange(220);
          window.localStorage.setItem("cmScale" , scale[0].value);
         
        }
        //feet part of the scale
        else if(scale[i].value == "Feet"){
          
          scale[i].classList.add('select'); //adding the class to the button which is selected
          scale[i-1].classList.remove('select'); //adding the class to the button which is selected  
          height.min = 1; 
          height.max = 12;
          height.value = 2;
          heightRange(2);
          window.localStorage.setItem("feetScale" , scale[1].value);
         
         
        }

        if(scale[i].value == "CM"){
          finalScale[0] = window.localStorage.getItem("cmScale");
        }

        else if(scale[i].value == "Feet"){
          finalScale[0] = window.localStorage.getItem("feetScale");
        } 
 
       
    });

   
     
  }



function heightRange(value){
    document.querySelector(".height-value").innerHTML = value;
    window.localStorage.setItem("finalHeight" , value);
}
hei = window.localStorage.getItem("finalHeight"); //final height

//bmi calculation
let bmi = 0;
function bmiCalculate(){
 
    bmi = (  weight / (hei * hei) ) * 10000 ;
    bmi = Math.round(bmi * 10) / 10;
    document.querySelector("#heightDisplay").innerHTML = hei + "cm";


   if(hei >= 1 && hei <= 12){

    h = hei * 30.48;
    bmi = (  weight / (h * h) ) * 10000 ;
    bmi = Math.round(bmi * 10) / 10;

    document.querySelector("#heightDisplay").innerHTML = hei + "feet";
  }

  if(bmi <= 18.5){
    document.querySelector("#bmiValue").innerHTML = "Underweight";
  }
  else if(bmi > 18.5 && bmi <= 24.9){
    document.querySelector("#bmiValue").innerHTML = "Normal";
  }
  if(bmi >= 25 && bmi <= 29.9){
    document.querySelector("#bmiValue").innerHTML = "Overweight";
  }
  if(bmi > 30){
    document.querySelector("#bmiValue").innerHTML = "Obesity";
  }
  document.querySelector("#bmiDisplay").innerHTML = bmi;

}
bmiCalculate();

document.querySelector("#ageDisplay").innerHTML = age;
document.querySelector("#weightDisplay").innerHTML = weight + "kg";

document.querySelector("#genderDisplay").innerHTML = gen;

// pop-up
function bmiDetails(){
    var popup = document.getElementById("Popup");
    popup.classList.toggle("show");
}




