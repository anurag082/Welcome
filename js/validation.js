
document.addEventListener("DOMContentLoaded", () => {
  // Get form elements
  const nameInput = document.getElementById("name");
  const middleInitialInput = document.getElementById("m-initial");
  const lastNameInput = document.getElementById("last-name");
  const matriculationInput = document.getElementById("matriculation");
  const emailInput = document.querySelector("input[type='email']");
  const countryDropdown = document.getElementById("countryDropdown");
  const programDropdown = document.getElementById("program");
  const dateInput = document.getElementById("started");

    // Event listener for alphabetic-only input
    const enforceAlphaOnly = (input) => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/[^a-zA-Z]/g, ""); // Remove non-alphabetic characters
        });
    };
    
    matriculationInput.addEventListener("input", () => {
        matriculationInput.value = matriculationInput.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    });
    
    enforceAlphaOnly(nameInput);
    enforceAlphaOnly(middleInitialInput);
    enforceAlphaOnly(lastNameInput);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 
  emailInput.addEventListener("input", () => validateEmail(emailInput));

  // Populate the country dropdown  
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", 
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", 
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", 
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", 
    "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", 
    "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", 
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", 
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
    "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", 
    "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", 
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", 
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", 
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", 
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", 
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", 
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", 
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", 
    "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", 
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", 
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", 
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", 
    "Zambia", "Zimbabwe"
];
  populateDropdown(countryDropdown, countries);

  // Populate the graduate program dropdown
  const programs = ["M.Sc. Computer Science", "B.Sc. Business Administration", "M.Sc. Mechanical Engineering"];
  populateDropdown(programDropdown, programs);



  

  function validateEmail(input) {
      if (!emailPattern.test(input.value)) {
          input.setCustomValidity("Enter a valid email address.");
      } else {
          input.setCustomValidity("");
      }
      input.reportValidity();
  }

  // Populate dropdown with options
  function populateDropdown(dropdown, options) {
      options.forEach(option => {
          const opt = document.createElement("option");
          opt.value = option;
          opt.textContent = option;
          dropdown.appendChild(opt);
      });
  }

  // Ensure a date is selected
  dateInput.addEventListener("change", () => {
      if (!dateInput.value) {
          dateInput.setCustomValidity("Please select a start date.");
      } else {
          dateInput.setCustomValidity("");
      }
      dateInput.reportValidity();
  });

  // Ensure a country and program are selected
  countryDropdown.addEventListener("change", () => {
      if (!countryDropdown.value) {
          countryDropdown.setCustomValidity("Please select a country.");
      } else {
          countryDropdown.setCustomValidity("");
      }
      countryDropdown.reportValidity();
  });

  programDropdown.addEventListener("change", () => {
      if (!programDropdown.value) {
          programDropdown.setCustomValidity("Please select a graduate program.");
      } else {
          programDropdown.setCustomValidity("");
      }
      programDropdown.reportValidity();
  });

  const checkboxes = document.querySelectorAll(".graduateoption input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                // Uncheck all other checkboxes
                checkboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
});