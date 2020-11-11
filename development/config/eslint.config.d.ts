declare type Rule = Record<string, number | any[]>;

declare type Args = {
  env?: { node?: boolean; browser?: boolean; 'cypress/globals'?: boolean };
  dirname: string;
  tsConfigFile: string;
  jsx?: boolean;
  rules?: Rule;
  plugins?: string[];
  extends?: string[];
}

export declare const createEslintConfig: (args: Args) => any;