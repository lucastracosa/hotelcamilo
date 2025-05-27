const menuItems = [
    /*Bebidas*/
    { nome: "Coca-Cola", categoria: "entrada", preco: 2000, descricao: "Gaseosa 350ml" },
    { nome: "Coca Zero", categoria: "entrada", preco: 2000, descricao: "Gaseosa 350ml" },
    { nome: "Fanta Naranja", categoria: "entrada", preco: 2000, descricao: "Gaseosa 350ml" },
    { nome: "Sprite", categoria: "entrada", preco: 2000, descricao: "Gaseosa 350ml" },
    { nome: "Jumex Piña", categoria: "entrada", preco: 2000, descricao: "Gaseosa 350ml" },
    { nome: "Jugo Naranja Watts", categoria: "entrada", preco: 2000, descricao: "Gaseosa 300ml" },
    { nome: "Jugo Naranja Zuko", categoria: "entrada", preco: 800, descricao: "Gaseosa 200ml" },
    { nome: "Jugo Frutilla Watts", categoria: "entrada", preco: 2000, descricao: "Gaseosa 300ml" },
    { nome: "Bebida Energética RedBull", categoria: "entrada", preco: 2500, descricao: "Energético 250ml" },
    { nome: "Bebida Energética Score", categoria: "entrada", preco: 2500, descricao: "Energético 473ml" },
    { nome: "Bebida Lactea Sabor Chocolate", categoria: "entrada", preco: 800, descricao: "Achocolatado 473ml" },
    { nome: "Agua sin gás", categoria: "entrada", preco: 1000, descricao: "500ml" },
    { nome: "Agua con gás", categoria: "entrada", preco: 1000, descricao: "500ml" },
    { nome: "Cerveza Royal", categoria: "entrada", preco: 1500, descricao: "350ml" },
    { nome: "Cerveza Corona", categoria: "entrada", preco: 2000, descricao: "350ml" },
    { nome: "Cerveza Budweiser", categoria: "entrada", preco: 1500, descricao: "350ml" },

/* Snacks */
    { nome: "Papa Krispo Original", categoria: "principal", preco: 1500, descricao: "Snack de Papa" },
    { nome: "Papa Krispo Queso", categoria: "principal", preco: 1500, descricao: "Snack de Papa" },
    { nome: "Papa Krispo Cebolla", categoria: "principal", preco: 1500, descricao: "Snack de Papa" },
    { nome: "CupNoodles", categoria: "principal", preco: 2000, descricao: "Nuestra Cocina Sabor Carne" },
    { nome: "CupNoodles", categoria: "principal", preco: 2000, descricao: "Nuestra Cocina Sabor Pollo" },

/* Ultilidades */
    { nome: "Shampoo HeadShouders", categoria: "sobremesa", preco: 500, descricao: "" },
    { nome: "Desfruta", categoria: "sobremesa", preco: 200, descricao: "Sal de Fruta para acidez" },
    { nome: "Trident", categoria: "sobremesa", preco: 500, descricao: "Chiclet" },

 /* Servicios */   
    { nome: "Clave Wi-fi", categoria: "bebida", preco:0, descricao: "Camilo987654321hotel" },
    { nome: "Lavanderia", categoria: "bebida", preco: 5000, descricao: "Lavado + Secado" }
  ];
  
  function filtrarMenu(categoria) {
    const menuDiv = document.getElementById("menu");
    menuDiv.innerHTML = "";
  
    const filtrados = categoria === "todos" ? menuItems : menuItems.filter(item => item.categoria === categoria);
  
    filtrados.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.backgroundColor = corPorCategoria(item.categoria);

  
      card.innerHTML = `
        <h3>${item.nome}</h3>
        <p>${item.descricao}</p>
        <p class="price">$ ${item.preco.toFixed()}</p>
      `;
  
      menuDiv.appendChild(card);
    });
  }

  function corPorCategoria(categoria) {
    switch (categoria) {
      case "entrada":
        return "#d0ebff"; // Azul claro
      case "principal":
        return "#ffe8cc"; // Verde claro
      case "sobremesa":
        return "#e5dbff"; // Roxo claro
      case "bebida":
        return "#d3f9d8"; // Verde claro
      default:
        return "#ffffff"; // Branco padrão
    }

    
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    filtrarMenu("todos");
  });
  