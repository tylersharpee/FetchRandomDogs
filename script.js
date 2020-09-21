function imageTemplate(url) {
  $('.images').append(`<img src='${url}'>`);
}  
function fetchDogs(requests) {
  fetch(`https://dog.ceo/api/breeds/image/random/${requests}`)
    .then(response => response.json())
    .then(responseJson => {for(let i = 0; i < responseJson.message.length; i++) {
      imageTemplate(responseJson.message[i]);
      console.log(responseJson.message);
    }});
}
function getInput() {
  $('form').submit(event => {
    event.preventDefault();
    const requests = $('#count').val();
    fetchDogs(requests);
    $('#count').val('');
  });
}
function main() {
  getInput();
}
$(main);