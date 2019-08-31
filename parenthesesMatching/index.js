/* CHALLENGE
Given an String of an expression with parenthesis, brackets and braces, we must 
return if all of those are correctly closed: Ex
{[({[]})]} = true
{([}]) = false
*/

function parenthesesMatching(expression) {
  if (expression.length === 0) {
    return false;
  }
  const leftSide = "([{";
  const rightSide = ")]}";
  const closingMap = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const stack = [];
  let lastStackItem;

  for (char of expression) {
    if (leftSide.includes(char)) {
      stack.push(char);
    } else if (rightSide.includes(char)) {
      lastStackItem = stack.pop();
      if (char !== closingMap[lastStackItem]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

module.exports = parenthesesMatching;
