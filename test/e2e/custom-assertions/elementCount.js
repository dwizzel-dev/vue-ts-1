// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions
// https://github.com/nightwatchjs/nightwatch/tree/master/lib/api/assertions


exports.assertion = function (selector, expect) {

  this.message = `Testing if element <${selector}> has count: ${expect}`;

  this.expected = () => expect;

  this.pass = value => value === expect;

  this.value = result => result.value; //comes from the cb.call()

  this.command = (cb) => {
    // console.log(cb.toString());
    return this.api.execute(
      sel => document.querySelectorAll(sel).length,
      [selector],
      res => cb.call(this, res)
    )
  }

};
