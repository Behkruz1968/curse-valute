document.addEventListener('DOMContentLoaded', () => {
    let selects = document.querySelectorAll('select');
    let input = document.getElementById('amountRange');
    let rangeValue = document.getElementById('rangeValue');
    let conversionResult = document.getElementById("conversionResult");
    let button = document.getElementById("valyutani almashtirish");

     const ChangeSum = () => {
        const select1 = selects[0].value;
        const select2 = selects[1].value;
        const howSum = input.value;

        console.log('Selected From Currency:', select1);
        console.log('Selected To Currency:', select2);
        console.log('Amount to Convert:', howSum);

        // Ensure both select values are chosen
        if (!select1 || !select2) {
            conversionResult.textContent = 'Please select both currencies';
            return;
        }

        const url = `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${select1}&to=${select2}&amount=${howSum}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5759498284mshff0e330faefee87p15a101jsn52e4eaa8589b',
                'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
            }
        };

        console.log('Fetching conversion data from URL:', url);

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                console.log('Conversion Data:', data); 
                           conversionResult.textContent = `Converted Amount: ${data}`;
            })
            .catch(error => {
                console.error('Error:', error);
                conversionResult.textContent = 'Error fetching conversion data';
            });
    }

    button.addEventListener("click", ChangeSum);
});