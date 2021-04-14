export type Table = {
  [key: string]: {
    schema: {
      [key: string]: {
        type: string;
        nullable: boolean;
        unique: boolean;
      };
    };
    data: Array<any>; // 一旦、anyなのだ
  };
};
