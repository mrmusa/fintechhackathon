export default (tsysRes) => {
    const { transactions } = tsysRes;

    // TODO: change to reduce
    // filter for 1855411 and 1628587
    return { transactions: transactions.map(txn => {
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

        return {
            description: meta.description,
            merchant,
            date,
            id: postingId,
            amount
        }
    })};
}
