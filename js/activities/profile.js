function loadAll() {
  fetch('../json/activities/profile/index.json')
    .then(res => res.json())
    .then(list => {
      const profilediv = document.getElementById('profile');

      let awardHTML = '';

      for (let i = 0; i < list.length; i++) {
        const person = list[i];

        fetch(person.path)
          .then(res => res.json())
          .then(awards => {

            let groupHTML = `
              <div class="p_div">
                <div class="p_name">${person.name}</div>
            `;

            for (let j = 0; j < awards.length; j++) {
              groupHTML += `
                <div class="p_award">${awards[j].name}</div>
              `;
            }

            groupHTML += `</div>`;

            awardHTML += groupHTML;
            profilediv.innerHTML = awardHTML;
          });
      }
    });
}

loadAll();
