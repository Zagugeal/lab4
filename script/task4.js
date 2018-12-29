function addBlock() {
    let newRectangle = document.createElement('div');
    newRectangle.innerHTML;
    let task3 = document.getElementById('field3');
    task3.appendChild(newRectangle);
  
    let r = Math.floor(Math.random() * (223));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  
    let widthNumber = getRandomInt(40, 150);
    let widthPX = widthNumber.toString(10) + 'px';
    let heightNumber = getRandomInt(40, 150);
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
        'backgroundColor': color,
        'width': widthPX,
        'height': heightPX,
        'left': leftPX,
        'top': topPX,
  
      },
    });
  
    newRectangle.setAttribute('class', 'draggable')
  }
  
  document.onmousedown = function(e) {
    let elem = e.target; 
    if (elem.className && elem.className.indexOf('draggable') >= 0) { 
      elem.ondragstart = function() {
        return false
      }; 
      let coor = elem.getBoundingClientRect(); 
      let osx = e.offsetX; 
      let osy = e.offsetY; 
      elem.style.position = 'fixed'; 
      elem.style.top = coor.top + 'px';
      elem.style.left = coor.left + 'px'; 
  
      document.onmousemove = function(ev) { 
          let x = ev.clientX; 
          let y = ev.clientY; 
  
        //let winX = document.documentElement.clientWidth; 
        //let winY = document.documentElement.clientHeight; 
  
        
        elem.style.left = x - osx + 'px'; 
        elem.style.top = y - osy + 'px'; 
        removeSelect(); 
      }
    }
  }
  
  document.onmouseup = function(e) { 
    var elem = e.target; 
    document.onmousemove = function() {
      return false
    }; 
  }
  
  function removeSelect() { 
    var b = document.body; 
    b.style.webkitUserSelect = b.style.mozUserSelect = b.style.msUserSelect = 'none'; 
  } 
  three.onmousemove = function() { 
       x1= event.clientX; 
       y1= event.clientY;
       x2=x1-49;
       y2=y1-111; 
  }
  document.onclick=function()
  {
    if(x1>50 && x1<630 && y1>110 && y1<600)
    {
      let newRectangle = document.createElement('div');
      newRectangle.innerHTML;
      let task3 = document.getElementById('field3');
      task3.appendChild(newRectangle);
    
      let r = Math.floor(Math.random() * (223));
      let g = Math.floor(Math.random() * (256));
      let b = Math.floor(Math.random() * (256));
      let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
      let ranBB=getRandomInt(50, 150);
      let ranBL=getRandomInt(0, 50);
      let ranBR=getRandomInt(0, 50);
      let ranwPX= getRandomInt(50, 200);
      let widthPX = ranwPX + 'px';
      let heightPX = 0;
      let leftPX =  x2-(ranwPX/2) + 'px';
      let topPX =  y2 -(ranBB/2)+ 'px';
      let border_bottom=ranBB+'px solid '+color;
      let border_left=ranBL+'px solid transparent';
      let border_right=ranBR+'px solid transparent';
  
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
          'width': widthPX,
          'height': heightPX,
          'left': leftPX,
          'top': topPX,
          'border-bottom': border_bottom,
            'border-left': border_left,
            'border-right': border_right,
        },
      });
      newRectangle.setAttribute('class', 'draggable')
    }
  }
