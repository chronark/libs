import { randomBytes, randomUUID } from 'crypto';
import { encodeBase58 } from './encoding';

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
   * Generate a new unique base58 encoded uuid with a defined prefix
   *
   * @returns xxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  public id(prefix: TPrefixes): string {
    return [
      this.prefixes[prefix],
      encodeBase58(Buffer.from(randomUUID().replace(/-/g, ''), 'hex')),
    ].join('_');
  }
  /**
   * Generate a new random base58 encoded secret with a defined prefix
   *
   * @returns xxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  public secret(prefix: TPrefixes, bytes = 64): string {
    return [this.prefixes[prefix], encodeBase58(randomBytes(bytes))].join('_');
  }
}

new IdGenerator({ user: 'u' }).id('user');
