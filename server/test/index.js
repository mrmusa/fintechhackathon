import Bluebird from 'bluebird'
import rp from 'request-promise'
import errors from 'request-promise/errors'
import assert from 'assert';

import '../lib/index.js';
import config from '../lib/config';

const BASE_URL = `http://127.0.0.1:${config.get('port')}`;

describe('Example Node Server', function() {
    this.timeout(5000);

    it('should return 200', () => {
        return rp(BASE_URL).then(assert.ok);
    });

    it('should return 501 for /api/cue/latest', () => {
        return rp(`${BASE_URL}/api/cue/latest`)
            .catch(errors.StatusCodeError, (reason) => {
                assert.equal(501, reason.statusCode);
            })
    });

    it('should return 200 for /api/txn/latest', () => {
        return Bluebird.resolve(rp({ uri: `${BASE_URL}/api/txn/latest`, json: true }))
            .then(txnRes => assert.equal(8, txnRes.transactions.length));
    });
});

// {
//     "transactions": [{
//         "date": "2016-11-01",
//         "postingId": "1855411",
//         "amount": { "currency": "USD", "value": "15.00" },
//         "code": "0402",
//         "meta": {
//             "originalCardNumber": "4124120000002351",
//             "transactionClassCode": "FE",
//             "description": "LATE PAYMENT FEE",
//             "statementDate": "2016-12-01"
//         },
//         "postingDate": "2016-11-02",
//         "type": "DBT",
//         "statementBeginDate": "2016-11-01"
//     }, {
//         "date": "2016-11-01",
//         "postingId": "1628587",
//         "amount": { "currency": "USD", "value": "1.50" },
//         "code": "0403",
//         "meta": {
//             "originalCardNumber": "4124120000002351",
//             "transactionClassCode": "PR",
//             "statementDate": "2016-12-01"
//         },
//         "merchant": { "address": {}, "name": "PURCHASE *FINANCE CHARGE*" },
//         "postingDate": "2016-11-01",
//         "type": "PFC",
//         "statementBeginDate": "2016-11-01"
//     }, {
//         "date": "2016-11-03",
//         "postingId": "1712068",
//         "amount": { "currency": "USD", "value": "-45.00" },
//         "code": "0108",
//         "referenceNumber": "24114116291777770453981",
//         "meta": {
//             "originalCardNumber": "4124120000002351",
//             "transactionClassCode": "PY",
//             "statementDate": "2016-12-01"
//         },
//         "merchant": {
//             "address": { "country": "USA", "city": "HUNTINGTON", "stateProvince": "WV" },
//             "name": "PAYMENT DM - THANK YOU"
//         },
//         "postingDate": "2016-11-03",
//         "type": "PAY",
//         "statementBeginDate": "2016-11-01"
//     }, {
//         "date": "2016-11-07",
//         "postingId": "1713350",
//         "amount": { "currency": "USD", "value": "25.00" },
//         "code": "0101",
//         "referenceNumber": "44113116291732170423483",
//         "meta": {
//             "originalCardNumber": "4124120000002351",
//             "transactionClassCode": "PR",
//             "statementDate": "2016-12-01",
//             "taxAmount": "1.64"
//         },
//         "merchant": {
//             "address": { "country": "US", "city": "PEACHTREE CITY", "stateProvince": "GA" },
//             "name": "TEXAS ROADHOUSE 0111"
//         },
//         "postingDate": "2016-11-07",
//         "type": "DBT",
//         "statementBeginDate": "2016-11-01"
//     }, {
//         "date": "2016-11-10",
//         "postingId": "1945350",
//         "amount": { "currency": "USD", "value": "30.00" },
//         "code": "0101",
//         "referenceNumber": "74412176281792100453433",
//         "meta": {
//             "originalCardNumber": "4124120000002351",
//             "transactionClassCode": "PR",
//             "statementDate": "2016-12-01",
//             "taxAmount": "1.96"
//         },
//         "merchant": {
//             "address": { "country": "US", "city": "PEACHTREE CITY", "stateProvince": "GA" },
//             "name": "NCG CINEMA 0417"
//         },
//         "postingDate": "2016-11-10",
//         "type": "DBT",
//         "statementBeginDate": "2016-11-01"
//     }, {
//         "date": "2016-11-12",
//         "postingId": "1247352",
//         "amount": { "currency": "USD", "value": "26.45" },
//         "code": "0101",
//         "referenceNumber": "84412112381792103213499",
//         "meta": {
//             "originalCardNumber": "4124120000002351",
//             "transactionClassCode": "PR",
//             "statementDate": "2016-12-01",
//             "taxAmount": "1.73"
//         },
//         "merchant": {
//             "address": { "country": "US", "city": "PEACHTREE CITY", "stateProvince": "GA" },
//             "name": "TGI FRIDAYS 0654"
//         },
//         "postingDate": "2016-11-12",
//         "type": "DBT",
//         "statementBeginDate": "2016-11-01"
//     }, {
//         "date": "2016-11-15",
//         "postingId": "1100044",
//         "amount": { "currency": "USD", "value": "62.45" },
//         "code": "0101",
//         "referenceNumber": "64415576281232100456159",
//         "meta": {
//             "originalCardNumber": "4124120000002351",
//             "transactionClassCode": "PR",
//             "statementDate": "2016-12-01",
//             "taxAmount": "4.09"
//         },
//         "merchant": {
//             "address": { "country": "US", "city": "PEACHTREE CITY", "stateProvince": "GA" },
//             "name": "GAMESTOP 7548"
//         },
//         "postingDate": "2016-11-16",
//         "type": "DBT",
//         "statementBeginDate": "2016-11-01"
//     }, {
//         "date": "2016-11-16",
//         "postingId": "1215441",
//         "amount": { "currency": "USD", "value": "13.91" },
//         "code": "0101",
//         "referenceNumber": "13135579119232100451122",
//         "meta": {
//             "originalCardNumber": "4124120000002351",
//             "transactionClassCode": "PR",
//             "statementDate": "2016-12-01",
//             "taxAmount": "0.91"
//         },
//         "merchant": {
//             "address": { "country": "US", "city": "PEACHTREE CITY", "stateProvince": "GA" },
//             "name": "ARbyS 0465"
//         },
//         "postingDate": "2016-11-16",
//         "type": "DBT",
//         "statementBeginDate": "2016-11-01"
//     }, {
//         "date": "2016-11-22",
//         "postingId": "1910144",
//         "amount": { "currency": "USD", "value": "16.45" },
//         "code": "0101",
//         "referenceNumber": "55411576288522100413135",
//         "meta": {
//             "originalCardNumber": "4124120000002351",
//             "transactionClassCode": "PR",
//             "statementDate": "2016-12-01",
//             "taxAmount": "1.08"
//         },
//         "merchant": {
//             "address": { "country": "US", "city": "PEACHTREE CITY", "stateProvince": "GA" },
//             "name": "SHELL 0123"
//         },
//         "postingDate": "2016-11-22",
//         "type": "DBT",
//         "statementBeginDate": "2016-11-01"
//     }, {
//         "date": "2016-11-28",
//         "postingId": "0730151",
//         "amount": { "currency": "USD", "value": "10.24" },
//         "code": "0101",
//         "referenceNumber": "22415123281345100753159",
//         "meta": {
//             "originalCardNumber": "4124120000002351",
//             "transactionClassCode": "PR",
//             "statementDate": "2016-12-01",
//             "taxAmount": "0.67"
//         },
//         "merchant": {
//             "address": { "country": "US", "city": "PEACHTREE CITY", "stateProvince": "GA" },
//             "name": "CHICKFILA 1231"
//         },
//         "postingDate": "2016-11-28",
//         "type": "DBT",
//         "statementBeginDate": "2016-11-01"
//     }]
// }
