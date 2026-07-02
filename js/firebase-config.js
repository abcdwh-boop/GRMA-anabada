// ============================================
// Firebase 연결 정보 (가게 열쇠)
// ============================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// ⚠️ 여기에 받은 firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyD3Pv9ex4STgikYxHGjQMElbdpkfV7wnHw",
  authDomain: "grms-anbada.firebaseapp.com",
  projectId: "grms-anbada",
  storageBucket: "grms-anbada.firebasestorage.app",
  messagingSenderId: "471236614706",
  appId: "1:471236614706:web:1cf5bb3d15c4716640ba2b"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 다른 파일에서 쓸 수 있게 내보냄
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { firebaseConfig };