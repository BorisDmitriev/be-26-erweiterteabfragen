const mongoose = require("mongoose");
const { Schema } = mongoose;

// Definiere das Schema für deine Daten
const exampleSchema = new Schema({
    name: String,
    age: Number,
    city: String,
});

// Erstelle das Model basierend auf dem Schema
const ExampleModel = mongoose.model("Example", exampleSchema);

// Verbindung zur MongoDB-Datenbank herstellen
mongoose.connect("mongodb://127.0.0.1:27017/exampleDBErweitert", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Funktion zum Einfügen von Beispieldaten
async function seedDatabase() {
    try {
        // Beispieldaten
        const sampleData = [
            { name: "John Doe", age: 25, city: "Berlin" },
            { name: "Jane Smith", age: 30, city: "New York" },
            { name: "Bob Johnson", age: 35, city: "London" },
            { name: "Alice Williams", age: 28, city: "Paris" },
            { name: "Michael Brown", age: 32, city: "Sydney" },
            { name: "Emily Davis", age: 27, city: "Tokyo" },
            { name: "Daniel Wilson", age: 31, city: "Toronto" },
            { name: "Olivia Taylor", age: 29, city: "Moscow" },
            { name: "Matthew Martinez", age: 34, city: "Rome" },
            { name: "Sophia Anderson", age: 26, city: "Madrid" },
            { name: "Andrew Thomas", age: 33, city: "Berlin" },
            { name: "Isabella Harris", age: 28, city: "New York" },
            { name: "Ethan Clark", age: 30, city: "London" },
            { name: "Mia Lewis", age: 31, city: "Paris" },
            { name: "William Young", age: 27, city: "Sydney" },
            { name: "Ava Walker", age: 29, city: "Tokyo" },
            { name: "James Hall", age: 32, city: "Toronto" },
            { name: "Charlotte Lee", age: 33, city: "Moscow" },
            { name: "Benjamin King", age: 26, city: "Rome" },
            { name: "Amelia Adams", age: 34, city: "Madrid" },
        ];

        // Daten in die Datenbank einfügen
        await ExampleModel.insertMany(sampleData);

        console.log("Beispieldaten erfolgreich eingefügt.");

        // Verbindung zur Datenbank trennen
        mongoose.disconnect();
    } catch (error) {
        console.error("Fehler beim Einfügen der Beispieldaten:", error);
    }
}

// Aufruf der Funktion zum Einfügen der Beispieldaten
// seedDatabase();

module.exports = ExampleModel
