$(document).ready(function(){
  $.get('http://localhost:3000/books', function(data){
    for(var i = 0; i < data.rows.length; i++){
      var bookmark = document.createElement('div');

      var bookImage = document.createElement('img');
      $(bookImage).attr({
        src: data.rows[i].cover_url,
        alt: data.rows[i].book_title + " cover"
      });
      $(bookImage).css('height', '100px');
      $(bookImage).css('width', '100px');
      $(bookmark).append(bookImage);

      var bookTitle = document.createElement('h3');
      bookTitle.innerText = data.rows[i].book_title;
      $(bookmark).append(bookTitle);

      var bookAuthor = document.createElement('p');
      bookAuthor.innerText = data.rows[i].first_name + " " + data.rows[i].last_name;
      $(bookmark).append(bookAuthor)

      var bookGenre = document.createElement('p');
      bookGenre.innerText = data.rows[i].genre;
      $(bookmark).append(bookGenre);

      var bookDescription = document.createElement('p');
      bookDescription.innerText = data.rows[i].description;
      $(bookmark).append(bookDescription);

      $('.booksListContainer').append(bookmark);
      $(bookmark).css('display', 'flex');
      $(bookmark).css('flex-direction', 'row');
    }
  })



  $.get('http://localhost:3000/authors', function(data){
    console.log(data);
  })

  $('.booksList').css('display', 'none');
  $('.authorsList').css('display', 'none');

  $('.authorsButton').on('click', function(event){
    if($('.authorsList').css('display', 'none')){
      $('.booksList').css('display', 'none');
      $('.authorsList').css('display', '');
    }
  });

  $('.booksButton').on('click', function(event){
    if($('.booksList').css('display', 'none')){
      $('.authorsList').css('display', 'none');
      $('.booksList').css('display', '');
    }
  });

});
