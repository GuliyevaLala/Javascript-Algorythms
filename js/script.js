//Task 1 Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapın.



let num = 70;


if (num % 3 == 0 && num % 7 == 0) {
    console.log("Divisible by 3 and 7");
} else {
    console.log("Not divisible by 3 and 7");

}

// 2 n və m ədədləri verilir. Əgər n və m ədədləri hər ikisi cütdürsə n və m ədədlərinin cəmini hesablayın.

let n = 4;
let m = 121;
let sum;

if (n % 2 == 0 && m % 2 == 0) {
    sum = n + m;
    console.log("The resul is : ") + (sum);

} else {
    console.log("one of the numbers is Odd");
}


//Task 3 Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin sayini tapin.
let nu = 4;
let mu = 99;
let count = 0;

if (nu < 1 && mu < 1) {
    console.log("You have to enter valid number");

} else {
    for (i = nu; i < mu; i++) {
        if (i % 2 != 0) {
            count++;
        }
    }
}
console.log(count);

//Task 4 Verilmis n ve m(n<m) ededleri arasindaki tek ededlerin cemini tapin.

let k = 4;
let l = 99
let summary = 0; {
    if (k < 1 && l < 1) {
        Console.WriteLine("Opps.. Something went wrong");

    } else {
        for (i = k; i < l; i++) {
            if (i % 2 != 0) {
                summary += i;
                console.log(summary);

            }
        }
    }

}


//Task 5 Verilmis n ve m (n<m) ededleri arasindaki tek ededleri ekranda gostermek.

let en = 1;
let em = 100;

for (var i = en; i < em; i += 2) {
    console.log(i);
}