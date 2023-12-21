// TODO: Use an environment variable here;
const hostname = "http://localhost:3001";

async function fetchGraphQL(query: string, variables: Record<string, any>) {
  const url = new URL("/graphql", hostname).toString();
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const json = await response.json();
  return json.data;
}

export default fetchGraphQL;
