const mongoose = require("mongoose");

// Definiere das Schema für deine Daten

// Erstelle das Model basierend auf dem Schema
const ExampleModel = require("./seed")

// Verbindung zur MongoDB-Datenbank herstellen
mongoose.connect("mongodb://127.0.0.1:27017/exampleDBErweitert", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Funktion zum Durchführen der Aufgaben
async function performTasks() {
    try {
        // Task 1: Filtern mit .where()
        console.log("---------Task1-----------")
        const task1 = await ExampleModel.where("name").equals("John Doe")
        console.log(task1);

        // Task 2: Filtern mit .equals()
        console.log("---------Task2-----------")
        const task2 = await ExampleModel.where("age").equals(28)
        console.log(task2);

        // Task 3: Filtern mit .gt()
        console.log("---------Task3-----------")
        const task3 = await ExampleModel.where("age").gt(30)
        console.log(task3);

        // Task 4: Sortieren mit .sort()
        console.log("---------Task4-----------")
        const task4 = await ExampleModel.find({}).sort( {name: 1} )
        console.log(task4);

        // Task 5: Begrenzen mit .limit()
        console.log("---------Task5-----------")
        const task5 = await ExampleModel.find().limit(5)
        console.log(task5);

        // Task 6: Ergebnisoffset mit .skip()
        console.log("---------Task6-----------")
        const task6 = await ExampleModel.find().skip(3)
        console.log(task6);

        // Verbindung zur Datenbank trennen
        mongoose.disconnect();

    } catch (error) {
        console.error("Fehler bei der Durchführung der Aufgaben:", error);
    }
}

// Aufruf der Funktion zum Durchführen der Aufgaben
performTasks();
