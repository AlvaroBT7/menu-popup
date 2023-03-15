const openPopupButton = document.getElementById("login-button");
const closePopupButton = document.getElementById("menu-button");
const inputs = document.querySelectorAll("input");

openPopupButton.addEventListener("click", showPopupWindow);
closePopupButton.addEventListener("click", closePopupWindow);

const container = document.getElementById("popup-container");

function showPopupWindow() {
  container.classList.add("show");
  const animacion = container.animate(
    [
      {
        transform: "scale(50%, 50%)",
        opacity: "0",
      },
      {
        transform: "scale(100%, 100%)",
        opacity: "1",
      },
    ],
    {
      duration: 300,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    }
  );
}

function closePopupWindow() {
  setTimeout(() => {
    container.classList.remove("show");
    inputs.forEach(input => input.value = "");
  }, 120);
  container.animate(
    [
      {
        transform: "scale(100%, 100%)",
        opacity: "1",
      },
      {
        transform: "scale(50%, 50%)",
        opacity: "0",
      },
    ],
    {
      duration: 170,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    }
  );
}
