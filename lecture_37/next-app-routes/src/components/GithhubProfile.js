import Click from "./Click";

async function getData() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata", {
        next: {
            revalidate: 10,
        }
    }
  );
  const data = await response.json();
  return data;
}

export default async function GithhubProfile() {
  const data = await getData();

  return (
    <div>
      <h1>{data.datetime}</h1>
      <Click data={data}/>
    </div>
  );
}
