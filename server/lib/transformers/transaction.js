export default (tsysRes) => {
    const { transactions } = tsysRes;

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
            id: postingId
        }
    })};
}
