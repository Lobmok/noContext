
HTMLElement.prototype.initContext = function ({ type, typeElement, menuItems }) {
    let container = this;
    let menu = document.createElement("div");
    let maxHeight = menu.style.maxHeight;

    menu.classList.add("context-menu");

    menuItems.forEach(item => {
        let menuItem = document.createElement("div");

        menuItem.classList.add("context-item")
        menuItem.innerText = item.text;

        menuItem.addEventListener("click", item.callback)

        menu.appendChild(menuItem);
    });

    container.appendChild(menu);

    if (type == "context") {
        container.addEventListener("contextmenu", (e) => {
            e.preventDefault()

            closeList()

            setTimeout(() => {
                let y = e.clientY;
                let x = e.clientX;

                menu.classList.remove("notransition")

                menu.style.top = y + "px";
                menu.style.left = x + "px";

                menu.classList.add("show");
                maxHeight = "1000px";
            }, 200)


        })

    }
    else if (type == "dropdown" && typeElement !== null) {
        let el = container.querySelector(typeElement);
        el.addEventListener("click", (e) => {
            e.stopPropagation();


            setTimeout(() => {

                let coords = getComputedStyle(el);
                let top = coords.top;
                let right = coords.right;

                menu.classList.remove("notransition")

                menu.style.top = top;
                menu.style.right = right;
                menu.classList.add("show");

                maxHeight = "1000px";

            }, 200)
        })
    }

    document.body.addEventListener("click", (e) => {
        if (isLeftClick(e)) {
            closeList()
        }
    })


    const closeList = () => {
        menu.classList.add("notransition")
        menu.classList.remove("show");
        maxHeight = "0px";
    }

}

function isLeftClick(evt) {
    evt = evt || window.event;
    if ("buttons" in evt) {
        return evt.buttons != 1;
    }
    var button = evt.which || evt.button;
    return button != 1;
}

