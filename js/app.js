// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
  e.preventDefault()
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url : siteUrl
  }

  /*
    // Local Storage Test
    localStorage.setItem('test', 'hello world');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */

  // Test if bookmark is null
  if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // set to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


  } else {
    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  }



}