import Handler from '../../backend/watcher/handler';

it('testOn', async function(){
    let products = await Handler.getProductsPrices(null);
    expect(products).toBeTruthy();
}, 5000)

