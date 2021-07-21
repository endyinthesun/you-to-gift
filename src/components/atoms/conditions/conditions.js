//modules
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

//SVGs
import WarningTurquoiseIcon from '_icons/warning-turquoise.svg';
import WarningRedIcon from '_icons/warning-red.svg';
import QuestionMarkIcon from '_icons/question-mark.svg';

//styles
import {styles} from './styles';

export default function Conditions({
    conditionsData: {additionally, country, city},
    showModalInfo,
}) {
    const [t] = useTranslation('draw_screen');
    const forAllCountry = country === 'all';

    const hashtags = additionally
        ? additionally.match(/#[\wа-яёА-ЯЁ]+/gm)
        : null;

    const withoutHashtags = hashtags
        ? additionally.replace(/\s#[\wа-яёА-ЯЁ]+/gm, '')
        : additionally;

    return (
        <View style={styles.container}>
            {forAllCountry ? null : (
                <View style={styles.topWarning}>
                    <View style={styles.warningTitle}>
                        <View style={styles.warningTitleLeft}>
                            <WarningRedIcon style={styles.iconWarning} />
                            <Text style={styles.warningTitleText}>
                                {t('attention')}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.topWarningText}>
                            {t('competition_created_for_specific_region')}
                        </Text>
                        <Text style={styles.topWarningPlace}>
                            {country}
                            {city ? (
                                <Text>
                                    , {t('city')} - {city}
                                </Text>
                            ) : null}
                        </Text>
                    </View>
                </View>
            )}
            <View style={styles.conditionsContainer}>
                <View style={styles.conditions}>
                    <Text style={styles.conditionsText}>
                        <Text>{withoutHashtags}</Text>
                        {hashtags ? (
                            <Text style={styles.hashtags}>
                                {'\n'}
                                {hashtags.join(' ')}
                            </Text>
                        ) : null}
                    </Text>
                </View>
                <View style={styles.bottomWarning}>
                    <View style={styles.warningTitle}>
                        <View style={styles.warningTitleLeft}>
                            <WarningTurquoiseIcon style={styles.iconWarning} />
                            <Text style={styles.warningTitleText}>
                                {t('attention')}
                            </Text>
                        </View>
                        <Pressable onPress={() => showModalInfo(true)}>
                            <QuestionMarkIcon style={styles.iconQuestionMark} />
                        </Pressable>
                    </View>
                    <Text style={styles.warningText}>
                        {t('to_participate_you_must')}
                    </Text>
                </View>
            </View>
        </View>
    );
}
