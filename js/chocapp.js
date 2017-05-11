var ingredientsCheckbox = $('.ingredients-checkbox');
console.log(ingredientsCheckbox);

var stepsCheckbox = $('.steps-checkbox');
console.log(stepsCheckbox);

var infoCheckbox = $('.info-checkbox');
console.log(infoCheckbox);

var sections = $('.ingredients', '.steps', '.info');
console.log(sections);

ingredientsCheckbox.on('change', function() {
  if(this.checked) {
    sections.each(function() {
      if (!$(this).hasClass('ingredients')) {
        $(this).fadeOut();
      }
      else {
            sections.each(function() {
              $(this).fadeIn();
            })
      }
    })
  }
});
