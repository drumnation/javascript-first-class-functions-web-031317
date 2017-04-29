
function receivesAFunction(callback_function) {
  callback_function()
} // index receivesAFunction(callback) receives a function and calls it

function returnsANamedFunction() {
  return function sublimate() { return "incredibly sublimated..." }
} // index returnsANamedFunction() "before all" hook

function returnsAnAnonymousFunction() {
  return () => { return 'I have no idea who I am. Do you?' }
} // index returnsAnAnonymousFunction() "before all" hook
