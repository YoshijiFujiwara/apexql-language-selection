import { Parser } from "node-sql-parser";
import readline from "readline";

const parser = new Parser();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `実行したいSQLを垂れ流しましょう！
> `,
  (stmt) => {
    const ast = parser.astify(stmt);
    // console.log(ast);
    console.log(JSON.stringify(ast));

    rl.close();
  }
);
