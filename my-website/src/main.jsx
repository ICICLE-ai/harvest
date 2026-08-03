import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// The site used a HashRouter until August 2026, so links of the form
// https://icicle-ai.github.io/harvest/#/past-events/2025 are already published
// in call-for-papers emails, flyers, and on other sites. Rewrite them to the
// equivalent clean path before React Router mounts so they keep working.
const legacyHash = window.location.hash;
if (legacyHash.startsWith('#/')) {
  const path = legacyHash.slice(1); // '#/past-events/2025' -> '/past-events/2025'
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  window.history.replaceState(null, '', base + path);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
