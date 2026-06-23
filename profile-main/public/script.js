const form = document.getElementById("profileForm");
const cardContainer = document.getElementById("cardContainer");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const bio = document.getElementById("bio").value;
  const image = document.getElementById("image").value;

  const response = await fetch("/create-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      bio,
      image
    })
  });

  const data = await response.json();

  if (data.success) {
    displayProfile(data.profile);
  } else {
    alert(data.message);
  }
});

function displayProfile(profile) {
  document.getElementById("profileForm").style.display = "none";

  document.getElementById("cardContainer").innerHTML = `
    <div class="profile-card">
      <img src="${profile.image}" alt="${profile.name}">
      <h2>${profile.name}</h2>
      <p>${profile.bio}</p>
    </div>
  `;
}