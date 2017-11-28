import Amazon from '../../backend/scraper/amazon';

it('testProductList', async function(){
    let products = await Amazon.productsList("guitar");
    console.log(products);
    expect(products.items).toBeTruthy();
}, 5000)