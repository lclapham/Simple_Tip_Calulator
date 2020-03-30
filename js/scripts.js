

window.addEventListener('load', () => {

    const rate = .20;
    let amount;
    let tipResult;

    let $ = (id) => {
        return window.document.getElementById(id);
    }

    $('btn').addEventListener("click", function() {
        tipResult = $('amount').value * rate
        $('results').innerHTML = "You should tip $"+tipResult.toFixed(2)+" on $"+$('amount').value;
    })
   
});