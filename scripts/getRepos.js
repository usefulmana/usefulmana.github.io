$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    success: function(repos) {
      $.each(repos, function(i, repo) {
        $('#repos').append('<li>' + '<a>' + repo.name + '</a>' + '</li>');
        $('#repos a').attr('href', '#home');
        $('#repos a').addClass('scroll-item');
      });
    }
  });
});
