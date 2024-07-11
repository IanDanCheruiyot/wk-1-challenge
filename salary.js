function getBasicSalaryAndBenefits() {
  const basicSalary = 50000;
  const totalBenefits = 10000;

  const grossSalary = calculateGrossSalary(basicSalary, totalBenefits);
  console.log(`Gross Salary: ${grossSalary}`);
  
  const netSalary = calculateNetSalary(grossSalary);
  console.log(`Net Salary: ${netSalary}`);
  
  const payee = deductPayeeKRA(grossSalary) * grossSalary;
  console.log(`Payee: ${payee}`);
  
  const nhif = deductNHIF(grossSalary);
  console.log(`NHIF: ${nhif}`);
  
  const nssf = deductNSSF(grossSalary);
  console.log(`NSSF: ${nssf}`);
}

function deductPayeeKRA(grossSalary) {
  let taxRate;
  if (grossSalary <= 24000) {
    taxRate = 0.1;
  } else if (grossSalary <= 32333) {
    taxRate = 0.25;
  } else if (grossSalary <= 500000) {
    taxRate = 0.3;
  } else if (grossSalary <= 800000) {
    taxRate = 0.325;
  } else {
    taxRate = 0.35;
  }
  return taxRate;
}

function deductNHIF(grossSalary) {
  let deduct;
  if (grossSalary <= 5999) {
    deduct = 150;
  } else if (grossSalary <= 7999) {
    deduct = 300;
  } else if (grossSalary <= 11999) {
    deduct = 400;
  } else if (grossSalary <= 14999) {
    deduct = 500;
  } else if (grossSalary <= 19999) {
    deduct = 600;
  } else if (grossSalary <= 24999) {
    deduct = 750;
  } else if (grossSalary <= 29999) {
    deduct = 850;
  } else if (grossSalary <= 34999) {
    deduct = 900;
  } else if (grossSalary <= 39999) {
    deduct = 950;
  } else if (grossSalary <= 44999) {
    deduct = 1000;
  } else if (grossSalary <= 49999) {
    deduct = 1100;
  } else if (grossSalary <= 59999) {
    deduct = 1200;
  } else if (grossSalary <= 69999) {
    deduct = 1300;
  } else if (grossSalary <= 79999) {
    deduct = 1400;
  } else if (grossSalary <= 89999) {
    deduct = 1500;
  } else if (grossSalary <= 99999) {
    deduct = 1600;
  } else {
    deduct = 1700;
  }
  return deduct;
}

function deductNSSF(grossSalary) {
  return 0.06 * grossSalary;
}

function calculateGrossSalary(basicSalary, benefits) {
  return Number(basicSalary) + Number(benefits);
}

function calculateNetSalary(grossSalary) {
  const payee = deductPayeeKRA(grossSalary) * grossSalary;
  const nhif = deductNHIF(grossSalary);
  const nssf = deductNSSF(grossSalary);

  return grossSalary - payee - nhif - nssf;
}

getBasicSalaryAndBenefits();
