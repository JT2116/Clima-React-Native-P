import React from 'react';
import { View,StyleSheet,StatusBar,Modal,Text,TouchableWithoutFeedback } from 'react-native';

const OptionModal = ({ visible, currentItem,onClose,onPlayPress,onPlayListPress }) => {
    const {filename} = currentItem;
    return (
        <>
            <StatusBar hidden/>
            <Modal animationType='slide' transparent visible={visible}>
                <View style={styles.modalV}>                     
                    <Text style={styles.title} numberOfLine={2}>
                        {filename}
                    </Text>
                    <View style={styles.optionContainer}>
                        <TouchableWithoutFeedback onPress={onPlayPress}>
                            <Text style={styles.option}>
                                Play
                            </Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={onPlayListPress}>
                            <Text style={styles.option}>
                                Add to Playlist
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>                             
                </View>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.modalBg}/>
                </TouchableWithoutFeedback>
            </Modal>                        
        </>
        
    );
};

const styles = StyleSheet.create({
    modalV: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backfaceVisibility: '#f0f8ff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1000,
        backgroundColor: 'black',
    },
    optionContainer: {
        padding: 20 
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        paddingBottom: 0,
        color: '#f0f8ff',
    },
    option: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f0f8ff',
        paddingVertical: 10,
        letterSpacing: 1,        
    },
    modalBg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    }
});

export default OptionModal;