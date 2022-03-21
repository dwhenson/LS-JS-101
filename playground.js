function objectHasProperty(object, property) {
  return object.hasOwnProperty([property]) ? 1 : 2;
  return object[property] ? 1 : 2;
}

let obj = {
  something: 3,
  enabled: false,
  result: undefined,
};

objectHasProperty(obj, "something"); //?
objectHasProperty(obj, "active"); //?
