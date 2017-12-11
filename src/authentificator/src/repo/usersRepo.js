
const AWS = require("aws-sdk");
const userSettings = require('../../../userSettings.json');
const TABLE_NAME = 'users';

class UsersRepo {

    constructor() {
        AWS.config.update({
            region: userSettings.REGION,
            endpoint: userSettings.DYNAMO_DB.SERVER,
        });
        this._docClient = new AWS.DynamoDB.DocumentClient();
    }

    async put(userData)  {
        let params = {
            TableName: TABLE_NAME,
            Item: userData
        };
        return await this._docClient.put(params);
    }

    get(email) {
        
        let params = {
            TableName: TABLE_NAME,
            Key: {'email': email}
        };
        return this._docClient.get(params).promise();
    }

    delete(email) {
        
        var params = {
            TableName: TABLE_NAME,
            Key:{
                "email": email,
            }
        };
        return this._docClient.delete(params).promise();
    }

    async deleteUsersTable() {
        let dynamodb = new AWS.DynamoDB();
        let params = {
            TableName : TABLE_NAME
        };
        await dynamodb.deleteTable(params, function(err, data) {
            if (err) {
                console.error("***UNABLE TO DELETE TABLE***. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("***DELETED TABLE***. Table description JSON:", JSON.stringify(data, null, 2));
            }
        });
    }

    async createSheme() {
        
        let dynamodb = new AWS.DynamoDB();

        let params = {
            TableName : TABLE_NAME,
            KeySchema: [
                { AttributeName: "email", KeyType: "HASH"},  //Partition key
            ],
            AttributeDefinitions: [
                { AttributeName: "email", AttributeType: "S" }
            ],
            ProvisionedThroughput: {       
                ReadCapacityUnits: 10, 
                WriteCapacityUnits: 10
            }
        };

        await dynamodb.createTable(params, function(err, data) {
            if (err) {
                console.error("***UNABLE TO CREATE TABLE***. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("***CREATED TABLE***. Table description JSON:", JSON.stringify(data, null, 2));
            }
        });
    }
}

module.exports = UsersRepo;