// THIS SOURCE CODE IS FOR EDUCATIONAL PURPOSES ONLY
// DO NOT USE THIS ONLINE BEFORE READING TWITTER'S PRIVACY POLICY

var TwitterPackage = require('twitter');

var secret = {
  consumer_key: '<YOUR CONSUMER KEY>',
  consumer_secret: '<YOUR SECRET CONSUMER KEY>',
  access_token_key: '<ACCESS TOKEN KEY>',
  access_token_secret: '<ACCESS TOKEN KEY>'
}
var Twitter = new TwitterPackage(secret);
const express=require("express");
const bodyParser = require("body-parser");
