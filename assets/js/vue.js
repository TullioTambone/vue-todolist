/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const{createApp} = Vue

createApp({
    data() {
      return {
        // variabile di controllo
        soldier: false,
        // input da utente
        inputText: '',

        myText : '',

        todos: [
        {
            text: 'Fare i compiti',
            show : false,
            done: false
        },
        {
            text: 'Fare la spesa',
            show : false,
            done: true
        },
        {
            text: 'Fare il bucato',
            show : false,
            done: false
        }
        ]
      }
    },
    methods: {
        addTodo(){
            if(this.inputText != ''){
                let myInput = {
                    text: this.inputText,
                    done: false
                }
                this.todos.unshift(myInput)
                this.inputText = ''
                this.soldier = false
            } else{
                this.soldier = true
            }
        },

        changeDone(i){
            if (this.todos[i].done != true) {
                this.todos[i].done = true
            } else{
                this.todos[i].done = false
            }
        },

        deleteElement(i){
            this.todos.splice(i, 1)
        },

        textMod(i){
            this.todos[i].show = true
            this.todos[i].text = ''
        },

        addInput(i){
            this.todos[i].show = false
            this.todos[i].text = this.myText
        }
    }
  }).mount('#app')