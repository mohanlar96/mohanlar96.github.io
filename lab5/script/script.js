        /* runs test to see if expected argument is === to value returned by function2test argument */
        function myFunctionTest(expected, function2test) {
            let result = function2test();

            if (Array.isArray(expected)) {
                expected = expected.toString();
            }
            if (Array.isArray(result)) {
                result = result.toString();
            }
            if (expected === result) {
                return "TEST SUCCEEDED";
            } else {
                return "TEST FAILED.  Expected " + expected + " found " + function2test();
            }
        }

        function myarr() {
            return [1, 1];
        }
        console.log("Expected output of myarr() is 40  " + myFunctionTest([1, 1], function() {
            return myarr();
        }));

        let max = function(num1, num2) {
            return num1 > num2 ? num1 : num2;
        }
        console.log("Expected output of max(2,5) is 5  " + myFunctionTest(5, function() {
            return max(2, 5);
        }));

        let maxOfThree = function(num1, num2, num3) {
            return max(max(num1, num2), num3);
        }
        console.log("Expected output of maxOfThree(2,5,11) is 11  " + myFunctionTest(11, function() {
            return maxOfThree(2, 5, 11);
        }));

        function isVowel(c) {
            return ['a', 'e', 'i', 'o', 'u'].includes(c);
        }
        console.log("Expected output of isVowel(e) is true   " + myFunctionTest(true, function() {
            return isVowel('e');
        }));

        function sum(arr) {
            return arr.reduce(function(a, b) {
                return a + b;
            });

        }

        function multiply(arr) {
            return arr.reduce(function(a, b) {
                return a * b;
            });

        }
        console.log("Expected output of sum([1,2,3,3,3]) is 12   " + myFunctionTest(12, function() {
            return sum([1, 2, 3, 3, 3]);
        }));

        console.log("Expected output of multiply([1,2,3,3,3]) is 72  " + myFunctionTest(12, function() {
            return sum([1, 2, 3, 3, 3]);
        }));
        let reverse = function(s) {
            let str = "";
            for (let i = s.length - 1; i >= 0; i--) {
                str += s[i];
            }
            return str;
        }
        console.log("Expected output of reverse('Ganzo') is oznaG " + myFunctionTest('oznaG', function() {
            return reverse('Ganzo');
        }));

        let findLongestWord = function(arrWords) {
            return Math.max(...arrWords.map(x => x.length));

        }

        console.log("Expected output of findLongestWord(['Mohan Lar','Pedro','Ganzo']) is 9 " + myFunctionTest(9, function() {
            return findLongestWord(['Mohan Lar', 'Pedro', 'Ganzo']);
        }));

        let filterLongWords = function(words) {
            let max = findLongestWord(words);
            for (let m of words) {
                if (m.length == max) {
                    return m;
                }
            }

        }
        console.log("Expected output of filterLongWords(['Mohan Lar','Pedro l','Ganzo']) is Mohan Lar " + myFunctionTest("Mohan Lar", function() {
            return filterLongWords(['Mohan Lar', 'Pedro', 'Ganzo']);
        }));

        const a = [1, 3, 5, 3, 3];
        const b = a.map(e=>e * 10);
        console.log(b);
        const c = a.filter(e=>e == 3);
        console.log(c);
        const d = a.reduce((e,e1) => e+e1);
        console.log(d);