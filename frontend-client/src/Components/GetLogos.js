function getTeamLogoUrl(teamName) {
  // Convert team name to lowercase and replace spaces with dashes
  const formattedTeamName = teamName.toLowerCase().replace(/\s+/g, '-');

  // Construct the logo URL based on the pattern
  const logoUrl = `https://loodibee.com/wp-content/uploads/nba-${formattedTeamName}-logo.png`;

  return logoUrl;
}

// Example usage:
const miamiHeatLogo = getTeamLogoUrl('Miami Heat');
console.log('Miami Heat Logo URL:', miamiHeatLogo);

const warriorsLogo = getTeamLogoUrl('Golden State Warriors');
console.log('Golden State Warriors Logo URL:', warriorsLogo);
console.log('Cleveland Cavaliers Warriors Logo URL:', getTeamLogoUrl('Cleveland Cavaliers'));
