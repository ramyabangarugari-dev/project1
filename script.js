function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const resultDiv = document.getElementById("result");

  if (!dobInput) {
    resultDiv.textContent = "Please enter your date of birth.";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    resultDiv.textContent = "Date of birth cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // Adjust for negative values
  if (days < 0) {
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonth;
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  resultDiv.textContent = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
}
