const dom = {
    title: document.querySelector('.app__title'),
    createButton: document.querySelector('.create'),
    searchButton: document.querySelector('.search'),
    tape: document.querySelector('.tape'),
    app: document.querySelector('.app'),
    about: document.querySelector('.about')
}

let notes = {};
let deleteButtons = [];
let notesArray = [];

const colors = ['#CF93D9', '#E6EE9B', '#FFAB91', '#80DEEA', '#FFCC80']

const readNotes = async () => {
    await fetch('/notes')
    .then(response => response.json())
    .then(response => {
        notes = response
        let num = 0
        Object.keys(notes).forEach(key => {
            if (num >= colors.length) num = 0
            note = notes[key]
            dom.tape.innerHTML += `
            <div class="note" id=${key} style="background: ${colors[num]}">
                <h2 class="note__title">${note.title}</h2>
                <div>
                    <p class="note__created">${note.created.toString().split('T')[0]}</p>
                    <p class="note__created">${note.created.toString().split('T')[1].split(':')[0]}:${note.created.toString().split(':')[1]}</p>    
                </div>
                <div class='note__buttons'>
                    <form action='/editNote/${key}'>
                        <button class="note__edit">edit</button>
                    </form>
                    <button class="note__delete">delete</button>
                </div>
            </div>
            `
            num += 1
        })
    })
    deleteButtons = document.querySelectorAll('.note__delete')
    deleteButtons.forEach((button) => {
        button.addEventListener('click', e => {
            console.log('click');
            e.target.parentElement.parentElement.remove()
            fetch(`/note/${e.target.parentElement.parentElement.id}`, {
                method: "DELETE"
            })
            .catch(err => console.log(err))
        })
    })
    notesArray = document.querySelectorAll('.note__title')
    notesArray.forEach((note) => {
        note.addEventListener('click', e => {
            window.location.href = `/openNote/${note.parentElement.id}`
        })
    })
}

readNotes()










