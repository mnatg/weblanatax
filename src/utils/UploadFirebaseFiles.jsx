import firebase from 'firebase/app'
import 'firebase/storage'

import Toast from './Toast';

const FirebaseFiles = async (file, path) => {
    try {
        let storageRef = firebase.storage().ref(path);
        await storageRef.put(file);
    } catch (error) {
        console.error(error);
        Toast("Error al cargar el fichero: " + path, "error");
    }
}

export default FirebaseFiles;