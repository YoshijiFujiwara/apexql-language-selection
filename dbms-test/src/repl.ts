import { Parser } from "node-sql-parser";
import { AST_CREATE, Create } from "./types/ast/create";
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
    const ast: AST_CREATE | AST_CREATE[] = parser.astify(stmt);
    // console.log(ast);
    // console.log(typeof ast);
    // console.log(JSON.stringify(ast));
    const createAst = ast as Create[]; // 検証のため、一旦 asで
    for (let node of createAst) {
      if (!node.create_definitions) return;
      for (let createDefinition of node.create_definitions) {
        console.log("column -> ", createDefinition.column);
        console.log("definition -> ", createDefinition.definition);
        console.log("nullable -> ", createDefinition.nullable);
      }
    }

    rl.close();
  }
);
