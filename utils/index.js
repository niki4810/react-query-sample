export const fetchData = async (key, variables) => {
  const uri = "http://localhost:3000/api/user";
  const body = JSON.stringify(variables);
  const resp = await fetch(uri, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body
  });
  const data = await resp.json();
  return data;
}