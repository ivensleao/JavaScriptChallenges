function squares(a){
    var b = [];
    if (a  && a.length > 0 ) {
       var orderedArr = [];
       orderedArr = a.sort();
       for(i = 0; i < orderedArr.length; i++) {
         b[i] = orderedArr[i] * orderedArr[i];
       }
    } else {
        console.log('Your array is null or empty!');
    }

    return b.sort(function(a, b) {
        return a - b;
      });
}

function sum(x){
    var y = 0;
    if(x && x.length > 0){
        x = x.sort(function(a, b) {
            return a - b;
          });
        for(i = 0; i < x.length; i++) {
            y += x[i];
        }
        if( y/ x.length != 1){
            y = y - x[x.length - 1];
        }
        
    }
    return y + 1;
}
