const menus = {
  desayunos: `
    <div class="row justify-content-center g-4">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/imagenes/comidas/pinto.png" class="card-img-top">
          <div class="card-body">
            <h5>Desayuno Típico</h5>
            <p>Gallo pinto, huevo, plátano y café</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/imagenes/comidas/chorreada.png" class="card-img-top">
          <div class="card-body">
            <h5>Desayuno Campesino</h5>
            <p>Queso, pan, natilla y chocolate</p>
          </div>
        </div>
      </div>
       <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/imagenes/comidas/pinto.png" class="card-img-top">
          <div class="card-body">
            <h5>Desayuno Típico</h5>
            <p>Gallo pinto, huevo, plátano y café</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/imagenes/comidas/chorreada.png" class="card-img-top">
          <div class="card-body">
            <h5>Desayuno Campesino</h5>
            <p>Queso, pan, natilla y chocolate</p>
          </div>
        </div>
      </div>
       <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/imagenes/comidas/pinto.png" class="card-img-top">
          <div class="card-body">
            <h5>Desayuno Típico</h5>
            <p>Gallo pinto, huevo, plátano y café</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/imagenes/comidas/chorreada.png" class="card-img-top">
          <div class="card-body">
            <h5>Desayuno Campesino</h5>
            <p>Queso, pan, natilla y chocolate</p>
          </div>
        </div>
      </div>
    </div>
  `,

  almuerzos: `
    <div class="row justify-content-center g-4">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="imagenes/almuerzo1.jpg" class="card-img-top">
          <div class="card-body">
            <h5>Casado</h5>
            <p>Arroz, frijoles, carne, ensalada y plátano</p>
          </div>
        </div>
      </div>
    </div>
  `,

  bebidas: `
    <div class="row justify-content-center g-4">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="imagenes/bebida1.jpg" class="card-img-top">
          <div class="card-body">
            <h5>Jugo Natural</h5>
            <p>Naranja, piña o mora</p>
          </div>
        </div>
      </div>
    </div>
  `,

  postres: `
    <div class="row justify-content-center g-4">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="imagenes/postre1.jpg" class="card-img-top">
          <div class="card-body">
            <h5>Queque Casero</h5>
            <p>Tradicional de la casa</p>
          </div>
        </div>
      </div>
    </div>
  `,
};

function cambiarMenu(tipo) {
  document.getElementById("menuContainer").innerHTML = menus[tipo];
}

/* Menú inicial */
cambiarMenu("desayunos");
