var table = [];
var min=0; 
var max=0;
var sum=0;
var oldsum = 0;
//var tab1 = 0;
//var tab2 = 0;


for (var i = 0; i < 26; i++) {
    var random = Math.floor(Math.random(i)*10);
    table.push(random);

    if (max < random) {
        max = random;
    }

    if (min > random) {
        min = random;
    }
    sum += random;
    oldsum += i;
}




//sum is the sum of every values of table(array)

console.table(table);
console.log(max);
console.log(min);
console.log(sum);
console.log("old : " +  oldsum);
console.log(sum/table.length);




























//Math.floor((Math.random(i) * 10); 
/*function getRandom(i) {
    return Math.random();
  }

  Math.max.apply(null, table) // 4
  Math.min.apply(null, table) // 1
 
console.log(max);




for(var j = 0; j <table.length; j++){
    console.log(table[i]);
}
console.table(table);
var i = 0;
while (i < 13){
    table.push(i);
    i++;
}

console.table(table);
var i = 0;
do {
    i = i + i; 
    table.push(i);
    i++;
} while (i < 45);
/*var table = [4, 5];
console.log(table.length);*/

/* for (var i = table.length; i>0; i--)(
    console.log(table[2]);
)*/