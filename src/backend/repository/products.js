
const AWS_REGION = 'us-east';
const TABLE_NAME = 'products';

class Products {
    
    set AWS(Value) {this._AWS = Value}
    get AWS() {return this._AWS}

    constructor() {

        this._AWS = require("aws-sdk");

        this._AWS.config.update({
            region: AWS_REGION,
            endpoint: "http://localhost:8000",
        });
        this._docClient = new this._AWS.DynamoDB.DocumentClient();
    }
    
    put(item)  {
        
        let params = {
            TableName: TABLE_NAME,
            Item: item
        };
        
        return this._docClient.put(params).promise();

    }

    get(item) {
        
        let params = {
            TableName: TABLE_NAME,
            Key: {'id': item.id}
        };
        return this._docClient.get(params).promise();
    }

    async list() {
        let result = [];
        var params = {
            TableName : TABLE_NAME,
        };
        await this._docClient.scan(params).promise()
        .then((data) => {
            result = data;
        })
        .catch((error) => {throw new Error(error);});

        return result;
    }

    delete(id) {
        
        var params = {
            TableName: TABLE_NAME,
            Key:{
                "id": id,
            }
        };
        
        return this._docClient.delete(params).promise();
    }

    createSheme() {
        
        let dynamodb = new this._AWS.DynamoDB();

        let params = {
            TableName : TABLE_NAME
        };
        
        dynamodb.deleteTable(params, function(err, data) {
            if (err) {
                console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
            }
        });

        params = {
            TableName : TABLE_NAME,
            KeySchema: [       
                { AttributeName: "user", KeyType: "HASH"},  //Partition key
                { AttributeName: "id", KeyType: "RANGE" }  //Sort key
            ],
            AttributeDefinitions: [       
                { AttributeName: "user", AttributeType: "S" },
                { AttributeName: "id", AttributeType: "N" }
            ],
            ProvisionedThroughput: {       
                ReadCapacityUnits: 10, 
                WriteCapacityUnits: 10
            }
        };
        dynamodb.createTable(params, function(err, data) {
            if (err) {
                console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
            }
        });
    }
}

module.exports = new Products();