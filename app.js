

// ====================> CONFIGURAÇÃO DO BANCO <===========================
const firebaseConfig = {
    apiKey: "AIzaSyD173h62-B677jfYbgoE6C5rQuBje1HJ9g",
    authDomain: "bibliapibjabaquara.firebaseapp.com",
    projectId: "bibliapibjabaquara",
    storageBucket: "bibliapibjabaquara.firebasestorage.app",
    messagingSenderId: "366981057465",
    appId: "1:366981057465:web:8b7cde83e067a867b5c468"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// ====================> CONFIGURAÇÃO DO BANCO <===========================

const search = document.querySelector("#btnSearch");
const containerVideo = document.querySelector(".container-video");
const containerChapter = document.querySelector(".container-chapter");
const embedVideo = document.querySelector("#embedVideo");

function resetContainerChapter() {
    while (containerChapter.firstChild) {
        containerChapter.removeChild(containerChapter.firstChild);
    }
}


search.addEventListener("click", () => {
    const bookSelectedByUser = document.querySelector("#tfBook").value;
    const chapterSelectedByUser = document.querySelector("#tfChapter").value;
    const chapterKey = `Chapter${chapterSelectedByUser}`;
    const docSelected = db.collection("biblia").doc(bookSelectedByUser).get();
    resetContainerChapter();

    docSelected.then((doc) => {
        const verses = doc.data().Chapters[chapterKey].Verses;
        const takeUrl = doc.data().Chapters[chapterKey].url;
        embedVideo.src = `${takeUrl}`;
        
        verses.forEach(verse => {
            const newParagraph = document.createElement("p");
            newParagraph.textContent = verse;
            containerChapter.appendChild(newParagraph);
            console.log(verse);
        });
        containerVideo.style.display = "flex";
        containerChapter.style.display = "flex";
    }).catch(err => {
        console.log(err);
    });
});

