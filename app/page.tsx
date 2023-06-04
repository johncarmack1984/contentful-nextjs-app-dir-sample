async function getData() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return await res.json();
}


export default async function Page() {
  const { items } = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 justify-center p-24">
      <h1 className="text-4xl font-bold text-center">Fetched from Contentful:</h1>
      <div className="flex flex-col items-center justify-center">{JSON.stringify(items,null,2)}</div>
    </main>
  )
}
