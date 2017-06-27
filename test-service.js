'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

var config = require('./config');

var staging_url = config.staging_url;
var client_id = config.client_id;

describe('Test the portfolio service HTTP', function(){

	it('should get current portfolio', function(done){
		chai.request(staging_url)
			.get('/getportfolio?clientId=' + client_id)
			.end(function(err, res){
				res.should.have.status(200);
				done();
			})
	});

	it('should get historic data', function(done){
		chai.request(staging_url)
			.get('/gethistorical?clientId=' + client_id)
			.end(function(err, res){
				res.should.have.status(200);
				done();
			})
		
	});
	
	it('should get historic data with specific amount of days', function(done){
		var no_days = Math.floor(Math.random() * (365 - 1 + 1)) + 1;
		chai.request(staging_url)
			.get('/gethistorical?clientId=' + client_id + "&days=" + no_days)
			.end(function(err, res){
				res.should.have.status(200);
				done();
			})
		
	});

	it('should get account info', function(done){
		chai.request(staging_url)
			.get('/getaccinfo?clientId=' + client_id)
			.end(function(err, res){
				res.should.have.status(200);
				done();
			})
	});

	it('should get market share', function(done){
		chai.request(staging_url)
			.get('/getmarketshare?clientId=' + client_id)
			.end(function(err, res){
				res.should.have.status(200);
				done();
			})
	});
});
