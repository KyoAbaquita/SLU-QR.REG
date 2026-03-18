document.addEventListener('DOMContentLoaded', async () => {
    await loadData();   // waits for MySQL data before rendering
    startScanner();
});
