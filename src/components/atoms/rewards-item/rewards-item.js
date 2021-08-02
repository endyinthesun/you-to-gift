//modules
import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useTranslation} from 'react-i18next';

//SVGs
import CupIcon from '_icons/cup.svg';
import GiftBlueIcon from '_icons/gift-blue.svg';
import CupBgIcon from '_icons/cup-bg.svg';
import DashedLineIcon from '_icons/dashed-line.svg';

//styles
import {styles} from './styles';
import {BG_REWARD_ITEM, ITEM_GRADIENT} from '_styles/gradients';

export default function RewardsItem(props) {
  const [t] = useTranslation('draw_screen');
  const isFinance = props.get_type === 'finance';
  const isPhysical = props.get_type === 'fiz';

  const type = isFinance
    ? 'financial_competition'
    : isPhysical
    ? 'physical_competition'
    : null;
  const formatPrice = parseInt(props.price).toLocaleString('ru');
  const prizeContent = isFinance ? (
    <Text style={styles.financePrize}>
      ~ <Text style={styles.prizePrice}>{formatPrice} </Text>
      {props.valute.name}
    </Text>
  ) : isPhysical ? (
    <Text style={styles.physicalPrize}>
      {props.name} (~ <Text style={styles.prizePrice}>{formatPrice}</Text>{' '}
      {props.valute.name})
    </Text>
  ) : null;

  return (
    <View style={styles.item}>
      <BG_REWARD_ITEM />
      <View style={styles.topItem}>
        <View style={styles.topLeftItem}>
          <View style={styles.cupIcon}>
            <CupIcon
              width={EStyleSheet.value('27rem')}
              height={EStyleSheet.value('29rem')}
            />
          </View>
          <Text>
            <Text style={styles.number}>{props.level} </Text>
            <Text style={styles.place}>{t('place')}</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.competition}>{t(type)}</Text>
        </View>
      </View>
      <DashedLineIcon width={'100%'} />
      <View style={styles.bottomItem}>
        <GiftBlueIcon
          width={EStyleSheet.value('22rem')}
          height={EStyleSheet.value('24rem')}
        />
        <View style={styles.prize}>{prizeContent}</View>
      </View>

      <View style={styles.iconBg}>
        <CupBgIcon
          width={EStyleSheet.value('52rem')}
          height={EStyleSheet.value('103rem')}
        />
      </View>
      <ITEM_GRADIENT
        fillBottom
        height={4}
        colors={['#F2F6F7', '#1FC1EF']}
        locations={[0, 0.8]}
      />
    </View>
  );
}
