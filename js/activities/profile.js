async function loadAll() {
  const res = await fetch("../json/activities/profile/index.json");
  const list = await res.json();

  const profilediv = document.getElementById("profile");

  const results = await Promise.all(
    list.map(async (person) => {
      const res = await fetch(person.path);
      const awards = await res.json();

      return { ...person, awards };
    }),
  );

  results.sort((a, b) => a.id - b.id);

  let awardHTML = "";

  for (const item of results) {
    let groupHTML = `
      <div class="p_div">
        <div class="p_name">${item.name}</div>
    `;

    for (const award of item.awards) {
      groupHTML += `
        <div class="p_award">${award.name}</div>
      `;
    }

    groupHTML += `</div>`;
    awardHTML += groupHTML;
  }

  profilediv.innerHTML = awardHTML;
}

loadAll();
