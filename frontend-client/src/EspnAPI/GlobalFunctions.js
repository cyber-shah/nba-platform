/**
 * Dynamically generates columns for the table based
 * on the query results
 * @param {*} queryResults
 * @returns array of columns(objects)
 */
function generateColumns(queryResults, handleClick) {
  if (queryResults.length > 0) {
    // for each entry in standings
    for (let i = 0; i < queryResults.length; i++) {
      queryResults[i].team.displayName;

    }
    const firstObjectKeys = Object.keys(queryResults[1]);
    return firstObjectKeys.map((key, index) => ({
      property: key,
      header: key,
    }));
  } else {
    return [];
  }
}

export { generateColumns };
