'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

var staging_url = 'http://staging-portfolio.briteinvest.com';
var client_id = 'd89248d0-05d4-11e6-8cf6-05443d8c1614';

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
