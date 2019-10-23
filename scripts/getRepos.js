$(document).ready(function() {
  $.getJSON('../credentials/credentials.json', function(credentials) {
    $.ajax({
      type: 'GET',
      url:
        'https://api.github.com/user/repos?type=public&sort=updated&direction=desc',
      dataType: 'json',
      headers: {
        Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
      },
      success: function(repos) {
        $('#repo_table').DataTable({
          data: repos.slice(0, 10),
          order: [[4, 'desc']],
          info: false,
          paging: false,
          searching: false,
          responsive: true,
          columns: [
            { data: 'name' },
            { data: 'stargazers_count' },
            { data: 'watchers_count' },
            {
              data: 'html_url',
              render: function(data, type, row, meta) {
                if (type === 'display') {
                  data =
                    '<a href="' + data + '" target="_blank">' + 'Link' + '</a>';
                }

                return data;
              }
            },
            { data: 'updated_at' }
          ]
        });
      }
    });
  });
});
