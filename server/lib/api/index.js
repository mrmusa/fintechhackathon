import express from 'express'
import rp from 'request-promise'
import templates from 'uri-templates'
import config from '../config'
import xTransactions from '../transformers/transaction'

const notImplemented = (req, res, next) => res.status(501).json({ 'error': 'NotImplemented' });
const router = express.Router();

router.get('/txn/latest', (req, res, next) => {
    const tsys = config.get('opts:tsys');
    const cardNumber = '4124120000002351';
    const { dateFrom = '2016-11-01', dateTo = '2016-11-30' } = req.query;
    const params = { cardNumber, dateFrom, dateTo };
    tsys.uri = templates(tsys.uri).fill(params);
    rp(tsys).then(xTransactions)
        .then(zsRes => res.status(200).json(zsRes)).catch(next);
});

router.put('/txn/:txnId', notImplemented);

router.get('/cue/latest', notImplemented);

export default router;

