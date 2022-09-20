/* obtener las referencias */
const steps = document.querySelectorAll(".step");
const bar = document.getElementById("bar");
const prevButton = document.getElementById("button-prev");
const nextButton = document.getElementById("button-next");

/* guardar el paso den el que estamos */
let currentStep = 1; //comiensa por el 1 y guarda los cambios en esta varible

/* escuchar el boton  next*/
nextButton.addEventListener('click', () => {
  if (currentStep < steps.length) {
    currentStep++;
    updateSteps();
  }

});
/* escuchar el boton  prev*/
prevButton.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateSteps();
  }
});

function updateSteps() {
  //actualizar pasos
  steps.forEach((step, index) => {//valor acumulado y nuevo valor 
    if (index < currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  //actualizar barra
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
  bar.style.width = progress + "%";
  console.log(progress)

  /* control de botones */
  if (currentStep === steps.length) {
    nextButton.disabled = true;
  } else if (currentStep === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = nextButton.disabled = false;
  }
}


