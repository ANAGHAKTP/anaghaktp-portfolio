// ===== Phase 3: shared micro-interactions across all pages =====
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // page loader
  const loader = document.getElementById('page-loader');
  if(loader){
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hide'), 250);
    });
    // fallback in case load already fired
    setTimeout(() => loader.classList.add('hide'), 1800);
  }

  // custom cursor
  if(!prefersReducedMotion){
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    let rx = 0, ry = 0, mx = 0, my = 0;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    (function ringLoop(){
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(ringLoop);
    })();

    document.addEventListener('mouseover', (e) => {
      if(e.target.closest('a, button, .skill-card, .project-head, .gh-repo-card, .cert-card, [data-toggle]')){
        ring.classList.add('hovering');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if(e.target.closest('a, button, .skill-card, .project-head, .gh-repo-card, .cert-card, [data-toggle]')){
        ring.classList.remove('hovering');
      }
    });
  }

  // scroll progress bar
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + '%';
  });

  // back to top
  const top = document.createElement('div');
  top.className = 'back-to-top';
  top.innerHTML = '&uarr;';
  top.setAttribute('role','button');
  top.setAttribute('aria-label','Back to top');
  top.setAttribute('tabindex','0');
  document.body.appendChild(top);
  window.addEventListener('scroll', () => {
    top.classList.toggle('show', window.scrollY > 600);
  });
  top.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  top.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
    }
  });

  // magnetic buttons & click ripple
  document.addEventListener('mousemove', (e) => {
    const btn = e.target.closest('.btn');
    if(btn){
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      btn.style.transform = `translate(${x*0.18}px, ${y*0.35}px)`;
    }
  });
  document.addEventListener('mouseout', (e) => {
    const btn = e.target.closest('.btn');
    if(btn && (!e.relatedTarget || !btn.contains(e.relatedTarget))){
      btn.style.transform = '';
    }
  });
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if(btn){
      const r = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(r.width, r.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - r.left - size/2) + 'px';
      ripple.style.top = (e.clientY - r.top - size/2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    }
  });

  // tilt on cards
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.skill-card, .gh-repo-card, .cert-card');
    if(card){
      card.classList.add('tilt-el');
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(600px) rotateX(${(-py*4).toFixed(2)}deg) rotateY(${(px*4).toFixed(2)}deg)`;
    }
  });
  document.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.skill-card, .gh-repo-card, .cert-card');
    if(card && (!e.relatedTarget || !card.contains(e.relatedTarget))){
      card.style.transform = '';
    }
  });

  // ===== Discuss this Project Workflow =====
  const PROJECT_PREFILLS = {
    'docmind': {
      subject: 'Regarding your DocMind RAG-Based Document Chatbot',
      message: `Hi Anagha,\n\nI came across your DocMind project on your portfolio and was impressed by the RAG implementation.\n\nI'd like to discuss this project with you.`
    },
    'grama-waste': {
      subject: 'Regarding your Grama Waste Tracker Project',
      message: `Hi Anagha,\n\nI viewed your Grama Waste Tracker project and would like to discuss it further.`
    },
    'waste-tracker': {
      subject: 'Regarding your Grama Waste Tracker Project',
      message: `Hi Anagha,\n\nI viewed your Grama Waste Tracker project and would like to discuss it further.`
    }
  };

  function handleProjectDiscussion(projectId, shouldScroll = true) {
    const prefill = PROJECT_PREFILLS[projectId];
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');

    if (prefill) {
      if (subjectInput) subjectInput.value = prefill.subject;
      if (messageInput) messageInput.value = prefill.message;
    } else if (projectId) {
      const formattedName = projectId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      if (subjectInput) subjectInput.value = `Regarding your ${formattedName} project`;
      if (messageInput) messageInput.value = `Hi Anagha,\n\nI came across your ${formattedName} project on your portfolio and would like to discuss it further.`;
    }

    const contactSection = document.getElementById('contact');
    const contactBox = document.querySelector('.contact-box');

    if (shouldScroll && contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        if (contactBox) {
          contactBox.classList.add('highlight');
          setTimeout(() => contactBox.classList.remove('highlight'), 2200);
        }

        if (nameInput && !nameInput.value.trim()) {
          nameInput.focus();
        } else if (emailInput && !emailInput.value.trim()) {
          emailInput.focus();
        } else if (subjectInput) {
          subjectInput.focus();
        }
      }, 550);
    }

    if (window.history && window.history.replaceState) {
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState(null, '', cleanUrl);
    }
  }

  // Delegated click listener for "Discuss this project" buttons on the current page
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-project-id], .btn-discuss');
    if (btn) {
      const href = btn.getAttribute('href') || '';
      let projectId = btn.dataset.projectId;
      if (!projectId && href.includes('project=')) {
        try {
          const urlParams = new URLSearchParams(href.split('?')[1]);
          projectId = urlParams.get('project');
        } catch(err){}
      }
      const isHomepage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
      if (projectId && isHomepage) {
        e.preventDefault();
        handleProjectDiscussion(projectId, true);
      }
    }
  });

  // Check URL query parameters on page load
  const urlParams = new URLSearchParams(window.location.search);
  const projectParam = urlParams.get('project');
  if (projectParam) {
    setTimeout(() => {
      handleProjectDiscussion(projectParam, true);
    }, 350);
  }
});
