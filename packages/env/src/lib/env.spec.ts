import { loadEnv, requireEnv } from './env';
import { EnvironmentVariableNotFoundError } from './error';

describe('loadEnv()', () => {
  describe('when the variable exists', () => {
    it('returns the variable', () => {
      const key = `TEST_KEY_${Math.random().toFixed(8)}`;
      const value = 'value';
      process.env[key] = value;
      expect(loadEnv(key)).toEqual(value);
    });
  });

  describe('when the variable does not exist', () => {
    describe('when a fallback is provided', () => {
      it('returns the fallback value', () => {
        const key = `TEST_KEY_${Math.random().toFixed(8)}`;

        expect(loadEnv(key, 'fallback')).toEqual('fallback');
      });
    });

    describe('when no fallback is provided', () => {
      it('returns undefined', () => {
        const key = `TEST_KEY_${Math.random().toFixed(8)}`;

        expect(loadEnv(key)).toBe(undefined);
      });
    });
  });
});

describe('requireEnv()', () => {
  describe('when the variable exists', () => {
    it('returns the variable', () => {
      const key = `TEST_KEY_${Math.random().toFixed(8)}`;
      const value = 'value';
      process.env[key] = value;

      expect(requireEnv(key)).toEqual(value);
    });
  });

  describe('when the variable does not exist', () => {
    it('throws', () => {
      const key = `TEST_KEY_${Math.random().toFixed(8)}`;

      expect(()=>requireEnv(key)).toThrowError(EnvironmentVariableNotFoundError);
    });
  });
});
