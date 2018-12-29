function getText() {
  let text = document.getElementById('typedText').value;
  let textcolor = document.getElementById('colorText').value;
  let newLine = document.createElement('div');
  let selectionPosition = document.getElementsByName('positionInList');
  newLine.innerHTML = text;
  newLine.onclick = removeDiv;

  function removeDiv() {
    list.removeChild(this);
  };

  Element.prototype.setAttributes = function(attrs) {
    for (var idx in attrs) {
      if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
        for (var prop in attrs[idx]) {
          this.style[prop] = attrs[idx][prop];
        }
      } else {
        this.setAttribute(idx, attrs[idx]);
      }
    }
  };

  newLine.setAttributes({
    'styles': {
      'backgroundColor': textcolor,
    },
  });

  for (let i = 0; i < selectionPosition.length; i++) {
    if (selectionPosition[i].type == "radio" && selectionPosition[i].checked) {
      list.appendChild(newLine);
    } else {
      list.insertBefore(newLine, list.firstChild);
    }
  }
}

function alertText() {
  let alrt = document.getElementById('list');
  let elems = alrt.children;
  let fullElem = new Array();
  elems = Array.prototype.slice.call(elems);
  for (let i = 0; i < elems.length; i++) {
    fullElem[i] = elems[i].textContent;
  }
  alert(fullElem.join());
}
