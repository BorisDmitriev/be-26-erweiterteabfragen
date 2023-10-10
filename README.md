# Mongoose Advanced Queries

**Description**

In this exercise, you will learn how to perform advanced queries using Mongoose. You will use different criteria to filter your query results, sort the results, limit the number of results, and set the result offset.

Before you start the task, please run the following seed script to insert sample data into the exampleDB database and the Example collection:

```shell
node seed.js
```

Make sure to execute the script to have the sample data available for your tasks.

**Tasks**

1. **Task 1: Filtering with `.where()`**

    - Create a Mongoose query to find all entries in the Example collection of the exampleDB database that match a specific criterion using the `.where()` method. Print all the results to the console.
    - Example: Find all entries with the name "John Doe".

2. **Task 2: Filtering with `.equals()`**

    - Use the `.equals()` method to find all entries in the Example collection of the exampleDB database that match a specific value in a specific field. Print all the results to the console.
    - Example: Find all entries with the age 28.

3. **Task 3: Filtering with `.gt()`**

    - Perform a Mongoose query to find entries in the Example collection of the exampleDB database that are greater than a specific value in a specific field. Use the `.gt()` method for this. Print all the results to the console.
    - Example: Find all entries with an age greater than 30.

4. **Task 4: Sorting with `.sort()`**

    - Sort the query results in the Example collection of the exampleDB database in ascending order based on a specific field using the `.sort()` method. Print all the results to the console.
    - Example: Sort the entries in ascending order by name.

5. **Task 5: Limiting with `.limit()`**

    - Limit the number of returned results in the Example collection of the exampleDB database to a specific number using the `.limit()` method. Print all the results to the console.
    - Example: Limit the results to the first 5 entries.

6. **Task 6: Result Offset with `.skip()`**
    - Set the result offset in the Example collection of the exampleDB database to skip a specific number of results using the `.skip()` method. Print all the results to the console.
    - Example: Skip the first 3 entries and return the remaining entries.

**Hints**

-   Mongoose documentation on [advanced query syntax](https://mongoosejs.com/docs/api/query.html)

Make sure to run the `seed.js` seed script before starting the tasks. This will populate the exampleDB database and the Example collection with sample data that you can access while working on the tasks. Work exclusively in the exampleDB database and the Example collection to solve the exercise. Print all the results of each task to the console.
