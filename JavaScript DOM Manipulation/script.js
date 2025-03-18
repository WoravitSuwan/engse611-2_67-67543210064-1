document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskType = document.getElementById('taskType').value;
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') return;
    
    const images = {
        Vegetable: 'https://www.thaihealth.or.th/data/content/25558/cms/e_bcfhmtxy1467.jpg',
        Fruit: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4G1IHK8JOZRdHy5iC9359ENrV01HLeEFolA&s',
        Drink: 'https://image.bangkokbiznews.com/uploads/images/md/2023/01/8MYqZeE5Qmb5NxA30gTv.webp'
    };
    
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${images[taskType]}" class="task-image" alt="Task">
        <span>${taskInput.value} (${taskType})</span>
        <button class="delete-btn">ลบ</button>
    `;
    
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    li.querySelector('.delete-btn').addEventListener('click', function(event) {
        event.stopPropagation();
        if (confirm('ต้องการลบรายการนี้หรือไม่?')) {
            li.remove();
        }
    });
    
    taskList.appendChild(li);
    taskInput.value = '';
});