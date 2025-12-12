document.addEventListener("DOMContentLoaded", async () => {
  const userCard = document.getElementById("userCard");
  const logoutBtn = document.getElementById("logoutBtn");

  const { data: { user } } = await window.sb.auth.getUser();

  if (!user) {
    location.replace("./auth.html");
    return;
  }

  const username = user.user_metadata?.username || "(no username)";
  userCard.innerHTML = `
    <h2>Account</h2>
    <p class="x-muted"><strong>${username}</strong></p>
    <p class="x-muted">${user.email || ""}</p>
    <p class="x-muted">User ID: <code>${user.id}</code></p>
  `;

  logoutBtn.addEventListener("click", async () => {
    await window.sb.auth.signOut();
    location.replace("./index.html");
  });
});
