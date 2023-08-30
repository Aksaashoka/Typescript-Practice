let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = {};
anyVar = [];

let isNew: Boolean = anyVar;
anyVar.DoSomething();
anyVar.touppercase();

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = {};
unknowVar = [];

//unknowVar.DoSomething()
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}
if (typeof unknowVar === 'boolean') {
  let isNew2: boolean = unknowVar;
}
const parse = (str: string): unknown => {
  return JSON.parse(str);
};
