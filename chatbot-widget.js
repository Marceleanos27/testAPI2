(function () {
  if (window.__marcelChatbotLoaded) return;
  window.__marcelChatbotLoaded = true;

  const iframe = document.createElement("iframe");
  iframe.src = "https://test-api-2-nmprbscj0-marcelitos-projects.vercel.app/"; // ⬅️ Change to your real URL (e.g. Vercel)
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "360px";
  iframe.style.height = "480px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "18px";
  iframe.style.zIndex = "99999";
  iframe.style.boxShadow = "0 10px 25px rgba(0,0,0,0.0)";
  document.body.appendChild(iframe);
})();
