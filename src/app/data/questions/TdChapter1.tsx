import { QuizQuestion } from "../commonTypes";

export const TdChapter1Questions: QuizQuestion[] = [
    {
        id: 1,
        question: {
            text: "What is printed as a result of executing the code segment ?",
            code: {
                content: `
        // Consider the following code segment.
        System.out.print("Hello System.out.println");
        System.out.print("!!!");
                `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "Hello!!!",
            },
            {
                text: "Hello System.out.println!!!",
            },
            {
                text: "Hello\n!!!",
            },
            {
                text: "Hello System.out.println\n!!!",
            },
            {
                text: "Nothing is printed because the text 'System.out.println' cannot appear inside a print statement.",
            },
        ],
        correctAnswer: 1,
        explanationEN:
            "print() method will print the string to the screen, but it will not print a new line. Therefore, the output is 'Hello System.out.println!!!'.",
        explanationCN:
            "print() 方法會將字串輸出到螢幕上，但不會換行。因此，輸出結果為 'Hello System.out.println!!!'。",
    },
    {
        id: 2,
        question: {
            text: "Which line of code, if any, cause an errror",
            code: {
                content: `
// Consider the following code segment.
System.out.print(*); //Line1
System.out.print("*"); //Line2
System.out.println(); //Line3
System.out.println("*"); //Line4


/*
The code segment is intended to produce the following output, but may not work as 
intended.
    * *
    *
*/
                `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "Line 1:",
            },
            {
                text: "Line 2",
            },
            {
                text: "Line 3",
            },
            {
                text: "Line 4",
            },
            {
                text: "The code segment works as intended",
            },
        ],
        correctAnswer: 0,
        explanationEN:
            "Line 1: The asterisk character is not a valid character for a string literal. The correct code should be System.out.print(\"*\");",
        explanationCN:
            "Line 1: 星號字符不是字串文字的有效字符。正確的程式應該是 System.out.print(\"*\");",
    },
    {
        id: 3,
        question: {
            text: "What is printed as a result of executing the code segment ?",
            code: {
                content: `
        // Consider the following code segment.
        System.out.print("*");
        System.out.print("**");
        System.out.print("***");
        System.out.print("*****");
        `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A",
                code: {
                    content: `
*
**
***
****
                    `,
                    language: "java",
                },
            },
            {
                text: "B",
                code: {
                    content: `
*
**
*******
                    `,
                    language: "java",
                },
            },
            {
                text: "C",
                code: {
                    content: `
*
*****
****
                    `,
                    language: "java",
                },
            },
            {
                text: "D",
                code: {
                    content: `
***
***
****
                    `,
                    language: "java",
                },
            },
            { 
                text: "E",
                code: {
                    content: `
***
*******
                    `,
                    language: "java",
                },

            },
        ],
        correctAnswer: 3,
        explanationEN:
            "print() method will print the string to the screen, but it will not print a new line. Therefore, the output is D.",
        explanationCN:
            "因為 print() 方法不會換行，所以輸出結果為 D。",
    },
    {
        id: 4,
        question: {
            text: "Consider the following code segment.",
            code: {
                content: `
System.out.print("*");
int x = 5;
int y = 6;
/* missing code */
z = (x + y) / 2;
        `,
                language: "java",
            },
        },
        code: `
// Which of the following can be used to replace /* missing code */ so that
// the code segment will compile?
        I.      int z = 0;
        II.     int z;
        III.    boolean z = false;
        `,
        language: "java",
        options: [
            {
                text: "I only",
            },
            {
                text: "II only",
            },
            {
                text: "I and II only",
            },
            {
                text: "II and III only",
            },
            { 
                text: "I, II, and III",
            },
        ],
        correctAnswer: 2,
        explanationEN:
            "Options I and II are valid because they both declare z as an int variable, which matches the type needed for the arithmetic operation (x + y) / 2. Option III declares z as a boolean, which cannot store the result of arithmetic operations.",
        explanationCN:
            "選項 I 和 II 都是有效的，因為它們都將 z 宣告為 int 變數，符合算術運算 (x + y) / 2 所需的型別。選項 III 將 z 宣告為 boolean，無法儲存算術運算的結果。",
    },
    {
        id: 5,
        question: {
            text: "Which of folling pairs of declarations is most appropriate for the code segment described?",
            code: {
                content: `
A code segment(not shown) is intended to determine the number of players whose
average score in a game exceeds 0.5. A player's average score is stored 
int avgScore, and the number of players who meet the criterion is stored 
in the variable count.
        `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A",
                code: {
                    content: `
double avgScore;
boolean count;
                    `,
                    language: "java",
                },
            },
            {
                text: "B",
                code: {
                    content: `
double avgScore;
double count;
                    `,
                    language: "java",
                },
            },
            {
                text: "C",
                code: {
                    content: `
double avgScore;
int count;
                    `,
                    language: "java",
                },
            },
            {
                text: "D",
                code: {
                    content: `
int avgScore;
boolean count;
                    `,
                    language: "java",
                },
            },
            { 
                text: "E",
                code: {
                    content: `
int avgScore;
int count;
                    `,
                    language: "java",
                },
            },
        ],
        correctAnswer: 2,
        explanationEN:
            "Because avgScore is a double variable, only C can be used to replace the missing code.",
        explanationCN:
            "因為 avgScore 是 double 型別，所以只能使用 C。",
    },
    {
        id: 6,
        question: {
            text: "Which of the following variable declarations are most appropriate to replace /* missing declarations */ in this code segment?",
            code: {
                content: `
The code segment below is intended to calculate the circumference c of a circle with the
diameter d of 1.5. The circumference of a circle is equal to its diameter times pi.
/* missing declarations */
c = d * pi;
        `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A",
                code: {
                    content: `
int pi = 3.14159;
int d = 1.5;
final int c;
                    `,
                    language: "java",
                },
            },
            {
                text: "B",
                code: {
                    content: `
final int pi = 3.14159;
int d = 1.5;
int c;
                    `,
                    language: "java",
                },
            },
            {
                text: "C",
                code: {
                    content: `
final double pi = 3.14159;
double d = 1.5;
double c;
                    `,
                    language: "java",
                },
            },
            {
                text: "D",
                code: {
                    content: `
double pi = 3.14159;
double d = 1.5;
final double c = 0.0;
                    `,
                    language: "java",
                },
            },
            { 
                text: "E",
                code: {
                    content: `
final double pi = 3.14159;
final double d = 1.5;
final double c = 0.0;
                    `,
                    language: "java",
                },
            },
        ],
        correctAnswer: 2,
        explanationEN:
            "Because pi is a constant and d is a variable, only C can be used to replace the missing code.",
        explanationCN:
            "因為pi是小數點且不會改變，因此用final double pi = 3.14159;",
    },
    {
        id: 7,
        question: {
            text: "Which of the following can be used to replace the body of calculate so that the modified version of calculate will return the same result as the original version for all x",
            code: {
                content: `
// Consider the following code segment.
public static int calculate(int x) {
    x = x + x;
    x = x + x;            
    x = x + x;
    return x;
}
        `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A",
                code: {
                    content: `
return 2 * x;
                    `,
                    language: "java",
                },
            },
            {
                text: "B",
                code: {
                    content: `
return 4 * x;
                    `,
                    language: "java",
                },
            },
            {
                text: "C",
                code: {
                    content: `
return 8 * x;
                    `,
                    language: "java",
                },
            },
            {
                text: "D",
                code: {
                    content: `
return 3 * calculate(x);
                    `,
                    language: "java",
                },
            },
            { 
                text: "E",
                code: {
                    content: `
return x + calculate(x - 1);
                    `,
                    language: "java",
                },
            },
        ],
        correctAnswer: 2,
        explanationEN:
            "return 8 * x; is the only statement that will return the same result as the original version for all x.",
        explanationCN:
            "x=1 or x=2 代入 A、B、C、D、E，只有C符合。",
    },
    {
        id: 8,
        question: {
            text: "Which of the following can be used to replace /* missing code */ so that the code segment works as intended?",
            code: {
                content: `
/* 
In the code segment below, assume that the int variable n has been properly declared and initialized. The code segment is intended to print a value that is 1 more than twice the value of n.
*/
    /* missing code */
    System.out.print(result);
        `,
                language: "java",
            },
        },
        code: `
    I.  int result = 2 * n;
        result = result + 1;
        
    II. int result = n + 1;
        result = result * 2;
        
    III. int result = (n + 1) * 2;
`,
        language: "java",
        options: [
            {
                text: "I only",
            },
            {
                text: "II only",
            },
            {
                text: "III only",
            },
            {
                text: "I and III",
            },
            { 
                text: "II and III",
            },
        ],
        correctAnswer: 0,
        explanationEN:
            "Only I can be used to replace /* missing code */ so that the code segment works as intended.",
        explanationCN:
            "答案只有I符合題意，2n+1 ",
    },
    {
        id: 9,
        question: {
            text: "Which of the following can be used to replace /* missing code */ so that the code segment works as intended?",
            code: {
                content: `
/* 
Consider the following code segment, which is intended to print the digits of the two-
digit int number num in reverse order. For exaple, if num has the value 75, the code
segment should print 57. ASsume that num has been properly declared and initialized.
*/
    /* missing code */
    System.out.print(onesDigit);
    System.out.print(tensDigit); 
    `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A",
                code: {
                    content: `
int onesDigit = num % 10;
int tensDigit = num / 10;
                    `,
                    language: "java",
                },
            },
            {
                text: "B",
                code: {
                    content: `
int onesDigit = num / 10;
int tensDigit = num % 10;
                    `,
                    language: "java",
                },
            },
            {
                text: "C",
                code: {
                    content: `
int onesDigit = 10 / num;
int tensDigit = 10 % num;
                    `,
                    language: "java",
                },
            },
            {
                text: "D",
                code: {
                    content: `
int onesDigit = num % 100;
int tensDigit = num / 100;
                    `,
                    language: "java",
                },
            },
            { 
                text: "E",
                code: {
                    content: `
int onesDigit = num / 100;
int tensDigit = num % 100;
                    `,
                    language: "java",
                },
            },
        ],
        correctAnswer: 0,
        explanationEN:
            "Only A can be used to replace /* missing code */ so that the code segment works as intended.",
        explanationCN:
            "答案只有 A 符合題意，因為 10 % 75 = 5，10 / 75 = 0，所以答案是 A。",
    },
    {
        "id": 10,
        "question": {
            "text": "Which of the following expressions evaluate to 7?",
            "code": {
                "content": `
    /*
    Evaluate the following expressions:
    I.  9 + 10 % 12
    II. (9 + 10) % 12
    III. 9 - 2 % 12
    */
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "I only"
            },
            {
                "text": "II only"
            },
            {
                "text": "I and III"
            },
            {
                "text": "II and III"
            },
            {
                "text": "I, II, and III"
            }
        ],
        "correctAnswer": 3,
        "explanationEN": "Expression I evaluates to 19 because 10 % 12 = 10, and 9 + 10 = 19. Expression II evaluates to 7 because (9 + 10) = 19, and 19 % 12 = 7. Expression III evaluates to 7 because 2 % 12 = 2, and 9 - 2 = 7. Hence, the correct answer is II and III.",
        "explanationCN": "表達式 I 的結果是 19，因為 10 % 12 = 10，9 + 10 = 19。表達式 II 的結果是 7，因為 (9 + 10) = 19，19 % 12 = 7。表達式 III 的結果是 7，因為 2 % 12 = 2，9 - 2 = 7。因此正確答案是 II 和 III。"
    }
    ,
    {
        "id": 11,
        "question": {
            "text": "Which of the following statements stores the value 3 in x?",
            "code": {
                "content": `
    /*
    Evaluate the following statements:
    A. int x = 4 / 7;
    B. int x = 7 / 3;
    C. int x = 7 / 4;
    D. int x = 5 % 8;
    E. int x = 8 % 5;
    */
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. int x = 4 / 7;"
            },
            {
                "text": "B. int x = 7 / 3;"
            },
            {
                "text": "C. int x = 7 / 4;"
            },
            {
                "text": "D. int x = 5 % 8;"
            },
            {
                "text": "E. int x = 8 % 5;"
            }
        ],
        "correctAnswer": 4,
        "explanationEN": "Only E can be used to store the value 3 in x.",
        "explanationCN": "只有 E 可以用來將值 3 存儲在 x 中。"
    },
    {
        "id": 12,
        "question": {
            "text": "Which of the following can be used to replace /* missing code */ so that the code segment works as intended?",
            "code": {
                "content": `
    /*
    The following code segment is intended to interchange the values of the int variables x
    and y. Assume that x and y have been properly declared and initialized.
    */

    int temp = x;
    /* missing code */
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A.",
                "code": {
                    "content": `x = y;
x = temp;`,
                    "language": "java"
                }
            },
            {
                "text": "B.",
                "code": {
                    "content": `x = y; 
y = temp;`,
                    "language": "java"
                }
            },
            {
                "text": "C.",
                "code": { 
                    "content": `y = x; 
x = temp;`,
                    "language": "java"
                }
            },
            {
                "text": "D.",
                "code": {
                    "content": `y = x;
temp = y;`,
                    "language": "java"
                }
            },
            {
                "text": "E.",
                "code": {
                    "content": `y = x;
temp = x;`,
                    "language": "java"
                }
            }
        ],
        "correctAnswer": 1,
        "explanationEN": "The correct option is B. To interchange the values of x and y, we need to first assign the value of y to x, and then assign the stored value of x (in temp) to y. This ensures the values are swapped correctly. All other options fail to achieve the intended result.",
        "explanationCN": "正確選項為 B。為了交換 x 和 y 的值，我們需要先將 y 的值賦給 x，然後將存儲在 temp 中的 x 的值賦給 y。這樣可以正確地交換值。其他選項無法實現預期的結果。"
    },
    {
        "id": 13,
        "question": {
            "text": "What is printed when the code segment is executed?",
            "code": {
                "content": `
    /*
    Consider the following code segment.
    */
    int a = 5;
    int b = 4;
    int c = 2;
    a *= 3;
    b += a;
    b /= c;
    System.out.print(b);
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. 2"
            },
            {
                "text": "B. 4"
            },
            {
                "text": "C. 9"
            },
            {
                "text": "D. 9.5"
            },
            {
                "text": "E. 19"
            }
        ],
        "correctAnswer": 2,
        "explanationEN": "The correct answer is C. The code performs the following steps:\n1. `a *= 3` multiplies `a` by 3, resulting in `a = 15`.\n2. `b += a` adds `a` to `b`, resulting in `b = 19`.\n3. `b /= c` divides `b` by `c` using integer division, truncating the decimal, so `b = 9`.\nThus, the output is 9.",
        "explanationCN": "正確答案為 C。程式執行以下步驟：\n1. `a *= 3` 將 `a` 乘以 3，結果為 `a = 15`。\n2. `b += a` 將 `a` 加到 `b`，結果為 `b = 19`。\n3. `b /= c` 使用整數除法將 `b` 除以 `c`，截斷小數部分，結果為 `b = 9`。\n因此輸出為 9。"
    },
    {
        "id": 14,
        "question": {
            "text": "Assume that num has been previously declared and initialized to contain an integer value. Which of the following best describes the behavior of the code segment?",
            "code": {
                "content": `
/*
Consider the following code segment.
*/
num += num;
num *= num;
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. The value of num is two times its original value."
            },
            {
                "text": "B. The value of num is the square of its original value."
            },
            {
                "text": "C. The value of num is two times the square of its original value."
            },
            {
                "text": "D. The value of num is the square of twice its original value."
            },
            {
                "text": "E. It cannot be determined without knowing the initial value of num."
            }
        ],
        "correctAnswer": 3,
        "explanationEN": "The correct answer is D. The code performs the following steps:\n1. `num += num` doubles the value of `num`, resulting in `num = 2 * num`.\n2. `num *= num` squares the new value of `num`, resulting in `num = (2 * num) * (2 * num) = 4 * num^2`.\nThis is equivalent to the square of twice the original value of `num`.",
        "explanationCN": "正確答案為 D。程式執行以下步驟：\n1. `num += num` 將 `num` 的值加倍，結果為 `num = 2 * num`。\n2. `num *= num` 將新的 `num` 值平方，結果為 `num = (2 * num) * (2 * num) = 4 * num^2`。\n這相當於原始值的兩倍的平方。"
    },
    {
        "id": 15,
        "question": {
            "text": "Consider the following code segment, where k and count are properly declared and initialized int variables.",
            "code": {
                "content": `
    k++;
    k++;
    count++;
    k--;
    count++;
    k--;
                `,
                "language": "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. The code segment leaves both k and count unchanged.",
            },
            {
                text: "B. The code segment increases both k and count by 2.",
            },
            {
                text: "C. The code segment increases k by 4 and count by 2.",
            },
            {
                text: "D. The code segment leaves k unchanged and increases count by 2.",
            },
            {
                text: "E. The code segment increases k by 2 and leaves count unchanged.",
            },
        ],
        correctAnswer: 3,
        explanationEN: 
            "Let's track the changes: 1) k++ (k increases by 1), 2) k++ (k increases by 2 total), 3) count++ (count is 1), 4) k-- (k increases by 1 total), 5) count++ (count is 2), 6) k-- (k returns to original value). Therefore, k is unchanged and count increases by 2.",
        explanationCN:
            "讓我們追蹤變化：1) k++ (k增加1)，2) k++ (k總共增加2)，3) count++ (count為1)，4) k-- (k總共增加1)，5) count++ (count為2)，6) k-- (k回到原始值)。因此，k保持不變，count增加2。",
    },
    {
        "id": 16,
        "question": {
            "text": "Consider the following code segment.",
            "code": {
                "content": `
int x = 5;
x += 6 * 2;
x -= 3 / 2;`,
                "language": "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. -1.5",
            },
            {
                text: "B. 1",
            },
            {
                text: "C. 9",
            },
            {
                text: "D. 15.5",
            },
            {
                text: "E. 16",
            },
        ],
        correctAnswer: 4,
        explanationEN:
            "Let's solve step by step: 1) x = 5, 2) x += 6 * 2 means x = 5 + 12 = 17, 3) x -= 3 / 2 means x = 17 - 1 = 16 (note: 3/2 is integer division resulting in 1). The final value is 16.",
        explanationCN:
            "讓我們逐步解決：1) x = 5，2) x += 6 * 2 意味著 x = 5 + 12 = 17，3) x -= 3 / 2 意味著 x = 17 - 1 = 16（注意：3/2 是整數除法，結果為1）。最終值為 16。",
    },
    {
        "id": 17,
        "question": {
            "text": "What is printed when the code segment is executed?",
            "code": {
                "content": `
// Consider the following code segment.
int a = 4;
int b = 5;
a++;
b++;
int c = a + b;
a -= 1;
System.out.println(a+c);
                `,
                "language": "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. 9",
            },
            {
                text: "B. 10",
            },
            {
                text: "C. 14",
            },
            {
                text: "D. 15",
            },
            {
                text: "E. 25",
            },
        ],
        correctAnswer: 3,
        explanationEN: "Let's track the values: 1) a becomes 5 after a++, 2) b becomes 6 after b++, 3) c = 5 + 6 = 11, 4) a becomes 4 after a -= 1, 5) final output is a + c = 4 + 11 = 15.",
        explanationCN: "讓我們追蹤值的變化：1) a++ 後 a 變成 5，2) b++ 後 b 變成 6，3) c = 5 + 6 = 11，4) a -= 1 後 a 變成 4，5) 最終輸出 a + c = 4 + 11 = 15。",
    },
    {
        "id": 18,
        "question": {
            "text": "What is printed as a result of executing the following statement?",
            "code": {
                "content": `
System.out.println(404 / 10 * 10 + 1);
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. 4"
            },
            {
                "text": "B. 5"
            },
            {
                "text": "C. 41"
            },
            {
                "text": "D. 401"
            },
            {
                "text": "E. 405"
            }
        ],
        "correctAnswer": 3,
        "explanationEN": "Let's solve step by step: 404 / 10 = 40 (integer division), then 40 * 10 = 400, finally 400 + 1 = 401. The order of operations follows standard arithmetic rules.",
        "explanationCN": "正確答案D 代入計算即可：404 / 10 = 40（整數除法），然後 40 * 10 = 400，最後 400 + 1 = 401。",
    },
    {
        "id": 19,
        "question": {
            "text": "What is printed when the code segment is executed?",
            "code": {
                "content": `
int a = 5;
int b = 2;
double c = 3.0;
System.out.println(5 + a / b * c - 1);
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. 0.6666666666667"
            },
            {
                "text": "B. 9.0"
            },
            {
                "text": "C. 10.0"
            },
            {
                "text": "D. 11.5"
            },
            {
                "text": "E. 14.0"
            }
        ],
        "correctAnswer": 2,
        "explanationEN": "Let's evaluate the expression: First a/b = 5/2 = 2 (integer division), then 2 * c = 2 * 3.0 = 6.0, then 5 + 6.0 = 11.0, finally 11.0 - 1 = 10.0",
        "explanationCN": "正確答案C，計算順序：先 a/b = 5/2 = 2（整數除法），然後 2 * c = 2 * 3.0 = 6.0，接著 5 + 6.0 = 11.0，最後 11.0 - 1 = 10.0",
    },
    {
        "id": 20,
        "question": {
            "text": "Which of the following best describes the behavior of the code segment?",
            "code": {
                "content": `
/*
In the code segment below, assume that the int variables a and b have been properly
declared and initialized.
*/
int c = a;
int d = b;
c += 3;
d--;
double num = c;
num /= d;
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. The code segment stores the value of (a + 3) / b int the variable num."
            },
            {
                "text": "B. The code segment stores the value of (a + 3) / (b - 1) int the variable num."
            },
            {
                "text": "C. The code segment stores the value of (a + 3) / (b - 2) int the variable num."
            },
            {
                "text": "D. The code segment stores the value of (a + 3) / (1 - b) int the variable num."
            },
            {
                "text": "E. The code segment causes a runtime error int the last line of code because num is type double and d is type int."
            }
        ],
        "correctAnswer": 1,
        "explanationEN": "The code first copies a to c and adds 3, then copies b to d and decrements it. Finally, it converts c to double and divides by d. This is equivalent to (a + 3)/(b - 1).",
        "explanationCN": "程式首先將 a 複製到 c 並加 3，然後將 b 複製到 d 並減 1。最後將 c 轉換為 double 並除以 d。這相當於 (a + 3)/(b - 1)。",
    },
    {
        "id": 21,
        "question": {
            "text": "Which of the following best describes the error, if any, int the code segment?",
            "code": {
                "content": `
/*
Consider the following code segment, which is intended to find the average of two
positive integers, x and y
*/
int c = a;
int x;
int y;
int sum = x + y;
double average = (double)(sum / 2);
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. There is no error, and the code works as intended."
            },
            {
                "text": "B. In the expression (double)(sum/2), the cast to double is applied too late, so the average will be less than the excepted result for even values of sum."
            },
            {
                "text": "C. In the expression(double)(sum/2), the cast to double is applied too late, so the average will be greater than the excepted result for even values of sum."
            },
            {
                "text": "D. In the expression(double)(sum/2), the cast to double is applied too late, so the average will be less than the expected result for odd values of sum."
            },
            {
                "text": "E. In the expression(double)(sum/2), the cast to double is applied too late, so the average will be greater than the expected result for odd values of sum."
            }
        ],
        "correctAnswer": 3,
        "explanationEN": "Because the sum is an int, the division sum/2 is an int division, which truncates the decimal part. Therefore, the average will be less than the expected result for odd values of sum.",
        "explanationCN": "因為sum是int，所以sum/2是整數除法，會截斷小數部分。因此，平均值會小於預期的結果。"
    },
    {
        "id": 22,
        "question": {
            "text": "What is printed as a result of executing the code segment?",
            "code": {
                "content": `
double num = 9/4;
System.out.print(num);
System.out.print(" ");
System.out.print((int) num);
                `,
                "language": "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. 2 2",
            },
            {
                text: "B. 2.0 2",
            },
            {
                text: "C. 2.0 2.0",
            },
            {
                text: "D. 2.25 2",
            },
            {
                text: "E. 2.25 2.0",
            },
        ],
        correctAnswer: 1,
        explanationEN: "The expression 9/4 performs integer division first (resulting in 2), then assigns to double num (becoming 2.0). When printed, it shows as '2.0'. The second print casts 2.0 to int, showing as '2'.",
        explanationCN: "表達式 9/4 先進行整數除法（結果為2），然後賦值給 double 型別的 num（變成2.0）。列印時顯示為 '2.0'。第二次列印將 2.0 轉換為 int，顯示為 '2'。",
    },
    {
        "id": 23,
        "question": {
            "text": "What is printed as a result of executing the code segment?",
            "code": {
                "content": `
/*
Consider the following code segment.
*/
double x = (int) (5.5 - 2.5);
double y = (int) 5.5 - 2.5;
System.out.println(x - y);
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. -1.0"
            },
            {
                "text": "B. -0.5"
            },
            {
                "text": "C. 0.0"
            },
            {
                "text": "D. 0.5"
            },
            {
                "text": "E. 1.0"
            }
        ],
        "correctAnswer": 3,
        "explanationEN": 
            "Let's solve step by step: 1) x = (int)(5.5 - 2.5) = (int)(3.0) = 3.0, 2) y = (int)5.5 - 2.5 = 5 - 2.5 = 2.5, 3) x - y = 3.0 - 2.5 = 0.5",
        "explanationCN": 
            "讓我們逐步解決：1) x = (int)(5.5 - 2.5) = (int)(3.0) = 3.0，2) y = (int)5.5 - 2.5 = 5 - 2.5 = 2.5，3) x - y = 3.0 - 2.5 = 0.5",
    },
    {
        "id": 24,
        "question": {
            "text": "What is printed as a result of executing the code segment?",
            "code": {
                "content": `
/*
Consider the following code segment.
*/
double x = (int) (5.5 - 2.5);
double y = (int) 5.5 - 2.5;
System.out.println(x - y);
                `,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. -1.0"
            },
            {
                "text": "B. -0.5"
            },
            {
                "text": "C. 0.0"
            },
            {
                "text": "D. 0.5"
            },
            {
                "text": "E. 1.0"
            }
        ],
        "correctAnswer": 3,
        "explanationEN": 
            "Let's solve step by step: 1) x = (int)(5.5 - 2.5) = (int)(3.0) = 3.0, 2) y = (int)5.5 - 2.5 = 5 - 2.5 = 2.5, 3) x - y = 3.0 - 2.5 = 0.5",
        "explanationCN": 
            "讓我們逐步解決：1) x = (int)(5.5 - 2.5) = (int)(3.0) = 3.0，2) y = (int)5.5 - 2.5 = 5 - 2.5 = 2.5，3) x - y = 3.0 - 2.5 = 0.5",
    },
    {
        "id": 25,
        "question": {
            "text": "Which of the following best describes the behavior of the code segment?",
            "code": {
                "content": `
/*
The following code segment is intended to round val to the nearest integer and print the 
result.
*/
double val = -0.7;
int rounded;
val = (int) (val + 0.5);
System.out.print(roundedVal);
`,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. The code segment works as intended."
            },
            {
                "text": "B. The code segment does not work as intended because val and roundedVal should be declared as the same data type."
            },
            {
                "text": "C. The code segment does not work as intended because the expressing (val + 0.5) should be cast to a double instead of an int."
            },
            {
                "text": "D. The code segment does not work as intended because val should be cast to an int before 0.5 is added to it."
            },
            {
                "text": "E. The code segment dose not work as intended because the expression(int) (val + 0.5) rounds to the nearest integer only when val is positive."
            }
        ],
        "correctAnswer": 4,
        "explanationEN": "The code segment does not work as intended because the expression(int) (val + 0.5) rounds to the nearest integer only when val is positive.",
        "explanationCN": "因為val是負數，所以(int) (val + 0.5)會變成-1，而不是-0.5"
    },
    {
        "id": 26,
        "question": {
            "text": "Which of the following expressions evaluate to 3.5",
            "code": {
                "content": `
/*
*/
I.   (double) 2 / 4 + 3
II.  (double) (2 / 4) + 3
III. (double) (2 / 4 + 3)
`,
                "language": "java"
            }
        },
        "code": "",
        "language": "java",
        "options": [
            {
                "text": "A. I only"
            },
            {
                "text": "B. III only"
            },
            {
                "text": "C. I and II only"
            },
            {
                "text": "D. II and III only"
            },
            {
                "text": "E. I, II, and III"
            }
        ],
        "correctAnswer": 0,
        "explanationEN": 
            "Let's evaluate each: I. (double)2/4 + 3 = 0.5 + 3 = 3.5, II. (double)(2/4) + 3 = (double)0 + 3 = 3.0, III. (double)(2/4 + 3) = (double)(3) = 3.0. Only I evaluates to 3.5.",
        "explanationCN": 
            "讓我們評估每個表達式：I. (double)2/4 + 3 = 0.5 + 3 = 3.5，II. (double)(2/4) + 3 = (double)0 + 3 = 3.0，III. (double)(2/4 + 3) = (double)(3) = 3.0。只有 I 的結果是 3.5。",
    }
];
