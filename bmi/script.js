const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const error = document.querySelector("#error");
  const result = document.querySelector("#results");
  const note = document.querySelector("#note");

  if (height === "" || height <= 0 || isNaN(height)) {
    error.innerHTML = `${height} Enter valid height`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    error.innerHTML = `${weight} Enter valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = bmi;
    error.innerHTML = "";

    if (bmi < 18.6) {
      document.getElementById("bmi").style.backgroundColor = "red";
      note.innerHTML = ` Under weight`;
      document.querySelector("body").style.backgroundColor = "red";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      document.getElementById("bmi").style.backgroundColor = "green";
      note.innerHTML = ` Average`;
      document.querySelector("body").style.backgroundColor = "green";
    } else if (bmi > 24.9) {
      document.getElementById("bmi").style.backgroundColor = "red";
      note.innerHTML = ` Over weight`;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
