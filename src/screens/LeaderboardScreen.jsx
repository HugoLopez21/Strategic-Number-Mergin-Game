import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getLeaderboard } from "../../storage/leaderboard";
import { View, Text,} from "react-native";
import { leaderboardStyles } from "../../styles/screens/LeaderboardScreenStyles";

export const LeaderboardScreen = () => {
    const [leaderboardData, setData] = useState(null);

    useFocusEffect(
        React.useCallback(() =>{
            const fetchData = async () => {
                const data = await getLeaderboard();
                setData(data);
            }
            fetchData();
        },[])
    );

    if (!leaderboardData || leaderboardData.length === 0) {
        return <Text style={leaderboardStyles.emptyText}>No data yet</Text>;
    }


    return (
        <View style={leaderboardStyles.container}>
            <Text style={leaderboardStyles.title}>Leaderboard</Text>
            
            <View style={[leaderboardStyles.row, leaderboardStyles.header]}>
                <Text style={leaderboardStyles.headerText}>User</Text>
                <Text style={leaderboardStyles.headerText}>Score</Text>
            </View>

            {leaderboardData.map((data, index) => (
                <LeaderboardElement key={index} {...data} />
            ))}
        </View>
    );
};

const LeaderboardElement = ({ user, score }) => {
    return (
        <View style={leaderboardStyles.row}>
            <Text style={leaderboardStyles.cellUser}>{user}</Text>
            <Text style={leaderboardStyles.cellScore}>{score}</Text>
        </View>
    );
};
