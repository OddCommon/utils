export const getMousePosition = (e, scrollingContainer) => {
    let x;
    let y;
    scrollingContainer =
      document.scrollingElement || scrollingContainer || document.documentElement;
    if (e) {
      if (e.touches && e.touches[0]) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        //FireFox
        x = e.pageX;
        y = e.pageY - scrollingContainer.scrollTop;
      }
    } else {
      //IE
      x = window.event.x + document.body.scrollLeft - 2;
      y = window.event.y + document.body.scrollTop - 2;
    }
    return { x, y };
  };