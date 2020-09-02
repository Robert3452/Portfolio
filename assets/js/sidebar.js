var btn_sidebar = document.querySelector('.btn-sidebar');
var sidebarBody = document.querySelector('.sidebar-content');
var sidebar = document.querySelector('.sidebar');

btn_sidebar.addEventListener('click', () => {
    sidebarBody.classList.toggle("sidebar-active");
    sidebar.classList.toggle("toggle")
})
    