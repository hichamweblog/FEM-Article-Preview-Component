import '../css/index.css';

const shareBtn = document.querySelector('.share-btn');
const cardShare = document.querySelector('.card__share');
const authorInfo = document.querySelector('.author__info');

function toggleShare() {
  const isDesktop = window.innerWidth >= 895;

  if (!isDesktop) {
    const expanded = shareBtn.getAttribute('aria-expanded') === 'true';
    shareBtn.setAttribute('aria-expanded', !expanded);

    authorInfo.classList.toggle('hidden');
    cardShare.classList.toggle('hidden');
  }

  if (isDesktop) {
    cardShare.classList.toggle('hidden');
    cardShare.classList.toggle('card__share--active');
  }
}

// Ensure the UI is consistent during window resize
function handleResize() {
  const isDesktop = window.innerWidth >= 895;

  if (isDesktop) {
    // Ensure desktop view classes are applied
    cardShare.classList.remove('hidden');
    cardShare.classList.add('card__share--active');
    authorInfo.classList.remove('hidden');
  } else {
    // Reset mobile view
    cardShare.classList.add('hidden');
    cardShare.classList.remove('card__share--active');
    shareBtn.setAttribute('aria-expanded', 'false');
    authorInfo.classList.remove('hidden');
  }
}

shareBtn.addEventListener('click', toggleShare);
window.addEventListener('resize', handleResize);
