import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: "vanlife-52761.firebaseapp.com",
  projectId: "vanlife-52761",
  storageBucket: "vanlife-52761.appspot.com",
  messagingSenderId: "504765361299",
  appId: "1:504765361299:web:059338427fb117bb43f166",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, "van");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, "van", id);
  const vanSnapShot = await getDoc(docRef);
  return { ...vanSnapShot.data(), id: vanSnapShot.id };
}

export async function getHostVans() {
  const queryhostVans = query(vansCollectionRef, where("hostId", "==", "123"));
  const hostVansSnapshot = await getDocs(queryhostVans);
  const dataArr = hostVansSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}
