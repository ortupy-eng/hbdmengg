const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

const petalCount = 75;
const petals = [];

class Petal {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height - height;
        this.r = Math.random() * 12 + 8; // Ukuran bunga
        this.d = Math.random() * petalCount;
        this.w = Math.random() * 15;
        this.h = Math.random() * 15;
        this.opacity = Math.random() * 0.6 + 0.4;
        this.flip = Math.random();
        this.flipSpeed = Math.random() * 0.03 + 0.01;
        this.yspeed = Math.random() * 1.5 + 1;
        this.xspeed = Math.random() * 1 - 0.5;
    }

    draw() {
        if (this.y > height || this.x > width || this.x < -this.r) {
            this.x = Math.random() * width;
            this.y = -20;
            this.yspeed = Math.random() * 1.5 + 1;
        }
        ctx.beginPath();
        // Membuat bentuk kelopak bunga sederhana
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        // Warna bunga pink soft/aesthetic
        ctx.fillStyle = `rgba(255, 182, 193, ${this.opacity})`;
        ctx.fill();
    }

    update() {
        this.y += this.yspeed;
        this.x += this.xspeed + Math.sin(this.y / 30) * 0.5;
    }
}

for (let i = 0; i < petalCount; i++) {
    petals.push(new Petal());
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    petals.forEach(petal => {
        petal.draw();
        petal.update();
    });
    requestAnimationFrame(animate);
}

animate();
