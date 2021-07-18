function longDateToStandard(rcv_date){
    if(rcv_date){
        const d = new Date(rcv_date)
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

        return ye+'-'+mo +'-'+ da
    } 
    console.error('Invalid date')
    return null
   

}

export default longDateToStandard;
