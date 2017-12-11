
var AWS = require("aws-sdk");
const userSettings = require('../../../userSettings.json');
const TABLE_NAME = 'users';

class UsersRepo {

    constructor() {

        AWS.config = new AWS.Config();
        AWS.config.accessKeyId = userSettings.AWS.ACCESS_KEY_ID;
        AWS.config.secretAccessKey = userSettings.AWS.SECRET_ACCESS_KEY;
        AWS.config.region = userSettings.REGION;
        AWS.config.endpoint = userSettings.DYNAMO_DB.SERVER;
        /*
        AWS.config.update({
            region: userSettings.REGION,
            endpoint: userSettings.DYNAMO_DB.SERVER,
        });
        */
        this._dynamodb = new AWS.DynamoDB();
        this._docClient = new AWS.DynamoDB.DocumentClient();
    }

    async put(userData)  {
        let params = {
            TableName: TABLE_NAME,
            Item: userData
        };
        return await this._docClient.put(params).promise();
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
       
        let params = {
            TableName : TABLE_NAME
        };
        return await this._dynamodb.deleteTable(params).promise();
    }

    async createSheme() {

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

        return await this._dynamodb.createTable(params).promise();
    }
}

module.exports = UsersRepo;