function rollDice1(){ 
     const numOfDice = document.getElementById("numOfDice").value; 
     const Helmet = document.getElementById("Helmet"); 
     const values = [];
     const images = []; 
     
     for(let i = 0; i < numOfDice; i++){ 
         const value = Math.floor(Math.random() * 27) + 1;
         values.push(value); 
         images.push(`<img src="Helmet/${value}.png">`);
   
      console.log(values)
 
     Helmet.innerHTML = images.join(''); 
}}

function rollDice2(){ 
     const numOfDice = document.getElementById("numOfDice").value; 
     const Chestplate = document.getElementById("Chestplate"); 
     const values = [];
     const images = []; 
     
     for(let i = 0; i < numOfDice; i++){ 
         const value = Math.floor(Math.random() * 27) + 1;
         values.push(value); 
         images.push(`<img src="Chestplate/${value}.png">`);
   
      console.log(values)
 
     Chestplate.innerHTML = images.join(''); 
}}

function rollDice3(){ 
     const numOfDice = document.getElementById("numOfDice").value; 
     const Feet = document.getElementById("Feet"); 
     const values = [];
     const images = []; 
     
     for(let i = 0; i < numOfDice; i++){ 
         const value = Math.floor(Math.random() * 27) + 1;
         values.push(value); 
         images.push(`<img src="Boot/${value}.png">`);
   
      console.log(values)
 
     Feet.innerHTML = images.join(''); 
}}

function rollDice4(){ 
     const numOfDice = document.getElementById("numOfDice").value; 
     const Cape = document.getElementById("Cape"); 
     const values = [];
     const images = []; 
     
     for(let i = 0; i < numOfDice; i++){ 
         const value = Math.floor(Math.random() * 14) + 1;
         values.push(value); 
         images.push(`<img src="Cape/${value}.png">`);
   
      console.log(values)
 
     Cape.innerHTML = images.join(''); 
}}

function rollDice5(){ 
     const numOfDice = document.getElementById("numOfDice").value; 
     const Weapon = document.getElementById("Weapon"); 
     const values = [];
     const images = []; 
     
     for(let i = 0; i < numOfDice; i++){ 
         const value = Math.floor(Math.random() * 48) + 1;
         values.push(value); 
         images.push(`<img src="Weapon/${value}.png">`);
   
      console.log(`Weapon ${values}`)
 
     Weapon.innerHTML = images.join(''); 
}}
