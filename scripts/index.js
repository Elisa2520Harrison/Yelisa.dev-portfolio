// detect scroll event on document
document.addEventListener('scroll', function () {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change navbar bg to baby bluish
        document.getElementById('navbar').style.backgroundColor = ' #000000';
    } else {
        // change navbar bg to transparent
        document.getElementById('navbar').style.backgroundColor = 'transparent';
    }
});

// nav toggle menu script
const toggleBar = document.querySelector('.toggle-bar')
const toggleBarIcon = document.querySelector('.toggle-bar i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBar.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    if (isOpen) {
        toggleBarIcon.classList.remove('fa-bars');
        toggleBarIcon.classList.add('fa-xmark');
    } else {
        toggleBarIcon.classList.remove('fa-xmark');
        toggleBarIcon.classList.add('fa-bars');
    }
}

