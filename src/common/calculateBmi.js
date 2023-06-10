function calculateBmi(height, weight) {
  height = height / 100;
  let result = weight / (height * height);
  if (result < 16) {
    return `Your BMI is ${result.toFixed(2)} Underweight (Severe thinness)`;
  }
  if (result >= 16.0 && result <= 16.9) {
    return `Your BMI is ${result.toFixed(2)} Underweight (Moderate thinness)`;
  }
  if (result >= 17.0 && result <= 18.4) {
    return `Your BMI is ${result.toFixed(2)} Underweight (Mild thinness)`;
  }
  if (result >= 18.5 && result <= 24.9) {
    return `Your BMI is ${result.toFixed(2)} Normal range`;
  }
  if (result >= 25.0 && result <= 29.9) {
    return `Your BMI is ${result.toFixed(2)} Overweight (Pre-obese)`;
  }
  if (result >= 30.0 && result <= 34.9) {
    return `Your BMI is ${result.toFixed(2)} Obese (Class I)`;
  }
  if (result >= 30.0 && result <= 34.9) {
    return `Your BMI is ${result.toFixed(2)} Obese (Class II)`;
  } else {
    return `Your BMI is ${result.toFixed(2)} Obese (Class III)`;
  }

  //result.toFixed(2);
}

export default calculateBmi;
