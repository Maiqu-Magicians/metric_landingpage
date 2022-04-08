export default class Product {
  constructor(
    public readonly name: string,
    public readonly index: number,
    public readonly backgd_url: string,
    public readonly target_url: string,
    public readonly price: number,
    public readonly count: number,
    public readonly type: string
  ) {
  }
}
