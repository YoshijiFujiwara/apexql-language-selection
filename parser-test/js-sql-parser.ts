const parser = require("js-sql-parser");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `実行したいSQLを垂れ流しましょう！
> `,
  (stmt) => {
    const ast = parser.parse(stmt);

    // console.log(JSON.stringify(ast, null, 2));

    // ast.value.selectItems.value[0].value = "foo";
    // ast.value.from.value[0].value.value.value = "bar";

    // console.log(ast);
    console.log(JSON.stringify(ast));

    rl.close();
  }
);
