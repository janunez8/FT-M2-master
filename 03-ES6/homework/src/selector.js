var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let arraRes = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...arraRes];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector) {
    if (selector[0] === "#") return "id";
    else if (selector[0] === ".") return "class";
    else if (selector.includes(".")) return "tag.class";
    else return "tag";
  } else {
    return "No hay ningun selector";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);

  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (e) {
      //console.log(e.id);
      return `#${e.id}` === selector;
    };
  } else if (selectorType === "class") {
    matchFunction = function (e) {
      let classes = e.classList;
      for (let i = 0; i < classes.length; i++) {
        if ("." + classes[i] === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = function (e) {
      let [tag, clase] = selector.split(".");
      return matchFunctionMaker(tag)(e) && matchFunctionMaker("." + clase)(e);
    };
  } else if (selectorType === "tag") {
    matchFunction = function (e) {
      return e.tagName.toLowerCase() === selector.toLowerCase();
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

$("#hola");
