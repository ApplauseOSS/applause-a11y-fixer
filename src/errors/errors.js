/**
 * Custom error for processors
 */
class ProcessorError extends Error {
  /**
   * Create a new instance of ProcessorError
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = 'ProcessorError';
  }
}

/**
 * Custom error for fix command
 */
class FixError extends Error {
  /**
   * Create a new instance of FixError
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = 'FixError';
  }
}

exports.FixError = FixError;
exports.ProcessorError = ProcessorError;
