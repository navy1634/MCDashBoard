import connectDatabase from '@/app/api/utils/db';

export async function GET(request: any, response: Response) {
  const params = request.nextUrl.searchParams;
  const method = params.get('method');
  console.log(method);
  const sql_code = 'SELECT * FROM Players';
  const data = await connectDatabase(sql_code);

  return new Response(JSON.stringify({ info: data }));
}

export async function POST(request: Request, response: Response) {
  const body = await request.json();

  console.log('POST request', body);

  return new Response(JSON.stringify({ message: 'POST World' }));
}
