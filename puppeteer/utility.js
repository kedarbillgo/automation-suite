module.exports = {
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
