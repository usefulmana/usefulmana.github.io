// const credentials = require('../credentials/credentials.json')
// console.log(credentials)
$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url:
      'https://api.github.com/user/repos?type=public&sort=updated&direction=desc',
    dataType: 'json',
    headers: {
      Authorization: 'Basic ' + btoa('usefulmana' + ':' + 'GAtech321')
    },
    success: function(repos) {
      $('#repo_table').DataTable({
        data: repos.slice(0, 10),
        order: [[4, 'desc']],
        info: false,
        paging: false,
        searching: false,
        columns: [
          { data: 'name' },
          { data: 'stargazers_count' },
          { data: 'watchers_count' },
          {
            data: 'html_url',
            render: function(data, type, row, meta) {
              if (type === 'display') {
                data = '<a href="' + data + '" target="_blank">' + data + '</a>';
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
