import Logger from "../../middleware/logger.js";
import Columns from "../constants/columns.js";

class BaseQueries {

  static selectAll(table_name, columns) {
    let QUERY = `SELECT ${Columns.ID}, `;
    for (let i = 0; i < columns.length; i++) {
      QUERY += `${columns[i]}, `;
    }    
    QUERY += `${Columns.CREATED_TIME}, ${Columns.UPDATED_TIME}, ${Columns.DELETED_TIME} FROM ${table_name} `
    QUERY += `WHERE ${Columns.IS_ACTIVE} = 1 AND ${Columns.ACCOUNT_ID} = ?`
    Logger.info(QUERY)
    return QUERY;
  }
  
  static create(table_name, columns) {
    let QUERY = `INSERT INTO ${table_name} (`;
    for (let i = 0; i < columns.length; i++) {
      QUERY += `${columns[i]}`;
      if (i < columns.length - 1) {
        QUERY += ", ";
      }
    }
    QUERY += ") VALUES (";
    for (let i = 0; i < columns.length; i++) {
      QUERY += `?`;
      if (i < columns.length - 1) {
        QUERY += ", ";
      }
    }
    QUERY += ")";
    Logger.info(QUERY)
    return QUERY;
  }

  static select(table_name, columns){
    const QUERY = `${this.selectAll(table_name, columns)} AND ${Columns.ID} = ?`
    Logger.info(QUERY)
    return QUERY
  }

  static update(table_name, columns) {
    let QUERY = `UPDATE ${table_name} SET `;
    for (let i = 0; i < columns.length; i++) {
      QUERY += `${columns[i]} = ?, `;
    }
    QUERY += `updated_time = NOW() WHERE id = ?`;
    Logger.info(QUERY)
    return QUERY;
  }

  static delete(table_name) {
    const QUERY = `UPDATE ${table_name} SET isActive = 0, deleted_time = NOW() WHERE id = ?`;
    Logger.info(QUERY)
    return QUERY
  }

  static insertAll(table_name, columns) {
    let QUERY = `INSERT INTO ${table_name} (`;
    for (let i = 0; i < columns.length; i++) {
      QUERY += `${columns[i]}`;
      if (i < columns.length - 1) {
        QUERY += ", ";
      }
    }
    QUERY += ") VALUES ?";
    Logger.info(QUERY)
    return QUERY;
  }
}

export default BaseQueries;
