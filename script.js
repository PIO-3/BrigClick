let BrigCredits = 0;

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('content').classList.remove('hidden');
    this.style.display = 'none';

    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
});

document.getElementById('main-image').addEventListener('click', function() {
    BrigCredits += 1;
    document.getElementById('credits-value').textContent = BrigCredits;

    const image = this;
    const randomTransform = [
        'rotate(20deg)',
        'rotate(-20deg)',
        'scale(1.2)',
        'scale(0.8)',
        'translateX(2vw)',
        'translateX(-2vw)',
        'translateY(2vw)',
        'translateY(-2vw)'
    ];

    const randomIndex = Math.floor(Math.random() * randomTransform.length);
    const originalTransform = image.style.transform;

    image.style.transform = randomTransform[randomIndex];

    setTimeout(() => {
        image.style.transform = originalTransform;
    }, 500);
});

document.getElementById('quit-button').addEventListener('click', function() {
    const dialogBackground = document.createElement('div');
    dialogBackground.id = 'dialog-background';
    document.body.appendChild(dialogBackground);

    document.getElementById('confirmation-dialog').classList.remove('hidden');
});

document.getElementById('yes-button').addEventListener('click', function() {
    window.close();
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('confirmation-dialog').classList.add('hidden');
    const dialogBackground = document.getElementById('dialog-background');
    if (dialogBackground) {
        dialogBackground.remove();
    }
});
