export class EnvironmentVariableNotFoundError extends Error {
  public readonly variableName: string;
  /**
   * @param name - The name of the environment variable.
   */
  constructor(name: string) {
    super(`Environment variable "${name}" not found.`);
    this.variableName = name;
  }
}
