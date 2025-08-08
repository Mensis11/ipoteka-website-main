export function InitOpenningForm(){
  document.querySelector('.opening__button').addEventListener('click', () => {
    document.getElementById('modal-form').classList.add('is-open');
  });
  
  document.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', () => {
      document.getElementById('modal-form').classList.remove('is-open');
    });
  });
  
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('modal-form');
    if (modal.classList.contains('is-open') && e.target.classList.contains('modal__backdrop')) {
      modal.classList.remove('is-open');
    }
  });
  
  
  emailjs.init("go-idoMc480xV0FTr"); 
  
    document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault();
  
      const params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
      };
  
      emailjs.send("service_rsacy8c", "template_mdyi18a", params)
        .then(() => {
          alert("Успішно надіслано!");
          document.getElementById("form").reset();
        })
        .catch((err) => {
          alert("Помилка: " + JSON.stringify(err));
        });
    });
}


  