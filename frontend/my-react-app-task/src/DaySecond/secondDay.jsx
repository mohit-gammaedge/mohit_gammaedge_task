// Day 2 – Terminal, OS & Developer Environment
// Topics


// Terminal fundamentals and Linux basics
// File and folder operations
// Process and port management
// Environment variables and PATH
// Package managers (pip, npm)
// Git fundamentals and version control


// Common Commands

// pwd
// ls -la
// cd
// mkdir
// touch
// rm
// rm -rf
// ps aux
// kill -9 PID
// lsof -i :3000
// git init
// git add .
// git commit -m "message"

// Outcome


// Comfortable working entirely from terminal


// ================================================================

// ----------- Setup aur Navigation  -------------

// pwd                          # abhi kahan ho
// ls                           # folder ki files dikhao
// ls -la                       # detail + hidden files
// ls -R                        # andar ke folders ki files bhi
// cd foldername                # folder ke andar jao
// cd ..                        # ek level bahar
// cd ~                         # home folder
// cd -                         # pichhle folder par wapas
// clear                        # screen saaf


//---------------- Files aur Folders ---------------------------

// mkdir src
// touch README.md
// touch src/app.js
// ls
// ls src
// echo "Hello Backend" > README.md
// echo "Day 2 practice" >> README.md
// cat README.md
// cp README.md backup.md
// ls
// mv backup.md notes.md
// ls
// mv notes.md src/
// ls src
// rm src/notes.md
// ls src
// rm -rf test-folder
// ls
// ls -R


// ------------------------ Environment Variables aur PATH: Practice Commands  --------------

// pwd
// cd ~/backend-practice/day2

// echo $HOME
// echo $USER

// env

// export GREETING=hello
// echo $GREETING

// mkdir -p src
// echo 'console.log("Greeting:", process.env.GREETING);' > src/env-test.js
// node src/env-test.js

// GREETING=namaste node src/env-test.js

// unset GREETING
// echo $GREETING
// node src/env-test.js

// echo $GREETING

// echo $GREETING

// GREETING=namaste node env-test.js
// node env-test.js
// unset GREETING
// echo $GREETING
// node env-test.js
// export GREETING=hello
// echo $GREETING
// echo "API_KEY=secret123" > .env
// echo "PORT=4000" >> .env

// cat .env
// output:
// API_KEY=secret123
// PORT=4000

// echo ".env" > .gitignore
// cat .gitignore
// ls
// ls -a

// echo $PATH
// Output: folders ki list, : se alag, jaise /usr/local/bin:/usr/bin:/bin.

// echo $PATH | tr ':' '\n'

// which node
// which npm
// which git
// which ls

// ------- Package managers (npm) --------------------


// ---------  Git fundamentals and version control  ------------

// git init
// git add .
// git commit -m "commit message"
// git push
// git fetch
// git status
// git branch
// git checkout -b branch_name
// git switch -b branch_name

// remaining commands in progress