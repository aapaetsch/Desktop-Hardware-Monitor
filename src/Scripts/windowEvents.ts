const addWindowListeners = (): void => {
    window.addEventListener('resize', () => {
        console.log('resize');
        console.log('window.innerWidth: ', window.innerWidth);
        console.log('window.innerHeight: ', window.innerHeight);
    });
};


function initWindowEventListeners(): void {
    addWindowListeners();
}

export default initWindowEventListeners;
