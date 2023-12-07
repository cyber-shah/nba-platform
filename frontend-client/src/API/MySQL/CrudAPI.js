const apiUrl = "http://localhost:5555";

export async function getCreateForm(crudType) {
    const crudDataResponse = await fetch(
        `${apiUrl}/api/crud/create/${crudType}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({crudType : crudType}),
        }
    );
    // Check if the response status is ok
    if (!crudDataResponse.ok) {
        throw new Error(`HTTP error! Status: ${crudDataResponse.status}`);
    }
    const crudData = await crudDataResponse.json();
    return crudData;
}

export async function getUpdateForm(crudType) {
    const crudDataResponse = await fetch(
        `${apiUrl}/api/crud/update/${crudType}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({crudType : crudType}),
        }
    );
    // Check if the response status is ok
    if (!crudDataResponse.ok) {
        throw new Error(`HTTP error! Status: ${crudDataResponse.status}`);
    }
    const crudData = await crudDataResponse.json();
    return crudData;
}

export async function getDeleteForm(crudType) {
    const crudDataResponse = await fetch(
        `${apiUrl}/api/crud/delete/${crudType}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({crudType : crudType}),
        }
    );
    // Check if the response status is ok
    if (!crudDataResponse.ok) {
        throw new Error(`HTTP error! Status: ${crudDataResponse.status}`);
    }
    const crudData = await crudDataResponse.json();
    return crudData;
}