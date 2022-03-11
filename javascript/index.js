// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using Promises
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");getInstruction("mashedPotatoes", 5, (step6) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
      
    }, (error) => console.log(error));
    
  }, (error) => console.log(error));
}, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));


// ...

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 1)
  })
  obtainInstruction('steak', 2)
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 2)
  })
  obtainInstruction('steak', 3)
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 3)
  })
  obtainInstruction('steak', 4)
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 4)
  })
  obtainInstruction('steak', 5)
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 5)
  })
  obtainInstruction('steak', 6)
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 6)
  })
  obtainInstruction('steak', 7)
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction('steak', 7)
  })
  obtainInstruction('steak', 8)
  .then( (step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
    return 'steak is ready!'
  })
  obtainInstruction('steak', 9)
  .then( (step9) => {
    document.querySelector("#steak").innerHTML += `<li>${step9}</li>`
    return obtainInstruction('steak', 9)
  }) .catch((error) => console.log(error))

  // ... Your code here
// ...

// Iteration 3 using async/await
//async function makeBroccoli() {
  const makeBroccoli = async ( ) => {
try {
  for ( let i = 0; i < makeBroccoli.length; i++) {
    let step = await obtainInstruction ('broccoli', i);
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`
  }
} catch (error) {
  console.log (error);
}
  };
  makeBroccoli();
  //... Your code here


// getInstruction("broccoli", 0, (step1) => {
//     document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("broccoli", 1, (step2) => {
//     document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("broccoli", 2, (step3) => {
//     document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("broccoli", 3, (step4) => {
//     document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("broccoli", 4, (step5) => {
//     document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#broccoliImg").removeAttribute("hidden");
//   }, (error) => console.log(error));
// ...

// Bonus 2 - Promise all
// ...
