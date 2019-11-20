const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);

    before(done => {
        setTimeout(() => {
            done();
        }, 1000);
    });

// describe('server', () => {
//     it('should do a thing', () => {
//         //Expectations in here
//         chai.expect(true).to.eq(true)
//     });
// });

// describe('server', () => {
//     it('should do a thing', (done) => {
//         //Expectations in here
//         chai.request(app)
//             .get('/')
//             .end((err, res) => {
//                 chai.expect(res.status).to.eq(200);
//                 chai.expect(res.text).to.eq('Hello, world!')
//                 done();
//             });
//     });
// });



// it('should throw an error', (done) => {
//     chai.request(app)
//         .get('/break-things')
//         .end((err, res) => {
//             chai.expect(res.status).to.eq(500);
//             done();
//         });
// });

