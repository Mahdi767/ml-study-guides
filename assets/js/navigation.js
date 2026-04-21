function sw(id, el) {
    // Remove 'active' class from all .section elements
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Remove 'active' class from all .tab elements
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add 'active' class to element with id matching the id parameter
    const activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Add 'active' class to the clicked button element
    el.classList.add('active');
}