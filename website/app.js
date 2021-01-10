// Post Data
const postData = async ( url = '', data = {})=>{
    console.log(data)
        const response = await fetch(url,{
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(data),
});
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}

postData('/add', {name: 'Example'});