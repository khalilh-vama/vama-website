function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

async function loopForever(fn) {
  while(true) { await fn(); await delay(3000); }
}

// ── TILE 1: Calendar events snap in ──
async function animCalendar() {
  const items = ['ev1','ev2','ev3'].map(id => document.getElementById(id));
  items.forEach(el => { el.classList.remove('in'); });
  await delay(400);
  for (const el of items) {
    await delay(280);
    el.classList.add('in');
  }
  await delay(2500);
  items.forEach(el => el.classList.remove('in'));
}

// ── TILE 2: Boarding pass flip in ──
async function animFlight() {
  const bp = document.getElementById('bp');
  const price = document.getElementById('bpprice');
  const barcode = document.getElementById('barcode');

  bp.classList.remove('in');
  price.style.opacity = '0'; price.style.transform = 'scale(0.6)';
  barcode.innerHTML = '';

  await delay(300);
  bp.classList.add('in');

  await delay(800);
  for (let i = 0; i < 28; i++) {
    const bar = document.createElement('div');
    bar.className = 'bp-bar';
    const h = Math.random() > 0.5 ? (Math.random() > 0.3 ? 28 : 18) : 10;
    bar.style.cssText = `width:${Math.random()>0.5?3:2}px;height:${h}px`;
    barcode.appendChild(bar);
    await delay(18);
  }

  await delay(200);
  price.style.transition = 'opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
  price.style.opacity = '1'; price.style.transform = 'scale(1)';
  await delay(2800);

  price.style.opacity = '0'; price.style.transform = 'scale(0.6)';
}

// ── TILE 3: Email types out ──
async function animEmail() {
  const textEl = document.getElementById('email-text');
  const cursorEl = document.getElementById('email-cursor');
  const sendBtn = document.getElementById('send-btn');

  textEl.textContent = '';
  sendBtn.classList.remove('in','sent');
  cursorEl.style.display = 'inline-block';

  await delay(500);

  const text = "Hi Sarah,\n\nJust following up on the proposal I sent last week. Would love to get your thoughts — happy to jump on a quick call to walk through it.\n\nBest,\nAlex";
  for (const char of text) {
    if (char === '\n') {
      textEl.innerHTML += '<br>';
    } else {
      textEl.textContent += char;
    }
    await delay(char === ' ' ? 40 : char === ',' || char === '.' ? 120 : 28);
  }

  await delay(500);
  sendBtn.classList.add('in');
  await delay(900);
  sendBtn.textContent = '✓ Email sent to Sarah';
  sendBtn.classList.add('sent');
  cursorEl.style.display = 'none';
  await delay(2000);
  sendBtn.classList.remove('in','sent');
  sendBtn.textContent = 'Send Email →';
}

// ── TILE 4: Toggles flick on ──
async function animToggles() {
  const toggles = ['t1','t2','t3','t4'].map(id => document.getElementById(id));
  const summary = document.getElementById('auto-summary');

  toggles.forEach(t => { t.classList.remove('on','pulse'); });
  summary.classList.remove('in');
  await delay(400);

  for (const t of toggles) {
    await delay(350);
    t.classList.add('on','pulse');
    setTimeout(() => t.classList.remove('pulse'), 700);
  }

  await delay(300);
  summary.classList.add('in');
  await delay(2200);
  summary.classList.remove('in');
  await delay(200);
  toggles.forEach(t => t.classList.remove('on'));
}

// ── H1: Inbox slides in ──
async function animInbox() {
  const items = ['ii1','ii2','ii3','ii4'].map(id => document.getElementById(id));
  const action = document.getElementById('inbox-action');
  const count = document.getElementById('inbox-count');

  items.forEach(el => el.classList.remove('in'));
  action.classList.remove('in');
  count.textContent = '24 unread';
  await delay(400);

  for (const el of items) {
    await delay(200);
    el.classList.add('in');
  }

  await delay(600);
  count.textContent = '3 flagged';
  await delay(300);
  action.classList.add('in');
  await delay(2200);

  action.classList.remove('in');
  items.forEach(el => el.classList.remove('in'));
}

// ── H2: Research cards pop in ──
async function animResearch() {
  const cards = ['rc1','rc2','rc3'].map(id => document.getElementById(id));
  const verdict = document.getElementById('rv');
  cards.forEach(el => el.classList.remove('in'));
  verdict.classList.remove('in');
  await delay(400);

  for (const el of cards) {
    await delay(250);
    el.classList.add('in');
  }
  await delay(300);
  verdict.classList.add('in');
  await delay(2500);

  verdict.classList.remove('in');
  cards.forEach(el => el.classList.remove('in'));
}

// ── H3: Calendar week + booking confirm ──
async function animSched() {
  const days = ['sd1','sd2','sd3','sd4','sd5'].map(id => document.getElementById(id));
  const confirm = document.getElementById('sched-confirm');
  const selSlot = document.getElementById('sel-slot');
  const sd2 = document.getElementById('sd2');

  days.forEach(el => el.classList.remove('in','picked'));
  selSlot.classList.remove('selected');
  confirm.classList.remove('in');
  await delay(400);

  for (const d of days) {
    d.classList.add('in');
    await delay(130);
  }

  await delay(500);
  selSlot.classList.add('selected');
  sd2.classList.add('picked');

  await delay(500);
  confirm.classList.add('in');
  await delay(2500);

  confirm.classList.remove('in');
  selSlot.classList.remove('selected');
  sd2.classList.remove('picked');
  days.forEach(el => el.classList.remove('in'));
}

// ── H4: Pipeline flows + log lines ──
async function animPipeline() {
  const nodes = ['pn1','pn2','pn3'].map(id => document.getElementById(id));
  const connectors = ['pc1','pc2'].map(id => document.getElementById(id));
  const logLines = ['ll1','ll2','ll3','ll4','ll5'].map(id => document.getElementById(id));

  nodes.forEach(el => el.classList.remove('in'));
  connectors.forEach(el => { el.classList.remove('in'); el.querySelector('.pipe-fill').style.width = '0%'; });
  logLines.forEach(el => el.classList.remove('in'));
  await delay(400);

  nodes[0].classList.add('in'); await delay(250);
  connectors[0].classList.add('in'); await delay(400);
  nodes[1].classList.add('in'); await delay(250);
  connectors[1].classList.add('in'); await delay(400);
  nodes[2].classList.add('in'); await delay(300);

  for (const line of logLines) {
    line.classList.add('in');
    await delay(320);
  }
  await delay(1800);

  logLines.forEach(el => el.classList.remove('in'));
  nodes.forEach(el => el.classList.remove('in'));
  connectors.forEach(el => { el.classList.remove('in'); });
}

// Start animations — guarded so only active on pages that have the elements
if (document.getElementById('ev1')) loopForever(animCalendar);
if (document.getElementById('bp')) loopForever(animFlight);
if (document.getElementById('email-text')) loopForever(animEmail);
if (document.getElementById('t1')) loopForever(animToggles);
if (document.getElementById('ii1')) loopForever(animInbox);
if (document.getElementById('rc1')) loopForever(animResearch);
if (document.getElementById('sd1')) loopForever(animSched);
if (document.getElementById('pn1')) loopForever(animPipeline);
