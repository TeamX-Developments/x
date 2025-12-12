document.addEventListener("DOMContentLoaded", async () => {
  const list = document.getElementById("releases");
  if (!list) return;

  try {
    const res = await fetch(
      "https://api.github.com/repos/TeamX-Developments/The-X-Project/releases"
    );
    const releases = await res.json();

 let url = release.html_url;
    let label = release.name || release.tag_name;

    if (release.assets && release.assets.length > 0) {
      url = release.assets[0].browser_download_url;
    }

    btn.href = url;
    btn.textContent = `Download ${label}`;
    btn.style.display = "inline-block";

    text.textContent = "Latest stable release available.";
  } catch (err) {
    list.innerHTML = "<li>Failed to load releases.</li>";
  }
});
