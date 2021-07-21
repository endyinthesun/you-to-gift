//modules
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useTranslation} from 'react-i18next';

//components
import {Header} from '_organisms/index';

//SVGs
import ArrowsIcon from '_icons/relevance/arrows.svg';

//styles
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT} from '_styles/gradients';
import {styles} from './styles';

export default function ModalInfoScreen({onPress}) {
    const [t] = useTranslation('modal_info_screen');
    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={{flex: 0}} />
            <View style={{flex: 1}}>
                <Header
                    titleKey={'information'}
                    iconType={'back'}
                    onPress={onPress}
                />
                <View
                    style={[
                        contentContainerStyles.container,
                        styles.infoContainer,
                    ]}>
                    <BG_GRADIENT />
                    <View>
                        <Text style={styles.infoText}>
                            {t('knowing_your_number')}
                        </Text>
                    </View>
                    <Pressable style={styles.infoBtn} onPress={() => onPress()}>
                        <Text style={styles.infoBtnText}>{t('got_it')}</Text>
                        <ArrowsIcon />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
