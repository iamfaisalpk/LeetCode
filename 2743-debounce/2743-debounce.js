/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

function debounce(fn, t) {
  let saverTimeOut = null;
  return (...args) => {
    clearTimeout(saverTimeOut);
    saverTimeOut = setTimeout(() => fn(...args), t);
  };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */