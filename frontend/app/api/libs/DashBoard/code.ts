const DBName = "goods"

export function createSQLCode(method: string | null, code: string | null, searchParams: URLSearchParams) {
  let sql_code = "";
  if (method === "detail") {
    sql_code = `SELECT * FROM ${DBName} WHERE code = '${code}'`;
  } else if (method === "update") {
    let sql_code_parts = "";
    for (const [key, value] of searchParams) {
      if (key === "method" || key === "code") continue;
      sql_code_parts += `${key} = '${value}', `;
    }
    sql_code = `UPDATE ${DBName} SET ${sql_code_parts} WHERE code = '${code}'`;
  } else if (method === "delete") {
    sql_code = `DELETE FROM ${DBName} WHERE code = '${code}'`;
  }
  return sql_code;
}