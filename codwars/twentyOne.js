// Светофор, меняетмя цвет на другой при входе

// function updateLight(current) { return current === 'green' ? "yellow": current === 'yellow'? 'red' : 'green'}

function updateLight(current) {
switch (current) {
    case "green":
      return  'yellow';
      break;
    case "yellow":
        return  'red';
    break;
    case "red":
        return  'green';
    break;
  }
}

console.log(updateLight('red'));
