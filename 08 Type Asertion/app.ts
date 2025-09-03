// Type Assertion

// Way 1
let value: unknown = "Hello World";
let strLength: number = (value as string).length;

// Way 2
let strLength2: number = (<string>value).length;
