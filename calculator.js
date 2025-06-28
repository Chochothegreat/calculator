document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const day = document.getElementById("day").value.trim();
  const month = document.getElementById("month").value.trim();
  const year = document.getElementById("year").value.trim();

  if (!name || !day || !month || !year) {
    alert("Please fill in all fields!");
    return;
  }

  if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
    alert("Please enter a valid date.");
    return;
  }

  const birthDate = new Date(`${year}-${month}-${day}`);
  const today = new Date();

  if (birthDate > today) {
    alert("Birth date cannot be in the future.");
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById("displayName").textContent = name;
  document.getElementById("years").textContent = ageYears;
  document.getElementById("months").textContent = ageMonths;
  document.getElementById("days").textContent = ageDays;
});
