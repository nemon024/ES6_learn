//Asynchronous

const { log } = require("async");

/* settimeout
setTimeout(()=>{
  console.log("hello")
  },4000)*/ 


//CALL BACKS funx

/*
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

    //This form of code  is known as callback hell
*/

//PROMISES format
/*
let stocks={
  fruits:["strawberry","graps","banana","apple"],
  liquid:["water","ice"],
  holder:["cone","cup","stick"],
  toppings:["choclate","peanuts"],
  };

  let isShopOpen = 1 ;

  let order = (time , work )=>{
    return new Promise( (resolve, reject )=>{
      if(isShopOpen){
        setTimeout(()=>{
          resolve(work());
        },time)
        
      }
      else{
        reject(console.log("our shop is closed"))
      }
    } )
  }

  order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))

  .then(()=>{
    return order(0,()=>console.log(`production has started`))
  })
  .then(()=>{
    return order(2000, ()=>console.log(`the fruit was chopped`))
  })
  .then(()=>{
    return order(1000, ()=> console.log(`${stocks.liquid[0] } and ${stocks.liquid[1]} was added`))
  })
  .then(()=>{
    return order(1000,()=>console.log(`Start the machine`))
  })
  .then(()=>{
    return order(2000,()=>console.log(`ice cream placed on ${stocks.holder[0]}`))
  })
  .then(()=>{
    return order(3000,()=> console.log(`${stocks.toppings[0]} was selected`)
    )
  })
  .then(()=>{
    return order(1000,()=> console.log(`Ice cream was served`)
    )
  })

.catch(()=>{
  console.log("customer left");
  
})
.finally(()=>{
  console.log("day ended , shop is closed")
})
  */

//ASYNC N AWAIT order
/*let toppingsChoice = () =>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(
          console.log("which topping do you want"));
      },3000);
    }) 
  }

  async function kitchen(){
    console.log("A");
    console.log("B");
    console.log("C");

    await toppingsChoice()
    console.log("D");
    console.log("E");

  }
  kitchen()

  console.log("cleaning the dishes");
  console.log("cleaning the tables");
  console.log("taking the order");
  
   */
  /*let stocks={
  fruits:["strawberry","graps","banana","apple"],
  liquid:["water","ice"],
  holder:["cone","cup","stick"],
  toppings:["choclate","peanuts"],
  };


  let isShopOpen = true;

  function time(ms){
    return new Promise((resolve,reject)=>{
      if(isShopOpen){
       setTimeout(resolve, ms)
      }
      else{
        reject(console.log("Our shop is closed")
        );
      }
    })
  }

  async function kitchen() {
    try{
      await time(2000)
      console.log(`${stocks.fruits[0]}`);

      console.log(`Start the production `);

      await time(2000)
      console.log(`cut the fruit`);

      await time(1000)
      console.log(`${stocks.liquid[0] } and ${stocks.liquid[1]} is added`)
    }
    catch(err){
      console.log(`Customer left due to ${err}`);
      
    }
    finally{
      console.log("day ended, shop is closed")
    }
  }

  kitchen();
  
  

 */


