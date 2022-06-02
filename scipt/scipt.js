function htmlEncode(value) { //htmlEncode - внутренний текст элемента
    return $('<div/>').text(value) //return завершает выполнение текущей функции
      .html();
  }

  $(function () {
    $('#button-addon2').click(function () {
      let finalURL = 'https://chart.googleapis.com/chart?cht=qr&chl=' +
        htmlEncode($('#content').val()) +
        '&chs=160x160&chld=L|0'
      $('.img').attr('src', finalURL);
    });
  });