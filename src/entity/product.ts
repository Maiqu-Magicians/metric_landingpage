export default class Product {
  constructor(
    public readonly Name: string,
    public readonly Id: number,
    public readonly backUrl: string,
    public readonly targetUrl: string
  ) {}
}
