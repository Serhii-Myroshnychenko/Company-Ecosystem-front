export default async function DeleteRequest (name, id) {
    let result = await fetch("https://localhost:7032/" + name.charAt(0).toUpperCase() + name.slice(1), {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "id":id
        },
    }); 
    if(result.status === 200){
    } else {
        alert("Произошла ошибка")
    }
};