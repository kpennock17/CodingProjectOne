document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const commentsInput = document.getElementById('comments');
  const submitButton = document.getElementById('submit'); 
  const form = document.querySelector('form'); 
  
 
  const feedbackDisplay = document.querySelector('section'); 
  
 
  const charCounter = document.createElement('small');
  charCounter.className = 'char-counter-text'; 
  commentsInput.insertAdjacentElement("afterend", charCounter);
  

  const updateCharCount = () => {
    const count = commentsInput.value.length;
    charCounter.textContent = `Characters: ${count}`;
  };
  
  updateCharCount(); 
  commentsInput.addEventListener("input", updateCharCount);
  

  submitButton.addEventListener('click', (e) => {
    
    if (!form.checkValidity()) {
        alert('Please fill out all required fields (Name and Email).');
        return; 
    }
    
    
    e.preventDefault();

   
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim() || 'No comments provided.';
    
  
    const newFeedback = document.createElement('div');
    newFeedback.className = 'submitted-item'; 
    newFeedback.innerHTML = `
      <h3>Feedback from ${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Comment:</strong> ${comments}</p>
      <hr>
    `;

    const feedbackList = document.createElement('div');
    feedbackList.append(newFeedback);
    feedbackDisplay.insertAdjacentElement('beforeend', newFeedback);


    nameInput.value = '';
    emailInput.value = '';
    commentsInput.value = '';
    updateCharCount(); 
    
    alert(`Thank you! Your feedback has been submitted.`);
  });
});
