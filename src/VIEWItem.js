"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const VIEWItem = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let Item;

  try{
  const result = await dynamoDb.scan({
    TableName: "ADDItem"
  }).promise();
  Item = result.Items;
  }catch(err){
    console.log(err);
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(Item),
    };
};

module.exports = {
    handler: VIEWItem,
};