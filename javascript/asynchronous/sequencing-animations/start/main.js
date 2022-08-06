const aliceTumbling = [
  {transform : 'rotate(0) scale(1)'},
  {transform: 'rotate(360deg) scale(0)' }

];

const aliceTiming = {
  duration : 2000,
  iterations: 1,
  fill : 'forwards' 

}

const alice1 = document.querySelector('#alice1');
const alice2 = document.querySelector('#alice2');
const alice3 = document.querySelector('#alice3');

/*Aqui comienza la resolucion del problema*/ 
/*TRES MANERA DE EJECUTAR LAS PROMESAS PARA LA ANIMACION*/


alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => { return alice2.animate(aliceTumbling, aliceTiming).finished; })
  .then(() => { return alice3.animate(aliceTumbling, aliceTiming).finished; })
  .catch(error => console.error(`Error animating Alices: ${error}`));
  

//En resumidas palabras, cuando se ejecuta then, se refiere a que lo que se pidio o se invoco/realizo anteriormente, si se cumplio, se va a ejecutar una nueva accion
//y asi sucesivamente con cada nuevo then. el then hace referencia a que "Si lo anterior se completo, entonces.... se ejecuta esto otro"
  /* 
  alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
  .catch(error => console.error(`Error animating Alices: ${error}`));
  /*

  /* TERCER MANERA
  async function animateAlices() {
    try {
      await alice1.animate(aliceTumbling, aliceTiming).finished;
      await alice2.animate(aliceTumbling, aliceTiming).finished;
      await alice3.animate(aliceTumbling, aliceTiming).finished;
    }
    catch (error) {
      console.error(`Error animating Alices: ${error}`);
    }
  }
  
  animateAlices();*/