class Info {
  constructor(
    public brand: string,
    public model: string,
    private details: string
  ) {}
}

let mercedeze = new Info("mercedeze", "xl6", "Only for rich persons");

console.log(mercedeze);
