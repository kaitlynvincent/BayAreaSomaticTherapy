// Set current nav link based on path
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.getAttribute('href').toLowerCase() === path){
      a.setAttribute('aria-current','page');
    }
  });

  // Update year in footer
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();
