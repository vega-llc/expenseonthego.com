const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const siteHeader = document.querySelector('[data-site-header]');
document.querySelectorAll('[data-current-year]').forEach((element) => { element.textContent = new Date().getFullYear().toString(); });
if (navToggle && siteNav) {
  const setOpen = (open, restoreFocus = false) => {
    siteNav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    if (restoreFocus) navToggle.focus();
  };
  navToggle.addEventListener('click', () => setOpen(navToggle.getAttribute('aria-expanded') !== 'true'));
  siteNav.addEventListener('click', (event) => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && siteNav.classList.contains('is-open')) setOpen(false, true); });
  document.addEventListener('click', (event) => { if (event.target instanceof Node && !siteHeader.contains(event.target)) setOpen(false); });
}

const workflow = {
  capture: { image: 'receipts.png', title: 'Your receipts, all together.', caption: 'Find a receipt by vendor, client, project, or amount.', alt: 'ExpenseOnTheGo receipts list with vendor, date, and amount' },
  review: { image: 'dashboard.png', title: 'A clear next step.', caption: 'See receipt reviews, reimbursements, and month-end tasks.', alt: 'ExpenseOnTheGo dashboard showing receipt review and month-end tasks' },
  recover: { image: 'dashboard.png', title: 'Keep the next step in sight.', caption: 'Your dashboard surfaces reimbursement preparation tasks.', alt: 'ExpenseOnTheGo dashboard showing the prepare reimbursement packet action' },
  report: { image: 'reports.png', title: 'Ready for the handoff.', caption: 'Choose a report and bring your expense records together.', alt: 'ExpenseOnTheGo reports screen with available report types' }
};
const stepButtons = [...document.querySelectorAll('[data-step]')];
function selectStep(button, focus = false) {
  const step = workflow[button.dataset.step];
  if (!step) return;
  stepButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
  });
  const image = document.querySelector('[data-workflow-image]');
  image.src = 'assets/screenshots/' + step.image;
  image.alt = step.alt;
  document.querySelector('[data-preview-title]').textContent = step.title;
  document.querySelector('[data-preview-caption]').textContent = step.caption;
  document.querySelector('#workflow-preview').setAttribute('aria-labelledby', button.id);
  if (focus) button.focus();
}
stepButtons.forEach((button, index) => {
  button.addEventListener('click', () => selectStep(button));
  button.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % stepButtons.length;
    if (event.key === 'ArrowUp') next = (index - 1 + stepButtons.length) % stepButtons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = stepButtons.length - 1;
    if (next !== undefined) { event.preventDefault(); selectStep(stepButtons[next], true); }
  });
});

// Deliberately static, labeled product examples. No AI service or visitor data is used.
const examples = {
  monthly: { question: 'How much did I spend this month?', answer: 'Your spending this month totals $1,120.60, across 3 example receipts.', records: [['This month', '$1,120.60'], ['Last month', '$950.00']] },
  largest: { question: 'What was my largest expense this month?', answer: 'Of the current month’s sample expenses, Delta Air Lines is the largest at $689.40.', records: [['Delta Air Lines', '$689.40'], ['Next largest: Marriott Marquis', '$412.80']] },
  unpaid: { question: 'Which unpaid receipts are reimbursable?', answer: 'These two example receipts are marked reimbursable and unpaid, totaling $1,102.20.', records: [['Delta Air Lines', '$689.40'], ['Marriott Marquis', '$412.80']] }
};
const promptButtons = [...document.querySelectorAll('[data-prompt]')];
promptButtons.forEach((button) => button.addEventListener('click', () => {
  const example = examples[button.dataset.prompt];
  if (!example) return;
  promptButtons.forEach((item) => { const active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
  document.querySelector('[data-demo-question]').textContent = example.question;
  document.querySelector('[data-demo-answer]').textContent = example.answer;
  const records = document.querySelector('[data-demo-records]');
  records.replaceChildren(...example.records.map(([name, amount]) => {
    const row = document.createElement('div');
    const label = document.createElement('span');
    const value = document.createElement('strong');
    label.textContent = name;
    value.textContent = amount;
    row.append(label, value);
    return row;
  }));
}));

const billingButtons = [...document.querySelectorAll('[data-billing]')];
billingButtons.forEach((button) => button.addEventListener('click', () => {
  const annual = button.dataset.billing === 'annual';
  billingButtons.forEach((item) => { const active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
  document.querySelector('[data-price]').textContent = annual ? '$39.99' : '$4.99';
  document.querySelector('[data-price-period]').textContent = annual ? '/ year' : '/ month';
  document.querySelector('[data-billing-note]').textContent = annual ? 'About $3.33/month, billed yearly.' : '$4.99 billed monthly. Choose yearly to save 33%.';
}));
