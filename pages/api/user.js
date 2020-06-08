// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const FOO = {id: 1, first: "Foo", last: "Baz"};
const BAR = {id: 2, first: "Bar", last: "Baz"};

export default (req, res) => {
  let data = {};
  if(req.method === "POST") {
    const {id} = req.body;
    if(id === 1) {
      data = {...FOO, age: 25, friends: [BAR] };
    } else {
      data = {...BAR, age: 45, friends: [FOO]};
    }
  }
  res.statusCode = 200
  res.json(data);
}
