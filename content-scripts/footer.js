function getDomElement(query) {
    return new Promise((resolve, reject) => {
        const checkElementExist = () => {
            const element = document.querySelector(query);
            if (element) {
                resolve(element);
            } else {
                setTimeout(checkElementExist, 500);
            }
        };
        checkElementExist();

        setTimeout(() => {
            const element = document.querySelector(query);
            if (!element) {
                reject(new Error('No se pudieron encontrar los elementos'));
            }
        }, 1000 * 60);
    });
}

const useless = { space: 'body > div:nth-child(159)', footer: 'footer' };

async function hideElements() {
    const space = await getDomElement(useless.space);
    const footer = await getDomElement(useless.footer);
    space.style.display = 'none';
    footer.style.display = 'none';
}

hideElements();

function reloadSite() {
    console.log('reloaded');
    location.reload();
}
setTimeout(
    reloadSite,
    (Math.floor(Math.random() * (12 - 9 + 1)) + 9) * 1000 * 60
);
