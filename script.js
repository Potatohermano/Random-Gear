function rollDice1() {
    const numOfDice = document.getElementById("numOfDice").value;
    const Helmet = document.getElementById("Helmet");
    const HelmetMap = document.getElementById("HelmetMap");
    const HelmetMap1 = document.getElementById("HelmetMap1");
    const HelmetMap2 = document.getElementById("HelmetMap2");
    
    HelmetMap.style.display = "none";
    HelmetMap1.style.display = "none";
    HelmetMap2.style.display = "none";

    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 27) + 1;
        images.push(`<img src="Helmet/${value}.png">`);

        Helmet.innerHTML = images.join('');

        if (value >= 1 && value <= 9) {
               HelmetMap.src = `Helmet/${value}.png`;
               HelmetMap.style.display = "block";
               break;
          } 
          else if (value >= 10 && value <= 18) {
               HelmetMap1.src = `Helmet/${value}.png`;
               HelmetMap1.style.display = "block";
               break;
          }
          else if (value >= 19 && value <= 27) {
               HelmetMap2.src = `Helmet/${value}.png`;
               HelmetMap2.style.display = "block";
               break;
          }
    }
}

function rollDice2(){ 
     const numOfDice = document.getElementById("numOfDice").value; 
     const Chestplate = document.getElementById("Chestplate"); 
     const ChestplateMap = document.getElementById("ChestplateMap");
     const ChestplateMap1 = document.getElementById("ChestplateMap1");
     const ChestplateMap2 = document.getElementById("ChestplateMap2");
    
     ChestplateMap.style.display = "none";
     ChestplateMap1.style.display = "none";
     ChestplateMap2.style.display = "none";

     const images = []; 
     
     for (let i = 0; i < numOfDice; i++) {
          const value = Math.floor(Math.random() * 27) + 1;
          images.push(`<img src="Chestplate/${value}.png">`);

          Chestplate.innerHTML = images.join('');

          if (value >= 1 && value <= 9) {
               ChestplateMap.src = `Chestplate/${value}.png`;
               ChestplateMap.style.display = "block";
               break; 
          } 
          else if (value >= 10 && value <= 18) {
               ChestplateMap1.src = `Chestplate/${value}.png`;
               ChestplateMap1.style.display = "block";
               break;
          }
          else if (value >= 19 && value <= 27) {
               ChestplateMap2.src = `Chestplate/${value}.png`;
               ChestplateMap2.style.display = "block";
               break;
          }
     }
}

function rollDice3(){ 
     const numOfDice = document.getElementById("numOfDice").value; 
     const Shoe = document.getElementById("Shoe"); 
     const ShoeMap = document.getElementById("ShoeMap");
     const ShoeMap1 = document.getElementById("ShoeMap1");
     const ShoeMap2 = document.getElementById("ShoeMap2");
    
     ShoeMap.style.display = "none";
     ShoeMap1.style.display = "none";
     ShoeMap2.style.display = "none";

     const images = []; 
     
     for (let i = 0; i < numOfDice; i++) {
          const value = Math.floor(Math.random() * 27) + 1;
          images.push(`<img src="Shoe/${value}.png">`);

          Shoe.innerHTML = images.join('');

          if (value >= 1 && value <= 9) {
               ShoeMap.src = `Shoe/${value}.png`;
               ShoeMap.style.display = "block";
               break; 
          } 
          else if (value >= 10 && value <= 18) {
               ShoeMap1.src = `Shoe/${value}.png`;
               ShoeMap1.style.display = "block";
               break;
          }
          else if (value >= 19 && value <= 27) {
               ShoeMap2.src = `Shoe/${value}.png`;
               ShoeMap2.style.display = "block";
               break;
          }
     }
}

function rollDice4(){ 
     const numOfDice = document.getElementById("numOfDice").value; 
     const Cape = document.getElementById("Cape"); 
     const CapeMap = document.getElementById("CapeMap");

     CapeMap.style.display = "none";

     const images = []; 
     
     for (let i = 0; i < numOfDice; i++) {
          const value = Math.floor(Math.random() * 14) + 1;
          images.push(`<img src="Cape/${value}.png">`);

          if(value == 14){
               rollDice7();
               console.log("Smuggler Cape")
          }
          else if (value <= 13){
               rollDice6();
               console.log("Not Smuggler Cape")
          }

          Cape.innerHTML = images.join('');

          CapeMap.src = `Cape/${value}.png`;
          CapeMap.style.display = "block";

     }

}

function rollHands(){

     const numOfDice = document.getElementById("numOfDice").value; 
     const Weapon = document.getElementById("Weapon");
     const WeaponMap1 = document.getElementById("WeaponMap1");
     const WeaponMap2 = document.getElementById("WeaponMap2");
     const WeaponMap3 = document.getElementById("WeaponMap3");
     const WeaponMap4 = document.getElementById("WeaponMap4");
     const WeaponMap5 = document.getElementById("WeaponMap5");
     const WeaponMap6 = document.getElementById("WeaponMap6");
     const WeaponMap7 = document.getElementById("WeaponMap7");
     const WeaponMap8 = document.getElementById("WeaponMap8");
     const WeaponMap9 = document.getElementById("WeaponMap9");
     const WeaponMap10 = document.getElementById("WeaponMap10");
     const WeaponMap11 = document.getElementById("WeaponMap11");
     const WeaponMap12 = document.getElementById("WeaponMap12");
     const WeaponMap13 = document.getElementById("WeaponMap13");
     const WeaponMap14 = document.getElementById("WeaponMap14");
     const WeaponMap15 = document.getElementById("WeaponMap15");
     const WeaponMap16 = document.getElementById("WeaponMap16");
     const WeaponMap17 = document.getElementById("WeaponMap17");
     const OffHand = document.getElementById("OffHand");  
     const values = [];
     const images = []; 
     const OffHandMap1 = document.getElementById("OffHandMap1");
     const OffHandMap2 = document.getElementById("OffHandMap2");
     const OffHandMap3 = document.getElementById("OffHandMap3");
    
     OffHandMap1.style.display = "none";
     OffHandMap2.style.display = "none";
     OffHandMap3.style.display = "none";
     
     WeaponMap1.style.display = "none";
     WeaponMap2.style.display = "none";
     WeaponMap3.style.display = "none";
     WeaponMap4.style.display = "none";
     WeaponMap5.style.display = "none";
     WeaponMap6.style.display = "none";
     WeaponMap7.style.display = "none";
     WeaponMap8.style.display = "none";
     WeaponMap9.style.display = "none";
     WeaponMap10.style.display = "none";
     WeaponMap11.style.display = "none";
     WeaponMap12.style.display = "none";
     WeaponMap13.style.display = "none";
     WeaponMap14.style.display = "none";
     WeaponMap15.style.display = "none";
     WeaponMap16.style.display = "none";
     WeaponMap17.style.display = "none";

     for(let i = 0; i < numOfDice; i++){ 
         const value = Math.floor(Math.random() * 127) + 1;

          if(value < 93){
               values.push(value); 
               images.push(`<img src="Weapon/${value}.png">`);
          
               console.log(`2hWeapon id:${value}`)
          
               Weapon.innerHTML = images.join(''); 
               OffHand.innerHTML = '';
               if(value <= 7){
                    WeaponMap1.src = `Weapon/${value}.png`;
                    WeaponMap1.style.display = "block";
               }
               else if(value >= 8 && value <= 15){
                    WeaponMap2.src = `Weapon/${value}.png`;
                    WeaponMap2.style.display = "block";
               }
               else if(value >= 16 && value <= 22){
                    WeaponMap3.src = `Weapon/${value}.png`;
                    WeaponMap3.style.display = "block";
               }
               else if(value >= 23 && value <= 26){
                    WeaponMap4.src = `Weapon/${value}.png`;
                    WeaponMap4.style.display = "block";
               }
               else if(value >= 27 && value <= 33){
                    WeaponMap5.src = `Weapon/${value}.png`;
                    WeaponMap5.style.display = "block";
               }
               else if(value >= 34 && value <= 38){
                    WeaponMap6.src = `Weapon/${value}.png`;
                    WeaponMap6.style.display = "block";
               }
               else if(value >= 39 && value <= 41 || value === 95){
                    WeaponMap7.src = `Weapon/${value}.png`;
                    WeaponMap7.style.display = "block";
               }
               else if(value >= 43 && value <= 49){
                    WeaponMap8.src = `Weapon/${value}.png`;
                    WeaponMap8.style.display = "block";
               }
               else if(value >= 50 && value <= 57){
                    WeaponMap9.src = `Weapon/${value}.png`;
                    WeaponMap9.style.display = "block";
               }
               else if(value >= 58 && value <= 62){
                    WeaponMap10.src = `Weapon/${value}.png`;
                    WeaponMap10.style.display = "block";
               }
               else if(value >= 63 && value <= 67){
                    WeaponMap11.src = `Weapon/${value}.png`;
                    WeaponMap11.style.display = "block";
               }
               else if(value >= 68 && value <= 72){
                    WeaponMap12.src = `Weapon/${value}.png`;
                    WeaponMap12.style.display = "block";
               }
               else if(value >= 73 && value <= 78){
                    WeaponMap13.src = `Weapon/${value}.png`;
                    WeaponMap13.style.display = "block";
               }
               else if(value >= 79 && value <= 83){
                    WeaponMap14.src = `Weapon/${value}.png`;
                    WeaponMap14.style.display = "block";
               }
               else if(value >= 84 && value <= 87){
                    WeaponMap15.src = `Weapon/${value}.png`;
                    WeaponMap15.style.display = "block";
               }
               else if(value >= 88 && value <= 92){
                    WeaponMap16.src = `Weapon/${value}.png`;
                    WeaponMap16.style.display = "block";
               }
               else if(value >= 93 || 94 || value >= 96){
                    WeaponMap17.src = `Weapon/${value}.png`;
                    WeaponMap17.style.display = "block";
               }
          }
          else{
               for(let i = 0; i < numOfDice; i++){ 
               const value = Math.floor(Math.random() * 35) + 1;
               values.push(value); 
               images.push(`<img src="Weapon/OneHanded/${value}.png">`);

               console.log(`1hWeapon id:${value}`)

               Weapon.innerHTML = images.join('');
               
               if(value === 10){
                    WeaponMap1.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap1.style.display = "block";
               }
               else if(value === 1){
                    WeaponMap3.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap3.style.display = "block";
               }
               else if(value === 3 || 4 || 6 || 7){
                    WeaponMap4.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap4.style.display = "block";
               }
               else if(value === 9){
                    WeaponMap5.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap5.style.display = "block";
               }
               else if(value === 2 || 5 || 8){
                    WeaponMap6.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap6.style.display = "block";
               }
               else if(value === 11 || 12 || 13 || 14){
                    WeaponMap7.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap7.style.display = "block";
               }
               else if(value === 15 || 16 || 17){
                    WeaponMap10.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap10.style.display = "block";
               }
               else if(value === 18 || 19 || 20){
                    WeaponMap11.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap11.style.display = "block";
               }
               else if(value === 21 || 22 || 23){
                    WeaponMap12.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap12.style.display = "block";
               }
               else if(value === 24 || 25){
                    WeaponMap13.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap13.style.display = "block";
               }
               else if(value === 26 || 27 || 28){
                    WeaponMap14.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap14.style.display = "block";
               }
               else if(value === 29 || 30 || 31 || 32){
                    WeaponMap15.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap15.style.display = "block";
               }
               else if(value === 33 || 34 || 35){
                    WeaponMap16.src = `Weapon/OneHanded/${value}.png`;
                    WeaponMap16.style.display = "block";
               }

               }

               rollDice5();
          }

     }

}

function rollDice5(){
     const numOfDice = document.getElementById("numOfDice").value; 
     const OffHand = document.getElementById("OffHand");  
     const OffHandMap1 = document.getElementById("OffHandMap1");
     const OffHandMap2 = document.getElementById("OffHandMap2");
     const OffHandMap3 = document.getElementById("OffHandMap3");
    
     OffHandMap1.style.display = "none";
     OffHandMap2.style.display = "none";
     OffHandMap3.style.display = "none";

     const images = []; 
     
     for (let i = 0; i < numOfDice; i++) {
          const value = Math.floor(Math.random() * 18) + 1;
          images.push(`<img src="OffHand/${value}.png">`);

          OffHand.innerHTML = images.join('');

          if (value >= 1 && value <= 6) {
               OffHandMap1.src = `OffHand/${value}.png`;
               OffHandMap1.style.display = "block";
               break; 
          } 
          else if (value >= 7 && value <= 12) {
               OffHandMap2.src = `OffHand/${value}.png`;
               OffHandMap2.style.display = "block";
               break;
          }
          else if (value >= 13 && value <= 18) {
               OffHandMap3.src = `OffHand/${value}.png`;
               OffHandMap3.style.display = "block";
               break;
          }
     }
}

function rollDice6(){
     const numOfDice = document.getElementById("numOfDice").value; 
     const Potion = document.getElementById("Potion");  
     const PotionMap = document.getElementById("PotionMap");
     const PotionMap1 = document.getElementById("PotionMap1");

     PotionMap.style.display = "none";
     PotionMap1.style.display = "none";

     const images = []; 
     
     for (let i = 0; i < numOfDice; i++) {
          const value = Math.floor(Math.random() * 11) + 1;
          images.push(`<img src="Potion/${value}.png">`);

          Potion.innerHTML = images.join('');

          PotionMap.src = `Potion/${value}.png`;
          PotionMap.style.display = "block";
     }
}

function rollDice7(){
     const numOfDice = document.getElementById("numOfDice").value; 
     const Potion = document.getElementById("Potion");  
     const PotionMap = document.getElementById("PotionMap");
     const PotionMap1 = document.getElementById("PotionMap1");

     PotionMap.style.display = "none";
     PotionMap1.style.display = "none";

     const images = []; 
     
     for (let i = 0; i < numOfDice; i++) {
          const value = Math.floor(Math.random() * 11) + 1;
          images.push(`<img src="TwoPotions/${value}.png">`);

          Potion.innerHTML = images.join('');

          PotionMap1.src = `TwoPotions/${value}.png`;
          PotionMap1.style.display = "block";
     }
}
