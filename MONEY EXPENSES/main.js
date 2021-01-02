//G AVI
//class Expense 
class Expense {
    //prop of class
      id;
      name;//name of Expense 
      amount;
      frequency;
      total;
    
      constructor(id, name, amount, frequency) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.frequency = frequency;
        this.total = this.amount * this.frequency;
      }
      
    //function of class
      amountPerMonth() {
        return this.amount * this.frequency;
      }
    }
    
    window.onload = function() {
      //localStorage.removeItem("localExpenses");
      let expenses = null;
      let totalAmount = 0;//all the totlal
      let selectedIndex = -1;
    
    //selectors
      const form = document.querySelector("#form");
      const name = document.querySelector("#name");
      const amount = document.querySelector("#amount");
      const frequency = document.querySelector("#freq");
    
      const btnAction = document.querySelector("#btnAction");
      const btnUpdate = document.querySelector("#btnUpdate");
      const btnRemove = document.querySelector("#btnRemove");
      const totalAmountDiv = document.querySelector("#totalAmount");
      const tbody = document.querySelector("tbody");
      const addTable = document.querySelector(".addTable");
    
      form.addEventListener("submit", onSubmit);
      btnRemove.addEventListener("click", removeExpense);
      btnUpdate.addEventListener("click", update);
      try{
      console.log(window.localStorage);
      
     //save on localStorage on exit
      window.addEventListener("beforeunload", function() {
     
        if (expenses !== null) {
          localStorage.setItem("localExpenses", JSON.stringify(expenses));
        }
      });
      
      //get data from localStorage;
      expenses = JSON.parse(localStorage.getItem("localExpenses"));
      if (expenses === null) {
      } else {
        expenses.forEach(item => {
          totalAmount = totalAmount + item.total;T
        });
    
        addToDom();
      }
    }
    catch(error){
    
        
    }
    
    //add expense to array
      function addExpenses() {
        if (expenses === null) {
          expenses = [];
        }
        let expense1 = new Expense(
          expenses.length + 1,
          name.value,
          amount.value,
          frequency.value,
          amount.value * frequency.value
        );
        expenses.push(expense1);
    
        totalAmount += expense1.amountPerMonth();
        addToDom();
      }
    
    //add new amount to dom
      function addToDom() {
        addTable.classList.add("d-block");
        tbody.textContent = null;
        expenses.forEach((element, index) => {
          let td = document.createElement("td");
          const tr = document.createElement("tr");
          tr.setAttribute("id", "exp" + index);
          tr.addEventListener("click", onBodyClick);
    
          td.textContent = index + 1;
          tr.appendChild(td);
    
          for (const prop in element) {
            if (prop !== "id") {
              //  console.log(prop);
              td = document.createElement("td");
              td.textContent = element[prop];
              tr.appendChild(td);
            }
          }
    
          tbody.appendChild(tr);
        });
        totalAmountDiv.textContent = totalAmount;
      }
    
    //Enter data to edit
      function putToEdit() {
        name.value = expenses[selectedIndex].name;
        amount.value = expenses[selectedIndex].amount;
        frequency.value = expenses[selectedIndex].frequency;
      }
      
      //to update Expense
      function update() {
        totalAmount = totalAmount - expenses[selectedIndex].total;
        expenses[selectedIndex].id = selectedIndex;
        expenses[selectedIndex].name = name.value;
        expenses[selectedIndex].amount = amount.value;
        expenses[selectedIndex].frequency = frequency.value;
        expenses[selectedIndex].total = expenses[selectedIndex].total;
    
        totalAmount = totalAmount + expenses[selectedIndex].total;
        totalAmountDiv.textContent = totalAmount;
    
        btnAction.classList.add("d-none");
        addToDom();
        form.reset();
      }
    
    //click handler to expense
      function onBodyClick(event) {
        btnAction.classList.remove("d-none");
        //remove previes style
        if (selectedIndex > -1 && tbody.childNodes[selectedIndex]) {
          tbody.childNodes[selectedIndex].classList.remove("bg-warning");
        }
        selectedIndex = event.currentTarget.id[3];
        event.currentTarget.classList.add("bg-warning");
        putToEdit();
      }
    
      function removeExpense() {
        totalAmount = totalAmount - expenses[selectedIndex].total;
        expenses.splice(selectedIndex, 1);
        addToDom();
        totalAmountDiv.textContent = totalAmount;
        btnAction.classList.add("d-none");
        form.reset();
      }
    
      function onSubmit(event) {
        event.preventDefault();
        addExpenses();
        form.reset();
      }
    };
    