// const { response } = require("express");

// const { error } = require('console');
function array() {
  function hypo(a, b) {
    function sq(x) {
      return x * x;
    }
    return Math.floor(Math.sqrt(sq(a) + sq(b)));
  }

  let calculator = {
    op1: 1,
    op2: 1,

    add(o) {
      if (o == undefined || isNaN(o)) {
        o = 1;
      }

      if (typeof o === "string") {
        let extractedNumber = o.match(/-?\d+(\.\d+)?/);
        if (extractedNumber) {
          o = parseFloat(extractedNumber[0]);
        } else {
          o = 0;
        }
      }

      return (this.result = this.op1 * o + this.op2 * o);
    },
  };

  console.log(calculator.add(3));
  // console.log(calculator.add('2377'));
  console.log(calculator.add('jk 50'))

  let al = [1, 2, 3];
  let bl = [0, ...al, 4];
  // console.log(bl); //Using it for making static server for storing data.

  let ori = [1, 2, 3, 4, 5];
  let copyori = [...ori];
  copyori[0] = 123;
  // console.log(copyori,ori);

  let digi = [..."0123efgh"];
  console.log(digi); // It will help to make an single word array again usfull for making data.

  let lett = [
    ..."hello my name is 'n shivam Gupta 'n NICE to meet you VisualStudio",
  ];

  console.log([...new Set(lett)]); // usfull if you don't want extra data to an array like hello will be helo
  console.log(lett);

  let as = new Array(...ori, "testing, testing");
  let ao = Array.of(1, 2, 3);

  console.log(ao); // Create an simple array with Array.of() which new Array dosen't support.

  let ai = Array.from(copyori); // Adding function will not become problem for this form() method,
  console.log(ai); // Can work the ...array work without triple dots you just need to put the array name.

  let aax = [..."hellodear"];
  let rax;
  for (let i = 3; i < 9; i++) {
    let val = aax[i];
    rax = new Array(...val);
    console.log(rax); // Help to make array faster of an single array and may can mix if you stay focused.
  }

  sumi = 2;
  aoi = ["world"];
  aoi[1] = 3.14;
  aoi[sumi] = 3;
  aoi[sumi + 1] = "hello";
  aoi[(aoi[sumi] = aoi[0])];
  console.log(aoi); // Just an random read and write for prctice.

  class animals {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} make a sound`);
    }
  }

  class Dogs extends animals {
    constructor(name, type) {
      super(name);
      this.type = type;
    }

    speak() {
      console.log(`${this.name} is my dog breed type`);
    }
  }
  let myd = new Dogs("Ruby", "shefy");
  console.log(myd.speak());

  /* 
  const http = require('http');
  // const path = require()
  const server = http.createServer((req,res)=>{
      let filePath = '.'+ req.url;
      if (filePath === './') {
          filePath = './index3.html';
      }
      const path = require('path');
      const ext = string(path.extname(filePath).toLowerCase);
   
      const mini = {
          '.js': 'text/javascript',
          'html': 'text/html'
      };
   
      const cont = mini[ext] || 'application/octet-stream';
      const fs =require('fs');
      fs.readfile(filePath,(error,content)=>{
          if (error) {
              if (error.code === 'ENOENT') {
                  fs.readFile('./404.html',(error,content)=>{
                      res.writeHead(404, { 'Content-Type': 'text/html' });
                      res.end(content, 'utf-8');
                  })
              }   else {
                  res.writeHead(500);
                  res.end(`contnet is glicthy ${error.code}`);
              }
          }   else {
              res.writeHead(200, {'Content-Type': cont});
              res.json()
              res.end(content, 'utf-8');
          }
      })
  })
   
   
   
  const hostname = '127.0.0.1';
  const post = 8090;
   
  server.listen(post, hostname, ()=>{
      console.log(`Server is https://${hostname}:${post}/`);
  });
  */

  const lo = () => {
    console.log("one");
    console.log("two");
    console.log("three");
    console.log("four");
    console.log("five");
    console.log("six");
  };
  // lo();

  const lo2 = () => {
    console.log(myd.speak());
    console.log(aoi);
    console.log(rax);
  };

  // const { error } = require('console');
  // const fs = require('fs')

  // fs.readFile('random.txt','utf-8', (err,date)=>{
  //     if (err) {
  //         console.error(`it's show's an `, err);
  //         return;
  //     }

  //     if (date) {
  //         console.log(`it's started the `, date);
  //     }
  // });

  // console.log('This will run first, before the file is read');

  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dob = num.map((n) => n * 2);
  console.log(dob); // First time used map what a brilliant baby you are.

  let su = (a, b) => {
    return a * b;
  };

  let su1 = (a, b) => {
    return a + b;
  };

  let su2 = (a, b) => {
    return a / b;
  };

  let su3 = (a, b) => {
    return a - b;
  };

  let cal = (a, b, sucallback) => {
    if (sucallback) {
      return sucallback(a, b);
    }
  };

  function getdata(dataId, num, get) {
    if (num === undefined || num == 0) {
      num = 1;
    }
    setTimeout(() => {
      console.log(`data ${dataId}`);
      if (typeof get === "function") {
        get();
      }
    }, num);
  }

  function user(name) {
    console.log(`hello, what are you up to ${name}`);
  }

  function hello(callback, na) {
    let name = na;
    callback(name);
  }

  // an example code
  // hello(user,'cola');
  // cal(2,7,su3);
  setTimeout(() => {
    let r00 = "hello";
    return r00;
    // lo2();
  }, 10);

  ary = [1000, 2000, 3000, 4000];

  // setTimeout(() => getdata(4, 2000, () => getdata(20, 100)), 2);
  // setTimeout(() => getdata(1, 1000, () => getdata(10, 2030)), 1);
  // getdata(11, 3000, () => getdata(30, 100));

  // getdata(4, 2000, () => getdata(20, 100));
  // getdata(11, 3000, () => getdata(30, 100));

  // getdata(1, 1000, () => {
  //     console.log('getting d2...'),
  //     getdata(10, 1000, () => {
  //         console.log('getting d3...'),
  //         getdata(100, 1000, () => {
  //             console.log('getting d4...'),
  //             getdata([...ary], 1000, ()=>
  //                 console.log('final data recived')
  //             )
  //         })
  //     })
  // });

  let oo = ["object", "string"];

  /* 
  typeof take this array and check if it's object or string if any one type is true. 
  like ary is obj or fun or bolean. if (typeof ary === oo) always give true if put like this
  oo = ['func','objec','all types of type'] then only true will get but choice one then only get wrong
  like this oo[8];
  */



  // // let promise = new Promise((resolve, rejreect) => {
  // //     console.log("i am an programmer and do programming in Javascript")
  // //     if (typeof ary === oo[1]) {
  // //         reject("some error")
  // //     } else resolve ("succes")
  // // });

  // // function getd(dataId,num,next) {
  // //     return new Promise((resolve, reject) => {
  // //         setTimeout(() => {
  // //             console.log(`data ${dataId}`);
  // //             if (next) {
  // //                 next();
  // //                 resolve('success');
  // //             } else {
  // //                 reject('boring function');
  // //             }

  // //         }, num)

  // //     })
  // // };

  // // let res = getd(1, 1000, () => getd(10, 1000, () => hello(user, 'cola')));
  // // let ko = getd(1, 1000, () => getd(10, 100, () => {
  // //     let resu= cal(1,26, su);
  // //     console.log("cal result:", resu);
  // // }));

  // const so = (d) => {
  //     return new Promise((resolve, reject) => {
  //         console.log("added promise");
  //         if (typeof d === "object") {
  //             resolve("yo")
  //         } else {
  //             reject("not done bro");
  //         }
  //     })
  // }

  // let d = so(aax);

  // d.then((res)=>{
  //     console.log("again yo",`...${res}`)
  // })

  // d.catch((err)=>{
  //     console.log("rejected",`...${err}`)
  // })
}

let asyncfun = (num, dataId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      if (typeof oo === "object") {
        resolve("awesome");
        document.title = "hi shivam";
      } else {
        reject("not happened");
      }
    }, num);
  });

};

let asyncfun1 = asyncfun(2000, 1);
let asyncfun2 = asyncfun(3000, 2);
let asyncfun3 = asyncfun(4000, 3);

console.log("... fetching data 1");
asyncfun1
  .then(() => {
    console.log("... fetching data 2");
    return asyncfun2;
  })
  .then((res) => {
    console.log("second data fechted", res, "bro!");
    console.log("... fetching data 3");
    return asyncfun3;
  })
  .then(
    (res) => {
      console.log("third data fetched", res, "bro again!");
    },
    asyncfun3.catch((err) => {
      console.log("so bad it", err);
    })
  )
  .catch((err) => {
    console.log("so bad it", err);
  })

  .catch((err) => {
    console.log("so bad it", err);
  });

function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child === "string") {
      node.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      node.appendChild(child);
    } else if (typeof child === "object") {
      for (let attr in child) {
        node.setAttribute(attr, child[attr]);
      }
    }
  }
  return node;
}

document
  .querySelector("#quote")
  .appendChild(
    elt(
      "footer",
      "-",
      elt("strong", "king of the pirate"),
      ", preface to third edition of ",
      elt("em", "The ONE PIECE Egghead Island Arc"),
      ", 2023-current year",
      elt("li", "okay doka")
    )
  );

let oc = ["a", "p"];
let paras = document.body.getElementsByTagName(oc[1]);

for (const para of Array.from(paras)) {
  if (para.getAttribute("data-classified") === "secret") {
    para.innerText = "";
    para.appendChild(elt("strong", "\ni am shivam gupta"));
  }
}

document.body.appendChild(elt("p",
  elt("li", "hello world"),
  elt("li", "TEXT File"),
  elt("li", "HTML"),
  elt("li", "javascript")
));

let fun = document.querySelector("#jo")


fun.appendChild(elt("p",
  elt("a", "About Page")
)).querySelector("a").href = "http://localhost:8083/about"

function talksAbout(node, string) {
  if (node.nodeType == 1) {
    for (let child of node.childNodes) {
      if (talksAbout(child, string)) {
        return true;
      }
    }
    return false
  } else if (node.nodeType == 3) {
    return node.nodeValue.indexOf(string) > - 1;
  }
}



// Create the elements from HTML and initialize variables
let inputSubmit = document.querySelector("#oo");
let SubmitButton = document.querySelector("#submitBtn");
let outputSubmit = document.querySelector("#output-container");

// Function to handle the submission
let ruuu = 1; // Initialize ruuu outside the function

function handleSubmit() {
  let inputValue = inputSubmit.value.trim(); // Get input value

  if (inputValue) {
    // Create a new paragraph element with the input value
    let loo = elt2("p", inputValue);
    loo.id = `a${ruuu}`; // Assign a unique id to the new paragraph

    // Check if an element with id 'a1' exists
    let doll = document.getElementById("a1");

    // If the element exists, clear its content and update it with inputValue
    if (doll) {
      doll.innerHTML = ""; // Clear the element
      doll.innerHTML = inputValue; // Set its content to inputValue
    }

    // Append the newly created paragraph to the output container
    outputSubmit.appendChild(loo);

    // Increment the ruuu counter to give unique ids for new elements
    ruuu++;

    // Clear the input field
    inputSubmit.value = '';
  }
}

// Helper function to create elements
function elt2(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child === "string") {
      node.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      node.appendChild(child);
    }
  }
  return node;
}

// Add event listener for the submit button click
SubmitButton.addEventListener("click", handleSubmit);

// Add event listener for Enter keypress in the input field
inputSubmit.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission if inside a form
    handleSubmit(); // Trigger submission
  }
});


let foo = 0
// glob = ["shivam", "water", "deep ocean","hourse","lion"]

function Ruby() {
  let doi = elt("p", `I am Shivam`);
  doi.id = `u${foo}`;
  foo++;
  document.querySelector("#jo2").appendChild(doi);
}

function changeText() {
  const element = document.getElementById("a1");
  if (element) {
    element.innerText = "HELLO WORLD!";
  }
}

function deleteParagraph() {
  const div = document.getElementById('output-container');
  const div2 = document.getElementById('jo2');
  const paragraphs1 = div.querySelectorAll('p');
  const paragraphs2 = div2.querySelectorAll('p');

  if (paragraphs1.length === 0 && paragraphs2.length === 0) {
    alert('No paragraph to delete!');
  } else {
    // Confirm the deletion
    const confirmDelete = confirm('Are you sure you want to delete all paragraphs?');
    if (confirmDelete) {
      paragraphs1.forEach(paragraph => {
        // Only delete if it doesn't have a specific ID
        if (paragraph.id !== "a1") { // Keep the important paragraph
          div.removeChild(paragraph);
        }
      });

      paragraphs2.forEach(paragraph => {
        if (paragraph.id !== "jo2") { // Keep the important paragraph
          div2.removeChild(paragraph);
        }
      });
    }
  }
}


SubmitButton.addEventListener("mousedown", handleSubmit);
let roi = elt("button", "deleteParagraph")
roi.id = "ko"
document.querySelector("#submitBtn").appendChild(roi)
document.getElementById('ko').addEventListener("click", deleteParagraph);

function lowProject() {
  class System {
    #balance;

    constructor(number, holder) {
      this.number = number;
      this.holder = holder;
      this.#balance = 0;
      this.transactions = [];
    }

    // Deposit method
    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit must be a positive number.");
        return;
      }
      this.#balance += amount;
      this.transactions.push({ type: "Deposit", amount, date: new Date() });
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }

    // Withdraw method
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Withdrawal must be a positive number.");
        return;
      }
      if (this.#balance - amount < 1000) {
        console.log("Insufficient funds. Minimum balance of $1000 required.");
        return;
      }
      this.#balance -= amount;
      this.transactions.push({ type: "Withdraw", amount, date: new Date() });
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    }

    // Get balance
    getBalance() {
      return this.#balance;
    }

    // Transaction history
    showTransactionHistory() {
      console.log(`Transaction history for ${this.holder}:`);
      this.transactions.forEach((tx) => {
        console.log(`${tx.type}: $${tx.amount} on ${tx.date}`);
      });
    }
  }

  // SavingsAccount class with interest

  class SavingsAccount extends System {
    constructor(number, holder, interestRate) {
      super(number, holder);
      this.interestRate = interestRate;  // Annual interest rate
      // this.interval = interval;  // Time in seconds
    }

    // Apply interest periodically
    applyInterest(num) {
      setInterval(() => {
        let interest = (this.getBalance() * this.interestRate) / 100;
        this.deposit(this.interestRate);
        console.log(`Interest of ${interest} added.`);
      }, num * 1000);
    }

    // Withdraw with savings account condition
    withdraw(amount) {
      if (this.getBalance() - amount < 1000) {
        console.log("Cannot withdraw. Minimum balance of $1000 must be maintained.");
      } else {
        super.withdraw(amount);
      }
    }
  }

  // Test the system
  let shivam = new SavingsAccount(101, 'Shivam', 100); // 5% interest rate, interest added every 10 seconds

  shivam.deposit(5000); shivam.withdraw(4000);

  // Should fail due to minimum balance requirement;
  // Interest added every 10 seconds
  shivam.applyInterest(2);
  shivam.showTransactionHistory();
}

function kooLoopPractice() {
  let ar = []
  for (let i = 0; i < 12.3; i++) {
    ar.push(i)
  }
  koi = []

  ar.forEach(num => {
    if (num % 2 === 0) {
      koi = num;
      // console.log(num)
    }
  })

  let res = 1;
  let cou = 0;
  while (cou < 10) {
    res = res * 2;
    cou = cou + 1;
  }
  console.log(res);

  let yourN;

  do {
    yourN = "WHO ARE YOU!"
  } while (!yourN);

  // console.log("HELLO " + yourN);

  for (let i = 0; i < 15; i = i + 3) {
    console.log(i)

  }

  lllo = ["gogi", "popi", "loli", "aoai", "koki", ""]

  lllo.forEach(element => {
    if (typeof element === "string") {
      console.log(element + "tu");
    }
  });

  const data = {
    group1: [..."abcd"],
    group2: [..."efgh"],
    group3: [..."ijkl"],
    group4: [..."mnop"],
    group5: [..."qrst"],
    group6: [..."uvwx"],
    group7: [..."yz"]
  };

  for (const group in data) {
    console.log(`Items in ${group}`);
    let num = 1;
    for (const item of data[group]) {
      console.log(`${item} ${num}`);
      num = num % 4 + 1;
    }
    console.log()
  }

  const useMap = new Map([
    ["id:1", { name: "obi" }],
    ["id:2", { name: "rocky" }],
    ["id3:", { name: "homie" }],
    ["id4:", { name: "bu-bu" }],
    ["id5:", { name: "kol" }],
    ["id6:", { name: "gog" }]
  ])

  for (const [key, value] of useMap) {
    console.log(`${key} user is ${value.name}`);
  }

  he = (v, a) => {
    return `${v} with ${a}`
  }

  const tree = {
    value: he(1, "sdi"),
    children: [
      {
        value: he(2, "pol"),
        children: [
          { value: he(4, "uto"), children: [] },
          { value: he(5, "sot"), children: [] }
        ]
      },
      {
        value: he(3, "kol"),
        children: [
          { value: he(6, "abi"), children: [] },
          { value: he(7, "ko"), children: [] }

        ]
      }
    ]
  }

  function dfs(node) {
    console.log(node.value)
    for (const child of node.children) {
      dfs(child);
    }
  }

  dfs(tree);
  let data2 = {
    Kolo: [..."Kolo"],
    Boss: [..."Boss"],
    Roket: [..."Roket"],
    GumGUM: [..."GumGUM"],
    Joker: [..."Joker"]
  };

  for (const group in data2) {
    console.log(group)
    let n = 1
    for (const item of data[group]) {
      console.log(`${item} ${n}`)
      n = n % 10 + 1
    }
  }
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for (const num of number) { console.log(num) };

  let doki = "bro" //Jai shree ram.
  for (const letter of doki) { console.log(letter) };

  let ooo = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  for (const num of ooo) {
    console.log(num)
  }

}




const broi = new Map();
broi.set("Emoji", "funny face in brown");
broi.set("tag", "#i love emoji");

for (const [key, value] of broi) {
  console.log(value, "is", key)
}



const oo = new Set([1, 2, 3, 4, 5])
for (let o of oo) {
  console.log(o);
}

let per = { name: "shivam", age: 17, bloodGroup: "A-", Gender: "Female", life: "Boring like Hell" }

for (let r of Object.keys(per)) {

  for (let o of Object.values(per)) { console.log(r, o) }
}

let item = document.querySelector(".o");

for(let go of item) {
  console.log(item.textContent)
}
// kooLoopPractice();