import { QuizQuestion } from "../commonTypes";

export const TdChapter3Questions: QuizQuestion[] = [
    {
        id: 1,
        question: {
            text: "Consider the following method that is intended to determine if the double values d1 and d2 are close enough to be considered equal. For example, given a tolerance of 0.001, the values 54.32271 and 54.32294 would be considered equal.",
            code: {
                content: `
public boolean almostEqual(double d1, double d2, double tolerance)
{
    /* missing code */
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "return (d1 - d2) <= tolerance;" },
            { text: "return ((d1 + d2) / 2) <= tolerance;" },
            { text: "return (d1 - d2) >= tolerance;" },
            { text: "return ((d1 + d2) / 2) >= tolerance;" },
            { text: "return Math.abs(d1 - d2) <= tolerance;" }
        ],
        correctAnswer: 4,
        explanationEN: "To check if two numbers are almost equal, we need to check if the absolute difference between them is less than or equal to the tolerance. Math.abs(d1 - d2) <= tolerance correctly implements this logic.",
        explanationCN: "要檢查兩個數字是否近似相等，我們需要檢查它們之間的絕對差值是否小於或等於容許誤差。Math.abs(d1 - d2) <= tolerance 正確實現了這個邏輯。"
    },
    {
        id: 2,
        question: {
            text: "Consider the following declarations. Assume that valueOne and valueTwo have been initialized. Which of the following evaluates to true if valueOne and valueTwo contain the same value?",
            code: {
                content: "int valueOne, valueTwo;",
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "valueOne.equals((Object) valueTwo)" },
            { text: "valueOne == valueTwo" },
            { text: "valueOne.compareTo((Object) valueTwo) == 0" },
            { text: "valueOne.compareTo(valueTwo) == 0" },
            { text: "valueOne.equals(valueTwo)" }
        ],
        correctAnswer: 1,
        explanationEN: "For primitive types like int, the == operator compares the actual values. The other options are methods that work with objects, not primitive types.",
        explanationCN: "對於 int 這樣的基本類型，== 運算符比較實際值。其他選項是用於對象的方法，不適用於基本類型。"
    },
    {
        id: 3,
        question: {
            text: "Consider the following code segment. What is printed as a result of executing the code segment?",
            code: {
                content: `
int a = 10;
int b = 5 * 2;
System.out.print(a == b);
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "5" },
            { text: "10" },
            { text: "10 == 10" },
            { text: "true" },
            { text: "false" }
        ],
        correctAnswer: 3,
        explanationEN: "The expression a == b compares if a (10) equals b (5 * 2 = 10). Since they are equal, the comparison evaluates to true, which is what gets printed.",
        explanationCN: "表達式 a == b 比較 a (10) 是否等於 b (5 * 2 = 10)。因為它們相等，比較結果為 true，這就是輸出結果。"
    },
    {
        id: 4,
        question: {
            text: "Consider the following code segment. Which of the following best describes why the phrase \"Mathematical error!\" would be printed?",
            code: {
                content: `
double a = 1.1;
double b = 1.2;
if ((a + b) * (a - b) != (a * a) - (b * b))
{
    System.out.println("Mathematical error!");
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "Precedence rules make the if condition true." },
            { text: "Associativity rules make the if condition true." },
            { text: "Roundoff error makes the if condition true." },
            { text: "Overflow makes the if condition true." },
            { text: "A compiler bug or hardware error has occurred." }
        ],
        correctAnswer: 2,
        explanationEN: "The mathematical formula (a + b)(a - b) = a² - b² should be true, but due to floating-point roundoff errors in computer arithmetic, the computed values might not be exactly equal.",
        explanationCN: "數學公式 (a + b)(a - b) = a² - b² 理論上應該成立，但由於計算機運算中的浮點數捨入誤差，計算結果可能不完全相等。"
    },
    {
        id: 5,
        question: {
            text: "Consider the following statement. What is the value of x after the statement has been executed?",
            code: {
                content: "boolean x = (5 < 8) == (5 == 8);",
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "3" },
            { text: "5" },
            { text: "8" },
            { text: "true" },
            { text: "false" }
        ],
        correctAnswer: 4,
        explanationEN: "Let's evaluate step by step: 1) (5 < 8) evaluates to true because 5 is less than 8, 2) (5 == 8) evaluates to false because 5 is not equal to 8, 3) The expression (true == false) evaluates to false because true and false are different boolean values. Therefore, x is assigned the value false.",
        explanationCN: "讓我們逐步評估：1) (5 < 8) 結果為 true，因為 5 小於 8，2) (5 == 8) 結果為 false，因為 5 不等於 8，3) 表達式 (true == false) 結果為 false，因為 true 和 false 是不同的布林值。因此，x 被賦值為 false。"
    },
    {
        id: 6,
        question: {
            text: "Consider the following Boolean expression in which the int variables x and y have been properly declared and initialized. Which of the following values for x and y will result in the expression evaluating to true?",
            code: {
                content: "(x <= 10) == (y > 25)",
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "x = 8 and y = 25" },
            { text: "x = 10 and y = 10" },
            { text: "x = 10 and y = 30" },
            { text: "x = 15 and y = 30" },
            { text: "x = 25 and y = 30" }
        ],
        correctAnswer: 2,
        explanationEN: "For x = 10 and y = 30: 1) (10 <= 10) evaluates to true because 10 equals 10, 2) (30 > 25) evaluates to true because 30 is greater than 25, 3) true == true evaluates to true. Both conditions are true, making them equal. Other options fail: for x = 8, y = 25 both sides are false; for x = 10, y = 10 the right side is false; for x = 15, y = 30 the left side is false; for x = 25, y = 30 the left side is false.",
        explanationCN: "對於 x = 10 和 y = 30：1) (10 <= 10) 結果為 true，因為 10 等於 10，2) (30 > 25) 結果為 true，因為 30 大於 25，3) true == true 結果為 true。兩個條件都為真，使它們相等。其他選項都不符合：對於 x = 8，y = 25 兩邊都為假；對於 x = 10，y = 10 右邊為假；對於 x = 15，y = 30 左邊為假；對於 x = 25，y = 30 左邊為假。"
    },
    {
        id: 7,
        question: {
            text: "Consider the following code segment. What is printed as a result of executing the code segment?",
            code: {
                content: `
int x = 7;
if (x < 7)
{
    x = 2 * x;
}
if (x % 3 == 1)
{
    x = x + 2;
}
System.out.print(3 * x);
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "7" },
            { text: "9" },
            { text: "14" },
            { text: "21" },
            { text: "27" }
        ],
        correctAnswer: 4,
        explanationEN: "1) x starts as 7, 2) First if is false (7 is not < 7), so x stays 7, 3) 7 % 3 = 1, so second if is true and x becomes 9, 4) Finally prints 3 * 9 = 27",
        explanationCN: "1) x 初始值為 7，2) 第一個 if 為假（7 不小於 7），所以 x 保持為 7，3) 7 % 3 = 1，所以第二個 if 為真，x 變為 9，4) 最後輸出 3 * 9 = 27"
    },
    {
        id: 8,
        question: {
            text: "Consider the following code segment. What is printed as a result of executing the code segment?",
            code: {
                content: `
double regularPrice = 100;
boolean onClearance = true;
boolean hasCoupon = false;
double finalPrice = regularPrice;

if(onClearance)
{
    finalPrice -= finalPrice * 0.25;
}

if(hasCoupon)
{
    finalPrice -= 5.0;
}

System.out.println(finalPrice);
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "20.0" },
            { text: "25.0" },
            { text: "70.0" },
            { text: "75.0" },
            { text: "95.0" }
        ],
        correctAnswer: 3,
        explanationEN: "1) regularPrice starts at 100, 2) onClearance is true, so apply 25% discount: 100 - (100 * 0.25) = 75, 3) hasCoupon is false, so no further discount, 4) prints 75.0",
        explanationCN: "1) regularPrice 初始值為 100，2) onClearance 為真，所以應用 25% 折扣：100 - (100 * 0.25) = 75，3) hasCoupon 為假，所以沒有進一步折扣，4) 輸出 75.0"
    },
    {
        id: 9,
        question: {
            text: "The following categories are used by some researchers to categorize zip codes as urban, suburban, or rural based on population density:\n\n• An urban zip code is a zip code with more than 3,000 people per square mile.\n• A suburban zip code is a zip code with between 1,000 and 3,000 people, inclusive, per square mile.\n• A rural zip code is a zip code with fewer than 1,000 people per square mile.\n\nConsider the following method, which is intended to categorize a zip code as urban, suburban, or rural based on the population density of the area included in the zip code.",
            code: {
                content: `
public static String getCategory(int density)
{
    /* missing code */
}

                `,
                language: "java"
            }
        },
        code: `
// Which of the following code segments can replace /* missing code */ so the getCategory method works as intended?        
I. 
String cat;
if (density > 3000)
{ cat = "urban"; }
else if (density > 999)
{ cat = "suburban"; }
else
{ cat = "rural"; }
return cat;

II. 
String cat;
if (density > 3000)
{ cat = "urban"; }
if (density > 999)
{ cat = "suburban"; }
cat = "rural";
return cat;

III.
if (density > 3000)
{ cat = "urban"; }
else if (density > 999)
{ cat = "suburban"; }
`,
        language: "java",
        options: [
            {
                text: "I only"
            },
            {
                text: "III only"
            },
            {
                text: "I and II only"
            },
            {
                text: "I and III only"
            },
            {
                text: "I, II, and III"
            }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze each option: 1) Option I correctly implements the categorization using if-else if-else structure, ensuring exactly one category is assigned based on density thresholds. 2) Option II is incorrect because it uses independent if statements that could lead to multiple assignments. 3) Option III has correct logic but is incomplete as it's missing the return statement and variable declaration. Therefore, only options I and III have correct logic, but III is incomplete.",
        explanationCN: "讓我們分析每個選項：1) 選項 I 使用 if-else if-else 結構正確實現了分類，確保根據密度閾值只分配一個類別。2) 選項 II 不正確，因為它使用獨立的 if 語句可能導致多次賦值。3) 選項 III 邏輯正確但不完整，因為缺少返回語句和變量聲明。因此，只有選項 I 和 III 具有正確的邏輯，但 III 不完整。"
    },
    {
        id: 10,
        question: {
            text: "Consider the following code segment, which is intended to simulate a random process. The code is intended to set the value of the variable event to exactly one of the values 1, 2, or 3, depending on the probability of an event occurring. The value of event should be set to 1 if the probability is 70 percent or less. The value of event should be set to 2 if the probability is greater than 70 percent but no more than 80 percent. The value of event should be set to 3 if the probability is greater than 80 percent. The variable randomNumber is used to simulate the probability of the event occurring.",
            code: {
                content: `
int event = 0;

if (randomNumber <= 0.70)
{
    event = 1;
}

if (randomNumber <= 0.80)
{
    event = 2;
}
else
{
    event = 3;
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. randomNumber = 0.70;"
            },
            {
                text: "B. randomNumber = 0.80;"
            },
            {
                text: "C. randomNumber = 0.85;"
            },
            {
                text: "D. randomNumber = 0.90;"
            },
            {
                text: "E. randomNumber = 1.00;"
            }
        ],
        correctAnswer: 0,
        explanationEN: "When randomNumber = 0.70: 1) First if (randomNumber <= 0.70) is true, so event becomes 1, 2) Second if (randomNumber <= 0.80) is also true, so event becomes 2, 3) This shows that when randomNumber = 0.70, the code will incorrectly set event to both 1 and 2 in sequence. The code should use else if statements to ensure event is set to exactly one value.",
        explanationCN: "當 randomNumber = 0.70 時：1) 第一個 if (randomNumber <= 0.70) 為真，所以 event 變為 1，2) 第二個 if (randomNumber <= 0.80) 也為真，所以 event 變為 2，3) 這表明當 randomNumber = 0.70 時，代碼會錯誤地依序將 event 設置為 1 和 2。代碼應該使用 else if 語句來確保 event 只被設置為一個值。"
    },
    {
        id: 11,
        question: {
            text: "(AP Topic Question-11112)\n\nThe following method is intended to return true if and only if the parameter val is a multiple of 4 but is not a multiple of 100 unless it is also a multiple of 400. The method does not always work correctly.",
            code: {
                content: `
public boolean isLeapYear(int val)
{
    if ((val % 4) == 0)
    {
        return true;
    }
    else
    {
        return (val % 400) == 0;
    }
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. isLeapYear(1900)"
            },
            {
                text: "B. isLeapYear(1984)"
            },
            {
                text: "C. isLeapYear(2000)"
            },
            {
                text: "D. isLeapYear(2001)"
            },
            {
                text: "E. isLeapYear(2010)"
            }
        ],
        correctAnswer: 0,
        explanationEN: "The method incorrectly returns true for isLeapYear(1900) because it only checks if the year is divisible by 4, without properly implementing the century rule (years divisible by 100 but not 400 are not leap years).",
        explanationCN: "該方法錯誤地對 isLeapYear(1900) 返回 true，因為它只檢查年份是否能被4整除，而沒有正確實現世紀規則（能被100整除但不能被400整除的年份不是閏年）。"
    },
    {
        id: 12,
        question: {
            text: "A school that does not have air conditioning has published a policy to close school when the outside temperature reaches or exceeds 95 °F. The following code segment is intended to print a message indicating whether or not the school is open, based on the temperature. Assume that the variable degrees has been properly declared and initialized with the outside temperature.",
            code: {
                content: `
if (degrees > 95)
{
    System.out.println("School will be closed due to extreme heat");
}
else
{
    System.out.println("School is open");
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. degrees = 90;"
            },
            {
                text: "B. degrees = 94;"
            },
            {
                text: "C. degrees = 95;"
            },
            {
                text: "D. degrees = 96;"
            },
            {
                text: "E. The code will work as intended for all values of degrees."
            }
        ],
        correctAnswer: 2,
        explanationEN: "The code will not work correctly when degrees = 95. According to the policy, school should be closed when temperature reaches or exceeds 95°F, but the code only closes school when temperature exceeds 95°F.",
        explanationCN: "當 degrees = 95 時代碼不會正確執行。根據規定，當溫度達到或超過 95°F 時學校應該關閉，但代碼只在溫度超過 95°F 時才關閉學校。"
    },
    {
        id: 13,
        question: {
            text: "(AP Topic Question-10939)\n\nConsider the following two code segments where the int variable choice has been properly declared and initialized.",
            code: {
                content: `
Code Segment A

if (choice > 10)
{
    System.out.println("blue");
}
else if (choice < 5)
{
    System.out.println("red");
}
else
{
    System.out.println("yellow");
}

Code Segment B

if (choice > 10)
{
    System.out.println("blue");
}

if (choice < 5)
{
    System.out.println("red");
}
else
{
    System.out.println("yellow");
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. choice < 5"
            },
            {
                text: "B. choice >= 5 and choice <= 10"
            },
            {
                text: "C. choice > 10"
            },
            {
                text: "D. choice == 5 or choice == 10"
            },
            {
                text: "E. There is no value for choice that will cause the two code segments to produce different output."
            }
        ],
        correctAnswer: 2,
        explanationEN: "When 5 ≤ choice ≤ 10, Code Segment A will print 'yellow' (due to the else), but Code Segment B will print 'yellow' only if choice is not < 5 (due to the separate if statements).",
        explanationCN: "當 5 ≤ choice ≤ 10 時，代碼段 A 會輸出 'yellow'（因為 else），但代碼段 B 只有在 choice 不小於 5 時才會輸出 'yellow'（因為是獨立的 if 語句）。"
    },
    {
        id: 14,
        question: {
            text: "Consider the following code segments, which are each intended to convert grades from a 100-point scale to a 4.0-point scale and print the result. A grade of 90 or above should yield a 4.0, a grade of 80 to 89 should yield a 3.0, a grade of 70 to 79 should yield a 2.0, and any grade lower than 70 should yield a 0.0.\n\nAssume that grade is an int variable that has been properly declared and initialized.",
            code: {
                content: `
Code Segment I

double points = 0.0;

if (grade > 89)
{
    points += 4.0;
}
else if (grade > 79)
{
    points += 3.0;
}
else if (grade > 69)
{
    points += 2.0;
}
else
{
    points += 0.0;
}

System.out.println(points);

Code Segment II

double points = 0.0;

if (grade > 89)
{
    points += 4.0;
}

if (grade > 79)
{
    grade += 3.0;
}

if (grade > 69)
{
    points += 2.0;
}

if (grade < 70)
{
    points += 0.0;
}

System.out.println(points);
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. The two code segments print the same value only when grade is below 80."
            },
            {
                text: "B. The two code segments print the same value only when grade is 90 or above or grade is below 80."
            },
            {
                text: "C. The two code segments print the same value only when grade is 90 or above."
            },
            {
                text: "D. Both code segments print the same value for all possible values of grade."
            },
            {
                text: "E. The two code segments print different values for all possible values of grade."
            }
        ],
        correctAnswer: 0,
        explanationEN: "Code Segment I correctly assigns one grade point value based on the grade ranges. Code Segment II has errors: it modifies 'grade' instead of 'points' in the second if statement, and multiple if statements can execute, leading to incorrect point totals for grades between 80-89.",
        explanationCN: "代碼段 I 根據成績範圍正確地分配一個等級分值。代碼段 II 有錯誤：在第二個 if 語句中錯誤地修改了 'grade' 而不是 'points'，並且多個 if 語句可能會執行，導致 80-89 分之間的成績計算錯誤。"
    },
    {
        id: 15,
        question: {
            text: "(AP Topic Question-10942)\n\nConsider the following code segment in which the int variable x has been properly declared and initialized.",
            code: {
                content: `
if (x % 2 == 1)
{
    System.out.println("YES");
}
else
{
    System.out.println("NO");
}

Assuming that x is initialized to the same positive integer value as the original, which of the following code segments will produce the same output as the original code segment?

I.
if (x % 2 == 1)
{
    System.out.print("YES");
}
if (x % 2 == 0)
{
    System.out.println("NO");
}

II.
if (x % 2 == 1)
{
    System.out.println("YES");
}
else if (x % 2 == 0)
{
    System.out.println("NO");
}
else
{
    System.out.println("NONE");
}

III.
boolean test = x % 2 == 0;
if (test)
{
    System.out.println("YES");
}
else
{
    System.out.println("NO");
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. I only"
            },
            {
                text: "B. II only"
            },
            {
                text: "C. III only"
            },
            {
                text: "D. I and II only"
            },
            {
                text: "E. I, II, and III"
            }
        ],
        correctAnswer: 3,
        explanationEN: "Only code segment II will produce the same output as the original code. Code segment I uses print instead of println for 'YES' and has separate if statements that could both execute. Code segment III reverses the logic by testing for even numbers first.",
        explanationCN: "只有代碼段 II 會產生與原始代碼相同的輸出。代碼段 I 使用 print 而不是 println 輸出 'YES'，並且有獨立的 if 語句可能都會執行。代碼段 III 通過先測試偶數來反轉邏輯。"
    },
    {
        id: 16,
        question: {
            text: "(2020 Practice Exam 1-11266)\n\nConsider the following method.",
            code: {
                content: `
public static void message(int a, int b, int c)
{
    if (a < 10)
    {
        if (b < 10)
        {
            System.out.print("X");
        }
        System.out.print("Y");
    }
    if (c < 10)
    {
        if (b > 10)
        {
            System.out.print("Y");
        }
        else
        {
            System.out.print("Z");
        }
    }
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. XY"
            },
            {
                text: "B. XYZ"
            },
            {
                text: "C. Y"
            },
            {
                text: "D. YY"
            },
            {
                text: "E. Z"
            }
        ],
        correctAnswer: 3,
        explanationEN: "Let's trace the code with message(5, 15, 5): 1) a < 10 is true, 2) b < 10 is false (no X), 3) prints Y, 4) c < 10 is true, 5) b > 10 is true, prints Z. Final output is XYZ.",
        explanationCN: "讓我們追蹤 message(5, 15, 5) 的執行：1) a < 10 為真，2) b < 10 為假（不輸出 X），3) 輸出 Y，4) c < 10 為真，5) b > 10 為真，輸出 Z。最終輸出為 XYZ。"
    },
    {
        id: 17,
        question: {
            text: "(Previous Practice Question-11222)\n\nConsider the following method.",
            code: {
                content: `
public int pick(boolean test, int x, int y)
{
    if (test)
        return x;
    else
        return y;
}
                `,
                language: "java"
            }
        },
        code: "What value is returned by the following method call?\n\npick(false, pick(true, 0, 1), pick(true, 6, 7))",
        language: "java",
        options: [
            {
                text: "A. 0"
            },
            {
                text: "B. 1"
            },
            {
                text: "C. 3"
            },
            {
                text: "D. 6"
            },
            {
                text: "E. 7"
            }
        ],
        correctAnswer: 3,
        explanationEN: "Let's evaluate from inside out: 1) pick(true, 0, 1) returns 0, 2) pick(true, 6, 7) returns 6, 3) pick(false, 0, 6) returns 6 because test is false.",
        explanationCN: "讓我們從內到外評估：1) pick(true, 0, 1) 返回 0，2) pick(true, 6, 7) 返回 6，3) pick(false, 0, 6) 因為 test 為 false 所以返回 6。"
    },
    {
        id: 18,
        question: {
            text: "(2015 Practice Exam-10887)\n\nConsider the following method, biggest, which is intended to return the greatest of three integers. It does not always work as intended.",
            code: {
                content: `
public static int biggest(int a, int b, int c)
{
    if ((a > b) && (a > c))
    {
        return a;
    }
    else if ((b > a) && (b > c))
    {
        return b;
    }
    else
    {
        return c;
    }
}
                `,
                language: "java"
            }
        },
        code: "Which of the following best describes the error in the method?",
        language: "java",
        options: [
            {
                text: "A. biggest always returns the value of a."
            },
            {
                text: "B. biggest may not work correctly when c has the greatest value."
            },
            {
                text: "C. biggest may not work correctly when a and b have equal values."
            },
            {
                text: "D. biggest may not work correctly when a and c have equal values."
            },
            {
                text: "E. biggest may not work correctly when b and c have equal values."
            }
        ],
        correctAnswer: 2,
        explanationEN: "The method fails when c has the greatest value and is equal to either a or b. For example, if a=5, b=5, c=5, it returns c, but if a=3, b=3, c=5, it incorrectly returns c when it should return 5.",
        explanationCN: "當 c 是最大值並且等於 either a 或 b 時，該方法會失敗。例如，如果 a=5，b=5，c=5，它返回 c，但如果 a=3，b=3，c=5，它錯誤地返回 c，而它應該返回 5。"
    },
    {
        id: 19,
        question: {
            text: "At a certain high school students receive letter grades based on the following scale.\n\nInteger Score\t\tLetter Grade\n93 or above\t\tA\nFrom 84 to 92 inclusive\tB\nFrom 75 to 83 inclusive\tC\nBelow 75\t\t\tF\n\nWhich of the following code segments will assign the correct string to grade for a given integer score?",
            code: {
                content: `
I.
if (score >= 93)
    grade = "A";
if (score >= 84 && score <= 92)
    grade = "B";
if (score >= 75 && score <= 83)
    grade = "C";
if (score < 75)
    grade = "F";

II.
if (score >= 93)
    grade = "A";
if (84 <= score <= 92)
    grade = "B";
if (75 <= score <= 83)
    grade = "C";
if (score < 75)
    grade = "F";

III.
if (score >= 93)
    grade = "A";
else if (score >= 84)
    grade = "B";
else if (score >= 75)
    grade = "C";
else
    grade = "F";
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. II only"
            },
            {
                text: "B. III only"
            },
            {
                text: "C. I and II only"
            },
            {
                text: "D. I and III only"
            },
            {
                text: "E. I, II, and III"
            }
        ],
        correctAnswer: 3,
        explanationEN: "Only code segment III correctly implements the grading logic. Code segment I uses independent if statements that could lead to multiple assignments. Code segment II uses incorrect syntax for range checking (84 <= score <= 92 is not valid Java).",
        explanationCN: "只有代碼段 III 正確實現了評分邏輯。代碼段 I 使用獨立的 if 語句可能導致多次賦值。代碼段 II 使用了不正確的範圍檢查語法（84 <= score <= 92 在 Java 中是無效的）。"
    },
    {
        id: 20,
        question: {
            text: "(2015 Practice Exam-11235)\n\nThe price per box of ink pens advertised in an office supply catalog is based on the number of boxes ordered. The following table shows the pricing.\n\nNumber of Boxes\t\tPrice per Box\n1 up to but not including 5\t$5.00\n5 up to but not including 10\t$3.00\n10 or more\t\t\t$1.50\n\nThe following incomplete method is intended to return the total cost of an order based on the value of the parameter numBoxes.",
            code: {
                content: `
/*
                Number of Boxes                 Price per Box
                1 up to but not including 5         $5.00
                5 up to but not including 10        $3.00
                10 or more                          $1.50
*/


/** Precondition: numBoxes > 0 */
public static double getCost(int numBoxes)
{
    double totalCost = 0.0;
    
    /* missing code */
    
    return totalCost;
}

I.
if (numBoxes >= 10)
    totalCost = 1.50 * numBoxes;
if (numBoxes >= 5)
    totalCost = 3.00 * numBoxes;
if (numBoxes > 0)
    totalCost = 5.00 * numBoxes;

II.
if (numBoxes >= 10)
    totalCost = 1.50 * numBoxes;
else if (numBoxes >= 5)
    totalCost = 3.00 * numBoxes;
else
    totalCost = 5.00 * numBoxes;

III.
if (numBoxes > 0)
    totalCost = 5.00 * numBoxes;
else if (numBoxes >= 5)
    totalCost = 3.00 * numBoxes;
else if (numBoxes >= 10)
    totalCost = 1.50 * numBoxes;
                `,
                language: "java"
            }
        },
        code: "Which of the following code segments can be used to replace /* missing code */ so that method getCost will work as intended?",
        language: "java",
        options: [
            {
                text: "A. I only"
            },
            {
                text: "B. II only"
            },
            {
                text: "C. III only"
            },
            {
                text: "D. I and II"
            },
            {
                text: "E. II and III"
            }
        ],
        correctAnswer: 1,
        explanationEN: "Only code segment II correctly implements the pricing logic using if-else if-else structure. Code segment I uses independent if statements that could lead to multiple assignments, and code segment III has incorrect order of conditions that would give wrong results.",
        explanationCN: "只有代碼段 II 使用 if-else if-else 結構正確實現了定價邏輯。代碼段 I 使用獨立的 if 語句可能導致多次賦值，而代碼段 III 的條件順序不正確，會導致錯誤的結果。"
    },
    {
        id: 21,
        question: {
            text: "(2014 Practice Exam-11375)\n\nConsider the following method.",
            code: {
                content: `
public void test(int x)
{
    int y;
    
    if (x % 2 == 0)
        y = 3;
    else if (x > 9)
        y = 5;
    else
        y = 1;
        
    System.out.println("y = " + y);
}
                `,
                language: "java"
            }
        },
        code: "Which of the following test data sets would test each possible output for the method?",
        language: "java",
        options: [
            {
                text: "A. 8, 9, 12"
            },
            {
                text: "B. 7, 9, 11"
            },
            {
                text: "C. 8, 9, 11"
            },
            {
                text: "D. 8, 11, 13"
            },
            {
                text: "E. 7, 9, 10"
            }
        ],
        correctAnswer: 2,
        explanationEN: "The method has three possible outputs: y=3 (when x is even), y=5 (when x>9 and x is odd), and y=1 (when x≤9 and x is odd). The test set (8,9,11) covers all cases: 8 is even (y=3), 9 is odd and ≤9 (y=1), 11 is odd and >9 (y=5).",
        explanationCN: "該方法有三種可能的輸出：y=3（當x為偶數時），y=5（當x>9且為奇數時），y=1（當x≤9且為奇數時）。測試集(8,9,11)涵蓋所有情況：8是偶數(y=3)，9是奇數且≤9(y=1)，11是奇數且>9(y=5)。"
    },
    {
        id: 22,
        question: {
            text: "(AP Course and Exam Description-11407)\n\nVehicles are classified based on their total interior volume. The classify method is intended to return a vehicle classification String value based on total interior volume, in cubic feet, as shown in the table below.\n\nVehicle size class\t\tTotal interior volume\nMinicompact\t\t\tLess than 85 cubic feet\nSubcompact\t\t\t85 to 99 cubic feet\nCompact\t\t\t\t100 to 109 cubic feet\nMid-Size\t\t\t\t110 to 119 cubic feet\nLarge\t\t\t\t120 cubic feet or more\n\nThe classify method, which does not work as intended, is shown below.",
            code: {
                content: `
/*
Vehicle size class\t\tTotal interior volume
Minicompact\t\t\tLess than 85 cubic feet
Subcompact\t\t\t85 to 99 cubic feet
Compact\t\t\t\t100 to 109 cubic feet
Mid-Size\t\t\t\t110 to 119 cubic feet
Large\t\t\t\t120 cubic feet or more
*/

public static String classify(int volume)
{
    String carClass = "";
    
    if (volume >= 120)
    {
        carClass = "Large";
    }
    else if (volume < 120)
    {
        carClass = "Mid-Size";
    }
    else if (volume < 110)
    {
        carClass = "Compact";
    }
    else if (volume < 100)
    {
        carClass = "Subcompact";
    }
    else
    {
        carClass = "Minicompact";
    }
    
    return carClass;
}
                `,
                language: "java"
            }
        },
        code: "The classify method works as intended for some but not all values of the parameter volume. For which of the following values of volume would the correct value be returned when the classify method is executed?",
        language: "java",
        options: [
            {
                text: "A. 80"
            },
            {
                text: "B. 90"
            },
            {
                text: "C. 105"
            },
            {
                text: "D. 109"
            },
            {
                text: "E. 115"
            }
        ],
        correctAnswer: 4,
        explanationEN: "The method has logical errors in its if-else structure. For volume = 80, it correctly returns 'Minicompact' because it's less than 85. However, for other values, the logic fails because: 1) Any value < 120 is classified as 'Mid-Size', 2) The conditions for other categories are unreachable.",
        explanationCN: "該方法的 if-else 結構有邏輯錯誤。對於 volume = 80，它正確返回 'Minicompact'，因為它小於 85。但對於其他值，邏輯失敗是因為：1) 任何小於 120 的值都被歸類為 'Mid-Size'，2) 其他類別的條件無法到達。"
    },
    {
        id: 23,
        question: {
            text: "(AP Exam-10890)\n\nA teacher put three bonus questions on a test and awarded 5 extra points to anyone who answered all three bonus questions correctly and no extra points otherwise. Assume that the boolean variables bonusOne, bonusTwo, and bonusThree indicate whether a student has answered the particular question correctly.\n\nEach variable was assigned true if the answer was correct and false if the answer was incorrect.\n\nWhich of the following code segments will properly update the variable grade based on a student's performance on the bonus questions?",
            code: {
                content: `
I.
if (bonusOne && bonusTwo && bonusThree)
    grade += 5;

II.
if (bonusOne || bonusTwo || bonusThree)
    grade += 5;

III.
if (bonusOne)
    grade += 5;
if (bonusTwo)
    grade += 5;
if (bonusThree)
    grade += 5;
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "A. I only"
            },
            {
                text: "B. II only"
            },
            {
                text: "C. III only"
            },
            {
                text: "D. I and III"
            },
            {
                text: "E. II and III"
            }
        ],
        correctAnswer: 0,
        explanationEN: "Only code segment I correctly implements the bonus point logic. It uses && to check if all three questions are answered correctly before adding 5 points. Code segment II adds points if ANY question is correct, and code segment III adds 5 points for EACH correct answer.",
        explanationCN: "只有代碼段 I 正確實現了獎勵分數邏輯。它使用 && 來檢查是否所有三個問題都回答正確才加 5 分。代碼段 II 在任何一個問題正確時就加分，代碼段 III 為每個正確答案都加 5 分。"
    },
    {
        id: 24,
        question: {
            text: "(Previous Practice Question-10895)\n\nAssume that the boolean variables a and b have been declared and initialized. Consider the following expression.",
            code: {
                content: "(a && (b || !a)) == a && b",
                language: "java"
            }
        },
        code: "Which of the following best describes the conditions under which the expression will evaluate to true?",
        language: "java",
        options: [
            {
                text: "A. Only when a is true"
            },
            {
                text: "B. Only when b is true"
            },
            {
                text: "C. Only when both a and b are true"
            },
            {
                text: "D. The expression will never evaluate to true."
            },
            {
                text: "E. The expression will always evaluate to true."
            }
        ],
        correctAnswer: 1,
        explanationEN: "Let's evaluate step by step: 1) When a is false, the left side is false && b = false, but right side is false && b = false, 2) When a is true and b is false, left side is true && false = false, right side is true && false = false, 3) When both are true, left side is true && true = true, right side is true && true = true. Therefore, the expression is true only when both a and b are true.",
        explanationCN: "讓我們逐步評估：1) 當 a 為假時，左邊是 false && b = false，右邊是 false && b = false，2) 當 a 為真且 b 為假時，左邊是 true && false = false，右邊是 true && false = false，3) 當兩者都為真時，左邊是 true && true = true，右邊是 true && true = true。因此，表達式只在 a 和 b 都為真時才為真。"
    },
    {
        id: 25,
        question: {
            text: "(Previous Practice Question-10896)\n\nAssume that the boolean variables a, b, c, and d have been declared and initialized. Consider the following expression.",
            code: {
                content: "!( !( a && b ) || ( c || !d ))",
                language: "java"
            }
        },
        code: "Which of the following is equivalent to the expression?",
        language: "java",
        options: [
            {
                text: "A. ( a && b ) && ( !c && d )"
            },
            {
                text: "B. ( a || b ) && ( !c && d )"
            },
            {
                text: "C. ( a && b ) || ( c || !d )"
            },
            {
                text: "D. ( !a || !b ) && ( !c && d )"
            },
            {
                text: "E. !( a && b ) && ( c || !d )"
            }
        ],
        correctAnswer: 0,
        explanationEN: "Using De Morgan's Laws: 1) !( !( a && b ) || ( c || !d )) = !(!( a && b )) && !(c || !d), 2) = (a && b) && (!c && d). Therefore, the expression is equivalent to ( a && b ) && ( !c && d ).",
        explanationCN: "使用德摩根定律：1) !( !( a && b ) || ( c || !d )) = !(!( a && b )) && !(c || !d)，2) = (a && b) && (!c && d)。因此，表達式等價於 ( a && b ) && ( !c && d )。"
    },
    {
        id: 26,
        question: {
            text: "(AP Topic Question-11186)\n\nConsider the following code segment.",
            code: {
                content: `
if (false && true || false)
{
    if (false || true && false)
    {
        System.out.print("First");
    }
    else
    {
        System.out.print("Second");
    }
}
if (true || true && false)
{
    System.out.print("Third");
}
                `,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            {
                text: "A. First"
            },
            {
                text: "B. Second"
            },
            {
                text: "C. Third"
            },
            {
                text: "D. FirstThird"
            },
            {
                text: "E. SecondThird"
            }
        ],
        correctAnswer: 2,
        explanationEN: "Let's evaluate step by step: 1) First if condition: false && true = false, false || false = false, so first block is not executed, 2) Second if condition: true || (true && false) = true || false = true, so 'Third' is printed.",
        explanationCN: "讓我們逐步評估：1) 第一個 if 條件：false && true = false，false || false = false，所以第一個區塊不執行，2) 第二個 if 條件：true || (true && false) = true || false = true，所以輸出 'Third'。"
    },
    {
        id: 27,
        question: {
            text: "(AP Topic Question-11187)\n\nConsider the following code segment.",
            code: {
                content: `
int start = 4;
int end = 5;
boolean keepGoing = true;
if (start < end && keepGoing)
{
    if (end > 0)
    {
        start += 2;
        end++;
    }
    else
    {
        end += 3;
    }
}
if (start < end)
{
    if (end == 0)
    {
        end += 2;
        start++;
    }
    else
    {
        end += 4;
    }
}
                `,
                language: "java"
            }
        },
        code: "What is the value of end after the code segment is executed?",
        language: "java",
        options: [
            {
                text: "A. 5"
            },
            {
                text: "B. 6"
            },
            {
                text: "C. 9"
            },
            {
                text: "D. 10"
            },
            {
                text: "E. 16"
            }
        ],
        correctAnswer: 1,
        explanationEN: "Let's trace the code: 1) Initially start=4, end=5, keepGoing=true, 2) First if: 4<5 && true is true, 3) Nested if: 5>0 is true, so start=6, end=6, 4) Second if: 6<6 is false, so end stays 6, 5) Finally end=10 (6+4).",
        explanationCN: "讓我們追蹤代碼：1) 初始 start=4，end=5，keepGoing=true，2) 第一個 if：4<5 && true 為真，3) 嵌套 if：5>0 為真，所以 start=6，end=6，4) 第二個 if：6<6 為假，所以 end 保持為 6，5) 最後 end=10 (6+4)。"
    },
    {
        id: 28,
        question: {
            text: "(AP Topic Question-11188)\n\nConsider the following code segment.",
            code: {
                content: `
int x = 7;
int y = 4;
boolean a = false;
boolean b = false;
if (x > y)
{
    if (x % y >= 3)
    {
        a = true;
        x -= y;
    }
    else
    {
        x += y;
    }
}
if (x < y)
{
    if (y % x >= 3)
    {
        b = true;
        x -= y;
    }
    else
    {
        x += y;
    }
}
                `,
                language: "java"
            }
        },
        code: "What are the values of a, b, and x after the code segment has been executed?",
        language: "java",
        options: [
            { text: "a = true, b = true, x = -1" },
            { text: "a = true, b = false, x = 3" },
            { text: "a = true, b = false, x = 7" },
            { text: "a = false, b = true, x = 3" },
            { text: "a = false, b = false, x = 11" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's trace the code: 1) x=7, y=4, a=false, b=false initially, 2) x>y is true (7>4), 3) x%y=3 which is >= 3, so a=true and x=3 (7-4), 4) x<y is false (3 not < 4), so b stays false and x stays 3.",
        explanationCN: "讓我們追蹤代碼：1) 初始 x=7，y=4，a=false，b=false，2) x>y 為真 (7>4)，3) x%y=3 大於等於 3，所以 a=true 且 x=3 (7-4)，4) x<y 為假 (3 不小於 4)，所以 b 保持為 false 且 x 保持為 3。"
    },
    {
        id: 29,
        question: {
            text: "(2020 Practice Exam 1-11239)\n\nConsider the following code segment. Assume num is a properly declared and initialized int variable.",
            code: {
                content: `
if (num > 0)
{
    if (num % 2 == 0)
    {
        System.out.println("A");
    }
    else
    {
        System.out.println("B");
    }
}
                `,
                language: "java"
            }
        },
        code: "Which of the following best describes the result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. When num is a negative odd integer, B is printed; otherwise, A is printed." },
            { text: "B. When num is a negative even integer, B is printed; otherwise, nothing is printed." },
            { text: "C. When num is a positive even integer, A is printed; otherwise, B is printed." },
            { text: "D. When num is a positive even integer, A is printed; when num is a positive odd integer, B is printed; otherwise, nothing is printed." },
            { text: "E. When num is a positive odd integer, A is printed; when num is a positive even integer, B is printed; otherwise, nothing is printed." }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze: 1) First check if num > 0, if false nothing is printed, 2) If num > 0 and num is even (num % 2 == 0), prints 'A', 3) If num > 0 and num is odd, prints 'B'. Therefore, option D correctly describes all cases.",
        explanationCN: "讓我們分析：1) 首先檢查 num > 0，如果為假則不輸出任何內容，2) 如果 num > 0 且 num 為偶數 (num % 2 == 0)，輸出 'A'，3) 如果 num > 0 且 num 為奇數，輸出 'B'。因此，選項 D 正確描述了所有情況。"
    },
    {
        id: 30,
        question: {
            text: "(AP Exam-11301)\n\nAssume that a and b are variables of type int. The expression",
            code: {
                content: "!(a < b) && !(a > b)",
                language: "java"
            }
        },
        code: "is equivalent to which of the following?",
        language: "java",
        options: [
            { text: "A. true" },
            { text: "B. false" },
            { text: "C. a == b" },
            { text: "D. a != b" },
            { text: "E. !(a < b) && (a > b)" }
        ],
        correctAnswer: 2,
        explanationEN: "Using De Morgan's Laws: 1) !(a < b) means a >= b, 2) !(a > b) means a <= b, 3) When both conditions are true (a >= b AND a <= b), it means a must equal b. Therefore, the expression is equivalent to a == b.",
        explanationCN: "使用德摩根定律：1) !(a < b) 意味著 a >= b，2) !(a > b) 意味著 a <= b，3) 當兩個條件都為真時 (a >= b 且 a <= b)，這意味著 a 必須等於 b。因此，該表達式等價於 a == b。"
    },
    {
        id: 31,
        question: {
            text: "(AP Topic Question-10938)\n\nConsider the following Boolean expressions.",
            code: {
                content: `
I.
A && B

II.
!A && !B
                `,
                language: "java"
            }
        },
        code: "Which of the following best describes the relationship between values produced by expression I and expression II?",
        language: "java",
        options: [
            { text: "A. Expression I and expression II evaluate to different values for all values of A and B." },
            { text: "B. Expression I and expression II evaluate to the same value for all values of A and B." },
            { text: "C. Expression I and expression II evaluate to the same value only when A and B are the same." },
            { text: "D. Expression I and expression II evaluate to the same value only when A and B differ." },
            { text: "E. Expression I and expression II evaluate to the same value whenever A is true." }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze all cases: 1) When A=true, B=true: I=true, II=false, 2) When A=true, B=false: I=false, II=false, 3) When A=false, B=true: I=false, II=false, 4) When A=false, B=false: I=false, II=true. The expressions always evaluate to different values.",
        explanationCN: "讓我們分析所有情況：1) 當 A=true，B=true 時：I=true，II=false，2) 當 A=true，B=false 時：I=false，II=false，3) 當 A=false，B=true 時：I=false，II=false，4) 當 A=false，B=false 時：I=false，II=true。這些表達式總是得到不同的值。"
    },
    {
        id: 32,
        question: {
            text: "(AP Exam-10884)\n\nConsider the following method, between, which is intended to return true if x is between lower and upper, inclusive, and false otherwise.",
            code: {
                content: `
// precondition: lower <= upper
// postcondition: returns true if x is between lower and
//                upper, inclusive; otherwise, returns false
public boolean between(int x, int lower, int upper)
{
    /* missing code */
}
                `,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* missing code */ so that between will work as intended?",
        language: "java",
        options: [
            { text: "A. return (x <= lower) && (x >= upper);" },
            { text: "B. return (x <= lower) || (x >= upper);" },
            { text: "C. return lower <= x <= upper;" },
            { text: "D. return (x >= lower) && (x <= upper);" },
            { text: "E. return (x >= lower) || (x <= upper);" }
        ],
        correctAnswer: 3,
        explanationEN: "To check if x is between lower and upper inclusive, we need to check if x is greater than or equal to lower AND less than or equal to upper. Option D correctly implements this logic with (x >= lower) && (x <= upper).",
        explanationCN: "要檢查 x 是否在 lower 和 upper 之間（包含邊界），我們需要檢查 x 是否大於等於 lower 且小於等於 upper。選項 D 使用 (x >= lower) && (x <= upper) 正確實現了這個邏輯。"
    },
    {
        id: 33,
        question: {
            text: "(AP Exam-10954)\n\nConsider the following code segment.",
            code: {
                content: `
int x = /* some integer value */ ;
int y = /* some integer value */ ;

boolean result = (x < y);

result = ( (x >= y) && !result );
                `,
                language: "java"
            }
        },
        code: "Which of the following best describes the conditions under which the value of result will be true after the code segment is executed?",
        language: "java",
        options: [
            { text: "A. Only when x < y" },
            { text: "B. Only when x >= y" },
            { text: "C. Only when x and y are equal" },
            { text: "D. The value will always be true." },
            { text: "E. The value will never be true." }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze: 1) First, result = (x < y), 2) Then result = ((x >= y) && !(x < y)), 3) Note that !(x < y) is equivalent to (x >= y), 4) So result = ((x >= y) && (x >= y)), which simplifies to just (x >= y). Therefore, result will be true only when x >= y.",
        explanationCN: "讓我們分析：1) 首先，result = (x < y)，2) 然後 result = ((x >= y) && !(x < y))，3) 注意 !(x < y) 等價於 (x >= y)，4) 所以 result = ((x >= y) && (x >= y))，簡化為 (x >= y)。因此，result 只有在 x >= y 時才為真。"
    },
    {
        id: 34,
        question: {
            text: "(2015 Practice Exam-10952)\n\nAssume that x and y are boolean variables and have been properly initialized.",
            code: {
                content: "(x || y) && x",
                language: "java"
            }
        },
        code: "Which of the following always evaluates to the same value as the expression above?",
        language: "java",
        options: [
            { text: "A. x" },
            { text: "B. y" },
            { text: "C. x && y" },
            { text: "D. x || y" },
            { text: "E. x != y" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's analyze all cases: 1) When x=true, y=true: (true || true) && true = true && true = true, 2) When x=true, y=false: (true || false) && true = true && true = true, 3) When x=false, y=true: (false || true) && false = true && false = false, 4) When x=false, y=false: (false || false) && false = false && false = false. This matches the truth table for x.",
        explanationCN: "讓我們分析所有情況：1) 當 x=true，y=true 時：(true || true) && true = true && true = true，2) 當 x=true，y=false 時：(true || false) && true = true && true = true，3) 當 x=false，y=true 時：(false || true) && false = true && false = false，4) 當 x=false，y=false 時：(false || false) && false = false && false = false。這與 x 的真值表相匹配。"
    },
    {
        id: 35,
        question: {
            text: "(AP Exam-10955)\n\nAssume that a, b, and c are variables of type int. Consider the following three conditions.",
            code: {
                content: `
I. (a == b) && (a == c) && (b == c)

II. (a == b) || (a == c) || (b == c)

III. ((a - b) * (a - c) * (b - c)) == 0
                `,
                language: "java"
            }
        },
        code: "Assume that subtraction and multiplication never overflow. Which of the conditions above is (are) always true if at least two of a, b, and c are equal?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and II" },
            { text: "E. II and III" }
        ],
        correctAnswer: 4,
        explanationEN: "Let's analyze: 1) Condition I is true only when all three values are equal, 2) Condition II is true when any two values are equal (or all three), 3) Condition III is true when any two values are equal because their difference will be 0, making the product 0. Therefore, both II and III are always true when at least two values are equal.",
        explanationCN: "讓我們分析：1) 條件 I 只有在三個值都相等時才為真，2) 條件 II 在任意兩個值相等時（或全部相等時）為真，3) 條件 III 在任意兩個值相等時為真，因為它們的差為 0，使得乘積為 0。因此，當至少有兩個值相等時，II 和 III 都一定為真。"
    },
    {
        id: 36,
        question: {
            text: "(AP Exam-10964)\n\nConsider the following method.",
            code: {
                content: `
public void conditionalTest(int a, int b)
{
    if ((a > 0) && (b > 0))
    {
        if (a > b)
            System.out.println("A");
        else
            System.out.println("B");
    }
    else if ((b < 0) || (a < 0))
        System.out.println("C");
    else
        System.out.println("D");
}
                `,
                language: "java"
            }
        },
        code: "What is printed as a result of the call conditionalTest(3, -2)?",
        language: "java",
        options: [
            { text: "A. A" },
            { text: "B. B" },
            { text: "C. C" },
            { text: "D. D" },
            { text: "E. Nothing is printed." }
        ],
        correctAnswer: 2,
        explanationEN: "Let's trace the code: 1) First if: (3 > 0) && (-2 > 0) is false because -2 is not > 0, 2) Second if: (-2 < 0) || (3 < 0) is true because -2 < 0, 3) Therefore 'C' is printed.",
        explanationCN: "讓我們追蹤代碼：1) 第一個 if：(3 > 0) && (-2 > 0) 為假，因為 -2 不大於 0，2) 第二個 if：(-2 < 0) || (3 < 0) 為真，因為 -2 < 0，3) 因此輸出 'C'。"
    },
    {
        id: 37,
        question: {
            text: "(2020 Practice Exam 1-11096)\n\nConsider the following code segment.",
            code: {
                content: `
int num = /* initial value not shown */;
boolean b1 = true;
if (num > 0)
{
    if (num >= 100)
    {
        b1 = false;
    }
}
else
{
    if (num >= -100)
    {
        b1 = false;
    }
}
                `,
                language: "java"
            }
        },
        code: "Which of the following statements assigns the same value to b2 as the code segment assigns to b1 for all values of num?",
        language: "java",
        options: [
            { text: "A. boolean b2 = (num > -100) && (num < 100);" },
            { text: "B. boolean b2 = (num > -100) || (num < 100);" },
            { text: "C. boolean b2 = (num < -100) || (num > 100);" },
            { text: "D. boolean b2 = (num < -100) && (num > 0 || num < 100);" },
            { text: "E. boolean b2 = (num < -100) || (num > 0 && num < 100);" }
        ],
        correctAnswer: 4,
        explanationEN: "Let's analyze when b1 remains true: 1) When num > 0: b1 stays true only if num < 100, 2) When num ≤ 0: b1 stays true only if num < -100. Therefore, b1 is true when (num < -100) OR (num > 0 AND num < 100), which matches option E.",
        explanationCN: "讓我們分析 b1 保持為 true 的情況：1) 當 num > 0 時：只有在 num < 100 時 b1 才保持為 true，2) 當 num ≤ 0 時：只有在 num < -100 時 b1 才保持為 true。因此，b1 在 (num < -100) 或 (num > 0 且 num < 100) 時為 true，這與選項 E 相符。"
    },
    {
        id: 38,
        question: {
            text: "(AP Exam-11103)\n\nConsider the following method.",
            code: {
                content: `
public String inRangeMessage(int value)
{
    if (value < 0 || value > 100)
        return "Not in range";
    else
        return "In range";
}

Consider the following code segments that could be used to replace the body of inRangeMessage.

I.    if (value < 0)
      {
          if (value > 100)
              return "Not in range";
          else
              return "In range";
      }
      else
          return "In range";

II.   if (value < 0)
          return "Not in range";
      else if (value > 100)
          return "Not in range";
      else
          return "In range";

III.  if (value >= 0)
          return "In range";
      else if (value <= 100)
          return "In range";
      else
          return "Not in range";
                `,
                language: "java"
            }
        },
        code: "Which of the replacements will have the same behavior as the original version of inRangeMessage?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and III" },
            { text: "E. II and III" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze each replacement: 1) I is incorrect because the nested if (value > 100) is unreachable when value < 0, 2) II is correct as it checks both conditions separately and returns the same results as the original, 3) III is incorrect because it returns 'In range' for all values <= 100, even negative ones. Therefore, only II has the same behavior as the original.",
        explanationCN: "讓我們分析每個替代方案：1) I 不正確，因為當 value < 0 時，嵌套的 if (value > 100) 永遠不會被執行，2) II 正確，因為它分別檢查兩個條件並返回與原始版本相同的結果，3) III 不正確，因為它對所有 <= 100 的值都返回 'In range'，包括負數。因此，只有 II 與原始版本具有相同的行為。"
    },
    {
        id: 39,
        question: {
            text: "(2014 Practice Exam-11323)\n\nConsider the following code segment.",
            code: {
                content: `
int x = 7;
int y = 3;
if ((x < 10) && (y < 0))
    System.out.println("Value is: " + x * y);
else
    System.out.println("Value is: " + x / y);
                `,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. Value is: 21" },
            { text: "B. Value is: 2.333333" },
            { text: "C. Value is: 2" },
            { text: "D. Value is: 0" },
            { text: "E. Value is: 1" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's evaluate: 1) (x < 10) is true since 7 < 10, 2) (y < 0) is false since 3 is not < 0, 3) Since the if condition is false (true && false = false), the else block executes, 4) x / y = 7 / 3 = 2 (integer division in Java), so 'Value is: 2' is printed.",
        explanationCN: "讓我們評估：1) (x < 10) 為真因為 7 < 10，2) (y < 0) 為假因為 3 不小於 0，3) 由於 if 條件為假 (true && false = false)，執行 else 區塊，4) x / y = 7 / 3 = 2（Java 中的整數除法），所以輸出 'Value is: 2'。"
    },
    {
        id: 40,
        question: {
            text: "(AP Exam-11338)\n\nConsider the following method.",
            code: {
                content: `
public int someCode(int a, int b, int c)
{
    if ((a < b) && (b < c))
        return a;
    if ((a >= b) && (b >= c))
        return b;
    if ((a == b) || (a == c) || (b == c))
        return c;
}
                `,
                language: "java"
            }
        },
        code: "Which of the following best describes why this method does not compile?",
        language: "java",
        options: [
            { text: "A. The reserved word return cannot be used in the body of an if statement." },
            { text: "B. It is possible to reach the end of the method without returning a value." },
            { text: "C. The if statements must have else parts when they contain return statements." },
            { text: "D. Methods cannot have multiple return statements." },
            { text: "E. The third if statement is not reachable." }
        ],
        correctAnswer: 1,
        explanationEN: "The issue is that if none of the if conditions are true, the method will reach its end without returning a value. Since the method is declared to return an int, this is a compilation error. All paths in a non-void method must return a value.",
        explanationCN: "問題在於如果所有的 if 條件都為假，方法會在沒有返回值的情況下結束。由於該方法被聲明為返回 int 類型，這會導致編譯錯誤。非 void 方法的所有執行路徑都必須返回一個值。"
    },
    {
        id: 41,
        question: {
            text: "(AP Course and Exam Description-10949)\n\nWhich of the following best describes the value of the Boolean expression shown below?",
            code: {
                content: "a && !(b || a)",
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "A. The value is always true." },
            { text: "B. The value is always false." },
            { text: "C. The value is true when a has the value false, and is false otherwise." },
            { text: "D. The value is true when b has the value false, and is false otherwise." },
            { text: "E. The value is true when either a or b has the value true, and is false otherwise." }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze: 1) If a is false, then a && anything is false, 2) If a is true, then (b || a) is true (since a is true), so !(b || a) is false, and true && false is false. Therefore, the expression is always false regardless of the values of a and b.",
        explanationCN: "讓我們分析：1) 如果 a 為假，那麼 a && 任何值 都是假，2) 如果 a 為真，那麼 (b || a) 為真（因為 a 為真），所以 !(b || a) 為假，而 true && false 為假。因此，無論 a 和 b 的值如何，表達式總是為假。"
    },
    {
        id: 42,
        question: {
            text: "(2015 Practice Exam-10950)\n\nAssume that x and y are boolean variables and have been properly initialized.",
            code: {
                content: "(x && y) && !(x || y)",
                language: "java"
            }
        },
        code: "Which of the following best describes the result of evaluating the expression above?",
        language: "java",
        options: [
            { text: "A. true always" },
            { text: "B. false always" },
            { text: "C. true only when x is true and y is true" },
            { text: "D. true only when x and y have the same value" },
            { text: "E. true only when x and y have different values" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze: 1) If either x or y is false, then (x && y) is false, making the whole expression false, 2) If both x and y are true, then (x || y) is true, so !(x || y) is false, making the whole expression false. Therefore, the expression is always false.",
        explanationCN: "讓我們分析：1) 如果 x 或 y 任一為假，則 (x && y) 為假，使整個表達式為假，2) 如果 x 和 y 都為真，則 (x || y) 為真，所以 !(x || y) 為假，使整個表達式為假。因此，該表達式總是為假。"
    },
    {
        id: 43,
        question: {
            text: "(2014 Practice Exam-10951)\n\nAssume that x and y have been declared and initialized with int values. Consider the following Java expression.",
            code: {
                content: "(y > 10000) || (x > 1000 && x < 1500)",
                language: "java"
            }
        },
        code: "Which of the following is equivalent to the expression given above?",
        language: "java",
        options: [
            { text: "A. (y > 10000 || x > 1000) && (y > 10000 || x < 1500)" },
            { text: "B. (y > 10000 || x > 1000) || (y > 10000 || x < 1500)" },
            { text: "C. (y > 10000) && (x > 1000 || x < 1500)" },
            { text: "D. (y > 10000 && x > 1000) || (y > 10000 && x < 1500)" },
            { text: "E. (y > 10000 && x > 1000) && (y > 10000 && x < 1500)" }
        ],
        correctAnswer: 0,
        explanationEN: "Using the distributive law: (y > 10000) || (x > 1000 && x < 1500) is equivalent to (y > 10000 || x > 1000) && (y > 10000 || x < 1500). This matches option A.",
        explanationCN: "使用分配律：(y > 10000) || (x > 1000 && x < 1500) 等價於 (y > 10000 || x > 1000) && (y > 10000 || x < 1500)。這與選項 A 相符。"
    },
    {
        id: 44,
        question: {
            text: "(AP Exam-10953)\n\nAssume that x and y are boolean variables and have been properly initialized.",
            code: {
                content: "(x && y) || !(x && y)",
                language: "java"
            }
        },
        code: "The result of evaluating the expression above is best described as",
        language: "java",
        options: [
            { text: "A. always true" },
            { text: "B. always false" },
            { text: "C. true only when x is true and y is true" },
            { text: "D. true only when x and y have the same value" },
            { text: "E. true only when x and y have different values" }
        ],
        correctAnswer: 0,
        explanationEN: "This is a tautology of the form P || !P, where P is (x && y). Any expression of the form P || !P is always true, regardless of the value of P. Therefore, this expression is always true regardless of the values of x and y.",
        explanationCN: "這是一個形如 P || !P 的重言式，其中 P 是 (x && y)。任何形如 P || !P 的表達式都永遠為真，不管 P 的值是什麼。因此，這個表達式永遠為真，不管 x 和 y 的值是什麼。"
    },
    {
        id: 45,
        question: {
            text: "(2014 Practice Exam-10956)\n\nAssume that a and b have been defined and initialized as int values. The expression",
            code: {
                content: "!(!( a != b)) && (b > 7)",
                language: "java"
            }
        },
        code: "is equivalent to which of the following?",
        language: "java",
        options: [
            { text: "A. (a != b) || (b < 7)" },
            { text: "B. (a != b) || (b <= 7)" },
            { text: "C. (a == b) || (b <= 7)" },
            { text: "D. (a != b) && (b <= 7)" },
            { text: "E. (a == b) && (b > 7)" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's simplify: 1) !(!( a != b)) simplifies to (a != b), 2) The original expression becomes (a != b) && (b > 7), which matches option B.",
        explanationCN: "讓我們簡化：1) !(!( a != b)) 簡化為 (a != b)，2) 原始表達式變為 (a != b) && (b > 7)，這與選項 B 相符。"
    },
    {
        id: 46,
        question: {
            text: "(AP Topic Question-10856)\n\nConsider the following code segment.",
            code: {
                content: `
String str1 = new String("Advanced Placement");
String str2 = new String("Advanced Placement");
if (str1.equals(str2) && str1 == str2)
{
    System.out.println("A");
}
else if (str1.equals(str2) && str1 != str2)
{
    System.out.println("B");
}
else if (!str1.equals(str2) && str1 == str2)
{
    System.out.println("C");
}
else if (!str1.equals(str2) && str1 != str2)
{
    System.out.println("D");
}
                `,
                language: "java"
            }
        },
        code: "What, if anything, is printed when the code segment is executed?",
        language: "java",
        options: [
            { text: "A. A" },
            { text: "B. B" },
            { text: "C. C" },
            { text: "D. D" },
            { text: "E. Nothing is printed." }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze: 1) str1 and str2 are different objects (created with new) but contain the same string, 2) str1.equals(str2) is true because they contain the same string, 3) str1 == str2 is false because they are different objects, 4) Therefore, the second condition (str1.equals(str2) && str1 != str2) is true, and 'B' is printed.",
        explanationCN: "讓我們分析：1) str1 和 str2 是不同的對象（用 new 創建）但包含相同的字符串，2) str1.equals(str2) 為真因為它們包含相同的字符串，3) str1 == str2 為假因為它們是不同的對象，4) 因此，第二個條件 (str1.equals(str2) && str1 != str2) 為真，輸出 'B'。"
    },
    {
        id: 47,
        question: {
            text: "(AP Exam-10912)\n\nConsider the following class declaration",
            code: {
                content: `
public class SomeClass
{
    private int num;
    
    public SomeClass(int n)
    {
        num = n;
    }
    
    public void increment(int more)
    {
        num = num + more;
    }
    
    public int getNum()
    {
        return num;
    }
}
                `,
                language: "java"
            }
        },
        code: "The following code segment appears in another class.\n\nSomeClass one = new SomeClass(100);\nSomeClass two = new SomeClass(100);\nSomeClass three = one;\n\none.increment(200);\n\nSystem.out.println(one.getNum() + \" \" + two.getNum() + \" \" + three.getNum());",
        language: "java",
        options: [
            { text: "A. 100 100 100" },
            { text: "B. 100 100 300" },
            { text: "C. 300 100 100" },
            { text: "D. 300 100 300" },
            { text: "E. 300 300 300" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze the code: 1) 'one' and 'two' are created as separate objects with num=100, 2) 'three' is assigned to reference the same object as 'one', 3) When one.increment(200) is called, it adds 200 to num making it 300, 4) Since 'three' references the same object as 'one', it sees the same value (300), 5) 'two' is a separate object, so its num remains 100. Therefore, the output is '300 100 100'.",
        explanationCN: "讓我們分析代碼：1) 'one' 和 'two' 被創建為獨立的對象，num=100，2) 'three' 被賦值為引用與 'one' 相同的對象，3) 當調用 one.increment(200) 時，它將 num 增加 200 變成 300，4) 由於 'three' 引用與 'one' 相同的對象，所以它看到相同的值（300），5) 'two' 是一個獨立的對象，所以它的 num 保持為 100。因此，輸出為 '300 100 100'。"
    },
    {
        id: 48,
        question: {
            text: "(AP Exam-10945)\n\nAssume obj1 and obj2 are object references. Which of the following best describes when the expression obj1 == obj2 is true?",
            code: {
                content: "",
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "A. When obj1 and obj2 are defined within the same method" },
            { text: "B. When obj1 and obj2 are instances of the same class" },
            { text: "C. When obj1 and obj2 refer to objects that contain the same data" },
            { text: "D. When obj1 and obj2 refer to the same object" },
            { text: "E. When obj1 and obj2 are private class variables defined in the same class" }
        ],
        correctAnswer: 3,
        explanationEN: "In Java, the == operator compares object references, not the content of objects. It returns true only when both references point to the exact same object in memory. Even if two objects contain identical data (which would make .equals() return true), == will return false unless they are the same object.",
        explanationCN: "在 Java 中，== 運算符比較的是對象引用，而不是對象的內容。它只有在兩個引用指向內存中完全相同的對象時才返回 true。即使兩個對象包含相同的數據（這會使 .equals() 返回 true），== 也只會在它們是同一個對象時才返回 true。"
    },
    {
        id: 49,
        question: {
            text: "(AP Topic Question-11000)\n\nConsider the following code segment.",
            code: {
                content: `
String alpha = new String("APCS");
String beta = new String("APCS");
String delta = alpha;

System.out.println(alpha.equals(beta));
System.out.println(alpha == beta);
System.out.println(alpha == delta);
                `,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "false\nfalse\nfalse" },
            { text: "false\nfalse\ntrue" },
            { text: "true\nfalse\nfalse" },
            { text: "true\nfalse\ntrue" },
            { text: "true\ntrue\ntrue" }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze each line: 1) alpha.equals(beta) compares the content of the strings, which are both 'APCS', so it prints true, 2) alpha == beta compares object references, and since they are different objects (created with new), it prints false, 3) alpha == delta compares references, and since delta was assigned alpha's reference, they point to the same object, so it prints true.",
        explanationCN: "讓我們分析每一行：1) alpha.equals(beta) 比較字符串的內容，兩者都是 'APCS'，所以輸出 true，2) alpha == beta 比較對象引用，由於它們是不同的對象（用 new 創建），所以輸出 false，3) alpha == delta 比較引用，由於 delta 被賦值為 alpha 的引用，它們指向相同的對象，所以輸出 true。"
    },
    {
        id: 50,
        question: {
            text: "(AP Topic Question-11001)\n\nAssume that object references one, two, and three have been declared and instantiated to be of the same type. Assume also that one == two evaluates to true and that two.equals(three) evaluates to false.",
            code: {
                content: `
if (one.equals(two))
{
    System.out.println("one dot equals two");
}

if (one.equals(three))
{
    System.out.println("one dot equals three");
}

if (two == three)
{
    System.out.println("two equals equals three");
}
                `,
                language: "java"
            }
        },
        code: "What, if anything, is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "one dot equals two" },
            { text: "one dot equals two\none dot equals three" },
            { text: "one dot equals two\ntwo equals equals three" },
            { text: "one dot equals three\ntwo equals equals three" },
            { text: "Nothing is printed." }
        ],
        correctAnswer: 0,
        explanationEN: "Let's analyze: 1) Since one == two is true, they must be the same object, so one.equals(two) must also be true, printing 'one dot equals two', 2) Since two.equals(three) is false and two and three are different objects (as we know two == one), one.equals(three) must also be false, so nothing is printed for the second if, 3) Since two and three are different objects, two == three is false, so nothing is printed for the third if.",
        explanationCN: "讓我們分析：1) 因為 one == two 為真，它們必須是同一個對象，所以 one.equals(two) 也必須為真，輸出 'one dot equals two'，2) 因為 two.equals(three) 為假，且 two 和 three 是不同的對象（因為我們知道 two == one），所以 one.equals(three) 也必須為假，因此第二個 if 不會輸出任何內容，3) 因為 two 和 three 是不同的對象，two == three 為假，所以第三個 if 不會輸出任何內容。"
    },
    {
        id: 51,
        question: {
            text: "Consider the following class definitions.",
            code: {
                content: `
public class Person
{
    private String name;
    public String getName()
    { return name; }
}

public class Book
{
    private String author;
    private String title;
    private Person borrower;
    public Book(String a, String t)
    {
        author = a;
        title = t;
        borrower = null;
    }
    public void printDetails()
    {
        System.out.print("Author: " + author
                + " Title: " + title);
        if ( /* missing condition */ )
        {
            System.out.println(" Borrower: "
                + borrower.getName());
        }
    }
    public void setBorrower(Person b)
    { borrower = b; }
}`,
                language: "java"
            }
        },
        code: `
//Which of the following can replace /* missing condition */ so that the printDetails method CANNOT cause a run-time error?
I. !borrower.equals(null)
II. borrower != null
III. borrower.getName() != null
        `
        ,
        language: "java",
        options: [
            { text: "I only" },
            { text: "II only" },
            { text: "III only" },
            { text: "I and II" },
            { text: "II and III" }
        ],
        correctAnswer: 1,
        explanationEN: "The condition borrower.getName() != null is the safest way to check if the getName() method will return a valid value, preventing any potential NullPointerException when displaying the borrower's name.",
        explanationCN: "條件 borrower.getName() != null 是檢查 getName() 方法是否會返回有效值的最安全方式，可以防止在顯示借閱者姓名時發生任何潛在的 NullPointerException。"
    }
]
