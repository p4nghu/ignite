const baseUrl = "https://api.rawg.io/api/";

const getFormatDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return {
    currentDate: yyyy + "-" + mm + "-" + dd,
    lastYear: yyyy - 1 + "-" + mm + "-" + dd,
    nextYear: yyyy + 1 + "-" + mm + "-" + dd,
  };
};

const upcomingGames = `games?dates=${getFormatDate().currentDate},${getFormatDate().nextYear}&ordering=-added&page_size=12`;
const newGames = `games?dates=${getFormatDate().lastYear},${getFormatDate().currentDate}&ordering=-released&page_size=12`;
export const popularGamesURL = () => `https://api.rawg.io/api/games/lists/greatest?discover=true&ordering=-added&page_size=24`;
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`;
export const newGamesURL = () => `${baseUrl}${newGames}`;
export const detailsURL = (id) =>  `${baseUrl}games/${id}`
export const screenShotsURL = (id) => `${baseUrl}games/${id}/screenshots`
export const searchGamesURL = (query) => `${baseUrl}games?search="${query}"&page_size=6`