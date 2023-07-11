module.exports = {
   /**
   * Get the file name based on today's date and time
   * @returns {object} { full: 2023_07_03_12_37_03, short: 2023_07_03 }
   */
  fileName() {
    const today = new Date();
    const dd    = String(today.getDate()).padStart(2, '0');
    const mm    = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy  = today.getFullYear();
    const hr    = String(today.getHours())
    const min   = String(today.getMinutes())
    const sec   = String(today.getSeconds())
    return {
      full: `${yyyy}_${mm}_${dd}_${hr}_${min}_${sec}`,
      short: `${yyyy}_${mm}_${dd}`
    };
  },

  /**
   * Given is null and undefined
   * @param {*} val
   * @returns {boolean} true/false
   */
  isNil(val) {
    return [null, undefined].includes(val);
  },

  /**
   * Given is null
   * @param {*} val
   * @returns {boolean} true/false
   */
  isNull(val) {
    return val === null;
  },

  /**
   * Given is not null or undefined.
   * @param {*} val
   * @returns {boolean} true/false
   */
  isNotNil(val) {
    return !this.isNil(val);
  },

  /**
   * Given is not null
   * @param {*} val
   * @returns {boolean} true/false
   */
  isNotNull(val) {
    return !this.isNull(val);
  },

  /**
   * Given is object or not
   * @param {*} val
   * @returns {boolean} true/false
   */
  isObject(val) {
    return typeof val === "object" && this.isNotNull(val);
  },
};