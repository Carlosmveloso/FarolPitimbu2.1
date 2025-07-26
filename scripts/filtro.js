const inputPesquisa = document.querySelector(".pesquisa-area__input");
const selectCategoria = document.getElementById("categorias");
const btnFiltrar = document.getElementById("pesquisar");
const clientes = document.querySelectorAll(".card");

let filtroCategoriaAtual = ""; // Guarda a categoria selecionada no clique do botão

// Pesquisa em tempo real só pelo nome
inputPesquisa.addEventListener("input", () => {
  filtrar(inputPesquisa.value.toLowerCase().trim(), filtroCategoriaAtual);
});

// Filtra categoria só ao clicar no botão
btnFiltrar.addEventListener("click", () => {
  filtroCategoriaAtual = selectCategoria.value;
  filtrar(inputPesquisa.value.toLowerCase().trim(), filtroCategoriaAtual);
});

// Função de filtro combinada, recebe texto e categoria atuais
function filtrar(textoDigitado, categoriaSelecionada) {
  clientes.forEach((cliente) => {
    const nomeEmpresa = cliente.querySelector(".nome").textContent.toLowerCase();
    const categoriaCliente = cliente.dataset.categoria;

    // Divide em categorias e remove espaços extras
    const categorias = categoriaCliente.split(",").map(cat => cat.trim());

    const correspondeNome = nomeEmpresa.includes(textoDigitado);
    const correspondeCategoria =
      categoriaSelecionada === "" || categorias.includes(categoriaSelecionada);

    if (correspondeNome && correspondeCategoria) {
      cliente.style.display = "flex";
    } else {
      cliente.style.display = "none";
    }
  });
}

