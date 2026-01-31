// DOM manipulation
const input = document.getElementById('memberInput');
const btn = document.getElementById('addBtn');
const container = document.getElementById('membersContainer');
const countLabel = document.getElementById('memberCount');
const empty = document.getElementById('emptyState');


let members = JSON.parse(localStorage.getItem('m_list')) || [];

// menu buton
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');


const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {

    mobileMenu.classList.toggle('hidden');

    //Change the button icon between ☰ and ✕
    if (mobileMenu.classList.contains('hidden')) {
        menuBtn.textContent = '☰';
    } else {
        menuBtn.textContent = '✕';
    }
});



function update() {
    container.innerHTML = '';


    empty.style.display = members.length ? 'none' : 'block';
    container.classList.toggle('hidden', !members.length);
    countLabel.textContent = `${members.length} Member${members.length === 1 ? '' : 's'}`;


    members.forEach((m, i) => {
        const card = document.createElement('div');
        card.className = 'flex items-center justify-between p-5 rounded-2xl bg-white border border-[#f0eee6] shadow-sm';


        const ini = m.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

        card.innerHTML = `
    <div class="flex items-center gap-4">
        <div class="w-11 h-11 rounded-2xl bg-[#6b8e23] text-white flex items-center justify-center font-bold">
            ${ini}
        </div>
        <span class="font-bold text-[#2f3e2e]">${m.name}</span>
    </div>
    <button onclick="remove(${i})" 
        class="text-[#ff4d4d] font-bold text-[0.85rem] px-[10px] py-[6px] rounded-[8px] transition-all duration-200 hover:bg-[#ff4d4d] hover:text-white hover:scale-[1.05] cursor-pointer">
        Remove
    </button>`;
        container.appendChild(card);
    });

    localStorage.setItem('m_list', JSON.stringify(members));
}


btn.addEventListener('click', () => {
    const val = input.value.trim();
    if (!val) return alert("Enter a name");

    members.push({ name: val, id: Date.now() });
    input.value = '';
    update();
});


window.remove = (i) => {
    members.splice(i, 1);
    update();
};


update();