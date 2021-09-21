
export const formatCurrency = (value:number,locale:string,currency:string)=>{
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value)
}