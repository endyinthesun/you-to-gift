import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    instContainer: {
        marginTop: 10,
        padding: '15rem',
        borderWidth: 1,
        borderColor: '$GRAY',
    },
    instHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    instHeaderPart: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    instIcon: {
        width: '18rem',
        height: '18rem',
        marginRight: '8rem',
    },

    instTitleIcon: {
        width: '73rem',
        height: '21rem',
    },
    imageWrapper: {
        marginTop: '20rem',
        width: '100%',
        aspectRatio: 1,
    },
    image: {
        flex: 1,
    },
    spinnerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
