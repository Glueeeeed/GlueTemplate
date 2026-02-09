const btn = document.getElementById('submitButton');

btn.addEventListener('click', () => {
    submit();
})

async function submit() {
    const input = document.getElementById('inputField').value;
    try {
        const sumbitFetch = await fetch('http://localhost:2137/api/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: input
            }),
        });

        if (!sumbitFetch.ok) {
            const errorData = await sumbitFetch.json();
            throw new Error(errorData.error);
        }

        const data = await sumbitFetch.json();
        document.getElementById('status').innerHTML = 'Server response: ' + data.response;
    } catch (error) {
        document.getElementById('status').innerHTML = 'Error: ' + error.message;
    }
}