//this links the entry log div to now = the journal container
const journalContainer = document.querySelector(".entryLog");

// const makeJournalEntryComponent = (journalEntry) => {
//     // Create your own HTML structure for a journal entry
//     return `
//     <div class="student">
//     <h1 class="xx-large failing">${journalEntry.concept}</h1>
//     <section class="bordered dashed section--padded">${journalEntry.date}</section>
//     <aside class="pushRight">${journalEntry.mood}</aside>
// </div> `
// }


function addToDom(entries) {
    entries.forEach(item => {
        let jContent = `
            <div class="jContainer">
                <h5>${item.date} Feeling: ${item.mood}</h5>
                <h5>${item.concept}</h5>
                <p>${item.content}</p>
            </div>
        `;
            journalContainer.innerHTML += jContent;
    })};