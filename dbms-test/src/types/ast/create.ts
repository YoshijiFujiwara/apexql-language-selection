import { AST } from "node-sql-parser";
import {
  create_table_stmt_node,
  create_column_definition,
} from "node-sql-parser/ast/postgresql";

// https://github.com/taozhi8833998/node-sql-parser/blob/master/ast/postgresql.ts
// を参考に組み立てたけども、解せないところがある。改修必要そう
// いくつか、CREATE文を実行して見たけど、"create_definitions"キーが正しいっぽい
export type Create = Omit<create_table_stmt_node, "create_definition"> & {
  // create_table_definition 型を引っ張ってくると、贅肉がついてくるので、create_column_definition で
  create_definitions?: create_column_definition[];
};

export type AST_CREATE = AST | Create;
