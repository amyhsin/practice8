// let scoreInput = document.getElementById("scoreInput");
// if (scoreInput) {
//   let score = document.getElementById("scoreInput").value;
//   scoreInput.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       if (score) {
//         submitScore();
//       }
//     }
//   });
// }
// function submitScore() {
//   let score = document.getElementById("scoreInput").value;
//   let res = "";

//   if (!score) {
//     res = "Please enter your score!";
//   } else {
//     if (score >= 60) {
//       res = `Congratulations! You got ${score} points. You have passed the exam.`;
//     } else {
//       res = `Failed. You got ${score} points.`;
//     }
//     document.getElementById("scoreInput").value = "";
//   }

//   document.getElementById("scoreResponse").innerHTML = res;
// }

// function submitBloodType() {
//   let bloodInput = document.getElementById("bloodInput").value;
//   let res = "";

//   const blood = bloodInput.toUpperCase();

//   if (blood === "A") {
//     res = "Type A";
//   } else if (blood === "B") {
//     res = "Type B";
//   } else if (blood === "O") {
//     res = "Type O";
//   } else if (blood === "AB") {
//     res = "Type AB";
//   } else {
//     res = "No blood type matched!";
//   }

//   if (!bloodInput) {
//     res = "Please enter your blood type!"
//   }

//   document.getElementById("bloodInput").value = "";

//   document.getElementById("bloodResponse").innerHTML = res;
// }

function submit() {
  let heightInput = document.getElementById("heightInput")?.value;
  let weightInput = document.getElementById("weightInput")?.value;
  let res = "";

  if (!heightInput || !weightInput) {
    res = "Please enter the data!";
  } else {
    const bmi = (weightInput / Math.pow(heightInput / 100, 2)).toFixed(2);

    if (bmi < 18.5) {
      res = `Your BMI is ${bmi}. You are too thin.`;
    } else if (bmi >= 18.5 && bmi < 24) {
      res = `Your BMI is ${bmi}. You are normal.`;
    } else if (bmi >= 24 && bmi < 27) {
      res = `Your BMI is ${bmi}. You are overweight.`;
    } else {
      res = `Your BMI is ${bmi}. You are obese.`;
    }
  }

  document.getElementById("response").innerHTML = res;
}
