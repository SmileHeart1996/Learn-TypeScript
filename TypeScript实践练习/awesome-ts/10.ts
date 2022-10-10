type Trim<V extends string> = V extends ` ${infer res}` | `${infer res} ` ? Trim<res> : V;

// ' semlinker ' => 'semlinker'
type T1 = Trim<' semlinker '>
