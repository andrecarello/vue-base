export default (type, content, config = {}) => {
    let base = {
        html: config.html,
        position: 'top-right',
        time: 5000 || config.time
    };

    const id = () => {
        let uuid = "",
            ii;
        for (ii = 0; ii < 27; ii += 1) {
            switch (ii) {
                case 8:
                case 20:
                    uuid += "-";
                    uuid += ((Math.random() * 16) | 0).toString(16);
                    break;
                case 12:
                    uuid += "-";
                    uuid += "4";
                    break;
                case 16:
                    uuid += "-";
                    uuid += ((Math.random() * 4) | 8).toString(16);
                    break;
                default:
                    uuid += ((Math.random() * 16) | 0).toString(16);
            }
        }

        return uuid;
    };

    const create = () => {
        const element = document.createElement("DIV");
        const position = base.position.split('-');

        element.id = "toast-" + id();
        ['toast', type, position[0], position[1]].forEach(cls => element.classList.add(cls));

        return element;
    };

    const child = ({ tag = "div", style = false, hasContent = false, className = "" }) => {
        const element = document.createElement(tag);

        element.className = className;
        if (style) element.style = style

        if (hasContent) {
            if (base.html) element.innerHTML = content;
            else element.innerText = content;
        }

        return element;
    };

    const remove = el => el.remove();

    const init = () => {
        const containers = document.querySelectorAll(".toast");
        if (containers) {
            containers.forEach(element => remove(element));
        }

        document.querySelector('#app').appendChild(create());

        const container = document.querySelector('[id*="toast"]');

        container.appendChild(child({
            className: 'toast-track',
            style: 'animation: toast-width-animation '+ ((base.time - 400) / 1000) +'s linear'
        }));

        container.appendChild(child({
            tag: 'p',
            hasContent: true,
            className: 'toast-text'
        }))

        setTimeout(() => container.classList.add("active"), 200);
        setTimeout(() => container.classList.remove("active"), base.time - 400);
        setTimeout(() => remove(container), base.time);
    };

    init();
};