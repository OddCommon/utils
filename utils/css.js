const isString = (value) => {
    return Object.prototype.toString.call(value) === "[object String]";
  };
  
  export const css = (...args) => {
    let stylesList = [];
  
    args
      .filter((style) => !!style) // remove any falsey values from our styles array and join our style classes.
      .forEach((style) => {
        if (Array.isArray(style)) {
          stylesList = stylesList.concat(css(...style)); // Use recursion to handle nested array of styles.
        } else if (isString(style)) {
          stylesList.push(style); // Only add strings to our results
        }
      });
  
    return stylesList.join(" ");
  };
  