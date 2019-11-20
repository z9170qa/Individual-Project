const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);

    before(done => {
        setTimeout(() => {
            done();
        }, 1000);
    });



