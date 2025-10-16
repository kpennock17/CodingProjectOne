document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const commentsInput = document.getElementById("comments");
  const form = document.querySelector(".feedback-form");
  const feedbackDisplay = document.getElementById("feedbackDisplay");
  const charCounter = document.createElement("small");
  
  commentsInput.insertAdjacentElement("afterend", charCounter);
  commentsInput.addEventListener("input", () => {
    const count = commentsInput.value.length;
    charCounter.textContent = `Characters: ${count}`;
  });
});

