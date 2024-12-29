// ============================= Task 1  ============================
const container = document.querySelector(".container");
const modeDiv = document.querySelector(".mode");
const oneDiv = document.querySelector(".one");
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
modeDiv.addEventListener("click", () => {
  if (oneDiv.parentElement.classList.contains("light-mode")) {
    oneDiv.parentElement.classList.remove("light-mode");
  } else {
    oneDiv.parentElement.classList.add("light-mode");
  }
});

// ============================= Task 2  ============================
const colors = document.querySelectorAll(".color");
const two = document.querySelector(".two");
colors.forEach((color) => {
  color.addEventListener("click", () => {
    const textColor = color.getAttribute("data-color");
    two.querySelector("h1").style.color = textColor;
    two.querySelector("p").style.color = textColor;
  });
});
// ============================= Task 3  ============================
const editor = document.getElementById("editor");
const resetBtn = document.getElementById("reset");
const increaseFontBtn = document.getElementById("increase-font");
const decreaseFontBtn = document.getElementById("decrease-font");
const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const alignLeftBtn = document.getElementById("align-left");
const alignCenterBtn = document.getElementById("align-center");
const alignRightBtn = document.getElementById("align-right");
const colorPicker = document.getElementById("color-picker");

resetBtn.addEventListener("click", () => {
  editor.style.fontSize = "16px";
  editor.style.fontWeight = "normal";
  editor.style.fontStyle = "normal";
  editor.style.textAlign = "left";
  editor.style.color = "#000000";
  editor.value = "";
});

increaseFontBtn.addEventListener("click", () => {
  const currentSize = parseFloat(
    window.getComputedStyle(editor).getPropertyValue("font-size")
  );
  if (!isNaN(currentSize)) {
    editor.style.fontSize = currentSize + 2 + "px";
  }
});

decreaseFontBtn.addEventListener("click", () => {
  const currentSize = parseFloat(
    window.getComputedStyle(editor).getPropertyValue("font-size")
  );
  if (!isNaN(currentSize) && currentSize > 8) {
    editor.style.fontSize = currentSize - 2 + "px"; // إصلاح ${}
  }
});

boldBtn.addEventListener("click", () => {
  editor.style.fontWeight =
    editor.style.fontWeight === "bold" ? "normal" : "bold";
});

italicBtn.addEventListener("click", () => {
  editor.style.fontStyle =
    editor.style.fontStyle === "italic" ? "normal" : "italic";
});

alignLeftBtn.addEventListener("click", () => (editor.style.textAlign = "left"));

alignCenterBtn.addEventListener(
  "click",
  () => (editor.style.textAlign = "center")
);

alignRightBtn.addEventListener(
  "click",
  () => (editor.style.textAlign = "right")
);

colorPicker.addEventListener("input", (e) => {
  editor.style.color = e.target.value;
});
// ============================= Task 4  ============================)
const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const openContent = document.querySelector(".accordion-info.show");
    const openHeader = document.querySelector(".accordion-header.active");

    if (openContent && openContent !== header.nextElementSibling) {
      openContent.classList.remove("show");
      openContent.style.display = "none";
      openHeader.classList.remove("active");
      openHeader
        .querySelector(".icon")
        .classList.replace("fa-angle-up", "fa-angle-down");
    }

    const content = header.nextElementSibling;
    const icon = header.querySelector(".icon");
    if (content.classList.contains("show")) {
      content.classList.remove("show");
      content.style.display = "none";
      header.classList.remove("active");
      icon.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
      content.classList.add("show");
      content.style.display = "block";
      header.classList.add("active");
      icon.classList.replace("fa-angle-down", "fa-angle-up");
    }
  });
});
// ============================= Task 5 ============================
function showImage(element) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = element.src;
  mainImage.alt = element.alt;
}
