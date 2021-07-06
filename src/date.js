function createDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  today = dd + '/' + mm + '/' + yyyy;
  return(today);
}

  // p day;
  // p month;

  // if day.length < 2; day = '0'+ day;
  // if month.length < 2; month = '0'+ day;

  // today = day + '/' + month + '/' + year;

  // return today;

