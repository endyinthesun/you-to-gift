//modules
import React, {useState} from 'react';
import {Text, View, Modal} from 'react-native';

//components
import {Header} from '_organisms/index';
import ModalFilterScreen from '_screens/modal-filter-screen';

export default function FavoritesScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{flex: 1}}>
            <Header
                titleArr={['избранные', 'розыгрыши']}
                iconType={'filter'}
                onPress={() => setModalVisible(true)}
            />
            <Text>Hello, its setting screen</Text>
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
