//modules
import React from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import SafeAreaView from 'react-native-safe-area-view';

//components
import {Header} from '_organisms/index';

//styles
import {BG_GRADIENT} from '_styles/gradients';
import {contentContainerStyles} from '_styles/content-container';
import {styles} from './styles';
import {FindParticipant} from '_organisms/index';

export default function FindParticipantScreen({route, navigation}) {
  const {id, participants} = route.params;
  const [t] = useTranslation('find_number_screen');

  const formatParticipants =
    participants === 1 ? t('participant') : t('participants');
  return (
    <SafeAreaView
      style={styles.safeArea}
      forceInset={{
        top: 'always',
        bottom: 'never',
      }}>
      <View style={{flex: 1}}>
        <Header
          titleKey={'find_out_your_number'}
          iconType={'back'}
          onPress={() => navigation.goBack()}
          bold={'first'}
        />
        <View style={[contentContainerStyles.container]}>
          <BG_GRADIENT />
          <View style={styles.contentContainer}>
            <Text style={styles.amountParticipants}>
              {`${participants} ${formatParticipants}`}
            </Text>
            <View style={styles.search}>
              <Text style={styles.searchTitle}>
                {t('find_out_your_competition_number')}
              </Text>
              <Text style={styles.searchSubTitle}>
                {t('login_must_be_same_as_your_instagram_account')}
              </Text>
              <FindParticipant />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
