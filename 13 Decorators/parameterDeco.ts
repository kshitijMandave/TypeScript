function LogParameter(target: any, methodName: string, paramIndex: number) {
  console.log(`Parameter at index ${paramIndex} in ${methodName}`);
}

class Example {
  greet(@LogParameter message: string) {
    console.log(message);
  }
}
