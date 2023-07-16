// rechargebtn = document.querySelector('.bb');
// rechargemodel = document.getElementById('#exampleModal');

// rechargebtn.onClick = function()
// {
    
// element.style.display ='none';
// }


// document.getElementById('btn').addEventListener('click', function() {
//     var modelElement = document.getElementById('exampleModal');
//     modelElement.style.display = 'none';
//   });

// document.getElementById('btn').addEventListener('click', function() {
//     $('#exampleModal').modal('hide');
//   });
  
  // document.getElementById('buttonvalue').addEventListener('click', function() {
  //   var buttonvalue = this.innerHTML;
  //   document.getElementById('inputField').value = buttonvalue;
  // });

document.getElementById('inputField2').addEventListener('input', function() {
    var inputValue = this.value;
    document.getElementById('outputElement').textContent = inputValue;
  });

document.getElementById('inputField').addEventListener('input', function() {
    var inputValue2 = this.value;
    document.getElementById('coinfeild').textContent = inputValue2 + 'Coins';
    document.getElementById('coinfeild2').textContent = inputValue2 + 'Coins';
  });

// var total = document.getElementById('totalsum');
//    total = inputValue2 * 3.5;
document.getElementById('inputField').addEventListener('input', function() {
    var inputValue3 = parseFloat(this.value);
    var result = inputValue3 * 3.5;
    document.getElementById('totalsum1').textContent = result + '$';
    document.getElementById('totalsum2').textContent = result  + '$';
    document.getElementById('totalsum3').textContent = result  + '$';
    document.getElementById('totalsum4').textContent = result   + '$' + 'Total';
  });
  
//   var seconds = 15;

// function countdown() {
//   document.getElementById('timer').textContent = seconds;
  
//   if (seconds === 0) {
//     $('#example2').modal('hide');
//   } else {
//     seconds--;
//     setTimeout(countdown, 10000);
//   }
// }

// countdown();
// var seconds = 4;
// var timerInterval;

// function startTimer() {
//   document.getElementById('timer').textContent = seconds;
//   timerInterval = setInterval(countdown, 1000);
// }



// document.getElementById('btn3').addEventListener('click', function() {

//   // seconds--;
//   document.getElementById('timer').textContent = seconds;
//   if (seconds === 0) {
//     // clearInterval(timerInterval);
//     $('#example2').modal('hide');
//   } 
// }
// );


document.getElementById('btn3').addEventListener('click', function() {
  // $('#example').modal('hide');
  $('#example2').modal('show');
  var seconds = 4;

  var countdownInterval = setInterval(function() {
    document.getElementById('timer').textContent = seconds;
    seconds--;

    if (seconds < 0) {
      clearInterval(countdownInterval);
      // $('#example2').modal('hide');
      $('#example4').modal('show');
      
    }
  }, 1000);
});

// $('#example2').on('hidden.bs.modal', function() {
//   clearInterval(countdownInterval);
// });

 
  


// var spans = document.querySelectorAll('#number #buttonvalue');
// var inputFields = document.getElementById('inputField');

// for (var i = 0; i < spans.length; i++) {
//   inputFields[i].value = spans[i].textContent;
// }
// const spans = document.querySelectorAll('#number #buttonvalue');
// const resultInput = document.getElementById("inputField");

// spans.forEach(function() {
//   spans.addEventListener("click", function() {

//  // Get the value from the calculator element's data-value attribute
//  const value = spans.target.textContent;
//  // Set the value to the result input field
//  resultInput.value = value;

    
//   });
// });

const closenumber = document.getElementById('closenumber');
closenumber.onclick = function(){
  resultInput.value = " ";
  document.getElementById('totalsum1').textContent= " ";
  document.getElementById('totalsum2').textContent= " ";
  document.getElementById('totalsum3').textContent= " ";
  document.getElementById('totalsum4').textContent= " ";
 
}
// Get the elements and the result input field
const elements = document.querySelectorAll("#buttonvalue");
const resultInput = document.getElementById("inputField");

// Function to handle element click
function handleClick(event) {
  const clickedElement = event.target;
  const elementValue = clickedElement.textContent;
  //  let numberFloat;
  // //  if ( totalsum2 === "0") {
  // // numberFloat = 0;
  // // } else {
  // numberFloat = parseFloat( totalsum2);
  
  document.getElementById('totalsum1').textContent = resultInput.value*3.5 + '$';
  document.getElementById('totalsum2').textContent = resultInput.value*3.5  + '$';
  document.getElementById('totalsum3').textContent = resultInput.value*3.5  + '$';
  document.getElementById('totalsum4').textContent = resultInput.value*3.5   + '$' + 'Total';
  document.getElementById('coinfeild').textContent =  resultInput.value + 'Coins';
  document.getElementById('coinfeild2').textContent =  resultInput.value + 'Coins';
  // Write the element value to the input field
  resultInput.value += elementValue;
}

// Attach click event listener to each element
elements.forEach(function(element) {
  element.addEventListener("click", handleClick);
});



// // Add a click event listener to the calculator element
// spans.addEventListener('click', function() {
//   // Get the value from the calculator element's data-value attribute
//   const value = spans.getAttribute("data-value");

//   // Set the value to the result input field
//   resultInput.value = value;
// });



$('#exampleModal').on('shown.bs.modal', function() {
  $('#inputField').focus();
});


// document.getElementById('showmodel1').addEventListener('click', function() {
//   $('#exampleModal').modal('show');
// });

// document.getElementById('showmodel2').addEventListener('click', function() {
//   $('#exampleModal').modal('hide');
//   $('#example').modal('show');
// });
document.getElementById('custommodel').addEventListener('click', function() {
  $('#custommodel').css('border','1px solid yellow')
  $('#exampleModal').modal('show');

});

document.getElementById('showModal1').addEventListener('click', function() {
  $('#exampleModal').modal('show');
});

document.getElementById('showModal2').addEventListener('click', function() {
  $('#exampleModal').modal('hide');
  $('#example').modal('show');
});

// document.getElementById('btn3').addEventListener('click', function() {
//   // $('#example').modal('hide');
//   // $('#example2').modal('show');
// });
document.getElementById('btn4').addEventListener('click', function() {
     $('#exampleModal').modal('hide');
      $('#example').modal('hide');
     $('#example2').modal('hide');
     $('#exampl4').modal('hide'); 
     $('.show').modal('hide'); 
 
});
