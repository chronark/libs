import { randomBytes, randomUUID } from 'crypto';

/**
 * Generate ids similar to stripe
 */
export class IdGenerator<TPrefixes extends string> {
  private prefixes: Record<TPrefixes, string>;

  /**
   * Create a new id generator with fully typed prefixes
   * @param prefixes - Relevant prefixes for your domain
   */
  constructor(prefixes: Record<TPrefixes, string>) {
    this.prefixes = prefixes;
  }

  /**
   * Generate a new unique base64 encoded uuid with a defined prefix
   *
   * @returns xxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  public id(prefix: TPrefixes): string {
    return [
      this.prefixes[prefix],
      Buffer.from(randomUUID().replace(/-/g, ''), 'hex').toString('base64'),
    ].join('_');
  }
  /**
   * Generate a new random base64 encoded secret with a defined prefix
   *
   * @returns xxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  public secret(prefix: TPrefixes, bytes = 64): string {
    return [this.prefixes[prefix], randomBytes(bytes).toString('base64')].join(
      '_'
    );
  }
}
