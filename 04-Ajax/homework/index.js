//Get friends
$("#boton").click(function () {
  $.get("http://localhost:5000/amigos", function (data) {
    console.log(data);
    //let list = document.createElement(`<li><a href="#">Inicio</a></li>`);
    $("lista").empty();
    data.map((e) => {
      $("lista").append(`<li>${e.name}</li>`);
    });
    /* for (const key in data) {
      let list = document.createElement(`li`);
      list.innerHTML = `<a>${data[key].name}</a>`;
      console.log(data[key].name);
      let ul = document.querySelector("#lista");
      ul.appendChild(list);
    } */
  });
});

//search

$("#search").click(function () {
  $("#amigo").empty();
  let id = $("#input").val();
  $.get(`http://localhost:5000/amigos/${id}`, function (data) {
    $("#amigo").text(data.name);
  });
  $("#input").empty();
});

//delete
$("#delete").click(function () {
  $("#success").empty();
  let id = $("#inputDelete").val();
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success: function (result) {
      $("#success").text("Se a eliminado correctamente");
    },
  });
  $("#inputDelete").empty();
});
