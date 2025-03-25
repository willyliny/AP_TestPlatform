import { QuizQuestion } from "../commonTypes";

export const TdChapter4Questions: QuizQuestion[] = [
    {
        id: 1,
        question: {
            text: "(AP Topic Question-11002)\n\nConsider the following code segment.",
            code: {
                content: `
int count = 5;
while(count < 100)
{
    count = count * 2;
}
count = count + 1;
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "A. 100" },
            { text: "B. 101" },
            { text: "C. 160" },
            { text: "D. 161" },
            { text: "E. 321" }
        ],
        correctAnswer: 3,
        explanationEN: "Let's trace the code: 1) count starts at 5, 2) First iteration: 5*2=10, 3) Second iteration: 10*2=20, 4) Third iteration: 20*2=40, 5) Fourth iteration: 40*2=80, 6) Fifth iteration: 80*2=160, 7) Loop ends as 160 >= 100, 8) count = 160 + 1 = 161",
        explanationCN: "讓我們追蹤代碼：1) count 初始值為 5，2) 第一次迭代：5*2=10，3) 第二次迭代：10*2=20，4) 第三次迭代：20*2=40，5) 第四次迭代：40*2=80，6) 第五次迭代：80*2=160，7) 循環結束因為 160 >= 100，8) count = 160 + 1 = 161"
    },
    {
        id: 2,
        question: {
            text: "(AP Topic Question-11111)\n\nThe following method is intended to print the number of digits in the parameter num.",
            code: {
                content: `
public int numDigits(int num)
{
    int count = 0;
    while ( /* missing condition */ )
    {
        count++;
        num = num / 10;
    }
    return count;
}
                `,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* missing condition */ so that the method will work as intended?",
        language: "java",
        options: [
            { text: "A. count != 0" },
            { text: "B. count > 0" },
            { text: "C. num >= 0" },
            { text: "D. num != 0" },
            { text: "E. num == 0" }
        ],
        correctAnswer: 3,
        explanationEN: "To count digits, we need to keep dividing by 10 until no digits remain (num becomes 0). The condition num != 0 correctly continues the loop as long as there are digits left to count.",
        explanationCN: "要計算位數，我們需要不斷除以 10 直到沒有數字剩餘（num 變為 0）。條件 num != 0 正確地在還有數字需要計算時繼續循環。"
    },
    {
        id: 3,
        question: {
            text: "(AP Topic Question-11133)\n\nConsider the following code segment, which is intended to print the sum of all the odd integers from 0 up to and including 101.",
            code: {
                content: `
int r = 0;
int sum = 0;
/* missing loop header */
{
    if(r % 2 == 1)
    {
        sum += r;
    }
    r++;
}
System.out.println(sum);
                `,
                language: "java"
            }
        },
        code: "Which of the following could replace /* missing loop header */ to ensure that the code segment will work as intended?",
        language: "java",
        options: [
            { text: "A. while (r <= 100)" },
            { text: "B. while (sum <= 100)" },
            { text: "C. while (r < 101)" },
            { text: "D. while (r <= 101)" },
            { text: "E. while (sum <= 101)" }
        ],
        correctAnswer: 3,
        explanationEN: "Since we need to include 101 in the sum, we need r to go up to and include 101. The condition r <= 101 correctly implements this requirement.",
        explanationCN: "由於我們需要將 101 包含在總和中，我們需要 r 上升到並包含 101。條件 r <= 101 正確實現了這個要求。"
    },
    {
        id: 4,
        question: {
            text: "(AP Topic Question-11156)\n\nConsider the following code segment.",
            code: {
                content: `
int k = 0;
/* missing loop header */
{
    k++;
    System.out.print(k + " ");
}
                `,
                language: "java"
            }
        },
        code: "Which of the following can be used as a replacement for /* missing loop header */ so that the code segment prints out the string \"1 2 3 4 \"?",
        language: "java",
        options: [
            { text: "A. while (k < 3)" },
            { text: "B. while (k < 4)" },
            { text: "C. while (k < 5)" },
            { text: "D. while (k <= 4)" },
            { text: "E. while (k <= 5)" }
        ],
        correctAnswer: 1,
        explanationEN: "To print numbers 1 through 4, we need k to start at 0 and increment until it reaches 4. The condition k < 4 allows the loop to run exactly 4 times, printing 1, 2, 3, and 4.",
        explanationCN: "要打印 1 到 4 的數字，我們需要 k 從 0 開始並增加直到達到 4。條件 k < 4 允許循環正好運行 4 次，打印 1、2、3 和 4。"
    },
    {
        id: 5,
        question: {
            text: "(AP Topic Question-11242)\n\nConsider the following code segment.",
            code: {
                content: `
int num = 1;
while(num < 5)
{
    System.out.print("A");
    num += 2;
}
                `,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A" },
            { text: "B" },
            { text: "C" },
            { text: "D" },
            { text: "E" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's trace the loop: 1) First iteration: num=1, prints 'A', num becomes 3, 2) Second iteration: num=3, prints 'A', num becomes 5, 3) Loop ends as 5 is not < 5. Total output is 'AA'.",
        explanationCN: "讓我們追蹤循環：1) 第一次迭代：num=1，打印 'A'，num 變為 3，2) 第二次迭代：num=3，打印 'A'，num 變為 5，3) 循環結束因為 5 不小於 5。總輸出為 'AA'。"
    },
    {
        id: 6,
        question: {
            text: "(AP Topic Question-10972)\n\nConsider the following code segment.",
            code: {
                content: `
int num = 1;
int count = 0;
while(num <= 10)
{
    if(num % 2 == 0 && num % 3 == 0)
    {
        count++;
    }
    num++;
}
                `,
                language: "java"
            }
        },
        code: "What value is stored in the variable count as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 1" },
            { text: "B. 3" },
            { text: "C. 5" },
            { text: "D. 7" },
            { text: "E. 8" }
        ],
        correctAnswer: 0,
        explanationEN: "The code counts numbers from 1 to 10 that are divisible by both 2 and 3. A number divisible by both 2 and 3 must be divisible by 6. In the range 1-10, only 6 satisfies this condition, so count will be 1.",
        explanationCN: "代碼計算 1 到 10 中能同時被 2 和 3 整除的數字。一個同時能被 2 和 3 整除的數必須能被 6 整除。在 1-10 範圍內，只有 6 滿足這個條件，所以 count 將為 1。"
    },
    {
        id: 7,
        question: {
            text: "(Previous Practice Question-11113)\n\nConsider the following method.",
            code: {
                content: `
public int mystery(int num)
{
    int x = num;
    while(x > 0)
    {
        if(x / 10 % 2 == 0)
            return x;
        x = x / 10;
    }
    return x;
}
                `,
                language: "java"
            }
        },
        code: "What value is returned as a result of the call mystery(1034)?",
        language: "java",
        options: [
            { text: "A. 4" },
            { text: "B. 10" },
            { text: "C. 34" },
            { text: "D. 103" },
            { text: "E. 1034" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's trace mystery(1034): 1) x=1034, 1034/10=103, 103%2=1, continue, 2) x=103, 103/10=10, 10%2=0, return 103, 3) Therefore, the method returns 34.",
        explanationCN: "讓我們追蹤 mystery(1034)：1) x=1034，1034/10=103，103%2=1，繼續，2) x=103，103/10=10，10%2=0，返回 103，3) 因此，該方法返回 34。"
    },
    {
        id: 8,
        question: {
            text: "(AP Exam-10960)\n\nConsider the following code segment. The code is intended to read nonnegative numbers and compute their product until a negative number is read; however, it does not work as intended. (Assume that the readInt method correctly reads the next number from the input stream.)",
            code: {
                content: `
int k = 0;
int prod = 1;
while(k >= 0)
{
    System.out.print("enter a number: ");
    k = readInt(); // readInt reads the next number from input
    prod = prod * k;
}
System.out.println("product: " + prod);
                `,
                language: "java"
            }
        },
        code: "Which of the following best describes the error in the program?",
        language: "java",
        options: [
            { text: "A. The variable prod is incorrectly initialized." },
            { text: "B. The while condition always evaluates to false." },
            { text: "C. The while condition always evaluates to true." },
            { text: "D. The negative number entered to signal no more input is included in the product." },
            { text: "E. If the user enters a zero, the computation of the product will be terminated prematurely." }
        ],
        correctAnswer: 3,
        explanationEN: "The error is that the program multiplies k by prod before checking if k is negative. This means the negative number used to end input is included in the product, which is not intended.",
        explanationCN: "錯誤在於程序在檢查 k 是否為負數之前就將 k 乘以 prod。這意味著用於結束輸入的負數被包含在乘積中，這不是預期的行為。"
    },
    {
        id: 9,
        question: {
            text: "(AP Exam-11040)\n\nConsider the following code segment.",
            code: {
                content: `
int value = 15;
while(value < 28)
{
    System.out.println(value);
    value++;
}
                `,
                language: "java"
            }
        },
        code: "What are the first and last numbers output by the code segment?",
        language: "java",
        options: [
            { text: "First: 15, Last: 27" },
            { text: "First: 15, Last: 28" },
            { text: "First: 16, Last: 27" },
            { text: "First: 16, Last: 28" },
            { text: "First: 16, Last: 29" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's trace the loop: 1) First number printed is 15, 2) Loop continues while value < 28, incrementing by 1 each time, 3) Last number printed will be 27, as 28 would not satisfy the condition value < 28.",
        explanationCN: "讓我們追蹤循環：1) 第一個打印的數字是 15，2) 當 value < 28 時循環繼續，每次加 1，3) 最後打印的數字將是 27，因為 28 不滿足條件 value < 28。"
    },
    {
        id: 10,
        question: {
            text: "(AP Exam-11131)\n\nConsider the following code segment.",
            code: {
                content: `
int k = 0;
while(k < 10)
{
    System.out.print((k % 3) + " ");
    if((k % 3) == 0)
        k = k + 2;
    else
        k++;
}
                `,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 0 2 1 0 2" },
            { text: "B. 0 2 0 2 0 2" },
            { text: "C. 0 2 1 0 2 1 0" },
            { text: "D. 0 2 0 2 0 2 0" },
            { text: "E. 0 1 2 1 2 1 2" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's trace the loop: 1) k=0: prints 0, k becomes 2, 2) k=2: prints 2, k becomes 3, 3) k=3: prints 0, k becomes 5, 4) k=5: prints 2, k becomes 6, 5) k=6: prints 0, k becomes 8, 6) k=8: prints 2, k becomes 9, 7) Loop ends as 9 is not < 10. Output is '0 2 1 0 2'.",
        explanationCN: "讓我們追蹤循環：1) k=0：打印 0，k 變為 2，2) k=2：打印 2，k 變為 3，3) k=3：打印 0，k 變為 5，4) k=5：打印 2，k 變為 6，5) k=6：打印 0，k 變為 8，6) k=8：打印 2，k 變為 9，7) 循環結束因為 9 不小於 10。輸出為 '0 2 1 0 2'。"
    },
    {
        id: 11,
        question: {
            text: "(2015 Practice Exam-11135)\n\nConsider the following code segment.\n\nThe following conditions have been proposed to replace /* condition */ in the code segment.\n\nI. x < 0\nII. x <= 1\nIII. x < 10\n\nFor which of the conditions will nothing be printed?",
            code: {
                content: `
int x = 1;
while ( /* condition */ )
{
    if (x % 2 == 0)
    {
        System.out.print(x + " ");
    }
    x = x + 2;
}   

`,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "I only" },
            { text: "II only" },
            { text: "I and II only" },
            { text: "I and III only" },
            { text: "I, II, and III" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze each condition:\nI. x < 0: Nothing will be printed because x starts at 1 and increases.\nII. x <= 1: Nothing will be printed because x starts at 1 and immediately becomes 3.\nIII. x < 10: Will print even numbers (2, 4, 6, 8) before x becomes 11.\nTherefore, both I and II will result in nothing being printed."
    },
    {
        id: 12,
        question: {
            text: "(AP Exam-11136)\n\nConsider the following code segment.\n\nWhat is printed as a result of executing the code segment?",
            code: {
                content: `
int a = 24;
int b = 30;
while(b != 0)
{
    int r = a % b;
    a = b;
    b = r;
}
System.out.println(a);`,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "0" },
            { text: "6" },
            { text: "12" },
            { text: "24" },
            { text: "30" }
        ],
        correctAnswer: 1,
        explanationEN: "This code implements the Euclidean algorithm to find the GCD (Greatest Common Divisor) of 24 and 30.\nStep by step:\n1. a=24, b=30: r=24%30=24\n2. a=30, b=24: r=30%24=6\n3. a=24, b=6: r=24%6=0\n4. a=6, b=0: loop ends\nTherefore, 6 is printed."
    },
    {
        id: 13,
        question: {
            text: "(2020 Practice Exam 1-11137)\n\nConsider the following code segment. Assume that num3 > num2 > 0.\n\nWhich of the following best describes the contents of num1 as a result of executing the code segment?",
            code: {
                content: `
int num1 = 0;
int num2 = /* initial value not shown */;
int num3 = /* initial value not shown */;
while(num2 < num3)
{
    num1 += num2;
    num2++;
}`,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "The product of num2 and num3" },
            { text: "The product of num2 and num3 - 1" },
            { text: "The sum of num2 and num3" },
            { text: "The sum of all integers from num2 to num3, inclusive" },
            { text: "The sum of all integers from num2 to num3 - 1, inclusive" }
        ],
        correctAnswer: 4,
        explanationEN: "The loop adds num2 to num1 and then increments num2 until it reaches num3.\nThis effectively sums all integers from the initial value of num2 up to num3-1.\nFor example, if num2=3 and num3=6, it would calculate: 3 + 4 + 5 = 12"
    },
    {
        id: 14,
        question: {
            text: "(2014 Practice Exam-11155)\n\nConsider the following code segment.",
            code: {
                content: `
int x = 1;
while ( /* missing code */ )
{
    System.out.print(x + " ");
    x = x + 2;
}`
,
                language: "java"
            }
        },
        code: "Consider the following possible replacements for /* missing code */.\n\nI. x < 6\nII. x != 6\nIII. x < 7\n\nWhich of the proposed replacements for /* missing code */ will cause the code segment to print only the values 1 3 5?",
        language: "java",
        options: [
            { text: "I only" },
            { text: "II only" },
            { text: "I and II only" },
            { text: "I and III only" },
            { text: "I, II, and III" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's analyze each condition:\n1) x < 6: Will print 1, 3, 5 (stops when x becomes 7)\n2) x != 6: Will print 1, 3, 5, 7, 9... (never stops as x skips 6)\n3) x < 7: Will print 1, 3, 5, 7 (includes 7)\nOnly condition I produces exactly '1 3 5'"
    },
    {
        id: 15,
        question: {
            text: "(AP Course and Exam Description-11157)\n\nConsider the following code segment.",
            code: {
                content: `
int val = 48;
int div = 6;
while((val % 2 == 0) && div > 0)
{
    if(val % div == 0)
    {
        System.out.print(val + " ");
    }
    val /= 2;
    div--;
}`,
                language: "java"
            }
        },
        code: "What is printed when the code segment is executed?",
        language: "java",
        options: [
            { text: "48 12 6" },
            { text: "48 12 6 3" },
            { text: "48 12 6 3 1" },
            { text: "48 24 12 6" },
            { text: "48 24 12 6 3" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's trace the code: 1) First iteration: val=48, div=6, 48%6=0, prints 48, val=24, div=5, 2) Second iteration: val=24, div=5, 24%5≠0, no print, val=12, div=4, 3) Third iteration: val=12, div=4, 12%4=0, prints 12, val=6, div=3, 4) Fourth iteration: val=6, div=3, 6%3=0, prints 6, val=3, div=2, 5) Loop ends because val=3 is not even. Output is '48 12 6'.",
        explanationCN: "讓我們追蹤代碼：1) 第一次迭代：val=48，div=6，48%6=0，打印 48，val=24，div=5，2) 第二次迭代：val=24，div=5，24%5≠0，不打印，val=12，div=4，3) 第三次迭代：val=12，div=4，12%4=0，打印 12，val=6，div=3，4) 第四次迭代：val=6，div=3，6%3=0，打印 6，val=3，div=2，5) 循環結束因為 val=3 不是偶數。輸出為 '48 12 6'。"
    },
    {
        id: 16,
        question: {
            text: "(2014 Practice Exam-11167)\n\nConsider the following code segment.",
            code: {
                content: `
public static int mystery(int n)
{
    int x = 1;
    int y = 1;
    
    // Point A
    while (n > 2)
    {
        x = x + y;
        
        // Point B
        y = x - y;
        n--;
    }
    
    // Point C
    return x;
}`,
                language: "java"
            }
        },
        code: "Which of the following is true of method mystery?",
        language: "java",
        options: [
            { text: "A. x will sometimes be 1 at // Point B." },
            { text: "B. x will never be 1 at // Point C." },
            { text: "C. n will never be greater than 2 at // Point A." },
            { text: "D. n will sometimes be greater than 2 at // Point C." },
            { text: "E. n will always be greater than 2 at // Point B." }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze each statement:\n1) A is false: x is always > 1 at Point B after first iteration\n2) B is true: x starts at 1 and only increases in the loop\n3) C is false: n starts with input value and can be > 2 at Point A\n4) D is false: n is always ≤ 2 at Point C due to loop condition\n5) E is false: n decreases in loop, can be ≤ 2 at Point B\nTherefore, only B is true."
    },
    {
        id: 17,
        question: {
            text: "(2014 Practice Exam-11168)\n\nConsider the following code segment.",
            code: {
                content: `
public static int mystery(int n)
{
    int x = 1;
    int y = 1;
    
    // Point A
    while (n > 2)
    {
        x = x + y;
        
        // Point B
        y = x - y;
        n--;
    }
    
    // Point C
    return x;
}`,
                language: "java"
            }
        },
        code: "Which of the following is true of method mystery?",
        language: "java",
        options: [
            { text: "A. x will sometimes be 1 at // Point B." },
            { text: "B. x will never be 1 at // Point C." },
            { text: "C. n will never be greater than 2 at // Point A." },
            { text: "D. n will sometimes be greater than 2 at // Point C." },
            { text: "E. n will always be greater than 2 at // Point B." }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze each statement:\n1) A is false: x is always > 1 at Point B after first iteration\n2) B is true: x starts at 1 and only increases in the loop\n3) C is false: n starts with input value and can be > 2 at Point A\n4) D is false: n is always ≤ 2 at Point C due to loop condition\n5) E is false: n decreases in loop, can be ≤ 2 at Point B\nTherefore, only B is true."
    },
    {
        id: 18,
        question: {
            text: "(2014 Practice Exam-11257)\n\nConsider the following code segment.",
            code: {
                content: `
int sum = 0;
int k = 1;
while (sum < 12 || k < 4)
    sum += k;

System.out.println(sum);`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 6" },
            { text: "B. 10" },
            { text: "C. 12" },
            { text: "D. 15" },
            { text: "E. Nothing is printed due to an infinite loop." }
        ],
        correctAnswer: 4,
        explanationEN: "This is an infinite loop because:\n1) k never changes (stays 1)\n2) The condition uses OR (||), so loop continues if either sum < 12 OR k < 4 is true\n3) k is always 1, so k < 4 is always true\n4) Therefore, the loop never ends and nothing is printed"
    },
    {
        id: 19,
        question: {
            text: "(AP Exam-11415)\n\nConsider the following code segment.",
            code: {
                content: `
int num1 = 0;
int num2 = 3;
while((num2 != 0) && ((num1 / num2) >= 0))
{
    num1 = num1 + 2;
    num2 = num2 - 1;
}`,
                language: "java"
            }
        },
        code: "What are the values of num1 and num2 after the while loop completes its execution?",
        language: "java",
        options: [
            { text: "num1 = 0, num2 = 3" },
            { text: "num1 = 8, num2 = -1" },
            { text: "num1 = 4, num2 = 1" },
            { text: "num1 = 6, num2 = 0" },
            { text: "The loop will never complete its execution because a division by zero will generate an ArithmeticException." }
        ],
        correctAnswer: 3,
        explanationEN: "Let's trace the loop:\n1) Initially: num1=0, num2=3\n2) First iteration: 0/3=0 ≥ 0 true, num1=2, num2=2\n3) Second iteration: 2/2=1 ≥ 0 true, num1=4, num2=1\n4) Third iteration: 4/1=4 ≥ 0 true, num1=6, num2=0\n5) Loop ends because num2=0\nFinal values: num1=6, num2=0"
    },
    {
        id: 20,
        question: {
            text: "(AP Exam-11416)\n\nConsider the following code segment.",
            code: {
                content: `
int k = 1;
while(k < 20)
{
    if((k % 3) == 1)
        System.out.print(k + " ");
    k++;
}`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing this code segment?",
        language: "java",
        options: [
            { text: "2 5 8 11 14 17" },
            { text: "3 6 9 12 15 18" },
            { text: "1 4 7 10 13 16 19" },
            { text: "1 3 5 7 9 11 13 15 17 19" },
            { text: "2 4 6 8 10 12 14 16 18 20" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze the code:\n1) The loop runs while k < 20\n2) It prints k when k % 3 == 1\n3) Numbers that give remainder 1 when divided by 3 are: 1, 4, 7, 10, 13, 16, 19\n4) Therefore, the output is '1 4 7 10 13 16 19'"
    },
    {
        id: 21,
        question: {
            text: "(2014 Practice Exam-11254)\n\nConsider the following code segment.",
            code: {
                content: `
int num = 2574;
int result = 0;
while (num > 0)
{
    result = result * 10 + num % 10;
    num /= 10;
}
System.out.println(result);`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "2" },
            { text: "4" },
            { text: "18" },
            { text: "2574" },
            { text: "4752" }
        ],
        correctAnswer: 4,
        explanationEN: "Let's trace the code:\n1) Initially: num=2574, result=0\n2) First iteration: result=0*10+4=4, num=257\n3) Second iteration: result=4*10+7=47, num=25\n4) Third iteration: result=47*10+5=475, num=2\n5) Fourth iteration: result=475*10+2=4752, num=0\n6) Loop ends, prints 4752"
    },
    {
        id: 22,
        question: {
            text: "(2020 Practice Exam 1-11333)\n\nConsider the following method.",
            code: {
                content: `
public static String abMethod(String a, String b)
{
    int x = a.indexOf(b);
    while(x >= 0)
    {
        a = a.substring(0, x) + a.substring(x + b.length());
        x = a.indexOf(b);
    }
    return a;
}`,
                language: "java"
            }
        },
        code: `What, if anything, is returned by the method call abMethod("sing the song", "ng")?`,
        language: "java",
        options: [
            { text: `"si"` },
            { text: `"si the so"` },
            { text: `"si the song"` },
            { text: `"sig the sog"` },
            { text: "Nothing is returned because a StringIndexOutOfBoundsException is thrown." }
        ],
        correctAnswer: 1,
        explanationEN: "Let's trace the method:\n1) Initially: a='sing the song', b='ng'\n2) First x=a.indexOf('ng')=2\n3) a becomes 'si'+'the song' = 'si the song'\n4) Second x=a.indexOf('ng')=8\n5) a becomes 'si the so'+'' = 'si the so'\n6) Third x=a.indexOf('ng')=-1\n7) Loop ends, returns 'si the so'"
    },
    {
        id: 23,
        question: {
            text: "(AP Topic Question-10947)\n\nConsider the following code segments. Code segment 2 is a revision of code segment 1 in which the loop increment has been changed.",
            code: {
                content: `
Code Segment 1
int sum = 0;
for(int k = 1; k <= 30; k++)
{
    sum += k;
}
System.out.println("The sum is: " + sum);

Code Segment 2
int sum = 0;
for(int k = 1; k <= 30; k = k + 2)
{
    sum += k;
}
System.out.println("The sum is: " + sum);`,
                language: "java"
            }
        },
        code: "Code segment 1 prints the sum of the integers from 1 through 30, inclusive. Which of the following best explains how the output changes from code segment 1 to code segment 2?",
        language: "java",
        options: [
            { text: "A. Code segment 1 and code segment 2 will produce the same output." },
            { text: "B. Code segment 2 will print the sum of only the even integers from 1 through 30, inclusive because it starts sum at zero, increments k by twos, and terminates when k exceeds 30." },
            { text: "C. Code segment 2 will print the sum of only the odd integers from 1 through 30, inclusive because it starts k at one, increments k by twos, and terminates when k exceeds 30." },
            { text: "D. Code segment 2 will print the sum of only the even integers from 1 through 60, inclusive because it starts sum at zero, increments k by twos, and iterates 30 times." },
            { text: "E. Code segment 2 will print the sum of only the odd integers from 1 through 60, inclusive because it starts k at one, increments k by twos, and iterates 30 times." }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze the differences:\n1) Code segment 1 sums all integers from 1 to 30\n2) Code segment 2:\n   - Starts with k=1 (odd)\n   - Increments k by 2 each time (1,3,5,7,...)\n   - Continues while k <= 30\n   - Therefore sums only odd numbers: 1+3+5+...+29\nThis matches option C, as it sums only odd integers from 1 through 30."
    },
    {
        id: 24,
        question: {
            text: "(AP Topic Question-10994)\n\nConsider the following two code segments. Code segment II is a revision of code segment I in which the loop header has been changed.",
            code: {
                content: `
I.
for(int k = 1; k <= 5; k++)
{
    System.out.print(k);
}

II.
for(int k = 5; k >= 1; k--)
{
    System.out.print(k);
}`,
                language: "java"
            }
        },
        code: "Which of the following best explains how the output changes from code segment I to code segment II?",
        language: "java",
        options: [
            { text: "A. Both code segments produce the same output, because they both iterate four times." },
            { text: "B. Both code segments produce the same output, because they both iterate five times." },
            { text: "C. Code segment I prints more values than code segment II does, because it iterates for one additional value of k." },
            { text: "D. Code segment II prints more values than code segment I, because it iterates for one additional value of k." },
            { text: "E. The code segments print the same values but in a different order, because code segment I iterates from 1 to 5 and code segment II iterates from 5 to 1." }
        ],
        correctAnswer: 4,
        explanationEN: "Let's analyze both code segments:\n1) Code segment I prints numbers from 1 to 5 in ascending order (1, 2, 3, 4, 5)\n2) Code segment II prints numbers from 5 to 1 in descending order (5, 4, 3, 2, 1)\n3) Both segments iterate exactly 5 times\n4) They print the same values but in reverse order\nTherefore, option E is correct.",
        explanationCN: "讓我們分析兩個代碼段：\n1) 代碼段 I 按升序打印 1 到 5 的數字（1, 2, 3, 4, 5）\n2) 代碼段 II 按降序打印 5 到 1 的數字（5, 4, 3, 2, 1）\n3) 兩個段都正好迭代 5 次\n4) 它們打印相同的值但順序相反\n因此，選項 E 是正確的。"
    },
    {
        id: 25,
        question: {
            text: "(AP Topic Question-11008)\n\nConsider the following code segment.",
            code: {
                content: `
for(int k = 1; k <= 7; k += 2)
{
    System.out.print(k);
}`,
                language: "java"
            }
        },
        code: "Which of the following code segments will produce the same output as the code segment above?",
        language: "java",
        options: [
            { text: `A.
for (int k = 0; k < 7; k += 2)
{
    System.out.print(k);
}` },
            { text: `B.
for (int k = 0; k <= 7; k += 2)
{
    System.out.print(k);
}` },
            { text: `C.
for (int k = 0; k <= 8; k += 2)
{
    System.out.print(k + 1);
}` },
            { text: `D.
for (int k = 1; k < 7; k += 2)
{
    System.out.print(k + 1);
}` },
            { text: `E.
for (int k = 1; k <= 8; k += 2)
{
    System.out.print(k);
}` }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze each option:\n1) Original code prints: 1, 3, 5, 7\n2) Option A prints: 0, 2, 4, 6 (different values)\n3) Option B prints: 0, 2, 4, 6 (different values)\n4) Option C prints: 1, 3, 5, 7 (matches original)\n5) Option D prints: 2, 4, 6 (different values)\n6) Option E prints: 1, 3, 5, 7, 9 (prints an extra value)\nTherefore, only option C produces the same output as the original code.",
        explanationCN: "讓我們分析每個選項：\n1) 原始代碼打印：1, 3, 5, 7\n2) 選項 A 打印：0, 2, 4, 6（不同的值）\n3) 選項 B 打印：0, 2, 4, 6（不同的值）\n4) 選項 C 打印：1, 3, 5, 7（與原始碼匹配）\n5) 選項 D 打印：2, 4, 6（不同的值）\n6) 選項 E 打印：1, 3, 5, 7, 9（多打印一個值）\n因此，只有選項 C 產生與原始代碼相同的輸出。"
    },
    {
        id: 26,
        question: {
            text: "(AP Topic Question-11044)\n\nConsider the following code segment.",
            code: {
                content: `
int count = 0;
for(int k = 0; k < 10; k++)
{
    count++;
}
System.out.println(count);`,
                language: "java"
            }
        },
        code: "Which of the following code segments will produce the same output as the code segment above?",
        language: "java",
        options: [
            { text: `A.
int count = 0;
for (int k = 1; k < 10; k++)
{
    count++;
}
System.out.println(count);` },
            { text: `B.
int count = 1;
for (int k = 1; k <= 10; k++)
{
    count++;
}
System.out.println(count);` },
            { text: `C.
int count = 1;
for (int k = 0; k <= 9; k++)
{
    count++;
}
System.out.println(count);` },
            { text: `D.
int count = 0;
for (int k = 9; k >= 0; k--)
{
    count++;
}
System.out.println(count);` },
            { text: `E.
int count = 0;
for (int k = 10; k >= 0; k--)
{
    count++;
}
System.out.println(count);` }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze each option:\n1) Original code: Iterates 10 times (k: 0 to 9), count becomes 10\n2) Option A: Iterates 9 times (k: 1 to 9), count becomes 9\n3) Option B: Iterates 10 times but starts count at 1, count becomes 11\n4) Option C: Iterates 10 times but starts count at 1, count becomes 11\n5) Option D prints 10 times (k: 9 to 0), count becomes 10 (matches original)\n6) Option E prints 11 times (k: 10 to 0), count becomes 11\nTherefore, only option D produces the same output as the original code.",
        explanationCN: "讓我們分析每個選項：\n1) 原始代碼：迭代 10 次（k：0 到 9），count 變為 10\n2) 選項 A：迭代 9 次（k：1 到 9），count 變為 9\n3) 選項 B：迭代 10 次但 count 從 1 開始，count 變為 11\n4) 選項 C：迭代 10 次但 count 從 1 開始，count 變為 11\n5) 選項 D：迭代 10 次（k：9 到 0），count 變為 10（與原始碼匹配）\n6) 選項 E：迭代 11 次（k：10 到 0），count 變為 11\n因此，只有選項 D 產生與原始代碼相同的輸出。"
    },
    {
        id: 27,
        question: {
            text: "(AP Topic Question-11414)\n\nConsider the following code segment.",
            code: {
                content: `
for(int j = 1; j < 10; j += 2)
{
    System.out.print(j);
}`,
                language: "java"
            }
        },
        code: "Which of the following code segments will produce the same output as the code segment above?",
        language: "java",
        options: [
            { text: `A.
int j = 1;
while (j < 10)
{
    j += 2;
    System.out.print(j);
}` },
            { text: `B.
int j = 1;
while (j < 10)
{
    System.out.print(j);
    j += 2;
}` },
            { text: `C.
int j = 1;
while (j <= 10)
{
    j += 2;
    System.out.print(j);
}` },
            { text: `D.
int j = 1;
while (j >= 10)
{
    j += 2;
    System.out.print(j);
}` },
            { text: `E.
int j = 1;
while (j >= 10)
{
    System.out.print(j);
    j += 2;
}` }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze each option:\n1) Original code prints: 1, 3, 5, 7, 9\n2) Option A prints: 3, 5, 7, 9 (misses 1)\n3) Option B prints: 1, 3, 5, 7, 9 (matches original)\n4) Option C prints: 3, 5, 7, 9, 11 (wrong values)\n5) Option D and E print nothing (condition false at start)\nTherefore, only option B produces the same output as the original code.",
        explanationCN: "讓我們分析每個選項：\n1) 原始代碼打印：1, 3, 5, 7, 9\n2) 選項 A 打印：3, 5, 7, 9（缺少 1）\n3) 選項 B 打印：1, 3, 5, 7, 9（與原始碼匹配）\n4) 選項 C 打印：3, 5, 7, 9, 11（錯誤的值）\n5) 選項 D 和 E 不打印任何內容（條件一開始就為假）\n因此，只有選項 B 產生與原始代碼相同的輸出。"
    },
    {
        id: 28,
        question: {
            text: "(AP Topic Question-10924)\n\nConsider the following method definition. The method printAllCharacters is intended to print out every character in str, starting with the character at index 0.",
            code: {
                content: `
public static void printAllCharacters(String str)
{
    for(int x = 0; x < str.length(); x++) // Line 3
    {
        System.out.print(str.substring(x, x + 1));
    }
}`,
                language: "java"
            }
        },
        code: "The following statement is found in the same class as the printAllCharacters method.\n\nprintAllCharacters(\"ABCDEFG\");\n\nWhich choice best describes the difference, if any, in the behavior of this statement that will result from changing x < str.length() to x <= str.length() in line 3 of the method?",
        language: "java",
        options: [
            { text: "A. The method call will print fewer characters than it did before the change because the loop will iterate fewer times." },
            { text: "B. The method call will print more characters than it did before the change because the loop will iterate more times." },
            { text: "C. The method call, which worked correctly before the change, will now cause a run-time error because it attempts to access a character at index 7 in a string whose last element is at index 6." },
            { text: "D. The method call, which worked correctly before the change, will now cause a run-time error because it attempts to access a character at index 8 in a string whose last element is at index 7." },
            { text: "E. The behavior of the code segment will remain unchanged." }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze the change:\n1) Original condition x < str.length() means x goes from 0 to 6 for \"ABCDEFG\" (length 7)\n2) Changed condition x <= str.length() means x goes from 0 to 7\n3) When x = 7, substring(7, 8) is called\n4) This causes an error as index 7 is out of bounds (valid indices are 0-6)\nTherefore, option C is correct - it will cause a runtime error trying to access index 7.",
        explanationCN: "讓我們分析這個改變：\n1) 原始條件 x < str.length() 意味著對於 \"ABCDEFG\"（長度為 7），x 從 0 到 6\n2) 改變後的條件 x <= str.length() 意味著 x 從 0 到 7\n3) 當 x = 7 時，調用 substring(7, 8)\n4) 這會導致錯誤，因為索引 7 超出範圍（有效索引為 0-6）\n因此，選項 C 是正確的 - 它會因嘗試訪問索引 7 而導致運行時錯誤。"
    },
    {
        id: 29,
        question: {
            text: "(AP Exam-10992)\n\nConsider the following code segments.",
            code: {
                content: `
I.
int k = 1;
while(k < 20)
{
    if(k % 3 == 1)
        System.out.print(k + " ");
    k = k + 3;
}

II.
for(int k = 1; k < 20; k++)
{
    if(k % 3 == 1)
        System.out.print(k + " ");
}

III.
for(int k = 1; k < 20; k = k + 3)
{
    System.out.print(k + " ");
}`,
                language: "java"
            }
        },
        code: "Which of the code segments above will produce the following output?\n\n1 4 7 10 13 16 19",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. I and II only" },
            { text: "D. II and III only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 4,
        explanationEN: "Let's analyze each code segment:\n1) Code segment I:\n   - k starts at 1 and increases by 3\n   - Prints k when k % 3 == 1\n   - Will print: 1, 4, 7, 10, 13, 16, 19\n2) Code segment II:\n   - k goes from 1 to 19\n   - Prints k when k % 3 == 1\n   - Will print: 1, 4, 7, 10, 13, 16, 19\n3) Code segment III:\n   - k starts at 1 and increases by 3\n   - Prints k each time\n   - Will print: 1, 4, 7, 10, 13, 16, 19\nAll three code segments produce the same output.",
        explanationCN: "讓我們分析每個代碼段：\n1) 代碼段 I：\n   - k 從 1 開始，每次加 3\n   - 當 k % 3 == 1 時打印 k\n   - 將打印：1, 4, 7, 10, 13, 16, 19\n2) 代碼段 II：\n   - k 從 1 到 19\n   - 當 k % 3 == 1 時打印 k\n   - 將打印：1, 4, 7, 10, 13, 16, 19\n3) 代碼段 III：\n   - k 從 1 開始，每次加 3\n   - 每次都打印 k\n   - 將打印：1, 4, 7, 10, 13, 16, 19\n三個代碼段都產生相同的輸出。"
    },
    {
        id: 30,
        question: {
            text: "(2015 Practice Exam-11004)\n\nConsider the following method.",
            code: {
                content: `
/** Precondition: num > 0 */
public static int doWhat(int num)
{
    int var = 0;
    
    for (int loop = 1; loop <= num; loop = loop + 2)
    {
        var += loop;
    }
    
    return var;
}`,
                language: "java"
            }
        },
        code: "Which of the following best describes the value returned from a call to doWhat?",
        language: "java",
        options: [
            { text: "A. num" },
            { text: "B. The sum of all integers between 1 and num, inclusive" },
            { text: "C. The sum of all even integers between 1 and num, inclusive" },
            { text: "D. The sum of all odd integers between 1 and num, inclusive" },
            { text: "E. No value is returned because of an infinite loop." }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze the method:\n1) The loop starts at 1 and increments by 2 (loop = loop + 2)\n2) This means loop will be: 1, 3, 5, 7, ...\n3) Each time, loop is added to var\n4) The loop continues while loop <= num\n5) Therefore, it sums all odd numbers from 1 to num\nOption D is correct - it returns the sum of all odd integers between 1 and num, inclusive.",
        explanationCN: "讓我們分析這個方法：\n1) 循環從 1 開始，每次加 2 (loop = loop + 2)\n2) 這意味著 loop 將是：1, 3, 5, 7, ...\n3) 每次都將 loop 加到 var\n4) 循環在 loop <= num 時繼續\n5) 因此，它計算從 1 到 num 的所有奇數之和\n選項 D 是正確的 - 它返回 1 到 num 之間所有奇數的和。"
    },
    {
        id: 31,
        question: {
            text: "(AP Course and Exam Description-11132)\n\nConsider the following code segment.",
            code: {
                content: `
for (int k = 0; k < 20; k = k + 2)
{
    if (k % 3 == 1)
    {
        System.out.print(k + " ");
    }
}`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 4 16" },
            { text: "B. 4 10 16" },
            { text: "C. 0 6 12 18" },
            { text: "D. 1 4 7 10 13 16 19" },
            { text: "E. 0 2 4 6 8 10 12 14 16 18" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's analyze the code:\n1) k starts at 0 and increases by 2 (k = k + 2)\n2) This means k will be: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18\n3) We only print k when k % 3 == 1\n4) Among these numbers, only 4 and 16 give remainder 1 when divided by 3\nTherefore, the output is '4 16'",
        explanationCN: "讓我們分析代碼：\n1) k 從 0 開始，每次加 2 (k = k + 2)\n2) 這意味著 k 將是：0, 2, 4, 6, 8, 10, 12, 14, 16, 18\n3) 只有當 k % 3 == 1 時才打印 k\n4) 在這些數字中，只有 4 和 16 除以 3 的餘數為 1\n因此，輸出是 '4 16'"
    },
    {
        id: 32,
        question: {
            text: "(2014 Practice Exam-11259)\n\nConsider the following code segment.",
            code: {
                content: `
for (int k = 1; k <= 100; k++)
    if ((k % 4) == 0)
        System.out.println(k);`,
                language: "java"
            }
        },
        code: "Which of the following code segments will produce the same output as the code segment above?",
        language: "java",
        options: [
            { text: `A.
for (int k = 1; k <= 25; k++)
    System.out.println(k);` },
            { text: `B.
for (int k = 1; k <= 100; k = k + 4)
    System.out.println(k);` },
            { text: `C.
for (int k = 1; k <= 100; k++)
    System.out.println(k % 4);` },
            { text: `D.
for (int k = 4; k <= 25; k = 4 * k)
    System.out.println(k);` },
            { text: `E.
for (int k = 4; k <= 100; k = k + 4)
    System.out.println(k);` }
        ],
        correctAnswer: 4,
        explanationEN: "Let's analyze each option:\n1) Original code prints all multiples of 4 from 1 to 100: 4, 8, 12, ..., 96, 100\n2) Option A prints 1 to 25 (different values)\n3) Option B prints wrong values (starts at 1)\n4) Option C prints remainders 1,2,3,0 repeatedly\n5) Option D prints 4,16,64 (geometric sequence)\n6) Option E prints all multiples of 4 from 4 to 100 (matches original)\nTherefore, only option E produces the same output.",
        explanationCN: "讓我們分析每個選項：\n1) 原始代碼打印 1 到 100 中所有 4 的倍數：4, 8, 12, ..., 96, 100\n2) 選項 A 打印 1 到 25（不同的值）\n3) 選項 B 打印錯誤的值（從 1 開始）\n4) 選項 C 重複打印餘數 1,2,3,0\n5) 選項 D 打印 4,16,64（等比數列）\n6) 選項 E 打印 4 到 100 的所有 4 的倍數（與原始碼匹配）\n因此，只有選項 E 產生相同的輸出。"
    },
    {
        id: 33,
        question: {
            text: "(2020 Practice Exam 1-10940)\n\nConsider the following methods.",
            code: {
                content: `
/** Precondition: a > 0 and b > 0 */
public static int methodOne(int a, int b)
{
    int loopCount = 0;
    for(int i = 0; i < a / b; i++)
    {
        loopCount++;
    }
    return loopCount;
}

/** Precondition: a > 0 and b > 0 */
public static int methodTwo(int a, int b)
{
    int loopCount = 0;
    int i = 0;
    while(i < a)
    {
        loopCount++;
        i += b;
    }
    return loopCount;
}`,
                language: "java"
            }
        },
        code: "Which of the following best describes the conditions under which methodOne and methodTwo return the same value?",
        language: "java",
        options: [
            { text: "A. When a and b are both even" },
            { text: "B. When a and b are both odd" },
            { text: "C. When a is even and b is odd" },
            { text: "D. When a % b is equal to zero" },
            { text: "E. When a % b is equal to one" }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze both methods:\n1) methodOne:\n   - Uses a for loop that runs (a/b) times\n   - Due to integer division, a/b is truncated\n   - Returns the number of iterations = floor(a/b)\n2) methodTwo:\n   - Uses a while loop that adds b to i until i >= a\n   - Counts how many times b can be added to reach or exceed a\n   - Returns the number of iterations = ceiling(a/b)\n3) These methods return the same value only when a/b has no remainder (a % b == 0)\nTherefore, option D is correct.",
        explanationCN: "讓我們分析這兩個方法：\n1) methodOne：\n   - 使用 for 循環運行 (a/b) 次\n   - 由於整數除法，a/b 會被截斷\n   - 返回迭代次數 = floor(a/b)\n2) methodTwo：\n   - 使用 while 循環，不斷將 b 加到 i 直到 i >= a\n   - 計算需要加多少次 b 才能達到或超過 a\n   - 返回迭代次數 = ceiling(a/b)\n3) 這兩個方法只有在 a/b 沒有餘數時（a % b == 0）才會返回相同的值\n因此，選項 D 是正確的。"
    },
    {
        id: 34,
        question: {
            text: "(AP Exam-11134)\n\nConsider the following code segment.",
            code: {
                content: `
String str = "abcdef";
for(int rep = 0; rep < str.length() - 1; rep++)
{
    System.out.print(str.substring(rep, rep + 2));
}`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing this code segment?",
        language: "java",
        options: [
            { text: "A. abcdef" },
            { text: "B. aabbccddeeff" },
            { text: "C. abbccddeef" },
            { text: "D. abcbcdcdedef" },
            { text: "E. Nothing is printed because an IndexOutOfBoundsException is thrown." }
        ],
        correctAnswer: 2,
        explanationEN: "Let's trace the code:\n1) str.length() - 1 = 5, so rep goes from 0 to 4\n2) For rep = 0: substring(0,2) prints 'ab'\n3) For rep = 1: substring(1,3) prints 'bc'\n4) For rep = 2: substring(2,4) prints 'cd'\n5) For rep = 3: substring(3,5) prints 'de'\n6) For rep = 4: substring(4,6) prints 'ef'\nConcatenating all outputs: 'abbccddeef'",
        explanationCN: "讓我們追蹤代碼：\n1) str.length() - 1 = 5，所以 rep 從 0 到 4\n2) rep = 0 時：substring(0,2) 打印 'ab'\n3) rep = 1 時：substring(1,3) 打印 'bc'\n4) rep = 2 時：substring(2,4) 打印 'cd'\n5) rep = 3 時：substring(3,5) 打印 'de'\n6) rep = 4 時：substring(4,6) 打印 'ef'\n連接所有輸出：'abbccddeef'"
    },
    {
        id: 35,
        question: {
            text: "(Previous Practice Question-11059)\n\nConsider the following method.",
            code: {
                content: `
public int getTheResult(int n)
{
    int product = 1;
    for(int number = 1; number < n; number++)
    {
        if(number % 2 == 0)
            product *= number;
    }
    return product;
}`,
                language: "java"
            }
        },
        code: "What value is returned as a result of the call getTheResult(8)?",
        language: "java",
        options: [
            { text: "A. 48" },
            { text: "B. 105" },
            { text: "C. 384" },
            { text: "D. 5040" },
            { text: "E. 40320" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's trace the method for n=8:\n1) Loop runs from number=1 to 7\n2) Only multiplies when number is even\n3) Even numbers are: 2, 4, 6\n4) product = 1 * 2 * 4 * 6 = 48\nTherefore, getTheResult(8) returns 48",
        explanationCN: "讓我們追蹤 n=8 時的方法：\n1) 循環從 number=1 運行到 7\n2) 只在 number 為偶數時相乘\n3) 偶數有：2, 4, 6\n4) product = 1 * 2 * 4 * 6 = 48\n因此，getTheResult(8) 返回 48"
    },
    {
        id: 36,
        question: {
            text: "(2015 Practice Exam-11202)\n\nConsider the following incomplete method, which is intended to return the number of integers that evenly divide the integer inputVal. Assume that inputVal is greater than 0.",
            code: {
                content: `
public static int numDivisors(int inputVal)
{
    int count = 0;
    for(int k = 1; k <= inputVal; k++)
    {
        if ( /* condition */ )
        {
            count++;
        }
    }
    return count;
}`,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* condition */ so that numDivisors will work as intended?",
        language: "java",
        options: [
            { text: "A. inputVal % k == 0" },
            { text: "B. k % inputVal == 0" },
            { text: "C. inputVal % k != 0" },
            { text: "D. inputVal / k == 0" },
            { text: "E. k / inputVal > 0" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's analyze each option:\n1) inputVal % k == 0: Checks if k divides evenly into inputVal (correct)\n2) k % inputVal == 0: Checks if inputVal divides k (wrong direction)\n3) inputVal % k != 0: Checks if k does NOT divide evenly (opposite of what we want)\n4) inputVal / k == 0: Always false for positive numbers\n5) k / inputVal > 0: Always true for positive numbers\nOption A is correct as it counts numbers that divide evenly into inputVal",
        explanationCN: "讓我們分析每個選項：\n1) inputVal % k == 0：檢查 k 是否能整除 inputVal（正確）\n2) k % inputVal == 0：檢查 inputVal 是否能整除 k（方向錯誤）\n3) inputVal % k != 0：檢查 k 是否不能整除（與我們想要的相反）\n4) inputVal / k == 0：對正數永遠為假\n5) k / inputVal > 0：對正數永遠為真\n選項 A 是正確的，因為它計算能整除 inputVal 的數字"
    },
    {
        id: 37,
        question: {
            text: "(AP Exam-11199)\n\nConsider the following method.",
            code: {
                content: `
public void numberCheck(int maxNum)
{
    int typeA = 0;
    int typeB = 0;
    int typeC = 0;
    for(int k = 1; k <= maxNum; k++)
    {
        if(k % 2 == 0 && k % 5 == 0)
            typeA++;
        if(k % 2 == 0)
            typeB++;
        if(k % 5 == 0)
            typeC++;
    }
    System.out.println(typeA + " " + typeB + " " + typeC);
}`,
                language: "java"
            }
        },
        code: "What is printed as a result of the call numberCheck(50)?",
        language: "java",
        options: [
            { text: "A. 5 20 5" },
            { text: "B. 5 20 10" },
            { text: "C. 5 25 5" },
            { text: "D. 5 25 10" },
            { text: "E. 30 25 10" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze the method for maxNum=50:\n1) typeA counts numbers divisible by both 2 and 5: 10,20,30,40,50 (5 numbers)\n2) typeB counts numbers divisible by 2: 2,4,6,...,50 (25 numbers)\n3) typeC counts numbers divisible by 5: 5,10,15,...,50 (10 numbers)\nTherefore, output is '5 25 10'",
        explanationCN: "讓我們分析 maxNum=50 時的方法：\n1) typeA 計算同時能被 2 和 5 整除的數：10,20,30,40,50（5個數）\n2) typeB 計算能被 2 整除的數：2,4,6,...,50（25個數）\n3) typeC 計算能被 5 整除的數：5,10,15,...,50（10個數）\n因此，輸出為 '5 25 10'"
    },
    {
        id: 38,
        question: {
            text: "(AP Topic Question-11084)\n\nConsider the following code segment.",
            code: {
                content: `
/* missing loop header */
{
    for(int k = 0; k < 4; k++)
    {
        System.out.print(k);
    }
    System.out.println();
}`,
                language: "java"
            }
        },
        code: "The code segment is intended to produce the following output.\n\n0123\n0123\n0123\n\nWhich of the following can be used to replace /* missing loop header */ so that the code segment works as intended?\n\nI. for(int j = 0; j < 3; j++)\nII. for(int j = 1; j < 3; j++)\nIII. for(int j = 1; j <= 3; j++)",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and II" },
            { text: "E. I and III" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's analyze each option:\n1) Option I (j from 0 to 2): Prints '0123' three times (correct)\n2) Option II (j from 1 to 2): Prints '0123' only twice (not enough)\n3) Option III (j from 1 to 3): Prints '0123' three times but starts from 1 (wrong start)\nOnly option I produces exactly three lines of '0123'",
        explanationCN: "讓我們分析每個選項：\n1) 選項 I（j 從 0 到 2）：打印三次 '0123'（正確）\n2) 選項 II（j 從 1 到 2）：打印兩次 '0123'（次數不夠）\n3) 選項 III（j 從 1 到 3）：打印三次 '0123' 但從 1 開始（起始錯誤）\n只有選項 I 正確產生三行 '0123'"
    },
    {
        id: 39,
        question: {
            text: "(AP Topic Question-11153)\n\nConsider the following code segment.",
            code: {
                content: `
int count = 0;
for(int x = 1; x <= 3; x++)
{
    /* missing loop header */
    {
        count++;
    }
}
System.out.println(count);`,
                language: "java"
            }
        },
        code: "Which of the following should be used to replace /* missing loop header */ so that the code segment will print 6 as the value of count?",
        language: "java",
        options: [
            { text: "A. for (int y = 0; y <= 2; y++)" },
            { text: "B. for (int y = 0; y < 3; y++)" },
            { text: "C. for (int y = 2; y >= 0; y--)" },
            { text: "D. for (int y = 3; y > 0; y--)" },
            { text: "E. for (int y = 0; y < x; y++)" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze how to get count=6:\n1) We need a nested loop where the total iterations = 6\n2) Outer loop runs 3 times (x: 1 to 3)\n3) Inner loop needs to run 2 times for each outer iteration\n4) Option B runs inner loop 3 times (y: 0,1,2)\n5) Total iterations = 3 * 2 = 6",
        explanationCN: "讓我們分析如何得到 count=6：\n1) 我們需要一個嵌套循環，總迭代次數 = 6\n2) 外循環運行 3 次（x：1 到 3）\n3) 內循環需要對每個外循環運行 2 次\n4) 選項 B 運行內循環 3 次（y：0,1,2）\n5) 總迭代次數 = 3 * 2 = 6"
    },
    {
        id: 40,
        question: {
            text: "(AP Topic Question-10973)\n\nConsider the following code segment.",
            code: {
                content: `
String str = "a black cat sat on a table";
int counter = 0;
for(int i = 0; i < str.length() - 1; i++)
{
    if(str.substring(i, i + 1).equals("a")
        && !str.substring(i + 1, i + 2).equals("b"))
    {
        counter++;
    }
}
System.out.println(counter);`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing this code segment?",
        language: "java",
        options: [
            { text: "A. 1" },
            { text: "B. 2" },
            { text: "C. 3" },
            { text: "D. 5" },
            { text: "E. 6" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's count occurrences of 'a' not followed by 'b':\n1) 'a black' - not counted (a is followed by b)\n2) 'a cat' - counted (a is followed by c)\n3) 'sat' - counted (a is followed by t)\n4) 'a table' - counted (a is followed by t)\nTotal count = 3",
        explanationCN: "讓我們計算不被 'b' 跟隨的 'a' 的出現次數：\n1) 'a black' - 不計數（a 後面是 b）\n2) 'a cat' - 計數（a 後面是 c）\n3) 'sat' - 計數（a 後面是 t）\n4) 'a table' - 計數（a 後面是 t）\n總計數 = 3"
    },
    {
        id: 41,
        question: {
            text: "(AP Topic Question-11354)\n\nConsider the following method.",
            code: {
                content: `
public String wordPlay(String word)
{
    String str = "";
    for(int k = 0; k < word.length(); k++)
    {
        if(k % 3 == 0)
        {
            str = word.substring(k, k + 1) + str;
        }
    }
    return str;
}`,
                language: "java"
            }
        },
        code: "The following code segment appears in another method in the same class as wordPlay.\n\nSystem.out.println(wordPlay(\"Computer Science\"));\n\nWhat is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. C" },
            { text: "B. ci tm" },
            { text: "C. eeStm" },
            { text: "D. ncepC" },
            { text: "E. eeScpC" }
        ],
        correctAnswer: 4,
        explanationEN: "Let's trace the method with 'Computer Science':\n1) k=0: adds 'C' to ''\n2) k=3: adds 'p' to 'C'\n3) k=6: adds 'e' to 'pC'\n4) k=9: adds 'S' to 'epC'\n5) k=12: adds 'e' to 'SepC'\n6) k=15: adds 'e' to 'eSepC'\nFinal result is 'eeScpC'",
        explanationCN: "讓我們追蹤 'Computer Science' 的方法：\n1) k=0：將 'C' 加到 ''\n2) k=3：將 'p' 加到 'C'\n3) k=6：將 'e' 加到 'pC'\n4) k=9：將 'S' 加到 'epC'\n5) k=12：將 'e' 加到 'SepC'\n6) k=15：將 'e' 加到 'eSepC'\n最終結果是 'eeScpC'"
    },
    {
        id: 42,
        question: {
            text: "(AP Topic Question-11404)\n\nConsider the following method.",
            code: {
                content: `
public static String changeStr(String str)
{
    String result = "";
    for(int i = str.length()-1; i >= str.length()/2; i-=2)
    {
        result += str.substring(i, i + 1);
    }
    return result;
}`,
                language: "java"
            }
        },
        code: "What value is returned as a result of the method call changeStr(\"12345\")?",
        language: "java",
        options: [
            { text: "A. \"4\"" },
            { text: "B. \"53\"" },
            { text: "C. \"531\"" },
            { text: "D. \"543\"" },
            { text: "E. \"54321\"" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's trace the method with '12345':\n1) str.length() is 5, so i starts at 4\n2) str.length()/2 is 2 (integer division)\n3) i decrements by 2 each time\n4) i values: 4, 2\n5) Concatenates characters at positions 4,2: '5','3','1'\nTherefore returns '531'",
        explanationCN: "讓我們追蹤 '12345' 的方法：\n1) str.length() 是 5，所以 i 從 4 開始\n2) str.length()/2 是 2（整數除法）\n3) i 每次減 2\n4) i 的值：4, 2\n5) 連接位置 4,2 的字符：'5','3','1'\n因此返回 '531'"
    },
    {
        id: 43,
        question: {
            text: "(2015 Practice Exam-11170)\n\nConsider the following method.",
            code: {
                content: `
public static boolean mystery(String str)
{
    String temp = "";
    for (int k = str.length(); k > 0; k--)
    {
        temp = temp + str.substring(k - 1, k);
    }
    return temp.equals(str);
}`,
                language: "java"
            }
        },
        code: "Which of the following calls to mystery will return true?",
        language: "java",
        options: [
            { text: "A. mystery(\"no\")" },
            { text: "B. mystery(\"on\")" },
            { text: "C. mystery(\"nnoo\")" },
            { text: "D. mystery(\"nono\")" },
            { text: "E. mystery(\"noon\")" }
        ],
        correctAnswer: 4,
        explanationEN: "The method reverses the input string and checks if it equals the original:\n1) For 'no': reversed is 'on' (false)\n2) For 'on': reversed is 'no' (false)\n3) For 'nnoo': reversed is 'oonn' (false)\n4) For 'nono': reversed is 'onon' (false)\n5) For 'noon': reversed is 'noon' (true)\nOnly 'noon' is the same when reversed.",
        explanationCN: "該方法反轉輸入字符串並檢查是否等於原始字符串：\n1) 對於 'no'：反轉後是 'on'（假）\n2) 對於 'on'：反轉後是 'no'（假）\n3) 對於 'nnoo'：反轉後是 'oonn'（假）\n4) 對於 'nono'：反轉後是 'onon'（假）\n5) 對於 'noon'：反轉後是 'noon'（真）\n只有 'noon' 反轉後保持不變。"
    },
    {
        id: 44,
        question: {
            text: "(2014 Practice Exam-11171)\n\nConsider the following method.",
            code: {
                content: `
public String mystery(String input)
{
    String output = "";
    for (int k = 1; k < input.length(); k = k + 2)
    {
        output += input.substring(k, k + 1);
    }
    return output;
}`,
                language: "java"
            }
        },
        code: "What is returned as a result of the call mystery(\"computer\")?",
        language: "java",
        options: [
            { text: "A. \"computer\"" },
            { text: "B. \"cmue\"" },
            { text: "C. \"optr\"" },
            { text: "D. \"ompute\"" },
            { text: "E. Nothing is returned because an IndexOutOfBoundsException is thrown." }
        ],
        correctAnswer: 2,
        explanationEN: "Let's trace the method with 'computer':\n1) k starts at 1 and increments by 2\n2) k values will be: 1,3,5,7\n3) Extracts characters at positions:\n   - k=1: 'o'\n   - k=3: 'p'\n   - k=5: 't'\n   - k=7: 'r'\n4) Concatenates to form 'optr'",
        explanationCN: "讓我們追蹤 'computer' 的方法：\n1) k 從 1 開始，每次加 2\n2) k 的值將是：1,3,5,7\n3) 提取以下位置的字符：\n   - k=1：'o'\n   - k=3：'p'\n   - k=5：'t'\n   - k=7：'r'\n4) 連接形成 'optr'"
    },
    {
        id: 45,
        question: {
            text: "(AP Topic Question-10920)\n\nConsider the following code segment.",
            code: {
                content: `
int j = 1;
while(j < 5)
{
    int k = 1;
    while(k < 5)
    {
        System.out.println(k);
        k++;
    }
    j++;
}`,
                language: "java"
            }
        },
        code: "Which of the following best explains the effect, if any, of changing the first line of code to int j = 0?",
        language: "java",
        options: [
            { text: "A. There will be one more value printed because the outer loop will iterate one additional time." },
            { text: "B. There will be four more values printed because the outer loop will iterate one additional time." },
            { text: "C. There will be one less value printed because the outer loop will iterate one fewer time." },
            { text: "D. There will be four fewer values printed because the outer loop will iterate one fewer time." },
            { text: "E. There will be no change to the output of the code segment." }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze the change:\n1) Original code (j=1): outer loop runs 4 times (j: 1,2,3,4)\n2) Modified code (j=0): outer loop runs 5 times (j: 0,1,2,3,4)\n3) Inner loop prints 4 values each time (k: 1,2,3,4)\n4) One additional outer iteration means 4 more values printed\nTherefore, option B is correct.",
        explanationCN: "讓我們分析這個改變：\n1) 原始代碼 (j=1)：外循環運行 4 次 (j: 1,2,3,4)\n2) 修改後代碼 (j=0)：外循環運行 5 次 (j: 0,1,2,3,4)\n3) 內循環每次打印 4 個值 (k: 1,2,3,4)\n4) 多一次外循環迭代意味著多打印 4 個值\n因此，選項 B 是正確的。"
    },
    {
        id: 46,
        question: {
            text: "(AP Topic Question-11006)\n\nConsider the following code segment.",
            code: {
                content: `
for(int x = 0; x <= 4; x++) // Line 1
{
    for(int y = 0; y < 4; y++) // Line 3
    {
        System.out.print("a");
    }
    System.out.println();
}`,
                language: "java"
            }
        },
        code: "Which of the following best explains the effect of simultaneously changing x <= 4 to x < 4 in line 1 and y < 4 to y <= 4 in line 3?",
        language: "java",
        options: [
            { text: "A. \"a\" will be printed fewer times because while each output line will have the same length as before, the number of lines printed will decrease by 1." },
            { text: "B. \"a\" will be printed more times because while the number of output lines will be the same as before, the length of each output line will increase by 1." },
            { text: "C. \"a\" will be printed the same number of times because while the number of output lines will decrease by 1, the length of each line will increase by 1." },
            { text: "D. \"a\" will be printed more times because both the number of output lines and the length of each line will increase by 1." },
            { text: "E. The output of the code segment will not change in any way." }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze the changes:\n1) Original code:\n   - x loop: 0 to 4 (5 lines)\n   - y loop: 0 to 3 (4 'a's per line)\n   - Total: 5 * 4 = 20 'a's\n2) Modified code:\n   - x loop: 0 to 3 (4 lines)\n   - y loop: 0 to 4 (5 'a's per line)\n   - Total: 4 * 5 = 20 'a's\nSame total number of 'a's, but different arrangement.",
        explanationCN: "讓我們分析這些改變：\n1) 原始代碼：\n   - x 循環：0 到 4（5 行）\n   - y 循環：0 到 3（每行 4 個 'a'）\n   - 總計：5 * 4 = 20 個 'a'\n2) 修改後代碼：\n   - x 循環：0 到 3（4 行）\n   - y 循環：0 到 4（每行 5 個 'a'）\n   - 總計：4 * 5 = 20 個 'a'\n'a' 的總數相同，但排列不同。"
    },
    {
        id: 47,
        question: {
            text: "(AP Topic Question-11152)\n\nConsider the following code segment.",
            code: {
                content: `
for(int outer = 0; outer < 3; outer++)
{
    for( /* missing loop header */ )
    {
        System.out.print(outer + "" + inner + "_");
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following can be used as a replacement for /* missing loop header */ so that the code segment produces the output 00_01_02_11_12_22_?",
        language: "java",
        options: [
            { text: "A. int inner = 0; inner < 3; inner++" },
            { text: "B. int inner = 1; inner < 3; inner++" },
            { text: "C. int inner = outer - 1; inner < 3; inner++" },
            { text: "D. int inner = outer; inner < 3; inner++" },
            { text: "E. int inner = outer + 1; inner < 3; inner++" }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze what we need:\n1) Output shows pairs where inner ≥ outer\n2) For outer=0: prints 00,01,02\n3) For outer=1: prints 11,12\n4) For outer=2: prints 22\n5) Option D (inner starts at outer) produces this pattern\nTherefore, option D is correct.",
        explanationCN: "讓我們分析需求：\n1) 輸出顯示 inner ≥ outer 的配對\n2) 當 outer=0：打印 00,01,02\n3) 當 outer=1：打印 11,12\n4) 當 outer=2：打印 22\n5) 選項 D（inner 從 outer 開始）產生這個模式\n因此，選項 D 是正確的。"
    },
    {
        id: 48,
        question: {
            text: "(AP Topic Question-11248)\n\nConsider the following code segment.",
            code: {
                content: `
for(int j = 0; j < 3; j++)
{
    for(int k = 0; k < 4; k++)
    {
        System.out.println("Fun");
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following best explains how changing the outer for loop header to for(int j = 0; j <= 3; j++) affects the output of the code segment?",
        language: "java",
        options: [
            { text: "A. The output of the code segment will be unchanged." },
            { text: "B. The string \"Fun\" will be printed more times because the outer loop will execute more times." },
            { text: "C. The string \"Fun\" will be printed more times because the inner loop will execute more times in each iteration of the outer loop." },
            { text: "D. The string \"Fun\" will be printed fewer times because the outer loop will execute fewer times." },
            { text: "E. The string \"Fun\" will be printed fewer times because the inner loop will execute fewer times in each iteration of the outer loop." }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze the change:\n1) Original code:\n   - Outer loop runs 3 times (j: 0,1,2)\n   - Inner loop runs 4 times each iteration\n   - Total prints: 3 * 4 = 12\n2) Modified code:\n   - Outer loop runs 4 times (j: 0,1,2,3)\n   - Inner loop still runs 4 times each iteration\n   - Total prints: 4 * 4 = 16\nMore prints due to extra outer loop iteration.",
        explanationCN: "讓我們分析這個改變：\n1) 原始代碼：\n   - 外循環運行 3 次 (j: 0,1,2)\n   - 內循環每次迭代運行 4 次\n   - 總打印次數：3 * 4 = 12\n2) 修改後代碼：\n   - 外循環運行 4 次 (j: 0,1,2,3)\n   - 內循環仍然每次迭代運行 4 次\n   - 總打印次數：4 * 4 = 16\n由於多了一次外循環迭代，打印次數增加。"
    },
    {
        id: 49,
        question: {
            text: "(AP Topic Question-11090)\n\nConsider the following code segment.",
            code: {
                content: `
int counter = 0;
for(int x = 10; x > 0; x--)
{
    for(int y = x; y <= x; y++)
    {
        counter++; // line 6
    }
}`,
                language: "java"
            }
        },
        code: "How many times will the statement in line 6 be executed as a result of running the code segment?",
        language: "java",
        options: [
            { text: "A. 0" },
            { text: "B. 1" },
            { text: "C. 10" },
            { text: "D. 11" },
            { text: "E. 20" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze the loops:\n1) Outer loop runs 10 times (x: 10,9,8,...,1)\n2) Inner loop condition y <= x where y starts at x\n3) This means inner loop runs exactly once each time\n4) Each iteration increments counter once\n5) Total executions: 10 * 1 = 10",
        explanationCN: "讓我們分析這些循環：\n1) 外循環運行 10 次 (x: 10,9,8,...,1)\n2) 內循環條件 y <= x，其中 y 從 x 開始\n3) 這意味著內循環每次只運行一次\n4) 每次迭代 counter 增加一次\n5) 總執行次數：10 * 1 = 10"
    },
    {
        id: 50,
        question: {
            text: "(AP Topic Question-11094)\n\nConsider the following code segment.",
            code: {
                content: `
int outerMax = 10;
int innerMax = 5;
for(int outer = 0; outer < outerMax; outer++)
{
    for(int inner = 0; inner <= innerMax; inner++)
    {
        System.out.println(outer + inner);
    }
}`,
                language: "java"
            }
        },
        code: "How many values will be printed when the code segment is executed?",
        language: "java",
        options: [
            { text: "A. 45" },
            { text: "B. 50" },
            { text: "C. 55" },
            { text: "D. 60" },
            { text: "E. 66" }
        ],
        correctAnswer: 3,
        explanationEN: "Let's calculate the total prints:\n1) Outer loop runs 10 times (outer: 0 to 9)\n2) Inner loop runs 6 times each iteration (inner: 0 to 5)\n3) Total number of prints = 10 * 6 = 60\nTherefore, option D (60) is correct.",
        explanationCN: "讓我們計算總打印次數：\n1) 外循環運行 10 次（outer：0 到 9）\n2) 內循環每次迭代運行 6 次（inner：0 到 5）\n3) 總打印次數 = 10 * 6 = 60\n因此，選項 D（60）是正確的。"
    },
    {
        id: 51,
        question: {
            text: "(AP Topic Question-11258)\n\nConsider the following code segment.",
            code: {
                content: `
int val = 1;
while(val <= 6)
{
    for(int k = 0; k <= 2; k++)
    {
        System.out.println("Surprise!");
    }
    val++;
}`,
                language: "java"
            }
        },
        code: "How many times is the string \"Surprise!\" printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 3" },
            { text: "B. 6" },
            { text: "C. 12" },
            { text: "D. 15" },
            { text: "E. 18" }
        ],
        correctAnswer: 4,
        explanationEN: "Let's calculate the total prints:\n1) While loop runs 6 times (val: 1 to 6)\n2) For each while loop iteration:\n   - For loop runs 3 times (k: 0,1,2)\n   - Prints \"Surprise!\" each time\n3) Total prints = 6 * 3 = 18",
        explanationCN: "讓我們計算總打印次數：\n1) While 循環運行 6 次（val：1 到 6）\n2) 對於每次 while 循環迭代：\n   - For 循環運行 3 次（k：0,1,2）\n   - 每次都打印 \"Surprise!\"\n3) 總打印次數 = 6 * 3 = 18"
    },
    {
        id: 52,
        question: {
            text: "(2015 Practice Exam-11100)\n\nConsider the following code segment.",
            code: {
                content: `
int count = 0;
for(int x = 0; x < 4; x++)
{
    for(int y = x; y < 4; y++)
    {
        count++;
    }
}
System.out.println(count);`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 4" },
            { text: "B. 8" },
            { text: "C. 10" },
            { text: "D. 16" },
            { text: "E. 20" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's trace the nested loops:\n1) When x=0: y goes from 0 to 3 (4 iterations)\n2) When x=1: y goes from 1 to 3 (3 iterations)\n3) When x=2: y goes from 2 to 3 (2 iterations)\n4) When x=3: y goes from 3 to 3 (1 iteration)\nTotal iterations = 4 + 3 + 2 + 1 = 10",
        explanationCN: "讓我們追蹤嵌套循環：\n1) 當 x=0 時：y 從 0 到 3（4次迭代）\n2) 當 x=1 時：y 從 1 到 3（3次迭代）\n3) 當 x=2 時：y 從 2 到 3（2次迭代）\n4) 當 x=3 時：y 從 3 到 3（1次迭代）\n總迭代次數 = 4 + 3 + 2 + 1 = 10"
    },
    {
        id: 53,
        question: {
            text: "(AP Course and Exam Description-11189)\n\nConsider the following output.\n\n1 1 1 1 1\n2 2 2 2\n3 3 3\n4 4\n5\n\nWhich of the following code segments will produce this output?",
            code: {
                content: "",
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: `A.
for(int j = 1; j <= 5; j++)
{
    for(int k = 1; k <= 5; k++)
    {
        System.out.print(j + " ");
    }
    System.out.println();
}` },
            { text: `B.
for(int j = 1; j <= 5; j++)
{
    for(int k = 1; k <= j; k++)
    {
        System.out.print(j + " ");
    }
    System.out.println();
}` },
            { text: `C.
for(int j = 1; j <= 5; j++)
{
    for(int k = 5; k >= 1; k--)
    {
        System.out.print(j + " ");
    }
    System.out.println();
}` },
            { text: `D.
for(int j = 1; j <= 5; j++)
{
    for(int k = 5; k >= j; k--)
    {
        System.out.print(j + " ");
    }
    System.out.println();
}` },
            { text: `E.
for(int j = 1; j <= 5; j++)
{
    for(int k = j; k <= 5; k++)
    {
        System.out.print(k + " ");
    }
    System.out.println();
}` }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze what we need:\n1) First line: 1 printed 5 times\n2) Second line: 2 printed 4 times\n3) Third line: 3 printed 3 times\n4) Fourth line: 4 printed 2 times\n5) Fifth line: 5 printed 1 time\nOption D correctly implements this pattern by using k >= j to control the number of prints per line.",
        explanationCN: "讓我們分析需求：\n1) 第一行：1 打印 5 次\n2) 第二行：2 打印 4 次\n3) 第三行：3 打印 3 次\n4) 第四行：4 打印 2 次\n5) 第五行：5 打印 1 次\n選項 D 通過使用 k >= j 來控制每行的打印次數，正確實現了這個模式。"
    },
    {
        id: 54,
        question: {
            text: "(AP Exam-11267)\n\nThe question refer to the following code segment.",
            code: {
                content: `
int k = a random number such that 1≤ k≤ n;
for(int p = 2; p <= k; p++)
{
    for(int r = 1; r < k; r++)
    {
        System.out.println("Hello");
    }
}`,
                language: "java"
            }
        },
        code: "What is the maximum number of times that Hello will be printed?",
        language: "java",
        options: [
            { text: "A. 2" },
            { text: "B. n" },
            { text: "C. n - 2" },
            { text: "D. (n - 1)²" },
            { text: "E. n²" }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze the maximum case:\n1) k can be at most n\n2) Outer loop runs from p=2 to k (k-1 times)\n3) Inner loop runs from r=1 to k-1 (k-1 times)\n4) When k=n, we get maximum iterations\n5) Total iterations = (n-1)(n-1) = (n-1)²\nThe answer is D: (n-1)²",
        explanationCN: "讓我們分析最大情況：\n1) k 最大可以是 n\n2) 外循環從 p=2 到 k 運行（k-1次）\n3) 內循環從 r=1 到 k-1 運行（k-1次）\n4) 當 k=n 時，我們得到最大迭代次數\n5) 總迭代次數 = (n-1)(n-1) = (n-1)²\n答案是 D：(n-1)²"
    },
    {
        id: 55,
        question: {
            text: "(AP Exam-11268)\n\nThe question refer to the following code segment.",
            code: {
                content: `
int k = a random number such that 1≤ k≤ n;
for(int p = 2; p <= k; p++)
{
    for(int r = 1; r < k; r++)
    {
        System.out.println("Hello");
    }
}`,
                language: "java"
            }
        },
        code: "What is the minimum number of times that Hello will be printed?",
        language: "java",
        options: [
            { text: "A. 0" },
            { text: "B. 1" },
            { text: "C. 2" },
            { text: "D. n - 1" },
            { text: "E. n - 2" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's analyze the minimum case:\n1) k can be as small as 1\n2) When k=1, outer loop condition p <= k is false immediately (2 ≤ 1)\n3) Therefore, outer loop never executes\n4) Total minimum iterations = 0\nThe answer is A: 0",
        explanationCN: "讓我們分析最小情況：\n1) k 最小可以是 1\n2) 當 k=1 時，外循環條件 p <= k 立即為假（2 ≤ 1）\n3) 因此，外循環永遠不會執行\n4) 最小迭代次數 = 0\n答案是 A：0"
    },
    {
        id: 56,
        question: {
            text: "(AP Exam-11213)\n\nConsider the following output.\n\n1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5\n1 2 3 4 5 6\n\nWhich of the following code segments will produce the output shown above?",
            code: {
                content: "",
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: `A.
for(int j = 1; j <= 6; j++)
{
    for(int k = 1; k < j; k++)
        System.out.print(" " + k);
    System.out.println();
}` },
            { text: `B.
for(int j = 1; j <= 6; j++)
{
    for(int k = 1; k <= j; k++)
        System.out.print(" " + j);
    System.out.println();
}` },
            { text: `C.
for(int j = 1; j <= 6; j++)
{
    for(int k = 1; k <= j; k++)
        System.out.print(" " + k);
    System.out.println();
}` },
            { text: `D.
for(int j = 1; j < 6; j++)
{
    for(int k = 1; k <= j; k++)
        System.out.print(" " + k);
    System.out.println();
}` },
            { text: `E.
for(int j = 1; j < 6; j++)
{
    for(int k = 1; k < j; k++)
        System.out.print(" " + k);
    System.out.println();
}` }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze what we need:\n1) Each line number i (1 to 6) prints numbers 1 to i\n2) Numbers are separated by spaces\n3) Each line ends with a newline\nOption C correctly implements this by:\n1) Outer loop j goes from 1 to 6\n2) Inner loop k goes from 1 to j\n3) Prints k (the actual numbers) with a space\n4) Adds newline after each row\nThe answer is C",
        explanationCN: "讓我們分析需求：\n1) 每行 i（1到6）打印數字 1 到 i\n2) 數字之間用空格分隔\n3) 每行以換行結束\n選項 C 正確實現了這點：\n1) 外循環 j 從 1 到 6\n2) 內循環 k 從 1 到 j\n3) 打印 k（實際數字）和空格\n4) 每行後添加換行\n答案是 C"
    },
    {
        id: 57,
        question: {
            text: "(2015 Practice Exam-11253)\n\nConsider the following code segment.",
            code: {
                content: `
for (int r = 3; r > 0; r--)
{
    int c;
    for (c = 1; c < r; c++)
    {
        System.out.print("-");
    }
    for (c = r; c <= 3; c++)
    {
        System.out.print("*");
    }
    System.out.println();
}`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A.\n--*\n-**\n***" },
            { text: "B.\n*--\n**-\n***" },
            { text: "C.\n***\n-**\n--*" },
            { text: "D.\n***\n**-\n*--" },
            { text: "E.\n--*\n***\n--*" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's trace the code:\n1) First iteration (r=3):\n   - First loop prints 2 dashes (c=1,2)\n   - Second loop prints 1 star (c=3)\n   Output: --*\n2) Second iteration (r=2):\n   - First loop prints 1 dash (c=1)\n   - Second loop prints 2 stars (c=2,3)\n   Output: -**\n3) Third iteration (r=1):\n   - First loop prints 0 dashes\n   - Second loop prints 3 stars (c=1,2,3)\n   Output: ***\nFinal output matches option A: --*\n-**\n***",
        explanationCN: "讓我們追蹤代碼執行：\n1) 第一次迭代 (r=3)：\n   - 第一個循環打印 2 個破折號 (c=1,2)\n   - 第二個循環打印 1 個星號 (c=3)\n   輸出：--*\n2) 第二次迭代 (r=2)：\n   - 第一個循環打印 1 個破折號 (c=1)\n   - 第二個循環打印 2 個星號 (c=2,3)\n   輸出：-**\n3) 第三次迭代 (r=1)：\n   - 第一個循環不打印破折號\n   - 第二個循環打印 3 個星號 (c=1,2,3)\n   輸出：***\n最終輸出匹配選項 A：--*\n-**\n***"
    },
    {
        id: 58,
        question: {
            text: "(AP Exam-11270)\n\nConsider the following code segment.",
            code: {
                content: `
for(int outer = 0; outer < n; outer++)
{
    for(int inner = 0; inner <= outer; inner++)
    {
        System.out.print(outer + " ");
    }
}`,
                language: "java"
            }
        },
        code: "If n has been declared as an integer with the value 4, what is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 0 1 2 3" },
            { text: "B. 0 0 1 0 1 2" },
            { text: "C. 0 1 2 2 3 3 3" },
            { text: "D. 0 1 1 2 2 2 3 3 3 3" },
            { text: "E. 0 0 1 0 1 2 0 1 2 3" }
        ],
        correctAnswer: 3,
        explanationEN: "Let's trace the code with n=4:\n1) outer=0: prints '0' once (inner=0)\n2) outer=1: prints '1' twice (inner=0,1)\n3) outer=2: prints '2' three times (inner=0,1,2)\n4) outer=3: prints '3' four times (inner=0,1,2,3)\nFinal output: '0 1 1 2 2 2 3 3 3 3'\nThe outer loop controls which number is printed, and the inner loop controls how many times it's printed (outer+1 times).",
        explanationCN: "讓我們用 n=4 追蹤代碼：\n1) outer=0：打印一次 '0'（inner=0）\n2) outer=1：打印兩次 '1'（inner=0,1）\n3) outer=2：打印三次 '2'（inner=0,1,2）\n4) outer=3：打印四次 '3'（inner=0,1,2,3）\n最終輸出：'0 1 1 2 2 2 3 3 3 3'\n外循環控制打印的數字，內循環控制打印的次數（outer+1 次）。"
    },
    {
        id: 59,
        question: {
            text: "(AP Exam-11335)\n\nConsider the following method.",
            code: {
                content: `
public int sol(int lim)
{
    int s = 0;
    for(int outer = 1; outer <= lim; outer++)
    {
        for(int inner = outer; inner <= lim; inner++)
        {
            s++;
        }
    }
    return s;
}`,
                language: "java"
            }
        },
        code: "What value is returned as a result of the call sol(10)?",
        language: "java",
        options: [
            { text: "A. 20" },
            { text: "B. 45" },
            { text: "C. 55" },
            { text: "D. 100" },
            { text: "E. 385" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze how many times s++ is executed:\n1) When outer=1: inner goes from 1 to 10 (10 times)\n2) When outer=2: inner goes from 2 to 10 (9 times)\n3) When outer=3: inner goes from 3 to 10 (8 times)\n...\n10) When outer=10: inner goes from 10 to 10 (1 time)\nTotal = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 55",
        explanationCN: "讓我們分析 s++ 執行的次數：\n1) 當 outer=1：inner 從 1 到 10（10次）\n2) 當 outer=2：inner 從 2 到 10（9次）\n3) 當 outer=3：inner 從 3 到 10（8次）\n...\n10) 當 outer=10：inner 從 10 到 10（1次）\n總計 = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 55"
    },
    {
        id: 60,
        question: {
            text: "(2015 Practice Exam-11212)\n\nConsider the following code segment.",
            code: {
                content: `
for (int outer = 1; outer <= 6; outer++)
{
    for (int inner = outer; inner <= 6; inner++)
    {
        if (inner % 2 == 0)
        {
            System.out.print(inner + " ");
        }
    }
    System.out.println();
}`,
                language: "java"
            }
        },
        code: "What will be printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A.\n2 4 6\n4 6\n6" },
            { text: "B.\n2 4 6\n2 4 6\n2 4 6" },
            { text: "C.\n2 4 6\n2 4 6\n4 6\n4 6\n6\n6" },
            { text: "D.\n2 4 6\n2 4 6\n2 4 6\n2 4 6\n2 4 6\n2 4 6" },
            { text: "E.\n2 4\n2 4\n4\n4" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's trace the code:\n1) outer=1: prints even numbers from 1 to 6 → '2 4 6'\n2) outer=2: prints even numbers from 2 to 6 → '2 4 6'\n3) outer=3: prints even numbers from 3 to 6 → '4 6'\n4) outer=4: prints even numbers from 4 to 6 → '4 6'\n5) outer=5: prints even numbers from 5 to 6 → '6'\n6) outer=6: prints even numbers from 6 to 6 → '6'\nThe answer is C which shows this complete pattern",
        explanationCN: "讓我們追蹤代碼：\n1) outer=1：打印 1 到 6 中的偶數 → '2 4 6'\n2) outer=2：打印 2 到 6 中的偶數 → '2 4 6'\n3) outer=3：打印 3 到 6 中的偶數 → '4 6'\n4) outer=4：打印 4 到 6 中的偶數 → '4 6'\n5) outer=5：打印 5 到 6 中的偶數 → '6'\n6) outer=6：打印 6 中的偶數 → '6'\n答案是 C，完整顯示了這個輸出模式"
    }
]
