function openViewer(fileName, filePath) {
    document.getElementById('pdfViewer').classList.add('active');
    document.getElementById('viewerTitle').textContent = fileName;
    document.getElementById('pdfFrame').src = filePath;
    document.getElementById('pdfViewer').scrollIntoView({ behavior: 'smooth' });
}

function closeViewer() {
    document.getElementById('pdfViewer').classList.remove('active');
    document.getElementById('pdfFrame').src = '';
}

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Click Burst Effect
document.addEventListener('click', (e) => {
    cursor.classList.add('clicked');
    setTimeout(() => cursor.classList.remove('clicked'), 200);

    // Create particles
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.classList.add('cursor-particle');
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';

        const angle = (Math.PI * 2 * i) / 8;
        const distance = 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 600);
    }
});

// Disable right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('⚠️ Right-click is disabled on this website!');
});

// Disable keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        alert('🚫 Printing is disabled on this website!');
        return false;
    }
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        alert('⚠️ Access Denied! Please respect the content.');
        return false;
    }
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
        e.preventDefault();
        alert('🔒 Developer Tools are disabled!');
        return false;
    }
});

// DevTools detection
(function () {
    const element = new Image();
    let devtoolsOpen = false;

    Object.defineProperty(element, 'id', {
        get: function () {
            devtoolsOpen = true;
            document.body.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #000; color: #fff; font-family: Arial; text-align: center; flex-direction: column;">
                    <h1 style="font-size: 3rem; color: #ff0000;">⚠️ ACCESS DENIED</h1>
                    <p style="font-size: 1.5rem; margin-top: 20px;">Developer Tools Detected!</p>
                    <p style="font-size: 1rem; color: #888; margin-top: 10px;">Please close the developer tools to continue.</p>
                    <p style="font-size: 0.9rem; color: #666; margin-top: 30px;">This content is protected by DEV PANDEY</p>
                </div>
            `;
        }
    });

    setInterval(() => {
        devtoolsOpen = false;
        console.log(element);
        console.clear();

        if (devtoolsOpen) {
            document.body.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #000; color: #fff; font-family: Arial; text-align: center; flex-direction: column;">
                    <h1 style="font-size: 3rem; color: #ff0000;">⚠️ ACCESS DENIED</h1>
                    <p style="font-size: 1.5rem; margin-top: 20px;">Developer Tools Detected!</p>
                    <p style="font-size: 1rem; color: #888; margin-top: 10px;">Please close the developer tools to continue.</p>
                    <p style="font-size: 0.9rem; color: #666; margin-top: 30px;">This content is protected by DEV PANDEY</p>
                </div>
            `;
        }
    }, 1000);
})();

document.onselectstart = function () {
    return false;
};