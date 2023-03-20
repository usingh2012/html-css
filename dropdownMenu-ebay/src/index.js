const theme = {
  blue: {
    primaryColor: "#8ea7e9",
    secondaryColor: "white",
  },
  dark: {
    primaryColor: "black",
    secondaryColor: "lightblue",
  },
};
const dropDown = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".dropdown-menu");
dropDownMenu.classList.add("hidden");
dropDown.onmouseenter = function (e) {
  dropDownMenu.classList.remove("hidden");
};
dropDown.onmouseleave = function (e) {
  dropDownMenu.classList.add("hidden");
};

const rootSelector = document.querySelector(":root");
document.getElementById("toggleBtn").addEventListener("click", toggleTheme);
function toggleTheme() {
  const styles = getComputedStyle(rootSelector);
  let themeVal = "dark";
  if (styles.getPropertyValue("--primary-color") === "black") {
    themeVal = "blue";
  }
  if (rootSelector) {
    rootSelector.style.setProperty(
      "--primary-color",
      theme[themeVal].primaryColor
    );
    rootSelector.style.setProperty(
      "--secondary-color",
      theme[themeVal].secondaryColor
    );
  }
}
