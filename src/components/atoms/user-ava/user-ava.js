//modules
import React from 'react';
import {Text, View, Image} from 'react-native';

//styles
import {generateStyles} from './styles';
import {ITEM_GRADIENT} from '_styles/gradients';

export default function UserAva({size, imageUrl}) {
    const styles = generateStyles(size);

    // const [noImage, setNoImage] = useState(false);

    // useEffect(() => {
    //     axios
    //         .get(imageUrl)
    //         .then(() => {
    //             setNoImage(false);
    //         })
    //         .catch(() => {
    //             setNoImage(true);
    //         });
    // }, [imageUrl]);
    return (
        <View style={styles.userAvaContainer}>
            <ITEM_GRADIENT
                absoluteFill
                colors={['#FFC107', '#F44336', '#9C27B0']}
                locations={[0, 0.2, 1]}
            />
            <View style={styles.userAva}>
                {imageUrl ? (
                    <Image
                        style={{flex: 1}}
                        source={{
                            uri: imageUrl,
                        }}
                    />
                ) : (
                    <View style={styles.noImageContainer}>
                        <Text style={styles.noImageText}>No</Text>
                        <Text style={styles.noImageText}>image</Text>
                    </View>
                )}
            </View>
        </View>
    );
}
