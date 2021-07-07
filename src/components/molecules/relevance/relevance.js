//modules
import React, {useState} from 'react';
import {Text, View} from 'react-native';

//components
import {RelevanceItem} from '_atoms/index';

//styles
import {styles} from './styles';

export default function Relevance() {
    const [relevance, setRelevance] = useState('');
    const relevanceData = [
        {
            name: 'all',
            title: 'Все',
            key: 1,
        },
        {
            name: 'active',
            title: 'Активные',
            key: 2,
        },
        {
            name: 'waiting',
            title: 'Ожидают завершения',
            key: 3,
        },
        {
            name: 'completed',
            title: 'Завершенные',
            key: 4,
        },
    ];
    return (
        <View style={styles.relevanceContainer}>
            <Text style={styles.headTitle}>Актуальность</Text>
            <View style={styles.itemsContainer}>
                {relevanceData.map(props => {
                    const isActive = props.name === relevance;
                    return (
                        <RelevanceItem
                            {...props}
                            isActive={isActive}
                            onPress={setRelevance}
                        />
                    );
                })}
            </View>
            <View style={styles.divider} />
        </View>
    );
}
