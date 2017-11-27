
const AWS = require("aws-sdk");

const AWS_REGION = 'us-east';
const TABLE_NAME = 'products';

class Products {
    
    constructor() {

        AWS.config.update({
            region: AWS_REGION,
            endpoint: "http://localhost:8000"
        });

        this._docClient = new AWS.DynamoDB.DocumentClient();
    }
    
    put(item) {

        let params = {
            TableName: TABLE_NAME,
            Item: item
        };
        
        docClient.put(params).promise()
        .then(
            (data) => {
                console.log("Added item:", JSON.stringify(data, null, 2));
            },
            (error) => {
                console.error("Unable to add item. Error JSON:", JSON.stringify(error, null, 2));
            }
        )
    }

    get(id) {
        
        let params = {
            TableName: TABLE_NAME,
            Key: {"id": id}
        };
        docClient.get(params).promise().then(
            (data) => {
                console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            },
            (error) => {
                console.error("Unable to read item. Error JSON:", JSON.stringify(error, null, 2));
            }
        );
    }

    list() {
        
    }

    delete(id) {
        
        var params = {
            TableName:"Movies",
            Key:{
                "id": id,
            }
        };
        
        console.log("Attempting a conditional delete...");
        docClient.delete(params).promise().then((data) => {
            console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2))
        },
        (error) => {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
        });
    }
}