document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a =>
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    })
  );

  // Fade-up on scroll
  const io = new IntersectionObserver(entries =>
    entries.forEach(e => e.isIntersecting && e.target.classList.add('fade-up')), { threshold: 0.1 }
  );
  document.querySelectorAll('.card, .section-title, .hero-content').forEach(el => io.observe(el));

  // Mobile menu toggle
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => navLinks?.classList.toggle('open'));

  console.log('⚡ Trend AI Builder — ready!');
});
function openReservation() { document.getElementById('reservationModal').classList.add('open'); }
function closeReservation() { document.getElementById('reservationModal').classList.remove('open'); }
function handleReservation(e) {
  e.preventDefault();
  openReservation();
}
window.openReservation = openReservation;
window.closeReservation = closeReservation;
window.handleReservation = handleReservation;