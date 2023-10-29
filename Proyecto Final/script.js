// Evento que se dispara cuando el documento ha cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup"); // Obtener la ventana emergente
    var closePopupButton = document.getElementById("close-popup"); // Obtener el botón de cierre
    var total = 0; // Inicializamos la variable total para el carrito

    // Función para abrir la ventana emergente
    function openPopup() {
        popup.classList.add("active");
    }

    // Función para cerrar la ventana emergente
    function closePopup() {
        popup.classList.remove("active");
    }

    // Evento de clic en el botón de cerrar la ventana emergente
    closePopupButton.addEventListener("click", closePopup);

    // Evento de tecla "Enter" para abrir la ventana emergente
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            openPopup();
        }
    });

    // Abrir la ventana emergente automáticamente al cargar la página
    openPopup();

    // Función para agregar un ítem al carrito
    function addItemToCart(productName, productPrice, productImage) {
        var cartItems = document.getElementById("cart-items"); // Obtener contenedor de ítems del carrito
        var cartTotal = document.getElementById("cart-total"); // Obtener total del carrito

        var item = document.createElement("div"); // Crear un nuevo elemento "div"
        item.classList.add("cart-item"); // Agregar la clase "cart-item"

        var image = document.createElement("img"); // Crear una nueva imagen
        image.src = productImage; // Establecer la fuente de la imagen
        image.alt = productName; // Establecer el texto alternativo

        // Limitar el tamaño máximo de la imagen
        image.style.maxWidth = "50px";

        var name = document.createElement("span"); // Crear un nuevo elemento "span"
        name.classList.add("product-name"); // Agregar la clase "product-name"
        name.innerText = productName; // Establecer el texto

        var price = document.createElement("span"); // Crear un nuevo elemento "span"
        price.classList.add("product-price"); // Agregar la clase "product-price"
        price.innerText = "$" + productPrice; // Establecer el precio formateado

        var removeButton = document.createElement("button"); // Crear un nuevo botón
        removeButton.classList.add("remove-from-cart"); // Agregar la clase "remove-from-cart"
        removeButton.innerText = "Eliminar"; // Establecer el texto del botón

        // Evento de clic para eliminar el ítem del carrito
        removeButton.addEventListener("click", function() {
            removeItemFromCart(item);
        });

        // Agregar elementos al contenedor de ítems del carrito
        item.appendChild(image);
        item.appendChild(name);
        item.appendChild(price);
        item.appendChild(removeButton);

        cartItems.appendChild(item); // Agregar el ítem al carrito

        total += parseFloat(productPrice); // Actualizar el total
        cartTotal.innerText = "Total: $" + total.toFixed(2); // Actualizar la visualización del total
    }

    // Función para eliminar un ítem del carrito
    function removeItemFromCart(item) {
        var cartTotal = document.getElementById("cart-total"); // Obtener el total del carrito

        // Obtener el precio del ítem y actualizar el total
        var itemPrice = parseFloat(item.querySelector(".product-price").innerText.substring(1));
        total -= itemPrice;

        // Asegurarse de que el total no sea negativo
        if (total < 0) {
            total = 0;
        }

        cartTotal.innerText = "Total: $" + total.toFixed(2); // Actualizar la visualización del total
        item.remove(); // Eliminar el ítem del carrito
    }

    // Función para comprar productos
    function buyProducts() {
        var cartItems = document.getElementById("cart-items"); // Obtener contenedor de ítems del carrito

        // Verificar si hay productos en el carrito
        if (cartItems.children.length === 0) {
            alert("No hay productos en el carrito. Agrega productos antes de comprar.");
        } else {
            alert("Compra exitosa. ¡Gracias por tu compra!");
        }
    }

    // Asignar las funciones al objeto global "window"
    window.addToCart = addItemToCart;
    window.buyProducts = buyProducts;
});

// Función para reproducir audio
function Playaudio() {
    var audio = document.getElementById("Musica"); // Obtener elemento de audio
    audio.play(); // Reproducir audio
}
