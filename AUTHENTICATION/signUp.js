const checkbox = document.getElementById("agree");
const submitBtn = document.getElementById("submitBtn");

checkbox.addEventListener("change", () => {
    submitBtn.disabled = !checkbox.checked;
});

// You can also add a simple validation alert:
document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Account Created Successfully!");
});