const { Parser } = require("node-sql-parser");
const parser = new Parser();

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `実行したいSQLを垂れ流しましょう！
> `,
  (stmt) => {
    const ast = parser.astify(stmt);
    console.log(JSON.stringify(ast));

    rl.close();
  }
);
