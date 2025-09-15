export async function load({ url, params }) {
    const memberResponse = await fetch ('https://fdnd.directus.app/items/person/181');

    const memberData = await memberResponse.json();

    return {member: memberData.data}

}