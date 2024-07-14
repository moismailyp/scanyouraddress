import { launchCamera } from "react-native-image-picker";
export const openCamera = async (setImage) => {
    try {
        const result = await launchCamera({ mediaType: 'photo' });
        if (result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
    } catch (error) {
        console.error("Error opening camera: ", error);
    }
};

