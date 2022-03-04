import chalk from "chalk";
import { TABLE_NAME_ACCOUNTS } from "../../database/tables/accounts.js"
import { TABLE_NAME_CATEGORY } from "../../database/tables/categories.js"
import { TABLE_NAME_TRANSACTIONS } from "../../database/tables/transactions.js"

export const tableStates = (table_name) => {
    switch(table_name){
        case TABLE_NAME_TRANSACTIONS: return chalk.hex('#12CBC4')
        case TABLE_NAME_CATEGORY: return chalk.hex('#9980FA')
        case TABLE_NAME_ACCOUNTS: return chalk.hex('#9980FA')
    }
}