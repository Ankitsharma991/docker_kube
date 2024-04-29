const client = require("./client");

async function init() {
  try {
    // await client.set('msg:5', 'Hey from NodeJs');
    await client.expire("msg:5", 10);
    const result = await client.get("msg:5");

    console.log("Result -> ", result);
  } catch (error) {
    console.error("Error fetching data from Redis:", error);
  }
}

init();
