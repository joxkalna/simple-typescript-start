function calculateTip(bill: number): number {
  return bill > 0 && bill < 50
    ? bill * 0.05
    : bill >= 50 && bill <= 300
    ? bill * 0.05
    : bill * 0.2
}

const totalBills: number[] = [0, 20, 160, 300]
const totalTips: number[] = []
const totalBillAmount: number[] = []

for (let i = 0; i < totalBills.length; i++) {
  const tip: number = calculateTip(totalBills[i])
  totalTips.push(tip)
  totalBillAmount.push(tip + totalBills[i])
}

console.log(`
            Bills: ${totalBills}, 
            Tips: ${totalTips}
            TotalBill: ${totalBillAmount}`)
