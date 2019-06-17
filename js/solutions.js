//
// // 1---------------------
//
function isTrue(a) {
    if (a === true) {
        return true;
    } else {
        return false;
    }
}
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(null));
console.log(isTrue("true"));
console.log(isTrue("Banana"));
console.log(isTrue([1, 2]));

// 2---------------------

function isFalse(b) {
    if (b === false) {
        return true;
    } else {
        return false;
    }
}
console.log(isFalse(false));
console.log(isFalse(true));
console.log(isFalse(0));
console.log(isFalse(null));
console.log(isFalse(""));
console.log(isFalse("Banana"));
console.log(isFalse([1, 2]));

// 3---------------------

function not(c) {
    if (c === true) {
        return false;
    } else {
        return true;
    }
}
console.log(not(false));
console.log(not(0));
console.log(not(""));
console.log(not(null));
console.log(not(NaN));
console.log(not(undefined));
console.log(not(true));
console.log(not("something"));
console.log(not(Infinity));
console.log(not(123));

// 4---------------------

function addOne(d) {
    if (!isNaN(d)) {
        return Number(d) + Number(1);
    } else isNaN(d)
}

console.log(addOne(0));
console.log(addOne(2));
console.log(addOne(-5));
console.log(addOne(5.789));
console.log(addOne(Infinity));
console.log(addOne("2"));
console.log(addOne("0"));
console.log(addOne("banana"));
console.log(addOne(true));
console.log(addOne(NaN));

// 5---------------------

function isEven(e) {
    if (Number(e) % 2 === 0) {
        return true;
    }   else {
        return false;
    }
}

console.log(isEven(2));
console.log(isEven(-8));
console.log(isEven(0));
console.log(isEven("42"));
console.log(isEven(1));
console.log(isEven("-3"));
console.log(isEven(false));
console.log(isEven("banana"));

// 6---------------------

function isIdentical(f,g) {
    if (f === g === true) {
        return true;
    } else {
        return false;
    }
}

console.log(isIdentical(3, 3));
console.log(isIdentical(false, false));
console.log(isIdentical("hello", "hello"));
console.log(isIdentical(3, 3.0));
console.log(isIdentical(undefined, undefined));
console.log(isIdentical(2, "2"));
console.log(isIdentical("javascript", "java"));

// 7---------------------

function isEqual(h,i){
    if (h == i === true) {
        return true;
    }  else {
        return false;
    }
}

console.log(isEqual(3, "3"));
console.log(isEqual("abc123", "abc123"));
console.log(isEqual(true, 1));
console.log(isEqual(0, false));
console.log(isEqual(4, -5));
console.log(isEqual("java", "javascript"));

// 8---------------------

function or(j,k) {
    if (j || k === true) {
        return true;
    } else {
        return false;
    }
}

console.log(or(true, true));
console.log(or(true, false));
console.log(or(false, true));
console.log(or(false, false));
console.log(or("hello", "world"));

// 9---------------------

function and(l,m){
    if (l && m === true) {
        return true;
    } else {
        return false;
    }

}

console.log(and(true, true));
console.log(and(true, false));
console.log(and(false, true));
console.log(and(false, false));
console.log(and("hello", "world"));

// 10---------------------

function concat(n,o){
    if (typeof (n + o) === "string") {
        return n + o;
    } if (typeof (n + o) === "number") {
        return n + o;
    }

}

console.log(concat("code", "up"));
console.log(concat("connect", 4));
console.log(concat("hello", "world"));
console.log(concat(4, 2));
console.log(concat(true, true));