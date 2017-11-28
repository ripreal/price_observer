import Handler from '../../backend/watcher/handler';

it('testOn', async function(){
    let products = await Handler.on(null);
    expect(products).toBeTruthy();
}, 5000)

