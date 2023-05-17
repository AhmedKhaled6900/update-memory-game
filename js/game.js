let iconsContainer = document.querySelector(".icons-container");

let icons = Array.from(iconsContainer.querySelectorAll(".icon"));
let allclicks = document.querySelector(".tries");
let easy = document.querySelector(".easy");
let hard = document.querySelector(".hard");
let startgame = document.querySelector(".start-game");
let intro = document.querySelector(".intro");
startgame.addEventListener("click", function () {
  easy.classList.add("active");
  hard.classList.add("active");
  easy.classList.add("btn");
  hard.classList.add("btn");
});

easy.addEventListener("click", function () {
  clickcounter = 40;
  allclicks.innerHTML = `Remaining tries : ${clickcounter}`;
  intro.classList.add("hide");

});

hard.addEventListener("click", function () {
  clickcounter = 20;
  allclicks.innerHTML = `Remaining tries :  ${clickcounter}`;
  intro.classList.add("hide");
});

let randomNumbers = [icons.length];
randomNumbers = [...icons.keys()];
randomize(randomNumbers);


icons.forEach((icon, index) => {
  icon.style.order = randomNumbers[index];
  icon.addEventListener("click", function () {
    addclasses(icon)
    let donepuzzles = icons.filter((puzzle) => puzzle.classList.contains("done"));
    let result = donepuzzles.length / 2;

    clickcounter--;


    allclicks.innerHTML = `Remaining tries :  ${clickcounter}`;



    if (clickcounter == 0) {
      addclasses(icon)
      icons.forEach((icon) => {
        icon.classList.add("noclick");
      });
      setTimeout(() => {
        let donepuzzles = icons.filter((puzzle) => puzzle.classList.contains("done"));
        let result = donepuzzles.length / 2;
        let over = document.querySelector(".over");
        if(result<=3){
          console.log("failed")
          let failddiv = document.createElement("div");
          failddiv.classList.add("faileddiv");
          over.appendChild(failddiv);
          console.log(failddiv)
          let failedtext = document.createTextNode("You Failed");
         
          failddiv.appendChild(failedtext);
        }
        if(result>=3 && result<7){
          console.log("good")
          let gooddiv = document.createElement("div");
          gooddiv.classList.add("gooddiv");
          over.appendChild(gooddiv);
          console.log(gooddiv)
          let failedtext = document.createTextNode("good");
          gooddiv.appendChild(failedtext);
        }

          // let over = document.querySelector(".over");
          over.classList.add("active");
        
          let span = document.createElement("span")
          // let donepuzzles = icons.filter((puzzle) => puzzle.classList.contains("done"));
      
          span.classList.add("span")
          let solveddiv = document.createElement("div");
          solveddiv.classList.add("solveddiv");
          let solved = document.createTextNode(
            `solved puzzels : `);
      let span2 = document.createElement("span")
      span2.classList.add("span2")
      span2.innerHTML = result
          span.appendChild(solved)
          over.appendChild(solveddiv);
          solveddiv.appendChild(span)
          solveddiv.appendChild(span2);
          let startnewgame =document.createElement("span")
           let btn =document.createElement("button")
           btn.classList.add("btn")
           btn.innerHTML="start new game"
       startnewgame.appendChild(btn)
       over.appendChild(startnewgame)
    btn.addEventListener("click",function(){
      location.reload()
    })
      
     
      }, 10);
      console.log(donepuzzles)

      // let result = donepuzzles.length / 2;

  
    }

  });
 
});



function randomize(array) {
  let current = array.length,
    random;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--,
      ([array[current], array[random]] = [array[random], array[current]]);
  }
}
//###########################
//###########################



// function addclasses(item) {
//   let donepuzzles = icons.filter((puzzle) => puzzle.classList.contains("done"));

//     // start append failed div
//   if (clickcounter == 1) {
//     icons.forEach((icon) => {
//       icon.classList.add("noclick");
//     });
//     if (clickcounter == 1) {
//       let over = document.querySelector(".over");
//       over.classList.add("active");
//       let failddiv = document.createElement("div");
//       failddiv.classList.add("faileddiv");
//       let failedtext = document.createTextNode("You Failed");
//       failddiv.appendChild(failedtext);
//       over.appendChild(failddiv);
//       console.log(failddiv)
//       let solveddiv = document.createElement("div");
//       solveddiv.classList.add("solveddiv");
//       let result = donepuzzles.length / 2;
//       let span2 = document.createElement("span")
//       span2.classList.add("span2")
//       span2.innerHTML=result
//       let solved = document.createTextNode(
//         `solved puzzels : `
//       );
//       let span =document.createElement("span")
//       span.classList.add("span")
//       span.appendChild(solved)
//       over.appendChild(solveddiv);
//       solveddiv.appendChild(span)
//       solveddiv.appendChild(span2);
//  let btn =document.createElement("button")
// let retrytxt=document.createTextNode("Retry")
// btn.appendChild(retrytxt)
// let retrydiv =document.createElement("div")
// retrydiv.appendChild(btn)
// over.appendChild(retrydiv)
// let counter=6
// setInterval(() => {
//   counter--
//   span3.innerHTML=counter
// if (counter<=0){
//   location.reload()
// }
// }, 1000);
// let span3=document.createElement("span")
// span3.classList.add("span3")
// btn .appendChild(span3)
// btn.classList.add("btn")
//     }


//   } else item.classList.add("active");
//   let activeicons = icons.filter((activeicon) =>
//     activeicon.classList.contains("active")
//   );

//     // end append failed div







//   if (activeicons.length === 2) {
//     icons.forEach((ele) => ele.classList.add("noclick"));
//     if (activeicons[0].dataset.icon !== activeicons[1].dataset.icon) {
//       activeicons.forEach((element) => {
//         setTimeout(() => {
//           element.classList.remove("active");
//         }, 500);
//         setTimeout(() => {
//           icons.forEach((icon) => {
//             icon.classList.remove("noclick"), 500;
//           });
//         });
//       });
//     }
//     if (activeicons[0].dataset.icon === activeicons[1].dataset.icon) {
//       activeicons.forEach((element) => {
//         setTimeout(() => {
//           element.classList.remove("active");
//           element.classList.add("done");
//         }, 500);
//         setTimeout(() => {
//           icons.forEach((icon) => {
//             icon.classList.remove("noclick"), 500;
//           });
//         });
//       });
//     }
//   }
//   icons.forEach((icon) => {
//     if (icon.classList.contains("active")) {
//       icon.classList.add("noclick");
//     }
//   });
// }
//######################
//###########################
//##############################


function addclasses(item) {
  // let over = document.querySelector(".over");
  let awetext = document.createTextNode("Awesome")
  let awediv = document.createElement("div")
 
  item.classList.add("active");
  let activeicons = icons.filter((activeicon) =>
    activeicon.classList.contains("active")
  );
  // end append failed div####################### 
  if (activeicons.length === 2) {
    icons.forEach((ele) => ele.classList.add("noclick"));
    if (activeicons[0].dataset.icon !== activeicons[1].dataset.icon) {
      activeicons.forEach((element) => {
        setTimeout(() => {
          element.classList.remove("active");
        }, 500);
        setTimeout(() => {
          icons.forEach((icon) => {
            icon.classList.remove("noclick"), 500;
          });
        });
      });
    }
    if (activeicons[0].dataset.icon === activeicons[1].dataset.icon) {
      activeicons.forEach((element) => {
        setTimeout(() => {
          element.classList.remove("active");
          element.classList.add("done");
        }, 0);
        setTimeout(() => {
          icons.forEach((icon) => {
            icon.classList.remove("noclick");
          });
        });
      });
    }
  }
  icons.forEach((icon) => {
    if (icon.classList.contains("active")) {
      icon.classList.add("noclick");
    }
  });
}
