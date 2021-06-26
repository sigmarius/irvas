import validateInputs from "./validate";

const changeModalState = (state) => {
    const windowFormFactor = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    validateInputs('#width');
    validateInputs('#height');

    const bindActionToElements = (event, elem, property) => {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[property] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[property] = 'Холодное' : state[property] = 'Теплое';
                            elem.forEach((checkbox, j) => {
                                checkbox.checked = false;
                                if (i == j) {
                                    checkbox.checked = true;
                                }
                            });
                        } else {
                            state[property] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[property] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    };

    bindActionToElements('click', windowFormFactor, 'formFactor');
    bindActionToElements('input', windowWidth, 'width');
    bindActionToElements('input', windowHeight, 'height');
    bindActionToElements('change', windowType, 'type');
    bindActionToElements('change', windowProfile, 'profile');
};

export default changeModalState;
