//modules
import React, {useState} from 'react';
import {Text, View, Modal} from 'react-native';

//components
import {Header} from '_organisms/index';

//screens
import ModalFilterScreen from '_screens/modal-filter-screen/modal-filter-screen';

//styles
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT} from '_styles/gradients';

export default function FavoritesScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{flex: 1}}>
            <Header
                titleKey={'favorite_draws'}
                iconType={'filter'}
                onPress={() => setModalVisible(true)}
            />
            <View style={contentContainerStyles.container}>
                <BG_GRADIENT />
                <Text>Hello, its setting screen</Text>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
                <ModalFilterScreen onPress={() => setModalVisible(false)} />
            </Modal>
        </View>
    );
}
