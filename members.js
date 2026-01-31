const memberInput = document.getElementById('memberInput');
const addBtn = document.getElementById('addBtn');
const membersContainer = document.getElementById('membersContainer');

addBtn.addEventListener('click', () => {
    const name = memberInput.value.trim();
    if (!name) return;

    // Create Initials
    const initials = name.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2);

    const card = document.createElement('div');
    card.className = 'member-card';
    card.style.animation = 'fadeIn 0.3s ease-out forwards';
    
    card.innerHTML = `
        <div class="member-left">
            <div class="avatar">${initials}</div>
            <span class="member-name">${name}</span>
        </div>
        <button class="remove-btn">Remove</button>
    `;

    // Remove logic
    card.querySelector('.remove-btn').addEventListener('click', () => {
        card.style.opacity = '0';
        setTimeout(() => card.remove(), 200);
    });

    membersContainer.appendChild(card);
    memberInput.value = '';
    memberInput.focus();
});

// Animation Keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);