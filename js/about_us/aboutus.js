async function loadProfile(jsonPath, containerId) {
    const res = await fetch(jsonPath);
    const data = await res.json();

    const container = document.getElementById(containerId);
    console.log(containerId);

    data.forEach((item) => {
        const profile = document.createElement('div');
        profile.className = 'profile-card';

        profile.innerHTML = `
        <div class="prof_img">
            <img src="../img/${item.img}" alt="${item.name}" style="width:373px; height:470px;">
        </div>
        <div class="prof_info">
            <p class="prof_major">${item.major}</p>
            <p class="prof_name">${item.name}</p>
        </div>
        `

        container.appendChild(profile);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    loadProfile('../json/about_us/3th.json', 'profile_3th')
    loadProfile('../json/about_us/4th.json', 'profile_4th')
})