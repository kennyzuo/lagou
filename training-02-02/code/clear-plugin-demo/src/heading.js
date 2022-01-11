const createHeader = () => {
  let el = document.createElement("div");
  el.innerHTML = "Hello Webpack haha";
  el.style.color = "red";
  return el;
};

export { createHeader };
