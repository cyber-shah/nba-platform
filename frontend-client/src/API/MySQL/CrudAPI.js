const apiUrl = "http://localhost:5555";

async function sendCrudForm(endpoint, crudType, formData) {
    const response = await fetch(`${apiUrl}/api/crud/${endpoint}/${crudType}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    console.log("Recieved form data:", formData);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Recieved response:", response);
    return response.json();
}

export async function createRecord(crudType, formData) {
    return sendCrudForm("create", crudType, formData);
}

export async function updateRecord(crudType, formData) {
    return sendCrudForm("update", crudType, formData);
}

export async function deleteRecord(crudType, formData) {
    return sendCrudForm("delete", crudType, formData);
}
