let currentSlide = 0;
const slides = document.querySelectorAll('.slider-content img'); // Lấy tất cả các ảnh
const totalSlides = slides.length;

function updateSlidePosition() {
    const sliderContent = document.querySelector('.slider-content');
    const width = document.querySelector('.slider').clientWidth;
    // Điều chỉnh vị trí của slider để hiển thị hai ảnh
    sliderContent.style.transform = `translateX(${-width * (currentSlide)}px)`;
}

function nextSlide() {
    // Nếu currentSlide đạt đến cuối, quay lại đầu
    currentSlide = (currentSlide + 1) % Math.ceil(totalSlides / 2);
    updateSlidePosition();
}

function prevSlide() {
    // Nếu currentSlide về 0, quay lại ảnh cuối
    currentSlide = (currentSlide - 1 + Math.ceil(totalSlides / 2)) % Math.ceil(totalSlides / 2);
    updateSlidePosition();
}

// Tự động cập nhật kích thước khi thay đổi kích thước cửa sổ
window.addEventListener('resize', updateSlidePosition);

// Hiển thị slide đầu tiên khi trang load
updateSlidePosition();
