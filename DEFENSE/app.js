document.addEventListener('DOMContentLoaded', function() {
    fetchData('aircrafts');
    fetchData('warships');
    fetchData('submarines');
    fetchData('defense-systems');
});

function fetchData(category) {
    fetch(`http://localhost:5000/api/${category}`)
        .then(response => response.json())
        .then(data => {
            renderData(category, data);
        })
        .catch(err => console.error('Error fetching data:', err));
}

function renderData(category, data) {
    const section = document.getElementById(`${category}-list`);
    section.innerHTML = ''; // Clear existing content

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const title = document.createElement('h3');
        title.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        card.appendChild(title);
        card.appendChild(description);
        section.appendChild(card);
        
    });
}
