'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modalTitle = modal.querySelector('h1');
const modalContent = modal.querySelector('p');

// Define messages for each button
const modalMessages = [
  {
    title: 'TO you my special woman OMONZUSI😍',
    content: `You’re the song I never knew I needed,
A tune where my heartbeat’s perfectly seeded.
A verse so sweet, it lingers on air,
Every note whispers, "You’re beyond compare."

Your laugh is a ripple, a sparkling stream,
It paints my reality, colors my dream.
Like a star, you shine in every night sky,
Guiding my soul when the world passes by.

<strong>Note from Olayinka Barnabas to my QUEEN</strong>`,
  },
  {
    title: 'My favourite person♥🌹',
    content: `Your touch is a secret, a language divine,
Each wordless moment says, "You’re mine."
In your arms, time halts its steady race,
Each second with you is my favorite place.

You’re the plot twist I didn’t foresee,
A love story where you chose me.`,
  },
  {
    title: "Smallie's Best😘🥰",
    content: `Every chapter, every page,
Unfolds in magic, defying age.

So here’s to you, the rhythm and rhyme,
My forever poem, my partner in time.`,
  },
];

const openModal = function (index) {
  // Update modal content based on the button clicked
  modalTitle.textContent = modalMessages[index].title;
  modalContent.innerHTML = modalMessages[index].content;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Attach click listeners to each button
btnsOpenModal.forEach((btn, i) => {
  btn.addEventListener('click', () => openModal(i));
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
