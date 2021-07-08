//modules
import React, {useState} from 'react';
import {Text, View} from 'react-native';

//components
import {RelevanceItem} from '_atoms/index';
import {useTranslation} from 'react-i18next';

//styles
import {styles} from './styles';

export default function Relevance() {
    const [t] = useTranslation('modal_filter_screen');
    const [relevance, setRelevance] = useState('');
    const relevanceData = [
        {
            name: 'all',
            title: t('all'),
            key: 1,
        },
        {
            name: 'active',
            title: t('active'),
            key: 2,
        },
        {
            name: 'waiting',
            title: t('waiting'),
            key: 3,
        },
        {
            name: 'completed',
            title: t('completed'),
            key: 4,
        },
    ];
    return (
        <View style={styles.relevanceContainer}>
            <Text style={styles.headTitle}>{t('relevance')}</Text>
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
