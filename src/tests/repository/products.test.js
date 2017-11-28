import Products from '../../backend/repository/products';

it('testPutGetScanDelete', () => {
    let newItem = {
        "id": 1,
        "name": 'guitar'
    }

    Products.put(newItem).then((data) => {
        expect(data).toBeTruthy();
        testGet();
    })
    .catch((error) => {
        expect(error).toBeNull();
    });
});

function testGet() {
    Products.get(1).then((data) => {
        console.log(data);
        expect(data).toBeTruthy();
        testList();
    },
    (error) => {
        expect(error).toBeNull();
    });
}

function testList() {
    Products.list().then((data) => {
        let data_ob = JSON.stringify(data);
        expect(data.Count).toBe(1);
    })
    .catch((error) => {
        expect(error).toBeNull();
    });
}

function testDelete() { 
    Products.delete(1).then((data) => {
        expect(data).toBeTruthy()
    })
    .catch((error) => {
        expect(error).toBeNull();
    });
}
