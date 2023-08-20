const numbers = document.querySelectorAll(".numbers>button");
const result = document.querySelector("input");
const transactions = document.querySelectorAll(".transactions>button")

numbers.forEach(item => {
    item.addEventListener("click", () => {
        result.value += item.value
        if (result.value == 0) {
        }
    })
})

transactions.forEach(item => {
    item.addEventListener("click", () => {

        switch (item.value) {
            case "C":
                result.value = "";
                break;
            case "del":
                if (result.value) {
                    result.value = result.value.slice(0, -1)
                }
                else {
                    return;
                }
                break;
            case "/":
                result.value += "/";
                break;
            case "-":
                result.value += "-";
                break;
            case "X":
                result.value += "*";
                break;
            case "+":
                result.value += "+";
                break;
            case "=":
                result.value = eval(result.value);
                break;
        }
    })
})
