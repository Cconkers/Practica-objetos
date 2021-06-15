const perro = {
    saluda: "¡Guaugh!",
    name: "Dodge",
    clase: "Dogo",
    mamifero: true,
    ave: false,
       saluda() {
          return "Saluda: " + "¡Guaugh!";
      },
      descripcion() {
          return "Descripción: " + this.name + ' - ' + this.clase; 
      },
      esMamifero() {
          return "¿Es mamífero?: " + this.mamifero;
      },
      esAve(){
         return "¿Es ave?: " + this.ave; 
      },
  };
  
  
  document.getElementById("mostrar").innerHTML = perro.saluda() + "<br>" +  perro.descripcion() + "<br>" + perro.esMamifero() + "<br>" + perro.esAve();

  console.log(perro.saluda());
  console.log(perro.descripcion());
  console.log(perro.esMamifero());
  console.log(perro.esAve());
  
  
  const humano = {
    saludar: "¡Hola!",
    name: "Paco",
    clase: "Humano",
    mamifero: true,
    ave: false,
       saluda() {
          return "Saluda: " + this.saludar;
      },
      descripcion() {
          return "Descripción: " + this.name + ' - ' + this.clase; 
      },
      esMamifero() {
          return "¿Es mamífero?: " + this.mamifero;
      },
      esAve(){
         return "¿Es ave?: " + this.ave; 
      },
  };
  

  console.log(humano.saluda())
  console.log(humano.descripcion())
  console.log(humano.esMamifero())
  console.log(humano.esAve())
  
  const pajaro = {
    saludar: "¡Faltaba el punto y coma!",
    name: "Perico",
    clase: "Loro",
    mamifero: false,
    ave: true,
       saluda() {
          return "Saluda: " + this.saludar;
      },
      descripcion() {
          return "Descripción: " + this.name + ' - ' + this.clase; 
      },
      esMamifero() {
          return "¿Es mamífero?: " + this.mamifero;
      },
      esAve(){
         return "¿Es ave?: " + this.ave; 
      },
  };
  
  console.log(pajaro.saluda())
  console.log(pajaro.descripcion())
  console.log(pajaro.esMamifero())
  console.log(pajaro.esAve())

  document.getElementById("mostrar").innerHTML = perro.saluda() + "<br>" +  perro.descripcion() + "<br>" + perro.esMamifero() + "<br>" + perro.esAve() + "<br>" + "<br>" + humano.saluda() + "<br>" +  humano.descripcion() + "<br>" + humano.esMamifero() + "<br>" + humano.esAve() + "<br>" + "<br>" + pajaro.saluda() + "<br>" +  pajaro.descripcion() + "<br>" + pajaro.esMamifero() + "<br>" + pajaro.esAve();