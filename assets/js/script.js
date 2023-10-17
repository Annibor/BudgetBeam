/*-------------------------*/
/* --- SELECT ELEMENTS --- */
/*-------------------------*/

/* --- SUMMARY OF BUDGET AND ACTUAL COSTS --- */
const summaryEl = document.querySelector(".balance-box .total-value");
const totalBudget = document.querySelector("budget-total");
const totalActual = document.querySelector("actual-total");

/* --- BUDGET LIST --- */
const budgetIncomeBtn = document.querySelector(".list1");
const budgetCostsBtn = document.querySelector(".list2");

/* --- COST LIST BUDGET COSTS --- */
const budgetCostsEl = document.getElementById("#budget-costs");

/* --- COST LIST BUDGET INCOME --- */
const budgetIncomeEl = document.getElementById("#budget-incomes");

/* --- BUDGET INCOME AND COST LIST --- */
const budgetCostList = document.querySelector("#budget-costs .budget-list");
const budgetCostsList = document.querySelector("#budget-incomes .budget-list");

/* --- BUDGET COST ADD --- */
const budgetCostInput = document.getElementById("#budget-cost-add");
const budgetCostAmount = document.getElementById("#budget-cost-amount");
const addBudgetCostBtn = document.querySelector(".add-cost-btn");

/* --- BUDGET INCOME ADD --- */
const budgetIncomeInput = document.getElementById("#budget-income-add");
const budgetIncomeAmount = document.getElementById("#budget-income-amount");
const addBudgetIncomeBtn = document.querySelector(".add-income-btn");

/* --- ACTUAL LIST --- */
const actualIncomeBtn = document.getElementById("#actual-list1");
const actualCostsBtn = document.getElementById("#actual-list2");

/* --- COST LIST ACTUAL COSTS --- */
const actualCostsEl = document.getElementById("#actual-costs");

/* --- COST LIST ACTUAL INCOME --- */
const actualIncomeEl = document.getElementById("#actual-incomes");

/* --- ACTUAL INCOME AND COST LIST --- */
const actualCostList = document.querySelector("#actual-costs .actual-list");
const actualCostsList = document.querySelector("#actual-incomes .actual-list");

/* --- ACTUAL COST ADD --- */
const actualCostInput = document.getElementById("#actual-cost-add");
const actualCostAmount = document.getElementById("#actual-cost-amount");
const addActualCostBtn = document.querySelector(".add-actual-cost-btn");

/* --- ACTUAL INCOME ADD --- */
const actualIncomeInput = document.getElementById("#actual-income-add");
const actualIncomeAmount = document.getElementById("#actual-income-amount");
const addActualIncomeBtn = document.querySelector(".add-actual-income-btn");

/*---------------------------*/
/* --- SHOW AND HIDE LISTS AND ACTIVE BTNS BUDGT --- */
/*---------------------------*/

/*--- Based on CodePen, Mohd Hussein, link in README.md---*/
let buttons = document.querySelectorAll(".income-or-cost-budget");

for (let div of buttons) {
  div.addEventListener("click", (e) => {
    const et = e.target;

    const active = document.querySelector(".active");

    if (active) {
      active.classList.remove("active");
    }

    et.classList.add("active");

    let budgetList = document.querySelectorAll(".b-list");

    for (let content of budgetList) {
      if (
        content.getAttribute("data-number") === div.getAttribute("data-number")
      ) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    }
  });
}

/*------------------------------------*/
/* --- ADD COSTS TO BUDGET LIST --- */
/*------------------------------------*/

addBudgetIncomeBtn.addEventListener("clisk", function () {
  if (!budgetCostInput.value || !budgetCostAmount.value) return;
  let income = {
    type: "income",
    title: budgetCostInput.value,
    amount: parseFloat(budgetCostAmount.value),
  };

  let entryList = [];

  entryList.push(income);
  updateUI();
  clearInput([budgetCostInput, budgetCostAmount]);
});

/*------------------------------------*/
/* --- ADD INCOMES TO BUDGET LIST --- */
/*------------------------------------*/
