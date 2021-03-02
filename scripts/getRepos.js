$(document).ready(function() {
    $.ajax({
      type: 'GET',
      url:
        `https://api.github.com/user/repos?type=public&sort=updated&direction=desc`,
      dataType: 'json',
      headers: {
        Authorization: "token bd739aa3f03025844eda3f346855a8c15bd82e25"
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
