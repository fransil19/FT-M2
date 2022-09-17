var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl)

  for(let i=0; i< startEl.children.length; i++){
    let child = startEl.children[i]
    let result = traverseDomAndCollectElements(matchFunc, child)

    resultSet = [...resultSet, ...result]
  }

  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === "#"){
    return "id"
  }
  if(selector[0] === "."){
    return "class"
  }
  if(selector.includes(".")){
    return "tag.class"
  }
  else{
    return "tag"
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function (el) {
      let sel = selector.slice(1) // formateo el selector para que pueda coincidir con el del elemento html
      return el.id && (el.id.toLowerCase() === sel.toLowerCase())
    }
  } else if (selectorType === "class") {
    matchFunction = (el) => {
      for(let i = 0; i< el.classList.length; i++){
        if('.'+el.classList[i] === selector) return true
      }
      return false
    }
  } else if (selectorType === "tag.class") {
    let [tag,classname] = selector.split('.')
    matchFunction = (el) => {
      return (matchFunctionMaker(tag)(el) && matchFunctionMaker('.'+classname)(el))
     }
  } else if (selectorType === "tag") {
    matchFunction = (el) => {
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase())
     }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
