import AsyncStorage from "@react-native-async-storage/async-storage";
export async function saveGameData(user, score){
    const savedGames = await AsyncStorage.getItem('savedGames');
    let dataList = savedGames ? JSON.parse(savedGames) : [];

    const existingUserIndex = dataList
        .findIndex(item => item.user === user);

    if (existingUserIndex !== -1) {
        if (score > dataList[existingUserIndex].score) {
            dataList[existingUserIndex].score = score;
        }
    } else {
        dataList.push({ user: user, score: score });
    await AsyncStorage.setItem('savedGames', JSON.stringify(dataList));
    } 
}


export async function getLeaderboard(){
    const savedGames = await AsyncStorage.getItem('savedGames');
    if(!savedGames) return [];
    let dataList = JSON.parse(savedGames);
    
    return dataList
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}