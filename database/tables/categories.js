import Columns from "../constants/columns.js";
import BaseQueries from "../query/BaseQueries.js";
import QueryStrings from "../query/QueryStrings.js";

// TABLE NAME AND COLUMNS

const TABLE_NAME = "categories";

const COLUMN_NAME = "name";
const COLUMN_ACCOUNT_ID = "account_id";


// JOIN

export const TABLE_NAME_CATEGORY = "categories";

const CATEGORY_COLUMN_NAME = "name";

const CATEGORY_ALIAS_ID = "category_id";
const CATEGORY_ALIAS_NAME = "category_name";

const CATEGORY_COLUMNS = [Columns.ID, CATEGORY_COLUMN_NAME];
const CATEGORY_ALIASES = [CATEGORY_ALIAS_ID, CATEGORY_ALIAS_NAME];

export const CATEGORY_JOIN_SELECT = () => QueryStrings.SELECT_JOIN_OTHER(TABLE_NAME_CATEGORY, CATEGORY_COLUMNS, CATEGORY_ALIASES)
export const CATEGORY_JOIN = (table_name) => QueryStrings.JOIN(TABLE_NAME_CATEGORY, table_name, CATEGORY_ALIAS_ID)


// QUERIES

function QUERY_GET_ALL() {
  const COLUMNS = [COLUMN_NAME];
  return BaseQueries.selectAll(TABLE_NAME, COLUMNS);
}

function QUERY_GET() {
  const COLUMNS = [COLUMN_NAME];
  return BaseQueries.select(TABLE_NAME, COLUMNS);
}

function QUERY_CREATE() {
  const COLUMNS = [COLUMN_NAME, COLUMN_ACCOUNT_ID];
  return BaseQueries.create(TABLE_NAME, COLUMNS);
}

function QUERY_UPDATE() {
  const COLUMNS = [COLUMN_NAME];
  return BaseQueries.update(TABLE_NAME, COLUMNS);
}

function QUERY_DELETE() {
  return BaseQueries.delete(TABLE_NAME);
}

export { QUERY_GET, QUERY_GET_ALL, QUERY_CREATE, QUERY_UPDATE, QUERY_DELETE };
