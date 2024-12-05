// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

document.getElementById('submit-button').addEventListener('click', function() {

    const ContactPage = document.getElementById('contact-page');
  
    const message = document.createElement('p');
    message.innerText = 'Thank you for your message';
  
    ContactPage.innerHTML = ''; 

    message.style.fontSize = '24px';

    ContactPage.appendChild(message);

  });

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.