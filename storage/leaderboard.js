import AsyncStorage from "@react-native-async-storage/async-storage";
export async function saveGameData(user, score){
    console.log('Saving:', user, score);
    const savedGames = await AsyncStorage.getItem('savedGames');
    console.log('savedGames antes:', savedGames);
    let dataList = savedGames ? JSON.parse(savedGames) : [];
    dataList.push({ user: user, score: score});
    await AsyncStorage.setItem('savedGames', JSON.stringify(dataList));
    console.log('Saved:', dataList); 
}


export async function getLeaderboard(){
    const savedGames = await AsyncStorage.getItem('savedGames');
    if(!savedGames) return null;
    let dataList = JSON.parse(savedGames);
    return dataList.sort((a, b) => b.score - a.score);
}