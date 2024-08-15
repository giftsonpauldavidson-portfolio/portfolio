var index = 0;
var data= ["Digital Marketing", "Teamwork", "Drawing", "Digital Art", "UI/UX Design", "Designing", "HTML", "CSS", "Business Administration", "Management", "Canva", "Figma", "SPSS", "Tally", "Research", "Strategy", "Creativity", "Innovation", "Analysis", "Efficiency", "Proficiency", "Vision", "Dynamism", "Artistry", "Versatility", "Results", "Experience", "Leadership", "Design", "Marketing", "Problem-Solving", "Impact", "Optimization", "Usability", "Aesthetics", "Illustration", "Craftsmanship", "Simplicity", "Sketching", "Graphic", "Responsiveness", "Design System"];

var span= document.querySelector('span');
var section= document.querySelector('section');

function init() {
  let txt = document.createTextNode(data[index]);
  section.dataset.identity = data[index];
  span.innerText = txt.textContent;
  index++;
}

init();

setInterval(
  function(){
    let txt = document.createTextNode(data[index]);
    section.dataset.identity = data[index];
    span.innerText = txt.textContent;
    index++;
    index = index < data.length ?  index++ : 0 ;
  }
, 4501);






