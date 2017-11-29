import Amazon from '../../backend/scraper/amazon';

it('testProductList', async function(){
    let products = await Amazon.productsList("guitar")
    .catch((error) => {
        console.log(error);
        expect(error).toBeNull();
    });
    expect(products.items).toBeTruthy();
}, 10000)
