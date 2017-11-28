import { throws } from "assert";

const AWS_REGION = 'us-east';
const TABLE_NAME = 'products';

class Products {
    
    set AWS(Value) {this._AWS = Value}
    get AWS() {return this._AWS}

    constructor() {

        this._AWS = require("aws-sdk");

        this._AWS.config.update({
            region: AWS_REGION,
            endpoint: "http://localhost:8000"
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

    get(id) {
        
        let params = {
            TableName: TABLE_NAME,
            Key: {"id": id}
        };
        return this._docClient.get(params).promise();
    }

    list() {
        var params = {
            TableName : TABLE_NAME,
        };
        return this._docClient.scan(params).promise();
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

}

module.exports = new Products();