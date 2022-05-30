# Swechallengewebapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Step 1: git clone project from Github
Step 2: Navigate to the terminal and run npm i
Step 3: Note that this is built using IntelliJ as the IDE,
and you can run the SwechallengeWebApp by clicking on the play button.
Alternatively, you can run `ng serve` in the root directory 
and it should navigate to `http://localhost:4200/`
Step 4: Upload the happyPath.csv file (found in root directory) from the web UI and John's salary should be updated from 2000 to 200
Bob's record will be ignored (skipped) since his salary is a negative value.
Alice's and Charles' salary will be inserted accordingly to 0 and 3999 respectively.
Step 5: Upload the unhappyPath.csv file (found in root directory) from the web UI and all rows will not be updated/inserted into the database
as one of the values has invalid input and this is deemed to be a improperly structured CSV file, which should be rejected.
