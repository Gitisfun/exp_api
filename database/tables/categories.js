import BaseQueries from "../query/BaseQueries.js";

// TABLE NAME AND COLUMNS

const TABLE_NAME = "categories";

const COLUMN_NAME = "name"
const COLUMN_ACCOUNT_ID = "account_id"


// QUERIES

function QUERY_GET_ALL(){
    const COLUMNS = [COLUMN_NAME]
    return BaseQueries.selectAll(TABLE_NAME, COLUMNS)
}

function QUERY_GET() {
    const COLUMNS = [COLUMN_NAME]
    return BaseQueries.select(TABLE_NAME, COLUMNS)
}

function QUERY_CREATE() {
    const COLUMNS = [COLUMN_NAME, COLUMN_ACCOUNT_ID]
    return BaseQueries.create(TABLE_NAME, COLUMNS)
}

function QUERY_UPDATE() {
    const COLUMNS = [COLUMN_NAME]
    return BaseQueries.update(TABLE_NAME, COLUMNS)
}

function QUERY_DELETE() {
    return BaseQueries.delete(TABLE_NAME)
}

export { QUERY_GET, QUERY_GET_ALL, QUERY_CREATE, QUERY_UPDATE , QUERY_DELETE };