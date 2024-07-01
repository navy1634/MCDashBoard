import { NextResponse } from "next/server";
import { connectDatabase } from "@/app/api/utils/dbAuth";
import { createSQLCode } from "@/app/api/libs/DashBoard/code";

const DBName = "goods"

export async function GET(req: Request, { params }: { params: any }) {
  const searchParams = new URLSearchParams(req.url.split("?")[1]);
  const code = searchParams.get("code");
  const method = searchParams.get("method");

  let sql_code = createSQLCode(method, code, searchParams);

  let res_data = "";
  if (sql_code === "") {
    res_data = "Error: Invalid method";
  } else {
    const res = await connectDatabase(sql_code);
    res_data = res.res[0];
  }
  return NextResponse.json({ info: res_data });
}

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const sql_code = `INSERT INTO ${DBName} (name, code, price, release_date, released, description, groups) VALUES ('${data.name}', '${data.code}', ${data.price}, '${data.releaseDate}', ${data.released}, '${data.description}', '${data.group}');`;
  const goods_info = await connectDatabase(sql_code);
  console.log(sql_code);
  return NextResponse.json({ message: goods_info.res[0] });
}
