'use strict';
(function () {
  var setupBlock = document.querySelector('.setup');
  var setupAvatar = setupBlock.querySelector('.upload');

  function onMouseDown(evt) {
    evt.preventDefault();

    // запомним координаты точки, с которой начали перемещать диалог
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    // обновляем смещение относительно первоначальной точки

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupBlock.style.top = (setupBlock.offsetTop - shift.y) + 'px';
      setupBlock.style.left = (setupBlock.offsetLeft - shift.x) + 'px';
    }

    // при отпускании мыши перестаем слушать событие движения мыши

    function onMouseUp(upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseUp', onMouseUp);
    }

    function onClickPreventDefault(prEvt) {
      prEvt.preventDefault();
      setupAvatar.removeEventListener('click', onClickPreventDefault);
    }

    if (dragged) {
      onClickPreventDefault();
    } else {
      setupAvatar.addEventListener('click', onClickPreventDefault);
    }

    // событие передвижения
    document.addEventListener('mousemove', onMouseMove);

    // событие отпускания
    document.addEventListener('mouseup', onMouseUp);
  }

  window.dialog = {
    onMouseDown: onMouseDown
  };

})();
