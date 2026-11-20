// Git is a version control system that runs on your computer and records the history of your code.
// GitHub is a website that hosts Git repositories online, so you can back up, share, and collaborate.

// Your code lives in four places:

// Working Directory --add--> Staging Area --commit--> Local Repo --push--> Remote (GitHub)

// Working directory: the files you edit.
// Staging area (index): a holding area for changes that will go into the next commit.
// Local repository: the commit history, stored in the hidden .git folder.
// Remote: the copy on GitHub, usually named origin.


// git init
// git add .

// git commit -m "commit_message"

// What git branch -M main does
// -m renames your current branch (from master to main).

// -M (uppercase) is a shortcut for --move --force. It does the exact same rename, except it forces the rename even if a branch named main already existed.



// git remote add origin "https://----------------repository link"
// git branch
// git checkout -b branch_name
// git switch -c branch_name
// git switch branch_name
// git pull
// git status
// git clone --depth 1 https://github.com/user/repo.git  ---> Normal clone mein Git repository ki commit history bhi download karta hai.

// Lekin --depth 1 sirf latest commit ka shallow snapshot/history download karta hai.

// Isse cloning fast ho sakti hai aur download size kam ho sakta hai.

// Kab useful hai?
// - Bahut badi repository ho.
// - Aapko sirf latest code chahiye.
// - Complete old history ki zaroorat nahi hai.

// git clone -b dev https://github.com/user/repo.git

// git status

// Ye batata hai:
// - Kaunsi files modified hain.
// - Kaunsi files new hain.
// - Kaunsi files staging mein hain.
// - Aap kis branch par hain.

// git add index.js
// git add -A (entire repository ke changes)


// git log

// commit abc123
// Author: Mohit
// Date: ...
// Message: Add login page

// commit xyz456
// Author: Mohit
// Date: ...
// Message: Initial commit

// git log --oneline
// Har commit ko ek line mein show karta hai.
// abc123 Add login page
// xyz456 Initial commit

// git log --oneline --graph --all
// Ye branches aur commits ka visual graph dikhata hai.

// * abc123 (main) Add homepage
// | * xyz456 (feature) Add login
// |/
// * pqr789 Initial commit


// git branch -a
// git branch -a


// Local aur remote-tracking branches dono show karta hai.

// Example:
// * main
//   feature-login
//   remotes/origin/main
//   remotes/origin/dev


// 8.3 git branch feature-login
// git branch feature-login


// New branch create karta hai, lekin automatically us branch par switch nahi karta.
// 8.4 git branch -d feature-login
// git branch -d feature-login


// Local branch delete karta hai, agar Git ke according branch safely merge ho chuki hai.
// 8.5 git branch -D feature-login
// git branch -D feature-login


// Forcefully local branch delete karta hai, chahe uske changes merge na hue hon.

// Careful
//  Unmerged work lose ho sakta hai.
// 8.6 git branch -m old new
// git branch -m old-name new-name


// Current branch ka naam change karta hai.

// Aap kisi specific branch ko rename karna chahte hain toh:
// git branch -m old-name new-name


// 8.7 git switch feature-login
// git switch feature-login


// Existing feature-login branch par switch karta hai.
// 8.8 git switch -c feature-login
// git switch -c feature-login


// Ek saath do operations:
// 1. New branch create.
// 2. Us branch par switch.
// Ye commonly use hone wali command hai.
// 8.9 git checkout feature-login
// git checkout feature-login


// Existing branch par switch karne ka older command hai.
// 8.10 git checkout -b feature-login
// git checkout -b feature-login


// New branch create karke switch karta hai.

// Difference yaad rakhiye:
// Command	Kaam
// git branch feature	Sirf branch create
// git switch feature	Existing branch par switch
// git switch -c feature	Create + switch
// git checkout feature	Older switch command
// git checkout -b feature	Older create + switch

// Aajkal branch switching ke liye git switch recommended hai.

// Remote Commands
// Ab hum Local Repository aur GitHub ke connection ko samjhenge.
// 9.1 git remote add origin
// git remote add origin https://github.com/user/repo.git


// Is command se aap apni local repository ko GitHub repository se connect karte hain.

// Yahan:
// - remote = Remote repository related operation.
// - add = Naya remote add karna.
// - origin = Remote ka nickname.
// - URL = GitHub repository ka address.
// Example:
// Local Computer
//      |
//      | origin
//      |
// GitHub Repository


// origin koi compulsory naam nahi hai. Ye conventionally use hone wala default nickname hai.
// 9.2 git remote -v
// git remote -v


// Configured remote repositories ke URLs show karta hai.

// Example:
// origin  https://github.com/user/repo.git (fetch)
// origin  https://github.com/user/repo.git (push)


// - Fetch = Remote se data receive karne ke liye URL.
// - Push = Remote par data bhejne ke liye URL.
// 9.3 git remote set-url origin
// git remote set-url origin https://github.com/user/new-repo.git


// Existing remote ka URL change karta hai.

// Maan lijiye aapne galat GitHub repository connect kar di.

// Toh aap ye command use karke URL correct kar sakte hain.
// 9.4 git remote remove origin
// git remote remove origin


// Local repository se origin remote connection remove karta hai.

// Important: Isse GitHub par actual repository delete nahi hoti. Sirf local configuration se remote ka reference remove hota hai.

// -u Upstream tracking set karo


// git fetch aur git pull dono commands GitHub (remote) se latest changes ko aapke laptop (local) par laane ke liye use hoti hain, lekin dono ke kaam karne ke tarike mein ek bada fark hai:git fetch (Safe Check): Yeh GitHub se saari nayi updates download kar leta hai, lekin aapke local code mein koi badlav (merge) nahi karta. Yeh sirf aapko dikhata hai ki GitHub par kya naya aaya hai, taaki aap pehle check kar sakein.git pull (Direct Update): Yeh git fetch + git merge ka combo hai. Yeh GitHub se latest code download bhi karta hai aur turant aapki local files mein merge (update) bhi kar deta hai.Featuregit fetchgit pullKya karta hai?Sirf updates download karta hai, files nahi badaltaUpdates download karke seedha aapki files mein merge kar deta haiMerge conflict ka risk?Zero (aapka kaam bilkul safe rehta hai)Haan (agar aapne aur teammate ne ek hi line edit ki ho)Kab use karein?Jab aapko pehle dekhna ho ki remote par kya changes aaye hainJab aap chahte hain ki aapka local folder turant GitHub ke barabar update ho jayeSimple Formula Yaad Rakhein$$\text{git pull} = \text{git fetch} + \text{git merge}$$Kaise Use KareinRozana kaam shuru karne se pehle (sabse common):Bashgit pull
// (Agar aapne pehle git push -u origin main run kiya tha, toh sirf git pull likhna kaafi hai—warna git pull origin main likhein.)Jab pehle changes check karne hon (safe tarika):Bashgit fetch origin
// Iske baad git status ya git log main..origin/main chala kar dekh sakte hain ki GitHub par kaunse naye commits aaye hain. Agar sab theek lage, toh git merge origin/main run karke unhe apne code mein mila lein.

