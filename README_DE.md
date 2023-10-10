# Mongoose Erweiterte Abfragen

**Beschreibung**

In dieser Übungsaufgabe lernst du, wie du erweiterte Abfragen mit Mongoose durchführst. Du wirst verschiedene Kriterien verwenden, um deine Abfrageergebnisse zu filtern, die Ergebnisse sortieren und begrenzen sowie den Ergebnisoffset festlegen.

Bevor du mit der Aufgabe beginnst, führe bitte das folgende Seed-Skript aus, um Beispieldaten in die exampleDB-Datenbank und die Example-Collection einzufügen:

```shell
node seed.js
```

Stelle sicher, dass du das Skript ausführst, damit du über Daten verfügst, auf die du in der Aufgabe zugreifen kannst.

**Aufgaben**

1. **Task 1: Filtern mit `.where()`**

    - Erstelle eine Mongoose-Abfrage, um alle Einträge in der Example-Collection der exampleDB-Datenbank zu finden, die einem bestimmten Kriterium entsprechen, indem du die `.where()`-Methode verwendest. Gib alle Ergebnisse in der Konsole aus.
    - Beispiel: Finde alle Einträge, bei denen der Name "John Doe" ist.

2. **Task 2: Filtern mit `.equals()`**

    - Verwende die `.equals()`-Methode, um alle Einträge in der Example-Collection der exampleDB-Datenbank zu finden, die einem bestimmten Wert in einem bestimmten Feld entsprechen. Gib alle Ergebnisse in der Konsole aus.
    - Beispiel: Finde alle Einträge, bei denen das Alter 28 ist.

3. **Task 3: Filtern mit `.gt()`**

    - Führe eine Mongoose-Abfrage durch, um Einträge in der Example-Collection der exampleDB-Datenbank zu finden, die größer als ein bestimmter Wert in einem bestimmten Feld sind. Verwende dafür die `.gt()`-Methode. Gib alle Ergebnisse in der Konsole aus.
    - Beispiel: Finde alle Einträge, bei denen das Alter größer als 30 ist.

4. **Task 4: Sortieren mit `.sort()`**

    - Sortiere die Abfrageergebnisse in der Example-Collection der exampleDB-Datenbank aufsteigend nach einem bestimmten Feld, indem du die `.sort()`-Methode verwendest. Gib alle Ergebnisse in der Konsole aus.
    - Beispiel: Sortiere die Einträge nach dem Namen in aufsteigender Reihenfolge.

5. **Task 5: Begrenzen mit `.limit()`**

    - Begrenze die Anzahl der zurückgegebenen Ergebnisse in der Example-Collection der exampleDB-Datenbank auf eine bestimmte Anzahl, indem du die `.limit()`-Methode verwendest. Gib alle Ergebnisse in der Konsole aus.
    - Beispiel: Gib nur die ersten 5 Einträge zurück.

6. **Task 6: Ergebnisoffset mit `.skip()`**
    - Lege den Ergebnisoffset in der Example-Collection der exampleDB-Datenbank fest, um eine bestimmte Anzahl von Ergebnissen zu überspringen, indem du die `.skip()`-Methode verwendest. Gib alle Ergebnisse in der Konsole aus.
    - Beispiel: Überspringe die ersten

3 Einträge und gib die restlichen Einträge zurück.

**Hinweise**

-   Mongoose-Dokumentation zur [erweiterten Abfragesyntax](https://mongoosejs.com/docs/api/query.html)

Stelle sicher, dass du das Seed-Skript `seed.js` ausführst, bevor du mit der Bearbeitung der Aufgaben beginnst. Dadurch hast du Beispieldaten in der exampleDB-Datenbank und der Example-Collection, auf die du in den Aufgaben zugreifen kannst. Arbeite ausschließlich in der exampleDB-Datenbank und der Example-Collection, um die Übungsaufgabe zu lösen. Gib alle Ergebnisse jeder Aufgabe in der Konsole aus.
