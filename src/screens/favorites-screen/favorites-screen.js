//modules
import React, {useState, useEffect} from 'react';
import {Text, View, Modal} from 'react-native';

//components
import {Header} from '_organisms/index';
import ModalFilterScreen from '_screens/modal-filter-screen';

//styles
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT} from '_styles/global';

export default function FavoritesScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{flex: 1}}>
            <Header
                titleKey={'favorite_raffles'}
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
