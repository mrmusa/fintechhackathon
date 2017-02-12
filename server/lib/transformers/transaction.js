import moment from 'moment'

export default (tsysRes) => {
    const { transactions } = tsysRes;

    // TODO: change to reduce
    return { transactions: transactions.reduce((result, txn) => {
        const {
            date,
            postingId,
            amount,
            code,
            meta,
            merchant,
            postingDate,
            type,
            statementBeginDate
        } = txn;

        if (!['1855411','1628587', '1712068'].includes(postingId)) {
            result.push({
                description: meta.description,
                merchant,
                date: moment(date).add(70, 'd').format('YYYY-MM-DD'),
                id: postingId,
                amount
            })
        }

        return result;
    }, [])};
}
