export default function getPosition(dir, position) {
  if (position1.includes(position) || position3.includes(position)) {
    return position;
  }
  switch (position) {
    case 'start':
      return dir === 'rtl' ? 'right' : 'left';
    case 'end':
      return dir === 'rtl' ? 'left' : 'right';
    case 'topStart':
      return dir === 'rtl' ? 'topRight' : 'topLeft';
    case 'topEnd':
      return dir === 'rtl' ? 'topLeft' : 'topRight';
    case 'bottomStart':
      return dir === 'rtl' ? 'bottomRight' : 'bottomLeft';
    case 'bottomEnd':
      return dir === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }
}
const position1 = ['left', 'right', 'top', 'bottom'];
const position3 = ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'];
