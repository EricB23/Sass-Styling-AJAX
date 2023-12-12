$(document).ready(function () {
  $('#getDataBtn').click(function () {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/1', // Example API endpoint
      method: 'GET',
      success: function (data) {
        // Update the content of dataContainer with the received data
        $('#dataContainer').html(`
                  <h3>${data.title}</h3>
                  <p>${data.body}</p>
              `);
      },
      error: function (error) {
        console.error('Error fetching data:', error);
      },
    });
  });
});
