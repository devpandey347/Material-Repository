document.addEventListener('DOMContentLoaded', () => {
    // Loading Animation
    const loadingOverlay = document.querySelector('.loading-overlay');
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
        setTimeout(() => {
            loadingOverlay.remove();
        }, 300);
    }, 400);

    const cards = document.querySelectorAll('.card');

    // Staggered animation for cards
    cards.forEach((card, index) => {
        // Set a delay based on the index (e.g., 0.1s, 0.2s, 0.3s...)
        card.style.animation = `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`;
    });

    // Optional: Add a simple tilt effect or additional interaction
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Subtle glow effect following cursor could be added here if desired
        });
    });

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
});

// ========== PROTECTION CODE ==========

// Disable right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('⚠️ RIGHT CLICK IS DISABLED!');
});

// Disable Ctrl+P, Ctrl+Shift+I, F12, Ctrl+U
document.addEventListener('keydown', (e) => {
    // Disable Print (Ctrl+P)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        alert('🚫 PRINT IS DISABLED.');
        return false;
    }

    // Disable View Source (Ctrl+U)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        alert('⚠️ VIEW SOURCE IS DISABLED!.');
        return false;
    }

    // Disable DevTools (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
    if (e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
        e.preventDefault();
        alert('🔒 Developer Tools are disabled!\n\nThis content is protected. Please use the website as intended.');
        return false;
    }
});

// DevTools detection - check if console is open
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

// Disable text selection
document.onselectstart = function () {
    return false;
};
