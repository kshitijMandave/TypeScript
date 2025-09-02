// after brackets u can add what it will return ():void

// Function Types
function abcd(name: string, cb: (value: string) => void) {}

abcd("Kshitij", (value: string) => {
  console.log(value);
});
