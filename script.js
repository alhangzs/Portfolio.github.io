let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Event listener untuk tombol Show Image
document.querySelectorAll('.projects-card .btn-group .btn:last-child').forEach(button => {
    button.onclick = (event) => {
        // Cari elemen parent terdekat (projects-card)
        const projectCard = event.target.closest('.projects-card');
        
        // Ambil atribut 'src' dari elemen <img> dalam kartu proyek
        const imageSrc = projectCard.querySelector('img').getAttribute('src');
        
        // Tampilkan popup image dengan gambar terkait
        const popupImage = document.querySelector('.popup-image');
        popupImage.style.display = 'block';
        popupImage.querySelector('img').src = imageSrc;
    };
});

// Event listener untuk tombol close pada popup
document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};

const menuIcon = document.querySelector('#menu-icon');
const navLink = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLink.classList.toggle('active');
}