const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    });
};

showMenu('nav-toggle','nav-menu');

document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
    });
});

