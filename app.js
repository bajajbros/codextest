const quickActions = document.querySelectorAll('.action-card');
const navItems = document.querySelectorAll('.nav-item');

quickActions.forEach((action) => {
  action.addEventListener('click', () => {
    quickActions.forEach((item) => item.classList.remove('active'));
    action.classList.add('active');
  });
});

navItems.forEach((nav) => {
  nav.addEventListener('click', () => {
    navItems.forEach((item) => item.classList.remove('active'));
    nav.classList.add('active');
  });
});
