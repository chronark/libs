export function encodeBase58(buf: Buffer): string {
  const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

  let encoding = false;
  let zeroCounter = 0;
  const bytes: number[] = [];
  let carry = 0;

  for (let i = 0; i < buf.length; i++) {
    console.log(buf[i]);
    if (i > 0 && carry === 0) {
      break;
    }
    const byte = buf[i];
    if (!encoding && byte === 0) {
      zeroCounter++;
    }
    if (byte !== 0) {
      encoding = true;
    }
    if (encoding) {
      carry += byte * 256;
    }
    bytes.push(carry % 58);
    carry = Math.floor(carry / 58);
  }
  console.log({ zeroCounter, bytes });
  return [
    ...new Array(zeroCounter).fill('1'),
    ...bytes.map((byte) => alphabet[byte]),
  ].join('');
}