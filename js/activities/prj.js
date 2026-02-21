fetch("../json/activities/project.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("prjs");

    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "project_card";

      card.innerHTML = `
        <div class="prj_img">
          <img src="../img/${item.img}" alt="${item.name}" style="width: 1162px">
        </div>
        <div class="project_info">
          <p class="prj_name">${item.name}</p>
          <p class="prj_ex">${item.ex}</p>
        </div>
      `;

      container.appendChild(card);
    });
  });
