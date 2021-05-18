import firebase from 'firebase/app'
import 'firebase/storage'

import Toast from './Toast';

const FirebaseFiles = async (path) => {
    try {
        let response = [];
        let reference = firebase.storage().ref(path);
        let files = await reference.list();
        if (files.items) {
            for (let item of files.items) {
                let url = await firebase.storage().ref(item.fullPath).getDownloadURL();
                response.push({ url: url, name: item.name });
            }
        }
        return response;
    } catch (error) {
        console.error(error);
        Toast("Error al cargar el fichero: " + path, "error");
    }
}

export default FirebaseFiles;