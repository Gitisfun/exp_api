import Columns from "../constants/columns.js";
import BaseQueries from "../query/BaseQueries.js";
import QueryStrings from "../query/QueryStrings.js";
import { CATEGORY_JOIN, CATEGORY_JOIN_SELECT } from "./categories.js";


// TABLE NAME AND COLUMNS

const TABLE_NAME = "transactions";

const COLUMN_NAME = "name"
const COLUMN_DESCRIPTION = "description"
const COLUMN_TYPE = "type"
const COLUMN_CATEGORY_ID = "category_id"
const COLUMN_DATE_AND_TIME = "date_and_time"
const COLUMN_MONEY = "money"
const COLUMN_ACCOUNT_ID = "account_id"

export const TABLE_NAME_TRANSACTIONS = "transactions";

// QUERIES

function QUERY_GET_ALL() {
    const COLUMNS = [Columns.ID, COLUMN_NAME, COLUMN_DESCRIPTION, COLUMN_TYPE, COLUMN_DATE_AND_TIME, COLUMN_CATEGORY_ID, COLUMN_MONEY, COLUMN_ACCOUNT_ID]
    QueryStrings.TIME_OPERATIONS(COLUMNS)
    let QUERY = QueryStrings.SELECT_JOIN_BASE(TABLE_NAME, COLUMNS)
    QUERY += CATEGORY_JOIN_SELECT()
    QUERY += QueryStrings.FROM(TABLE_NAME)
    QUERY += CATEGORY_JOIN(TABLE_NAME)
    QUERY += QueryStrings.WHERE_ACCOUNT_ID(TABLE_NAME)
    return QUERY
}

function QUERY_GET() {
    return QueryStrings.WRAPPER_BY_ID(TABLE_NAME, QUERY_GET_ALL())
}

function QUERY_CREATE() {
    const COLUMNS = [COLUMN_NAME, COLUMN_DESCRIPTION, COLUMN_TYPE, COLUMN_CATEGORY_ID, COLUMN_MONEY, COLUMN_ACCOUNT_ID]
    return BaseQueries.create(TABLE_NAME, COLUMNS)
}

function QUERY_UPDATE() {
    const COLUMNS = [COLUMN_NAME, COLUMN_DESCRIPTION, COLUMN_TYPE, COLUMN_CATEGORY_ID, COLUMN_MONEY]
    return BaseQueries.update(TABLE_NAME, COLUMNS)
}

function QUERY_DELETE() {
    return BaseQueries.delete(TABLE_NAME)
}

export { QUERY_GET, QUERY_GET_ALL, QUERY_CREATE, QUERY_UPDATE , QUERY_DELETE };