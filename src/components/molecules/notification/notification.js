//modules
import React, {useCallback} from 'react';
import {View, Text, Pressable} from 'react-native';
import {observer} from 'mobx-react-lite';
import Toast from 'react-native-toast-message';

//SVGs

import SuccessIcon from '_icons/notification/success.svg';
import ErrorIcon from '_icons/notification/error.svg';
import CrossIcon from '_icons/notification/cross.svg';

//styles
import {generateStyles} from './styles';
import {useTranslation} from 'react-i18next';

//store
import {useStores} from '_store/index';

// type = ['success', 'error']
export default observer(function Notification({type}) {
  const [t] = useTranslation('notification');

  const {favoriteDrawsStore} = useStores();
  const {notification} = favoriteDrawsStore;

  const isError = type === 'error';
  const isSuccess = type === 'success';

  const onCloseNotification = useCallback(() => {
    Toast.hide();
  }, [notification]);

  const icon = isError ? <ErrorIcon /> : isSuccess ? <SuccessIcon /> : null;
  const styles = generateStyles(type);
  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <View style={styles.left}>
          {icon}
          <View style={styles.textBlock}>
            <Text style={styles.textTitle}>
              {isError
                ? t('type_of_reward')
                : isSuccess
                ? t('you_have_added_competition_to_your_favorites')
                : null}
            </Text>
            <Text style={styles.textSubtitle}>
              {isError
                ? t('choose_reward')
                : isSuccess
                ? t('to_participate_meet_the_conditions')
                : null}
            </Text>
          </View>
        </View>
        <Pressable onPress={onCloseNotification}>
          <CrossIcon />
        </Pressable>
      </View>
    </View>
  );
});
