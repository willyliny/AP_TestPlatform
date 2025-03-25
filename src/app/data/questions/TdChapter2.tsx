import { QuizQuestion } from "../commonTypes";

export const TdChapter2Questions: QuizQuestion[] = [
    {
        id: 1,
        question: {
            text: "What is printed as a result of executing the code segment ?",
            code: {
                content: `
        // Consider the following code segment.
        String str = "0";
        str += str + 0 + 8;
        System.out.print(str);
                `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "8",
            },
            {
                text: "08",
            },
            {
                text: "008",
            },
            {
                text: "0008",
            },
            {
                text: "Nothing is printed, because numerical values cannot be added to a String object.",
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
            text: "What, if anything, is printed when the code segment is executed?",
            code: {
                content: `
// Consider the following code segment.
int a = 1988;
int b = 1990;

String claim = "that the world's athlets" +
               "competed in Olympic Games in";

String s =  "It is " + true + claim + a +
            " but " + false + claim + b + ".";

System.out.println(s);
            `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "It is trueclaima but falseclaimb.",
            },
            {
                text: "It is trueclaim1998 but falseclaim1990.",
            },
            {
                text: "It is true that the world's athleted competed in Olympic Games in a but false that the world's athletes competed in Olympic Games in b.",
            },
            {
                text: "It is true that the world's athletes competed in Olympic Games in 1988 but false that the world's athletes competed in Olympic Games in 1990.",
            },
            {
                text: "Nothing is printed because the code segment does not compile.",
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
        String oldStr = "ABCDEF";
        String newStr = oldStr.substring(1, 3)
        +oldStr.substring(4);
        System.out.println(newStr);
                `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "ABCD",
            },
            {
                text: "BCDE",
            },
            {
                text: "BCEF",
            },
            {
                text: "BCDEF",
            },
            { 
                text: "ABCDEF",
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
            text: "What is printed when the code segment is executed?",
            code: {
                content: `
String temp = "comp";
System.out.print(temp.substring(0) + " " +
                temp.substring(1) + " " +
                temp.substring(2) + " " +
                temp.substring(3));
        `,
                language: "java",
            },
        },
        code: "",
        language: "java",
        options: [
            {
                text: "comp",
            },
            {
                text: "c o m p",
            },
            {
                text: "comp com co c",
            },
            {
                text: "comp omp mp p",
            },
            { 
                text: "comp comp comp comp",
            },
        ],
        correctAnswer: 3,
        explanationEN:
            "Because z is an int variable, only I and II can be used to replace the missing code.",
        explanationCN:
            "因為 z 是 int 型別，所以只能使用 I 和 II。",
    },
    {
        id: 5,
        question: {
            text: "What is the value of num when the code segment is executed?",
            code: {
                content: `
String str = "CompSci";
System.out.println(str.substring(0, 3));
int num = str.length();
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "3"
            },
            {
                text: "4"
            },
            {
                text: "5"
            },
            {
                text: "6"
            },
            {
                text: "7"
            }
        ],
        correctAnswer: 4,
        explanationEN: "The length() method returns the number of characters in the string. The string 'CompSci' has 7 characters.",
        explanationCN: "length() 方法返回字串中的字符數量。字串 'CompSci' 有 7 個字符。"
    },
    {
        id: 6,
        question: {
            text: "Consider the following method, which is intended to return true if at least one of the three strings s1, s2, or s3 contains the substring \"art\". Otherwise, the method should return false. Which of the following method calls demonstrates that the method does not work as intended?",
            code: {
                content: `
public static boolean containsArt(String s1, String s2, String s3)
{
    String all = s1 + s2 + s3;
    return (all.indexOf("art") != -1);
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "containsArt(\"rattrap\", \"similar\", \"today\")"
            },
            {
                text: "containsArt(\"start\", \"article\", \"Bart\")"
            },
            {
                text: "containsArt(\"harm\", \"chortle\", \"crowbar\")"
            },
            {
                text: "containsArt(\"matriculate\", \"carat\", \"arbitrary\")"
            },
            {
                text: "containsArt(\"darkroom\", \"cartoon\", \"articulate\")"
            }
        ],
        correctAnswer: 1,
        explanationEN: "The method concatenates all strings together before checking for 'art'. This means it might find 'art' at the boundaries between strings when concatenated, even if none of the original strings contained 'art'. For example, with 'start', 'article', 'Bart', none of these strings individually contains 'art', but when concatenated as 'startarticleBart', it finds 'art' at the boundary between 'start' and 'article'.",
        explanationCN: "這個方法在檢查'art'之前將所有字串連接在一起。這意味著它可能會在連接後的字串邊界處找到'art'，即使原始字串都不包含'art'。例如，對於'start'、'article'、'Bart'，這些字串單獨都不包含'art'，但當連接成'startarticleBart'時，它在'start'和'article'的邊界處找到了'art'。"
    },
    {
        id: 7,
        question: {
            text: "Consider the processWords method. Assume that each of its two parameters is a String of length two or more. Which of the following best describes the value printed when processWords is called?",
            code: {
                content: `
public void processWords(String word1, String word2)
{
    String str1 = word1.substring(0, 2);
    String str2 = word2.substring(word2.length() - 1);
    String result = str2 + str1;
    System.out.println(result.indexOf(str2));
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "The value 0 is always printed."
            },
            {
                text: "The value 1 is always printed."
            },
            {
                text: "The value result.length() - 1 is printed."
            },
            {
                text: "A substring containing the last character of word2 is printed."
            },
            {
                text: "A substring containing the last two characters of word2 is printed."
            }
        ],
        correctAnswer: 0,
        explanationEN: "The method creates str2 from the last character of word2, then concatenates str2 with str1 to create result. When indexOf(str2) is called on result, it will always return 0 because str2 is at the beginning of result.",
        explanationCN: "該方法從word2的最後一個字符創建str2，然後將str2與str1連接創建result。當在result上調用indexOf(str2)時，它總是返回0，因為str2在result的開頭。"
    },
    {
        id: 8,
        question: {
            text: "Consider the following method. What value is returned as a result of the call scramble(\"compiler\", 3)?",
            code: {
                content: `
public static String scramble(String word, int howFar)
{
    return word.substring(howFar + 1, word.length()) +
           word.substring(0, howFar);
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "\"compiler\""
            },
            {
                text: "\"pilercom\""
            },
            {
                text: "\"ilercom\""
            },
            {
                text: "\"ilercomp\""
            },
            {
                text: "No value is returned because an IndexOutOfBoundsException will be thrown."
            }
        ],
        correctAnswer: 2,
        explanationEN: "For the input 'compiler' with howFar=3, the method will return word.substring(4, 8) + word.substring(0, 3). This means it takes 'iler' (positions 4-7) and concatenates it with 'com' (positions 0-2), resulting in 'ilercom'.",
        explanationCN: "對於輸入'compiler'和howFar=3，方法會返回word.substring(4, 8) + word.substring(0, 3)。這意味著它取'iler'（位置4-7）並與'com'（位置0-2）連接，結果為'ilercom'。"
    },
    {
        id: 9,
        question: {
            text: "Consider the following method, which is intended to calculate and return the expression √((x+y)²/|a-b|).",
            code: {
                content: `
public double calculate(double x, double y, double a,
double b)
{
    return /* missing code */;
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "Math.sqrt(x ^ 2, y ^ 2, a - b)"
            },
            {
                text: "Math.sqrt((x + y) ^ 2) / Math.abs(a, b)"
            },
            {
                text: "Math.sqrt((x + y) ^ 2 / Math.abs(a - b))"
            },
            {
                text: "Math.sqrt(Math.pow(x + y, 2) / Math.abs(a, b))"
            },
            {
                text: "Math.sqrt(Math.pow(x + y, 2) / Math.abs(a - b))"
            }
        ],
        correctAnswer: 4,
        explanationEN: "The correct answer is E. Math.pow(x + y, 2) correctly calculates (x+y)², Math.abs(a - b) calculates |a-b|, and Math.sqrt calculates the square root of the entire expression.",
        explanationCN: "正確答案是 E。Math.pow(x + y, 2) 正確計算 (x+y)²，Math.abs(a - b) 計算 |a-b|，Math.sqrt 計算整個表達式的平方根。"
    },
    {
        id: 10,
        question: {
            text: "Which of the following statements assigns a random integer between 1 and 10, inclusive, to rn?",
            code: {
                content: "",
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "int rn = (int)(Math.random()) * 10;"
            },
            {
                text: "int rn = (int)(Math.random()) * 10 + 1;"
            },
            {
                text: "int rn = (int)(Math.random() * 10);"
            },
            {
                text: "int rn = (int)(Math.random() * 10) + 1;"
            },
            {
                text: "int rn = (int)(Math.random() + 1) * 10;"
            }
        ],
        correctAnswer: 3,
        explanationEN: "Math.random() returns a double between 0.0 (inclusive) and 1.0 (exclusive). Multiplying by 10 gives a number between 0.0 and 9.999..., casting to int gives 0-9, and adding 1 gives 1-10.",
        explanationCN: "Math.random() 返回一個介於 0.0（包含）和 1.0（不包含）之間的 double 值。乘以 10 得到 0.0 到 9.999... 之間的數，轉換為 int 得到 0-9，加 1 得到 1-10。"
    },
    {
        id: 11,
        question: {
            text: "Which of the following statements assigns a random integer between 25 and 60, inclusive, to rn?",
            code: {
                content: "",
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "int rn = (int)(Math.random() * 25) + 36;"
            },
            {
                text: "int rn = (int)(Math.random() * 25) + 60;"
            },
            {
                text: "int rn = (int)(Math.random() * 26) + 60;"
            },
            {
                text: "int rn = (int)(Math.random() * 36) + 25;"
            },
            {
                text: "int rn = (int)(Math.random() * 60) + 25;"
            }
        ],
        correctAnswer: 3,
        explanationEN: "To get a random number between 25 and 60 inclusive, we need a range of 36 numbers (60-25+1=36). Multiplying Math.random() by 36 gives 0-35, then adding 25 gives 25-60.",
        explanationCN: "要得到 25 到 60 之間的隨機數（包含兩端），我們需要 36 個數字的範圍（60-25+1=36）。將 Math.random() 乘以 36 得到 0-35，然後加 25 得到 25-60。"
    },
    {
        id: 12,
        question: {
            text: "Consider the following code segment, which is intended to assign to num a random integer value between min and max, inclusive. Assume that min and max are integer variables and that the value of max is greater than the value of min.",
            code: {
                content: `
double rn = Math.random();
int num = /* missing code */;
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "(int)(rn * max) + min"
            },
            {
                text: "(int)(rn * max) + min - 1"
            },
            {
                text: "(int)(rn * (max - min)) + min"
            },
            {
                text: "(int)(rn * (max - min)) + 1"
            },
            {
                text: "(int)(rn * (max - min + 1)) + min"
            }
        ],
        correctAnswer: 4,
        explanationEN: "To get a random number between min and max inclusive, we need (max-min+1) possible numbers. Multiplying Math.random() by this range gives 0 to (max-min), then adding min gives min to max.",
        explanationCN: "要得到 min 到 max 之間的隨機數（包含兩端），我們需要 (max-min+1) 個可能的數字。將 Math.random() 乘以這個範圍得到 0 到 (max-min)，然後加上 min 得到 min 到 max。"
    },
    {
        id: 13,
        question: {
            text: "Assume that the following variable declarations have been made. Which of the following assigns a value to r from the uniform distribution over the range 0.5 ≤ r < 5.5?",
            code: {
                content: `
double d = Math.random();
double r;
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "r = d + 0.5;"
            },
            {
                text: "r = d + 0.5 * 5.0;"
            },
            {
                text: "r = d * 5.0;"
            },
            {
                text: "r = d * 5.0 + 0.5;"
            },
            {
                text: "r = d * 5.5;"
            }
        ],
        correctAnswer: 3,
        explanationEN: "Math.random() returns a value in [0,1). To get a value in [0.5,5.5), we need to multiply by the range (5.0) and add the minimum value (0.5). Therefore, r = d * 5.0 + 0.5 gives us a value in the desired range.",
        explanationCN: "Math.random() 返回一個在 [0,1) 範圍內的值。要得到 [0.5,5.5) 範圍內的值，我們需要乘以範圍大小 (5.0) 並加上最小值 (0.5)。因此，r = d * 5.0 + 0.5 可以得到所需範圍內的值。"
    },
    {
        id: 14,
        question: {
            text: "A pair of number cubes is used in a game of chance. Each number cube has six sides, numbered from 1 to 6, inclusive, and there is an equal probability for each of the numbers to appear on the top side (indicating the cube's value) when the number cube is rolled. The following incomplete statement appears in a program that computes the sum of the values produced by rolling two number cubes.",
            code: {
                content: `
int sum = /* missing code */;
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "2 * (int)(Math.random() * 6)"
            },
            {
                text: "2 * (int)(Math.random() * 7)"
            },
            {
                text: "(int)(Math.random() * 6) + (int)(Math.random() * 6)"
            },
            {
                text: "(int)(Math.random() * 13)"
            },
            {
                text: "2 + (int)(Math.random() * 6) + (int)(Math.random() * 6)"
            }
        ],
        correctAnswer: 4,
        explanationEN: "To simulate rolling two dice, we need to generate two random numbers from 1 to 6 and add them. The expression '2 + (int)(Math.random() * 6) + (int)(Math.random() * 6)' correctly does this by adding 1 to each die roll (the initial 2) and then generating two random numbers from 0 to 5.",
        explanationCN: "要模擬擲兩個骰子，我們需要生成兩個1到6的隨機數並將它們相加。表達式 '2 + (int)(Math.random() * 6) + (int)(Math.random() * 6)' 通過為每個骰子加1（初始的2）然後生成兩個0到5的隨機數來正確實現這一點。"
    },
    {
        id: 15,
        question: {
            text: "Consider the method getHours, which is intended to calculate the number of hours that a vehicle takes to travel between two mile markers on a highway if the vehicle travels at a constant speed of 60 miles per hour. A mile marker is a sign showing the number of miles along a road between some fixed location (for example, the beginning of a highway) and the current location.",
            code: {
                content: `
/*
Marker1     Marker2     Rerurn Value
100         220         2.0
100         70          0.5
*/


public static double getHours(int marker1, int marker2)
{
    /* missing statement */
    return hours;
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "double hours = (Math.abs(marker1) - Math.abs(marker2)) / 60.0;"
            },
            {
                text: "double hours = Math.abs(marker1 - marker2 / 60.0);"
            },
            {
                text: "double hours = Math.abs(marker1 - marker2) / 60.0;"
            },
            {
                text: "double hours = Math.abs((marker1 - marker2) / 60);"
            },
            {
                text: "double hours = (double)(Math.abs(marker1 - marker2) / 60);"
            }
        ],
        correctAnswer: 2,
        explanationEN: "To calculate the hours, we need to find the absolute difference between the markers (distance) and divide by the speed (60 mph). The expression Math.abs(marker1 - marker2) / 60.0 correctly calculates this, using 60.0 to ensure floating-point division.",
        explanationCN: "要計算小時數，我們需要找到標記之間的絕對差值（距離）並除以速度（60 mph）。表達式 Math.abs(marker1 - marker2) / 60.0 正確計算了這個值，使用 60.0 確保浮點除法。"
    },
    {
        id: 16,
        question: {
            text: "Consider the following code segment. Assume that a is greater than zero. Which of the following best describes the value assigned to b when the code segment is executed?",
            code: {
                content: `
int a = /* value not shown */;
int b = a + (int)(Math.random() * a);
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "a"
            },
            {
                text: "2 * a"
            },
            {
                text: "A random integer between 0 and a - 1, inclusive"
            },
            {
                text: "A random integer between a and 2 * a, inclusive"
            },
            {
                text: "A random integer between a and 2 * a - 1, inclusive"
            }
        ],
        correctAnswer: 4,
        explanationEN: "The expression (int)(Math.random() * a) generates a random integer from 0 to a-1 inclusive. When added to a, this gives a random integer from a to 2*a-1 inclusive.",
        explanationCN: "表達式 (int)(Math.random() * a) 生成一個從0到a-1（包含）的隨機整數。當加上a時，這就給出了一個從a到2*a-1（包含）的隨機整數。"
    },
    {
        id: 17,
        question: {
            text: "Consider the following code segment. What, if anything, is printed when the code segment is executed?",
            code: {
                content: `
double d1 = 10.0;
Double d2 = 20.0;
Double d3 = new Double(30.0);
double d4 = new Double(40.0);

System.out.println(d1 + d2 + d3.doubleValue() + d4);
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "100.0"
            },
            {
                text: "10.050.040.0"
            },
            {
                text: "10.020.070.0"
            },
            {
                text: "10.020.030.040.0"
            },
            {
                text: "There is no output due to a compilation error."
            }
        ],
        correctAnswer: 0,
        explanationEN: "The code will add all the double values together. d1=10.0, d2=20.0, d3.doubleValue()=30.0, and d4=40.0. When added together, they equal 100.0.",
        explanationCN: "代碼會將所有 double 值相加。d1=10.0，d2=20.0，d3.doubleValue()=30.0，d4=40.0。相加後等於 100.0。"
    },
    {
        id: 18,
        question: {
            text: "Consider the following method. Assume that the method call puzzle(3) appears in a method in the same class as puzzle. What value is returned as a result of the method call?",
            code: {
                content: `
public double puzzle(int x)
{
    Double y = x / 2.0;
    y /= 2;
    return y.doubleValue();
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "0.0"
            },
            {
                text: "0.5"
            },
            {
                text: "0.75"
            },
            {
                text: "1.0"
            },
            {
                text: "1.5"
            }
        ],
        correctAnswer: 2,
        explanationEN: "Let's follow the steps: 1) x/2.0 = 3/2.0 = 1.5, 2) y /= 2 means y = y/2 = 1.5/2 = 0.75, 3) return 0.75",
        explanationCN: "讓我們跟著步驟：1) x/2.0 = 3/2.0 = 1.5，2) y /= 2 表示 y = y/2 = 1.5/2 = 0.75，3) 返回 0.75"
    },
    {
        id: 19,
        question: {
            text: "Consider the following method. Each of the following statements appears in a method in the same class as doSomething. Which of the following statements are valid uses of the method doSomething?",
            code: {
                content: `
public void doSomething()
{
    System.out.println("Something has been done");
}

I.   doSomething();
II.  String output = doSomething();
III. System.out.println(doSomething());
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "I only"
            },
            {
                text: "II only"
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
        correctAnswer: 0,
        explanationEN: "Since doSomething() is a void method (returns nothing), only statement I is valid. Statements II and III try to use the return value of the method, which doesn't exist.",
        explanationCN: "因為 doSomething() 是一個 void 方法（不返回任何值），所以只有語句 I 是有效的。語句 II 和 III 試圖使用方法的返回值，但這個返回值並不存在。"
    },
    {
        id: 20,
        question: {
            text: "Consider the following methods, which appear in the same class. Assume that the method call slope(1, 2, 5, 10) appears in a method in the same class. What is printed as a result of the method call?",
            code: {
                content: `
public void slope(int x1, int y1, int x2, int y2)
{
    int xChange = x2 - x1;
    int yChange = y2 - y1;
    printFraction(yChange, xChange);
}

public void printFraction(int numerator, int denominator)
{
    System.out.print(numerator + "/" + denominator);
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "8/4"
            },
            {
                text: "5/1"
            },
            {
                text: "4/8"
            },
            {
                text: "2/1"
            },
            {
                text: "1/5"
            }
        ],
        correctAnswer: 0,
        explanationEN: "For slope(1, 2, 5, 10): xChange = 5-1 = 4, yChange = 10-2 = 8. Then printFraction(8, 4) prints '8/4'.",
        explanationCN: "對於 slope(1, 2, 5, 10)：x的變化 = 5-1 = 4，y的變化 = 10-2 = 8。因此 printFraction(8, 4) 會輸出 '8/4'。",
    },
    {
        id: 21,
        question: {
            text: "Consider the following methods, which appear in the same class. Consider the following code segment, which appears in a method in the same class as printSum and printProduct.",
            code: {
                content: `
public void printSum(int x, double y)
{
    System.out.println(x + y);
}

public void printProduct(double x, int y)
{
    System.out.println(x * y);
}

int num1 = 5;
double num2 = 10.0;
printSum(num1, num2);
printProduct(num1, num2);
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "15\n50"
            },
            {
                text: "15\n50.0"
            },
            {
                text: "15.0\n50"
            },
            {
                text: "15.0\n50.0"
            },
            {
                text: "The code will not compile because of a type mismatch in the method calls."
            }
        ],
        correctAnswer: 1,
        explanationEN: "printSum(5, 10.0) prints 15.0, and printProduct(5.0, 10) prints 50.0. The second method call has an implicit conversion of num1 to double.",
        explanationCN: "printSum(5, 10.0) 輸出 15.0，printProduct(5.0, 10) 輸出 50.0。第二個方法調用中 num1 隱式轉換為 double。"
    },
    {
        id: 22,
        question: {
            text: "Consider the following method. Which of the following lines of code, if located in a method in the same class as myMethod, will compile without error?",
            code: {
                content: `
public double myMethod(int a, boolean b)
{ /* implementation not shown */ }
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "int result = myMethod(2, false);"
            },
            {
                text: "int result = myMethod(2.5, true);"
            },
            {
                text: "double result = myMethod(0, false);"
            },
            {
                text: "double result = myMethod(true, 10);"
            },
            {
                text: "double result = myMethod(2.5, true);"
            }
        ],
        correctAnswer: 2,
        explanationEN: "Only option C will compile correctly because it matches the method signature (int and boolean parameters) and assigns the double return value to a double variable.",
        explanationCN: "只有選項 C 能正確編譯，因為它匹配方法簽名（int 和 boolean 參數）並將 double 返回值賦給 double 變量。"
    },
    {
        id: 23,
        question: {
            text: "The Student class has been defined to store and manipulate grades for an individual student. Which of the following statements, if located in a method in the Student class, will determine the average of all of the student's grades except for the lowest grade and store the result in the double variable newAverage?",
            code: {
                content: `
/* Returns the sum of all of the student's grades */
public double sumOfGrades()
{ /* implementation not shown */ }

/* Returns the total number of grades the student has received */
public int numberOfGrades()
{ /* implementation not shown */ }

/* Returns the lowest grade the student has received */
public double lowestGrade()
{ /* implementation not shown */ }
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "newAverage = sumOfGrades() / numberOfGrades() - 1;"
            },
            {
                text: "newAverage = sumOfGrades() / (numberOfGrades() - 1);"
            },
            {
                text: "newAverage = sumOfGrades() - lowestGrade() / (numberOfGrades() - 1);"
            },
            {
                text: "newAverage = (sumOfGrades() - lowestGrade()) / numberOfGrades() - 1;"
            },
            {
                text: "newAverage = (sumOfGrades() - lowestGrade()) / (numberOfGrades() - 1);"
            }
        ],
        correctAnswer: 4,
        explanationEN: "To calculate the average excluding the lowest grade, we need to: 1) subtract the lowest grade from the sum, 2) divide by the number of grades minus 1 (since we're excluding one grade).",
        explanationCN: "要計算不包括最低分的平均值，我們需要：1) 從總和中減去最低分，2) 除以成績數量減 1（因為我們排除了一個成績）。"
    },
    {
        id: 24,
        question: {
            text: "Consider the following methods, which appear in the same class. Which of the following statements, if located in a method in the same class, will initialize the variable x to 11?",
            code: {
                content: `
public int function1(int i, int j)
{
    return i + j;
}

public int function2(int i, int j)
{
    return j - i;
}
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "int x = function2(4, 5) + function1(1, 3);"
            },
            {
                text: "int x = function1(4, 5) + function2(1, 3);"
            },
            {
                text: "int x = function1(4, 5) + function2(3, 1);"
            },
            {
                text: "int x = function1(3, 1) + function2(4, 5);"
            },
            {
                text: "int x = function2(3, 1) + function1(4, 5);"
            }
        ],
        correctAnswer: 1,
        explanationEN: "Let's calculate: function1(4, 5) = 4+5 = 9, function2(1, 3) = 3-1 = 2. Therefore 9 + 2 = 11.",
        explanationCN: "讓我們計算：function1(4, 5) = 4+5 = 9，function2(1, 3) = 3-1 = 2。因此 9 + 2 = 11。"
    },
    {
        id: 25,
        question: {
            text: "Consider the following class. Which of the following methods can be added to the SomeMethods class without causing a compile-time error?",
            code: {
                content: `
public class SomeMethods
{
    public void one(int first)
    { /* implementation not shown */ }
    
    public void one(int first, int second)
    { /* implementation not shown */ }
    
    public void one(int first, String second)
    { /* implementation not shown */ }
}

I.   public void one(int value)
     { /* implementation not shown */ }
II.  public void one(String first, int second)
     { /* implementation not shown */ }
III. public void one(int first, int second, int third)
     { /* implementation not shown */ }
                `,
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            {
                text: "I only"
            },
            {
                text: "I and II only"
            },
            {
                text: "I and III only"
            },
            {
                text: "II and III only"
            },
            {
                text: "I, II, and III"
            }
        ],
        correctAnswer: 3,
        explanationEN: "Method I would cause a compile error because it has the same signature as the existing method. Methods II and III can be added because they have different parameter lists (different types or number of parameters).",
        explanationCN: "方法 I 會導致編譯錯誤，因為它與現有方法具有相同的簽名。方法 II 和 III 可以添加，因為它們具有不同的參數列表（不同的類型或參數數量）。"
    },
    {
        id: 26,
        question: {
            text: "Which of the following expressions evaluate to 3.5",
            code: {
                content: `
/*
*/
I.   (double) 2 / 4 + 3
II.  (double) (2 / 4) + 3
III. (double) (2 / 4 + 3)
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
                text: "B. III only"
            },
            {
                text: "C. I and II only"
            },
            {
                text: "D. II and III only"
            },
            {
                text: "E. I, II, and III"
            }
        ],
        correctAnswer: 0,
        explanationEN: "Only expression I evaluates to 3.5. Let's analyze each: I. (double) 2 / 4 + 3 = 0.5 + 3 = 3.5, II. (double) (2 / 4) + 3 = (double) 0 + 3 = 3.0, III. (double) (2 / 4 + 3) = (double) 3 = 3.0",
        explanationCN: "只有表達式 I 的結果是 3.5。分析每個表達式：I. (double) 2 / 4 + 3 = 0.5 + 3 = 3.5，II. (double) (2 / 4) + 3 = (double) 0 + 3 = 3.0，III. (double) (2 / 4 + 3) = (double) 3 = 3.0",
    }
];
