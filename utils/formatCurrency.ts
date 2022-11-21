export const formatCurrency = (param: number) => {
    const total = param / 100;
    return total.toFixed(2)
}