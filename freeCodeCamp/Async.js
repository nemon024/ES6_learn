//Asynchronous

/* settimeout
setTimeout(()=>{
  console.log("hello")
  },4000)*/ 


//CALL BACKS funx

/*
*/

let stocks={
  fruits:["strawberry","graps","banana","apple"],
  liquid:["water","ice"],
  holder:["cone","cup","stick"],
  toppings:["choclate","peanuts"],
  };
  console.log(stocks.fruits[2]);
  
  
  let order = (Fruit_name,call_production)=>{
    console.log("order placed, please call production");
    setTimeout(()=>{
      console.log(`${stocks.fruits[Fruit_name]}was selected`);
      call_production();
      },2000);
    
    };
    
    let production=()=>{
      setTimeout(()=>{
         console.log("order received, starting production");
          setTimeout(()=>{
            console.log("the fruit has been chopped")
            
          
          setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
          
            setTimeout(()=>{
            console.log("the was been started");

              setTimeout(()=>{
              console.log(` ice cream was placed on ${stocks.holder[0]}`);

                setTimeout(()=>{
                console.log(`Topping was choosen ${stocks.toppings[0]} and added`)

                  setTimeout(()=>{
                    console.log(`Served Ice cream`);
                    
                  },2000)
                },3000)
              },2000)
            },2000)
          },1000)
        },2000);
         
         },0);
     
    };
    
    
    order(0,production);