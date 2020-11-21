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

const popularGames =  `games?dates=${getFormatDate().lastYear},${getFormatDate().currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${getFormatDate().currentDate},${getFormatDate().nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${getFormatDate().lastYear},${getFormatDate().currentDate}&ordering=-released&page_size=10`;
export const popularGamesURL = () => `${baseUrl}${popularGames}`;
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`;
export const newGamesURL = () => `${baseUrl}${newGames}`;