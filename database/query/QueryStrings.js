import Columns from "../constants/columns.js";

class QueryStrings {

  static SELECT_JOIN_BASE(table_name, columns) {
    let QUERY = "SELECT ";
    for (let i = 0; i < columns.length; i++) {
      QUERY += `${table_name}.${columns[i]}`;
      if (i < columns.length - 1) {
        QUERY += ", ";
      }
    }
    return QUERY;
  }

  static SELECT_JOIN_OTHER(table_name, columns, aliases) {
    let QUERY = ", ";
    for (let i = 0; i < columns.length; i++) {
      QUERY += `${table_name}.${columns[i]} "${aliases[i]}"`;
      if (i < columns.length - 1) {
        QUERY += ", ";
      }
    }
    return QUERY + " ";
  }

  static JOIN(table_one_name, table_two_name, table_two_column) {
    return `LEFT JOIN ${table_one_name} ON ${table_two_name}.${table_two_column} = ${table_one_name}.${Columns.ID} `;
  }

  static FROM(table_name) {
    return `FROM ${table_name} `;
  }

  static WHERE_ACCOUNT_ID(table_name) {
    return `WHERE ${table_name}.${Columns.IS_ACTIVE} = 1 AND ${table_name}.${Columns.ACCOUNT_ID} = ?`;
  }

  static WRAPPER_BY_ID(table_name, query) {
    return query += ` AND ${table_name}.${Columns.ID} = ?`
  }

  static TIME_OPERATIONS(list){
    list.push(Columns.CREATED_TIME, Columns.UPDATED_TIME, Columns.DELETED_TIME)
  }
}

export default QueryStrings;
