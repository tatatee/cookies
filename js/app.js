// 1. It should link the checkbox to our script.
// 2. It should test if checkbox is toggled on or off.
// 3. If checked, it should test each article
  // 4. It should only show the article that is non-dairy...
  // 5. ...and hide the rest

// in javascript
// var dairyCheckbox = document.querySelector('.dairyCheckbox');

// in jquery
var dairyCheckbox = $('.dairy-checkbox');
console.log(dairyCheckbox);

// in javascript
// dairyCheckbox.addEventListener('change');

// in jquery
/* dairyCheckbox.on('change', function() {
  console.log('test if clicked!')
});

dairyCheckbox.on('change', function() {
  if (this.checked) {
    console.log('yes it is checked!');
  }
});
*/

// in javascript
// var articles = document.querySelectorAll('article');

// in jquery
var articles = $('article');
console.log(articles);

dairyCheckbox.on('change', function() {
  if (this.checked) {
    // console.log('yes it is checked!');


    articles.each(function() {
    //  console.log($(this));
      if (!$(this).hasClass('non-dairy')) {
        $(this).fadeOut();
      }
    })

  }  else {
        articles.each(function() {
          $(this).fadeIn();
        })

  }
});
