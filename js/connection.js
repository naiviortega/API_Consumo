function Posts(idPosts)
{
    localStorage.setItem('posts', ('https://jsonplaceholder.typicode.com/posts?userId='+idPosts.value));
    window.location.href = "post.html";    
    
}

function Albums(idAlbums)
{
    localStorage.setItem('albums', ('https://jsonplaceholder.typicode.com/albums?userId='+idAlbums.value));
    window.location.href = "albums.html";    
}

function Comments(idComments)
{
    localStorage.setItem('comments', ('https://jsonplaceholder.typicode.com/comments?postId='+idComments.value));
    localStorage.setItem('idPost', ('https://jsonplaceholder.typicode.com/posts?id='+idComments.value));
    window.location.href = "comments.html";
}

function Photos(idPhotos)
{
    localStorage.setItem('photos', ('https://jsonplaceholder.typicode.com/photos?albumId='+idPhotos.value));
    localStorage.setItem('idAlbum', ('https://jsonplaceholder.typicode.com/albums?id='+idPhotos.value));
    window.location.href = "photos.html";
}

function Photo(idPhoto)
{
    window.location.href = idPhoto.value;
}