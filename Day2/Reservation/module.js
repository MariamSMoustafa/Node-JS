class myTicket{
    Tickets = [];
    AddTicket(seatNum , flightNum , DeparturePlace , ArrivalPlace , TravellingDate){
        let ticket = {seatNum , flightNum ,DeparturePlace , ArrivalPlace , TravellingDate};
        this.Tickets.push(ticket)
    }
    GetAllDetails(){
        this.Tickets.forEach((element)=> console.log(element));
    }
    GetTicket(seatNum){
        for(let i=0;i<this.Tickets.length;i++){
            if(this.Tickets[i].seatNum==seatNum){
                console.log(this.Tickets[i]);
            }
        }
    }
    UpdateInfo(seatNum){
        var updTicket = this.Tickets.findIndex((obj)=>obj.seatNum === seatNum);
        return this.Tickets[updTicket]; 
    }
}

module.exports ={
    myTicket
}