let BrigCredits = 0;

document.getElementById('main-image').addEventListener('click', function() {
    BrigCredits += 1;
    document.getElementById('credits-value').textContent = BrigCredits;
    
    const image = this;
    const randomTransform = [
        'rotate(20deg)',
        'rotate(-20deg)',
        'scale(1.2)',
        'scale(0.8)',
        'translateX(20px)',
        'translateX(-20px)',
        'translateY(20px)',
        'translateY(-20px)'
    ];
    
    const randomIndex = Math.floor(Math.random() * randomTransform.length);
    const originalTransform = image.style.transform;
    
    image.style.transform = randomTransform[randomIndex];
    
    setTimeout(() => {
        image.style.transform = originalTransform;
    }, 500);
});
