function addRectangle() {
  let newRectangle = document.createElement('div');
  newRectangle.innerHTML;
  let task2 = document.getElementById('task2');
  task2.appendChild(newRectangle);

  let r = Math.floor(Math.random() * (223));
  let g = Math.floor(Math.random() * (256));
  let b = Math.floor(Math.random() * (256));
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  let widthNumber = getRandomInt(40, 100);
  let widthPX = widthNumber.toString(10) + 'px';
  let heightNumber = getRandomInt(40, 50);
  let heightPX = heightNumber.toString(10) + 'px';

  let leftNumber = getRandomInt(0, 600);
  let leftPX = leftNumber.toString(10) + 'px';
  let topNumber = getRandomInt(0, 300);
  let topPX = topNumber.toString(10) + 'px';

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

  newRectangle.setAttributes({
    'styles': {
      'height': heightPX,
      'width': widthPX,
      'backgroundColor': color,
      'left': leftPX,
      'top': topPX,
    },
  });

  newRectangle.setAttribute('class', 'rectitac');

  task2.onclick = function(event) {
    let target = event.target; 
    if (target.className != 'rectitac') return; 
    light(target); 
    target.style.zIndex = 7500;
  };
}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let selectedDiv;

function light(node) {
  if (selectedDiv) {
    selectedDiv.removeAttribute('id');
  }
  selectedDiv = node;
  selectedDiv.setAttribute('id', 'highlight');
}
