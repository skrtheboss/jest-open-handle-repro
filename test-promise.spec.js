test('promise-test', async () => {
    await new Promise(r => setTimeout(r, 0));

    setTimeout(() => console.log('should be logged'), 10000);
});
