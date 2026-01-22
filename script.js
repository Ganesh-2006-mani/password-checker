const commonPasswords = ["password", "123456", "qwerty", "admin"];

function checkPassword() {
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    let score = 0;

    const lengthRule = password.length >= 8;
    const upperRule = /[A-Z]/.test(password);
    const lowerRule = /[a-z]/.test(password);
    const numberRule = /[0-9]/.test(password);
    const specialRule = /[^A-Za-z0-9]/.test(password);
    const commonRule = !commonPasswords.includes(password.toLowerCase());

    updateRule("length", lengthRule);
    updateRule("upper", upperRule);
    updateRule("lower", lowerRule);
    updateRule("number", numberRule);
    updateRule("special", specialRule);

    if (lengthRule) score++;
    if (upperRule) score++;
    if (lowerRule) score++;
    if (numberRule) score++;
    if (specialRule) score++;

    if (!commonRule) {
        result.textContent = "Very Weak (Common Password)";
        result.style.color = "red";
        return;
    }

    if (score <= 2) {
        result.textContent = "Weak Password";
        result.style.color = "red";
    } else if (score <= 4) {
        result.textContent = "Medium Password";
        result.style.color = "orange";
    } else {
        result.textContent = "Strong Password";
        result.style.color = "green";
    }
}

function updateRule(id, condition) {
    const element = document.getElementById(id);
    element.className = condition ? "valid" : "invalid";
}
