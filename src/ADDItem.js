"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const ADDItem = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { Item } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newKaam = {
    id,
    Item,
    createdAt,
    completed: false
  }
  await dynamoDb.put({
    TableName: "ADD Item",
    Item: newItem
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newKaam),
    };
};

module.exports = {
    handler: ADDItem,
};