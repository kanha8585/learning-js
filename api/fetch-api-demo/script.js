 
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://randomuser.me/api/?results=30';
    const profileContainer = document.getElementById('profile-container');

    async function fetchProfiles() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayProfiles(data.results);
        } catch (error) {
            profileContainer.innerHTML = `<p>Error loading profiles.</p>`;
        }
    }

    function displayProfiles(users) {
        profileContainer.innerHTML = '';
        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'profile-card';
            card.innerHTML = `
                <img src="${user.picture.large}" alt="Profile Image" class="profile-img" />
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>Email ${user.email}</p>
                <p>Age ${user.dob.age}</p>
                <p>Country ${user.location.country}</p>
            `;
            profileContainer.appendChild(card);
        });
    }

    fetchProfiles();
});