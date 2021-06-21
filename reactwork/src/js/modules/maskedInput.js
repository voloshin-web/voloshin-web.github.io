import Inputmask from "inputmask";

const maskedInput = () => {
    const selectors = document.querySelectorAll('input[type="tel"]');

    let im = new Inputmask("+38 (999) 999 99 99", {clearIncomplete: true});
    im.mask(selectors);
}

export default maskedInput;