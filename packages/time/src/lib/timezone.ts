export class Timezone {
  public readonly offset: number;

  public constructor(offset: number) {
    this.offset = offset;
  }

  static utc(): Timezone {
    return new Timezone(0);
  }
}
