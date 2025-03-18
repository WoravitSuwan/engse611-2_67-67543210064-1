document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    const contactList = document.getElementById('contactList');
    const li = document.createElement('li');

    let messageText = message ? `<p class="message">📩 ข้อความ: ${message}</p>` : "";

    li.innerHTML = `<span class="contact-name">${name}</span> 
                    (${email}, ${phone}) - ${subject} 
                    ${messageText}
                    <button class="delete-btn">ลบ</button>`;

    li.querySelector('.contact-name').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete-btn').addEventListener('click', function() {
        if (confirm('ต้องการลบรายการนี้หรือไม่?')) {
            li.remove();
        }
    });

    contactList.appendChild(li);

    document.getElementById('contactForm').reset();
});
