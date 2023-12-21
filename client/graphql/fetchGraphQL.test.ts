import { fetchGraphQL } from ".";

window.fetch = jest
  .fn()
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve({ data: "hello world" }) })
  );

describe("fetchGraphQL", () => {
  test("has a reliable function signature", async () => {
    await fetchGraphQL("", {});

    expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/graphql", {
      body: '{"query":"","variables":{}}',
      headers: { "content-type": "application/json" },
      method: "POST",
    });
  });

  test("correctly returns the response", async () => {
    const result = await fetchGraphQL("", {});
    expect(result).toEqual("hello world");
  });
});
