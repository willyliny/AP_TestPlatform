import { QuizQuestion } from "../commonTypes";

export const TdChapter7Questions: QuizQuestion[] = [
    {
        id: 1,
        question: {
            text: "(AP Topic Question-10872)\n\nConsider the following statement, which is intended to create an ArrayList named theater_club to store elements of type Student. Assume that the Student class has been properly defined and includes a no-parameter constructor.",
            code: {
                content: `ArrayList<Student> theater_club = new /* missing code */;`,
                language: "java"
            }
        },
        code: "Which choice can replace /* missing code */ so that the statement compiles without error?",
        language: "java",
        options: [
            { text: "A. Student()" },
            { text: "B. Student ArrayList()" },
            { text: "C. ArrayList(Student)" },
            { text: "D. ArrayList<Student>()" },
            { text: "E. ArrayList<theater_club>()" }
        ],
        correctAnswer: 3,
        explanationEN: "Option D is correct because when creating a new ArrayList with generic type, the correct syntax is 'new ArrayList<Type>()'. The other options are incorrect because:\nA) Student() is a constructor for Student class, not ArrayList\nB) This is invalid syntax\nC) This is invalid syntax for generic type declaration\nE) theater_club is the variable name, not a type",
        explanationCN: "選項D是正確的，因為在創建帶有泛型類型的ArrayList時，正確的語法是'new ArrayList<Type>()'。其他選項不正確，因為：\nA) Student()是Student類的構造函數，不是ArrayList\nB) 這是無效的語法\nC) 這是無效的泛型類型聲明語法\nE) theater_club是變量名，不是類型"
    },
    {
        id: 2,
        question: {
            text: "(AP Topic Question-11150)\n\nConsider the following statement, which is intended to create an ArrayList named values that can be used to store Integer elements.",
            code: {
                content: `/* missing code */ = new ArrayList<>();`,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* missing code */ so that the statement compiles without error?\n\nI. ArrayList values\nII. ArrayList<int> values\nIII. ArrayList<Integer> values",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and III only" },
            { text: "E. II and III only" }
        ],
        correctAnswer: 3,
        explanationEN: "Option D (I and III only) is correct because:\n1) ArrayList<Integer> values is the proper declaration for an ArrayList that stores Integer objects\n2) Option I (ArrayList values) is a raw type declaration which is allowed but not recommended\n3) Option II (ArrayList<int> values) is incorrect because ArrayList cannot store primitive types\nTherefore, both I and III are valid declarations",
        explanationCN: "選項D（僅I和III）是正確的，因為：\n1) ArrayList<Integer> values是存儲Integer對象的ArrayList的正確聲明方式\n2) 選項I（ArrayList values）是原始類型聲明，允許但不推薦使用\n3) 選項II（ArrayList<int> values）不正確，因為ArrayList不能存儲基本數據類型\n因此，I和III都是有效的聲明"
    },
    {
        id: 3,
        question: {
            text: "(AP Topic Question-11151)\n\nConsider the following statement, which is intended to create an ArrayList named years that can be used to store elements both of type Integer and of type String.",
            code: {
                content: `/* missing code */ = new ArrayList();`,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* missing code */ so that the statement compiles without error?",
        language: "java",
        options: [
            { text: "A. ArrayList years" },
            { text: "B. ArrayList years()" },
            { text: "C. ArrayList years[]" },
            { text: "D. ArrayList<Integer> years" },
            { text: "E. ArrayList<String> years" }
        ],
        correctAnswer: 0,
        explanationEN: "Option A is correct because to store elements of different types (Integer and String) in an ArrayList, you must use a raw type declaration (ArrayList years). The other options are incorrect because:\nB) This is invalid syntax\nC) This is array syntax, not ArrayList syntax\nD) This would restrict the ArrayList to Integer elements only\nE) This would restrict the ArrayList to String elements only",
        explanationCN: "選項A是正確的，因為要在ArrayList中存儲不同類型的元素（Integer和String），必須使用原始類型聲明（ArrayList years）。其他選項不正確，因為：\nB) 這是無效的語法\nC) 這是數組語法，不是ArrayList語法\nD) 這會將ArrayList限制為只能存儲Integer元素\nE) 這會將ArrayList限制為只能存儲String元素"
    },
    {
        id: 4,
        question: {
            text: "(AP Exam-10944)\n\nWhich of the following is a reason to use an ArrayList instead of an array?",
            code: {
                content: "",
                language: "java"
            }
        },
        code: "Which of the following is a reason to use an ArrayList instead of an array?",
        language: "java",
        options: [
            { text: "A. An ArrayList allows faster access to its kth item than an array does." },
            { text: "B. An ArrayList always uses less memory than an array does." },
            { text: "C. An ArrayList can store objects and an array can only store primitive types." },
            { text: "D. An ArrayList resizes itself as necessary when items are added, but an array does not." },
            { text: "E. An ArrayList provides access to the number of items it stores, but an array does not." }
        ],
        correctAnswer: 3,
        explanationEN: "Option D is correct because one of the main advantages of ArrayList over arrays is its ability to dynamically resize itself when elements are added. The other options are incorrect because:\nA) Arrays actually provide faster access to elements\nB) Arrays typically use less memory than ArrayLists\nC) Arrays can store both primitive types and objects\nE) Arrays also provide access to their length through the length property",
        explanationCN: "選項D是正確的，因為ArrayList相對於數組的主要優勢之一是它能在添加元素時動態調整大小。其他選項不正確，因為：\nA) 數組實際上提供更快的元素訪問\nB) 數組通常比ArrayList使用更少的內存\nC) 數組可以存儲基本類型和對象\nE) 數組也通過length屬性提供長度訪問"
    },
    {
        id: 5,
        question: {
            text: "(AP Exam-11203)\n\nConsider the following declaration of the class NumSequence, which has a constructor that is intended to initialize the instance variable seq to an ArrayList of numberOfValues random floating-point values in the range [0.0, 1.0).",
            code: {
                content: `public class NumSequence
{
    private ArrayList <Double> seq;
    
    // precondition: numberOfValues > 0
    // postcondition: seq has been initialized to an ArrayList of
    //               length numberOfValues; each element of seq
    //               contains a random Double in the range [0.0, 1.0)
    
    public NumSequence(int numberOfValues)
    {
        /* missing code */
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following code segments could be used to replace /* missing code */ so that the constructor will work as intended?\n\nI. ArrayList<Double> seq = new ArrayList<Double>();\n   for (int k = 0; k < numberOfValues; k++)\n      seq.add(new Double(Math.random()));\n\nII. seq = new ArrayList<Double>();\n    for (int k = 0; k < numberOfValues; k++)\n      seq.add(new Double(Math.random()));\n\nIII. ArrayList<Double> temp = new ArrayList<Double>();\n     for (int k = 0; k < numberOfValues; k++)\n       temp.add(new Double(Math.random()));",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. III only" },
            { text: "C. I and II" },
            { text: "D. I and III" },
            { text: "E. II and III" }
        ],
        correctAnswer: 4,
        explanationEN: "Option E is correct because:\n1) Only implementation III creates a temporary ArrayList but never assigns it to seq\n2) Implementation I creates a local variable seq that shadows the instance variable\n3) Implementation II correctly initializes and populates the instance variable seq\nTherefore, implementations II and III will work as intended.",
        explanationCN: "選項E是正確的，因為：\n1) 只有實現III創建了一個臨時ArrayList但從未賦值給seq\n2) 實現I創建了一個遮蔽實例變量的局部變量seq\n3) 實現II正確地初始化並填充實例變量seq\n因此，實現II和III能按預期工作。"
    },
    {
        id: 6,
        question: {
            text: "(AP Topic Question-10849)\n\nConsider the following code segment.",
            code: {
                content: `ArrayList <String> animals = new ArrayList<>();
animals.add("fox");
animals.add(0, "squirrel");
animals.add("deer");
animals.set(2, "groundhog");
animals.add(1, "mouse");
System.out.println(animals.get(2) + " and " + animals.get(3));`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. mouse and fox" },
            { text: "B. fox and groundhog" },
            { text: "C. groundhog and deer" },
            { text: "D. fox and deer" },
            { text: "E. squirrel and groundhog" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's track the ArrayList contents after each operation:\n1) [fox]\n2) [squirrel, fox]\n3) [squirrel, fox, deer]\n4) [squirrel, fox, groundhog]\n5) [squirrel, mouse, fox, groundhog]\nTherefore, get(2) returns 'fox' and get(3) returns 'groundhog', so 'fox and groundhog' is printed.",
        explanationCN: "讓我們追蹤每個操作後ArrayList的內容：\n1) [fox]\n2) [squirrel, fox]\n3) [squirrel, fox, deer]\n4) [squirrel, fox, groundhog]\n5) [squirrel, mouse, fox, groundhog]\n因此，get(2)返回'fox'，get(3)返回'groundhog'，所以打印'fox and groundhog'。"
    },
    {
        id: 7,
        question: {
            text: "(AP Topic Question-10850)\n\nConsider the following code segment.",
            code: {
                content: `ArrayList<Integer> oldList = new ArrayList();
oldList.add(100);
oldList.add(200);
oldList.add(300);
oldList.add(400);
ArrayList <Integer> newList = new ArrayList();
newList.add(oldList.remove(1));
newList.add(oldList.get(2));
System.out.println(newList);`,
                language: "java"
            }
        },
        code: "What, if anything, is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. [100, 300, 400]" },
            { text: "B. [200, 300]" },
            { text: "C. [200, 400]" },
            { text: "D. Nothing is printed because the code segment does not compile." },
            { text: "E. Nothing is printed because an IndexOutOfBoundsException will occur." }
        ],
        correctAnswer: 2,
        explanationEN: "An IndexOutOfBoundsException will occur because:\n1) After remove(1), oldList becomes [100, 300, 400]\n2) Then get(2) tries to access index 2, but after the removal, index 2 is out of bounds\n3) The valid indices are now 0, 1 only",
        explanationCN: "會發生IndexOutOfBoundsException，因為：\n1) 在remove(1)之後，oldList變成[100, 300, 400]\n2) 然後get(2)嘗試訪問索引2，但在移除操作後，索引2已超出範圍\n3) 現在有效的索引只有0和1"
    },
    {
        id: 8,
        question: {
            text: "(AP Topic Question-10851)\n\nConsider the following code segment.",
            code: {
                content: `ArrayList<Double> conditionRating = new ArrayList<Double>();
conditionRating.add(9.84);
conditionRating.add(8.93);
conditionRating.add(7.65);
conditionRating.add(6.24);
conditionRating.remove(2);
conditionRating.set(2, 7.63);
System.out.println(conditionRating);`,
                language: "java"
            }
        },
        code: "What is printed when this code segment is executed?",
        language: "java",
        options: [
            { text: "A. [9.84, 7.63, 6.24]" },
            { text: "B. [9.84, 7.63, 7.65, 6.24]" },
            { text: "C. [9.84, 8.93, 7.63]" },
            { text: "D. [9.84, 8.93, 7.63, 6.24]" },
            { text: "E. [9.84, 8.93, 7.65, 7.63]" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's track the ArrayList contents:\n1) [9.84, 8.93, 7.65, 6.24]\n2) After remove(2): [9.84, 8.93, 6.24]\n3) After set(2, 7.63): [9.84, 8.93, 7.63]\nTherefore, [9.84, 8.93, 7.63] is printed.",
        explanationCN: "讓我們追蹤ArrayList的內容：\n1) [9.84, 8.93, 7.65, 6.24]\n2) remove(2)後：[9.84, 8.93, 6.24]\n3) set(2, 7.63)後：[9.84, 8.93, 7.63]\n因此，打印[9.84, 8.93, 7.63]。"
    },
    {
        id: 9,
        question: {
            text: "(2014 Practice Exam-11053)\n\nAssume that myList is an ArrayList that has been correctly constructed and populated with objects. Which of the following expressions produces a valid random index for myList?",
            code: {
                content: "",
                language: "java"
            }
        },
        code: "Which of the following expressions produces a valid random index for myList?",
        language: "java",
        options: [
            { text: "A. (int) ( Math.random() * myList.size() ) - 1" },
            { text: "B. (int) ( Math.random() * myList.size() )" },
            { text: "C. (int) ( Math.random() * myList.size() ) + 1" },
            { text: "D. (int) ( Math.random() * (myList.size() + 1) )" },
            { text: "E. Math.random (myList.size())" }
        ],
        correctAnswer: 1,
        explanationEN: "Option B is correct because:\n1) Math.random() returns a double in [0.0, 1.0)\n2) Multiplying by size() gives a number in [0, size())\n3) Casting to int gives a valid index in [0, size()-1]\nOther options are incorrect because:\nA) Could produce negative indices\nC,D) Could produce index equal to size()\nE) Incorrect method call syntax",
        explanationCN: "選項B是正確的，因為：\n1) Math.random()返回[0.0, 1.0)範圍內的double值\n2) 乘以size()得到[0, size())範圍內的數\n3) 轉換為int得到有效索引[0, size()-1]\n其他選項不正確，因為：\nA) 可能產生負索引\nC,D) 可能產生等於size()的索引\nE) 方法調用語法錯誤"
    },
    {
        id: 10,
        question: {
            text: "(AP Exam-10847)\n\nConsider the following code segment.",
            code: {
                content: `ArrayList<String> items = new ArrayList<String>();
items.add("A");
items.add("B");
items.add("C");
items.add(0, "D");
items.remove(3);
items.add(0, "E");
System.out.println(items);`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. [A, B, C, E]" },
            { text: "B. [A, B, D, E]" },
            { text: "C. [E, D, A, B]" },
            { text: "D. [E, D, A, C]" },
            { text: "E. [E, D, C, B]" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's track the ArrayList contents:\n1) [A]\n2) [A, B]\n3) [A, B, C]\n4) [D, A, B, C]\n5) After remove(3): [D, A, B]\n6) After add(0, \"E\"): [E, D, A, B]\nTherefore, [E, D, A, B] is printed.",
        explanationCN: "讓我們追蹤ArrayList的內容：\n1) [A]\n2) [A, B]\n3) [A, B, C]\n4) [D, A, B, C]\n5) remove(3)後：[D, A, B]\n6) add(0, \"E\")後：[E, D, A, B]\n因此，打印[E, D, A, B]。"
    },
    {
        id: 11,
        question: {
            text: "(Previous Practice Question-10869)\n\nConsider the following code segment.",
            code: {
                content: `ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(new Integer(37));
nums.add(new Integer(3));
nums.add(new Integer(0));
nums.add(1, new Integer(2));
nums.set(0, new Integer(1));
nums.remove(2);
System.out.println(nums);`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. [1, 2, 0]" },
            { text: "B. [1, 3, 0]" },
            { text: "C. [1, 3, 2]" },
            { text: "D. [1, 37, 3, 0]" },
            { text: "E. [37, 0, 0]" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's track the ArrayList contents:\n1) [37]\n2) [37, 3]\n3) [37, 3, 0]\n4) [37, 2, 3, 0]\n5) After set(0, 1): [1, 2, 3, 0]\n6) After remove(2): [1, 2, 0]\nTherefore, [1, 2, 0] is printed.",
        explanationCN: "讓我們追蹤ArrayList的內容：\n1) [37]\n2) [37, 3]\n3) [37, 3, 0]\n4) [37, 2, 3, 0]\n5) set(0, 1)後：[1, 2, 3, 0]\n6) remove(2)後：[1, 2, 0]\n因此，打印[1, 2, 0]。"
    },
    {
        id: 12,
        question: {
            text: "(AP Course and Exam Description-10871)\n\nConsider the following code segment.",
            code: {
                content: `ArrayList<String> numbers = new ArrayList<String>();
numbers.add("one");
numbers.add("two");
numbers.add(0, "three");
numbers.set(2, "four");
numbers.add("five");
numbers.remove(1);`,
                language: "java"
            }
        },
        code: "Which of the following represents the contents of numbers after the code segment has been executed?",
        language: "java",
        options: [
            { text: "A. [\"one\", \"four\", \"five\"]" },
            { text: "B. [\"three\", \"two\", \"five\"]" },
            { text: "C. [\"three\", \"four\", \"two\"]" },
            { text: "D. [\"three\", \"four\", \"five\"]" },
            { text: "E. [\"one\", \"two\", \"three\", \"four\", \"five\"]" }
        ],
        correctAnswer: 3,
        explanationEN: "Let's track the ArrayList contents:\n1) [one]\n2) [one, two]\n3) [three, one, two]\n4) [three, one, four]\n5) [three, one, four, five]\n6) After remove(1): [three, four, five]\nTherefore, [\"three\", \"four\", \"five\"] is the final content.",
        explanationCN: "讓我們追蹤ArrayList的內容：\n1) [one]\n2) [one, two]\n3) [three, one, two]\n4) [three, one, four]\n5) [three, one, four, five]\n6) remove(1)後：[three, four, five]\n因此，最終內容是[\"three\", \"four\", \"five\"]。"
    },
    {
        id: 13,
        question: {
            text: "(2014 Practice Exam-11165)\n\nConsider the following method.",
            code: {
                content: `public ArrayList<Integer> mystery(int n)
{
    ArrayList<Integer> seq = new ArrayList<Integer>();
    for (int k = 1; k <= n; k++)
        seq.add(new Integer(k * k + 3));
    return seq;
}`,
                language: "java"
            }
        },
        code: "Which of the following is printed as a result of executing the following statement?\n\nSystem.out.println(mystery(6));",
        language: "java",
        options: [
            { text: "A. [3, 4, 7, 12, 19, 28]" },
            { text: "B. [3, 4, 7, 12, 19, 28, 39]" },
            { text: "C. [4, 7, 12, 19, 28, 39]" },
            { text: "D. [39, 28, 19, 12, 7, 4]" },
            { text: "E. [39, 28, 19, 12, 7, 4, 3]" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze the method:\n1) For n=6, k goes from 1 to 6\n2) For each k, it adds k*k + 3 to the list\n3) When k=1: 1*1 + 3 = 4\n4) When k=2: 2*2 + 3 = 7\n5) When k=3: 3*3 + 3 = 12\n6) When k=4: 4*4 + 3 = 19\n7) When k=5: 5*5 + 3 = 28\n8) When k=6: 6*6 + 3 = 39\nTherefore, the list will be [4, 7, 12, 19, 28, 39].",
        explanationCN: "讓我們分析這個方法：\n1) 當n=6時，k從1遍歷到6\n2) 對於每個k，添加k*k + 3到列表中\n3) 當k=1時：1*1 + 3 = 4\n4) 當k=2時：2*2 + 3 = 7\n5) 當k=3時：3*3 + 3 = 12\n6) 當k=4時：4*4 + 3 = 19\n7) 當k=5時：5*5 + 3 = 28\n8) 當k=6時：6*6 + 3 = 39\n因此，列表將會是[4, 7, 12, 19, 28, 39]。"
    },
    {
        id: 14,
        question: {
            text: "(AP Exam-11311)\n\nConsider the following method that is intended to modify its parameter nameList by replacing all occurrences of name with newValue.",
            code: {
                content: `public void replace(ArrayList<String> nameList, String name, String newValue)
{
    for(int j = 0; j < nameList.size(); j++)
    {
        if(/* expression */)
        {
            nameList.set(j, newValue);
        }
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* expression */ so that replace will work as intended?",
        language: "java",
        options: [
            { text: "A. nameList.get(j).equals(name)" },
            { text: "B. nameList.get(j) == name" },
            { text: "C. nameList.remove(j)" },
            { text: "D. nameList[j] == name" },
            { text: "E. nameList[j].equals(name)" }
        ],
        correctAnswer: 0,
        explanationEN: "Option A is correct because String comparison in Java should use equals() method rather than == operator. The == operator compares object references, while equals() compares the actual string content.",
        explanationCN: "選項A是正確的，因為在Java中字符串比較應該使用equals()方法而不是==運算符。==運算符比較對象引用，而equals()比較實際的字符串內容。"
    },
    {
        id: 15,
        question: {
            text: "(AP Topic Question-10974)\n\nIn the following code segment, assume that the ArrayList wordList has been initialized to contain the String values [\"apple\", \"banana\", \"coconut\", \"lemon\", \"orange\", \"pear\"].",
            code: {
                content: `int count = 0;
for(String word: wordList)
{
    if(word.indexOf("a") >= 0)
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
            { text: "A. 1" },
            { text: "B. 2" },
            { text: "C. 3" },
            { text: "D. 4" },
            { text: "E. 5" }
        ],
        correctAnswer: 3,
        explanationEN: "The code counts words containing the letter 'a'. In the list, 'apple', 'banana', 'orange' and 'Mary' contain 'a', so count is 4.",
        explanationCN: "代碼計算包含字母'a'的單詞數量。在列表中，'apple'、'banana'、'orange'和'Mary'包含'a'，所以count為4。"
    },
    {
        id: 16,
        question: {
            text: "(AP Topic Question-11260)\n\nIn the following code segment, assume that the ArrayList data has been initialized to contain the Integer values [4, 3, 4, 5, 3, 4].",
            code: {
                content: `int j = 0;
while(j < data.size() - 1)
{
    if(data.get(j) > data.get(j + 1))
    {
        System.out.print(data.get(j + 1) + " ");
    }
    j++;
}`,
                language: "java"
            }
        },
        code: "What, if anything, is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 3 3" },
            { text: "B. 4 5" },
            { text: "C. 4 5 4" },
            { text: "D. Nothing is printed because the code segment does not compile." },
            { text: "E. Nothing is printed because an IndexOutOfBoundsException occurs." }
        ],
        correctAnswer: 0,
        explanationEN: "The code prints the second number when the first is greater than the second. Comparing pairs: 4>3(print 3), 3<4, 4<5, 5>3(print 3), 3<4.",
        explanationCN: "當第一個數大於第二個數時，代碼打印第二個數。比較對：4>3(打印3), 3<4, 4<5, 5>3(打印3), 3<4。"
    },
    {
        id: 17,
        question: {
            text: "(AP Topic Question-11264)\n\nIn the code segment below, assume that the ArrayList object numbers has been properly declared and initialized to contain [0, 2, 4, 5].",
            code: {
                content: `for(int k = numbers.size()-1; k >= 0; k--)
{
    if(numbers.get(k) > k)
    {
        System.out.print(k + " ");
    }
}`,
                language: "java"
            }
        },
        code: "What, if anything, is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 1 2 3" },
            { text: "B. 2 4 5" },
            { text: "C. 3 2 1" },
            { text: "D. 5 4 2" },
            { text: "E. Nothing will be printed because an IndexOutOfBoundsException will occur." }
        ],
        correctAnswer: 2,
        explanationEN: "The loop starts from index 3 and compares each value with its index. At k=3: 5>3(print 3), k=2: 4>2(print 2), k=1: 2>1(print 1), k=0: 0≯0.",
        explanationCN: "循環從索引3開始，比較每個值與其索引。當k=3時：5>3(打印3)，k=2時：4>2(打印2)，k=1時：2>1(打印1)，k=0時：0≯0。"
    },
    {
        id: 18,
        question: {
            text: "(AP Exam-11176)\n\nConsider the following data field and method.",
            code: {
                content: `private ArrayList list;

public void mystery(int n)
{
    for(int k = 0; k < n; k++)
    {
        Object obj = list.remove(0);
        list.add(obj);
    }
}`,
                language: "java"
            }
        },
        code: "Assume that list has been initialized with the following Integer objects.\n[12, 9, 7, 8, 4, 3, 6, 11, 1]\nWhich of the following represents the list as a result of a call to mystery(3)?",
        language: "java",
        options: [
            { text: "A. [12, 9, 8, 4, 3, 6, 11, 1, 7]" },
            { text: "B. [12, 9, 7, 8, 4, 6, 11, 1, 3]" },
            { text: "C. [12, 9, 7, 4, 3, 6, 11, 1, 8]" },
            { text: "D. [8, 4, 3, 6, 11, 1, 12, 9, 7]" },
            { text: "E. [1, 11, 6, 12, 9, 7, 8, 4, 3]" }
        ],
        correctAnswer: 3,
        explanationEN: "The method removes the first element and adds it to the end, n times. For n=3:\n1) [9,7,8,4,3,6,11,1,12]\n2) [7,8,4,3,6,11,1,12,9]\n3) [8,4,3,6,11,1,12,9,7]",
        explanationCN: "該方法移除第一個元素並將其添加到末尾，重複n次。當n=3時：\n1) [9,7,8,4,3,6,11,1,12]\n2) [7,8,4,3,6,11,1,12,9]\n3) [8,4,3,6,11,1,12,9,7]"
    },
    {
        id: 19,
        question: {
            text: "(AP Course and Exam Description-11304)\n\nConsider the following method, which is intended to return a list containing the elements of the parameter myList with all even elements removed.",
            code: {
                content: `public static ArrayList<Integer> removeEvens(ArrayList<Integer> myList)
{
    for(int i = 0; i < myList.size(); i++)
    {
        if(myList.get(i) % 2 == 0)
        {
            myList.remove(i);
        }
    }
    return myList;
}`,
                language: "java"
            }
        },
        code: "Which of the following best explains why the code segment does not work as intended?",
        language: "java",
        options: [
            { text: "A. The code segment causes an IndexOutOfBoundsException for all lists because of an incorrect Boolean expression in the for loop." },
            { text: "B. The code segment causes an IndexOutOfBoundsException for lists with at least one even element because the indexes of all subsequent elements change by one when a list element is removed." },
            { text: "C. The code segment returns a list with fewer elements than intended because it fails to consider the last element of myList." },
            { text: "D. The code segment removes the wrong elements of myList because the condition in the if statement to test whether an element is even is incorrect." },
            { text: "E. The code segment skips some elements of myList because the indexes of all subsequent elements change by one when a list element is removed." }
        ],
        correctAnswer: 4,
        explanationEN: "When an element is removed, all subsequent elements shift left, but i still increases. This causes some elements to be skipped. For example, if we remove element at index 1, the element at index 2 moves to index 1, but i becomes 2, skipping that element.",
        explanationCN: "當一個元素被移除時，所有後續元素都向左移動，但i仍然增加。這導致一些元素被跳過。例如，如果我們移除索引1的元素，原本索引2的元素會移到索引1，但i變成2，跳過了那個元素。"
    },
    {
        id: 20,
        question: {
            text: "(Previous Practice Question-11305)\n\nConsider the following method.",
            code: {
                content: `/** Removes all occurrences of nameToRemove from nameList.
 * @param nameList a list of names
 * @param nameToRemove a name to be removed from nameList
 */
public void removeName(ArrayList<String> nameList, String nameToRemove)
{
    /* missing implementation */
}`,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* missing implementation */ so that removeName will work as intended?\n\nI. for(String name: nameList)\n   {\n       if(name.equals(nameToRemove))\n           name.remove();\n   }\n\nII. for(int k = 0; k < nameList.size(); k++)\n    {\n        if(nameList.get(k).equals(nameToRemove))\n            nameList.remove(k);\n    }\n\nIII. for(int k = nameList.size() - 1; k >= 0; k--)\n     {\n         if(nameList.get(k).equals(nameToRemove))\n             nameList.remove(k);\n     }",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. II and III only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 2,
        explanationEN: "Only III works correctly. I is incorrect because you can't modify a collection while iterating over it with a for-each loop. II is incorrect because removing elements shifts the remaining elements, causing some to be skipped. III works because it iterates from end to start, so removing elements doesn't affect the indices of elements yet to be processed.",
        explanationCN: "只有III是正確的。I是錯誤的，因為不能在使用for-each循環遍歷集合時修改它。II是錯誤的，因為移除元素會導致剩餘元素位移，造成某些元素被跳過。III是正確的，因為它從後向前遍歷，所以移除元素不會影響尚未處理的元素的索引。"
    },
    {
        id: 21,
        question: {
            text: "(AP Course and Exam Description-11307)\n\nConsider the following method.",
            code: {
                content: `public static void mystery(ArrayList<Integer> nums)
{
    for(int k = 0; k < nums.size(); k++)
    {
        if(nums.get(k) == 0)
        {
            nums.remove(k);
        }
    }
}`,
                language: "java"
            }
        },
        code: "Assume that a ArrayList<Integer> values initially contains the following Integer values.\n[0, 0, 4, 2, 5, 0, 3, 0]\n\nWhat will values contain as a result of executing mystery(values)?",
        language: "java",
        options: [
            { text: "A. [0, 0, 4, 2, 5, 0, 3, 0]" },
            { text: "B. [4, 2, 5, 3]" },
            { text: "C. [0, 0, 0, 0, 4, 2, 5, 3]" },
            { text: "D. [0, 4, 2, 5, 3]" },
            { text: "E. The code throws an ArrayIndexOutOfBoundsException exception." }
        ],
        correctAnswer: 3,
        explanationEN: "Let's track the ArrayList contents after each iteration:\n1) k=0: remove first 0 -> [0,4,2,5,0,3,0]\n2) k=1: keep 4 (not 0)\n3) k=2: keep 2 (not 0)\n4) k=3: keep 5 (not 0)\n5) k=4: keep 0\n6) k=5: keep 3 (not 0)\n7) k=6: keep 0\nFinal result is [0,4,2,5,3]. The method doesn't remove all zeros because after removing a zero, the remaining elements shift left but k still increments, causing some zeros to be skipped.",
        explanationCN: "讓我們追蹤每次迭代後ArrayList的內容：\n1) k=0：移除第一個0 -> [0,4,2,5,0,3,0]\n2) k=1：保留4（不是0）\n3) k=2：保留2（不是0）\n4) k=3：保留5（不是0）\n5) k=4：保留0\n6) k=5：保留3（不是0）\n7) k=6：保留0\n最終結果是[0,4,2,5,3]。該方法沒有移除所有的零，因為在移除一個零後，剩餘元素向左移動，但k仍然增加，導致一些零被跳過。"
    },
    {
        id: 22,
        question: {
            text: "(AP Topic Question-11021)\n\nIn the following code segment, assume that the ArrayList numList has been properly declared and initialized to contain the Integer values [1, 2, 2, 3].",
            code: {
                content: `int index = 0;
while(val > numList.get(index))
{
    index++;
}
numList.add(index, val);`,
                language: "java"
            }
        },
        code: "The code segment is intended to insert the Integer value val in numList so that numList will remain in ascending order. The code segment does not work as intended in all cases.\n\nFor which of the following values of val will the code segment not work as intended?",
        language: "java",
        options: [
            { text: "A. 0" },
            { text: "B. 1" },
            { text: "C. 2" },
            { text: "D. 3" },
            { text: "E. 4" }
        ],
        correctAnswer: 0,
        explanationEN: "The code fails for val=0 because the while loop condition is checked before comparing with the first element. When val=0, it's less than 1 (first element), but the loop never executes, incorrectly inserting 0 at index 0.",
        explanationCN: "當val=0時代碼失敗，因為while循環條件在與第一個元素比較之前就被檢查。當val=0時，它小於1（第一個元素），但循環永遠不會執行，錯誤地在索引0處插入0。"
    },
    {
        id: 23,
        question: {
            text: "(AP Topic Question-11017)\n\nConsider the following method, remDups, which is intended to remove duplicate consecutive elements from nums, an ArrayList of integers.",
            code: {
                content: `public static void remDups(ArrayList<Integer> nums)
{
    for(int j = 0; j < nums.size() - 1; j++)
    {
        if(nums.get(j).equals(nums.get(j + 1)))
        {
            nums.remove(j);
            j++;
        }
    }
}`,
                language: "java"
            }
        },
        code: "For example, if nums contains [1, 2, 2, 3, 4, 3, 5, 5, 6], then after executing remDups(nums), nums should contain [1, 2, 3, 4, 3, 5, 6].\n\nThe code does not always work as intended. Which of the following lists can be passed to remDups to show that the method does NOT work as intended?",
        language: "java",
        options: [
            { text: "A. [1, 1, 2, 3, 3, 4, 5]" },
            { text: "B. [1, 2, 2, 3, 3, 4, 5]" },
            { text: "C. [1, 2, 2, 3, 4, 4, 5]" },
            { text: "D. [1, 2, 2, 3, 4, 5, 5]" },
            { text: "E. [1, 2, 3, 3, 4, 5, 5]" }
        ],
        correctAnswer: 1,
        explanationEN: "The method fails with [1,2,2,3,3,4,5] because after removing the first 2 and incrementing j, it skips checking the second pair of consecutive duplicates (3,3).",
        explanationCN: "該方法在處理[1,2,2,3,3,4,5]時失敗，因為在移除第一個2並增加j後，它跳過了檢查第二對連續重複數字(3,3)。"
    },
    {
        id: 24,
        question: {
            text: "(AP Topic Question-11018)\n\nThe removeElement method is intended to remove all instances of target from the ArrayList object data passed as a parameter. The method does not work as intended for all inputs.",
            code: {
                content: `public void removeElement(ArrayList<Integer> data, int target)
{
    for(int j = 0; j < data.size(); j++)
    {
        if(data.get(j).equals(target))
        {
            data.remove(j);
        }
    }
}`,
                language: "java"
            }
        },
        code: "Assume that the ArrayList object scores and the int variable low_score have been properly declared and initialized. In which of the following cases will the method call removeElement(scores, low_score) fail to produce the intended result?",
        language: "java",
        options: [
            { text: "A. When scores is [0, 2, 0, 2, 0, 6] and low_score is 0" },
            { text: "B. When scores is [2, 4, 0, 5, 7, 0] and low_score is 0" },
            { text: "C. When scores is [3, 4, 5, 7, 7, 2] and low_score is 1" },
            { text: "D. When scores is [8, 8, 4, 3, 3, 6] and low_score is 3" },
            { text: "E. When scores is [9, 9, 5, 9, 7, 7] and low_score is 5" }
        ],
        correctAnswer: 3,
        explanationEN: "The method fails with [8, 8, 4, 3, 3, 6] and target=3 because after removing the first 3, the second 3 shifts left and is skipped when j increments. This is a common error in ArrayList removal - elements shift left after removal but the index still increments.",
        explanationCN: "該方法在處理[8, 8, 4, 3, 3, 6]和target=3時失敗，因為在移除第一個3後，第二個3向左移動，但當j增加時被跳過。這是ArrayList移除操作中的常見錯誤 - 元素在移除後向左移動，但索引仍然增加。"
    },
    {
        id: 25,
        question: {
            text: "(AP Exam-11308)\n\nConsider the following data field and method. The method removeDups is intended to remove all adjacent duplicate numbers from myData, but does not work as intended.",
            code: {
                content: `private ArrayList myData;

public void removeDups()
{
    int k = 1;
    while(k < myData.size())
    {
        if(myData.get(k).equals(myData.get(k - 1)))
        {
            myData.remove(k);
        }
        k++;
    }
}`,
                language: "java"
            }
        },
        code: "For example, if myData has the values 3 3 4 4 8 7 7 7, after calling removeDups, myData should have the values 3 4 8 7.\n\nWhich of the following best describes how to fix the error so that removeDups works as intended?",
        language: "java",
        options: [
            { text: "A. k should be initialized to 0 at the beginning of the method." },
            { text: "B. The while condition should be (k < myData.size() - 1)." },
            { text: "C. The if test should be (myData.get(k).equals(myData.get(k + 1)))." },
            { text: "D. The body of the if statement should be: myData.remove(k - 1);" },
            { text: "E. There should be an else before the statement k++;" }
        ],
        correctAnswer: 4,
        explanationEN: "The error is that k is always incremented, even after removing an element. This causes elements to be skipped. Adding else before k++ ensures k only increments when no element is removed.",
        explanationCN: "錯誤在於k總是增加，即使在移除元素後也是如此。這導致元素被跳過。在k++前添加else確保只有在沒有元素被移除時k才增加。"
    },
    {
        id: 26,
        question: {
            text: "(AP Exam-11309)\n\nConsider the following data field and method. The method removeDups is intended to remove all adjacent duplicate numbers from myData, but does not work as intended.",
            code: {
                content: `private ArrayList myData;

public void removeDups()
{
    int k = 1;
    while(k < myData.size())
    {
        if(myData.get(k).equals(myData.get(k - 1)))
        {
            myData.remove(k);
        }
        k++;
    }
}`,
                language: "java"
            }
        },
        code: "For example, if myData has the values 3 3 4 4 8 7 7 7, after calling removeDups, myData should have the values 3 4 8 7.\n\nAssume that myData has the following values.\n2 7 5 5 5 6 6 3 3 3\n\nWhich of the following represents myData after the incorrect removeDups is executed?",
        language: "java",
        options: [
            { text: "A. 2 7 5 6 3" },
            { text: "B. 2 7 5 6 3 3" },
            { text: "C. 2 7 5 5 6 3 3" },
            { text: "D. 2 7 5 5 5 6 3 3" },
            { text: "E. 2 7 5 5 5 5 6 6 3 3" }
        ],
        correctAnswer: 2,
        explanationEN: "Due to always incrementing k, some duplicates are skipped. Processing [2,7,5,5,5,6,6,3,3,3]:\n1) First 5 removed: [2,7,5,5,6,6,3,3,3]\n2) Skip third 5\n3) First 6 removed: [2,7,5,5,6,3,3,3]\n4) Skip second 3\n5) Result: [2,7,5,5,6,3,3]",
        explanationCN: "由於總是增加k，一些重複項被跳過。處理[2,7,5,5,5,6,6,3,3,3]：\n1) 移除第一個5：[2,7,5,5,6,6,3,3,3]\n2) 跳過第三個5\n3) 移除第一個6：[2,7,5,5,6,3,3,3]\n4) 跳過第二個3\n5) 結果：[2,7,5,5,6,3,3]"
    },
    {
        id: 27,
        question: {
            text: "(AP Topic Question-10921)\n\nConsider the following method countNegatives, which searches an ArrayList of Integer objects and returns the number of elements in the list that are less than 0.",
            code: {
                content: `public static int countNegatives(ArrayList<Integer> arr)
{
    int count = 0;
    for(int j = 0; j < arr.size(); j++) // Line 4
    {
        if(arr.get(j) < 0)
        {
            count++;
        }
    }
    return count;
}`,
                language: "java"
            }
        },
        code: "Which of the following best explains the impact to the countNegatives method when, in line 4, j < arr.size() is replaced by j <= arr.size() - 1?",
        language: "java",
        options: [
            { text: "A. It has no impact on the behavior of the method." },
            { text: "B. It causes the method to ignore the last element in arr." },
            { text: "C. It causes the method to throw an IndexOutOfBounds exception." },
            { text: "D. It reduces the size of arr by 1 and the last element will be removed." },
            { text: "E. It changes the number of times the loop executes, but all indexes in arr will still be accessed." }
        ],
        correctAnswer: 0,
        explanationEN: "Both conditions j < arr.size() and j <= arr.size() - 1 are logically equivalent. They both ensure the loop runs from 0 to size-1, accessing all elements exactly once.",
        explanationCN: "條件j < arr.size()和j <= arr.size() - 1在邏輯上是等價的。它們都確保循環從0運行到size-1，準確地訪問每個元素一次。"
    },
    {
        id: 28,
        question: {
            text: "(AP Topic Question-10922)\n\nConsider the following method findValue, which takes an ArrayList of String elements and a String value as parameters and returns true if the String value is found in the list and false otherwise.",
            code: {
                content: `public static boolean findValue(ArrayList<String> arr, String key)
{
    for(int j = 0; j < arr.size(); j++) // Line 3
    {
        if(arr.get(j).equals(key))
        {
            return true;
        }
    }
    return false;
}`,
                language: "java"
            }
        },
        code: "Which of the following best explains the impact to the findValue method when, in line 3, int j = 0 is replaced by int j = 1?",
        language: "java",
        options: [
            { text: "A. It has no impact on the behavior of the method." },
            { text: "B. It will cause the method to return a different result when the key value is not in the list." },
            { text: "C. It will cause the method to return a different result when the key value is found only at the first index in the list." },
            { text: "D. It will cause the method to return a different result when the key value is found only at the last index in the list." },
            { text: "E. It will cause the method to throw an arrayIndexOutOfBounds exception." }
        ],
        correctAnswer: 2,
        explanationEN: "Starting at j=1 skips checking index 0. If the key is only at index 0, the method will incorrectly return false instead of true. All other cases (key not in list, key at other positions) work the same.",
        explanationCN: "從j=1開始會跳過檢查索引0。如果key只在索引0處，該方法會錯誤地返回false而不是true。所有其他情況（key不在列表中，key在其他位置）的工作方式相同。"
    },
    {
        id: 29,
        question: {
            text: "(AP Topic Question-10923)\n\nConsider the following method, inCommon, which takes two Integer ArrayList parameters. The method returns true if the same integer value appears in both lists at least one time, and false otherwise.",
            code: {
                content: `public static boolean inCommon(ArrayList<Integer> a, ArrayList<Integer> b)
{
    for(int i = 0; i < a.size(); i++)
    {
        for(int j = 0; j < b.size(); j++) // Line 5
        {
            if(a.get(i).equals(b.get(j)))
            {
                return true;
            }
        }
    }
    return false;
}`,
                language: "java"
            }
        },
        code: "Which of the following best explains the impact to the inCommon method when line 5 is replaced by for (int j = b.size() - 1; j > 0; j--)?",
        language: "java",
        options: [
            { text: "A. The change has no impact on the behavior of the method." },
            { text: "B. After the change, the method will never check the first element in list b." },
            { text: "C. After the change, the method will never check the last element in list b." },
            { text: "D. After the change, the method will never check the first and the last elements in list b." },
            { text: "E. The change will cause the method to throw an IndexOutOfBounds exception." }
        ],
        correctAnswer: 1,
        explanationEN: "The change affects the inner loop by starting from the last index and stopping at j > 0. This means j will never equal 0, so the first element (at index 0) in list b will never be checked.",
        explanationCN: "這個改變影響了內部循環，從最後一個索引開始並在j > 0時停止。這意味著j永遠不會等於0，所以列表b中的第一個元素（索引0）永遠不會被檢查。"
    },
    {
        id: 30,
        question: {
            text: "(AP Topic Question-11092)\n\nConsider the following correct implementation of the selection sort algorithm.",
            code: {
                content: `public static void selectionSort(int[] elements)
{
    for(int j = 0; j < elements.length - 1; j++)
    {
        int minIndex = j;
        for(int k = j + 1; k < elements.length; k++)
        {
            if(elements[k] < elements[minIndex])
            {
                minIndex = k;
            }
        }
        if(j != minIndex)
        {
            int temp = elements[j];
            elements[j] = elements[minIndex];
            elements[minIndex] = temp; // Line 19
        }
    }
}`,
                language: "java"
            }
        },
        code: "The following declaration and method call appear in a method in the same class as selectionSort.\n\nint[] arr = {9, 8, 7, 6, 5};\nselectionSort(arr);\n\nHow many times is the statement elements[minIndex] = temp; in line 19 of the method executed as a result of the call to selectionSort?",
        language: "java",
        options: [
            { text: "A. 1" },
            { text: "B. 2" },
            { text: "C. 3" },
            { text: "D. 4" },
            { text: "E. 5" }
        ],
        correctAnswer: 1,
        explanationEN: "For array [9,8,7,6,5], the swap happens twice:\n1) First pass: 5 swaps with 9 -> [5,8,7,6,9]\n2) Second pass: 6 swaps with 8 -> [5,6,7,8,9]\nNo more swaps needed as the remaining elements are already in order.",
        explanationCN: "對於數組[9,8,7,6,5]，交換發生兩次：\n1) 第一次：5與9交換 -> [5,8,7,6,9]\n2) 第二次：6與8交換 -> [5,6,7,8,9]\n不需要更多交換，因為剩餘元素已經有序。"
    },
    {
        id: 31,
        question: {
            text: "(AP Topic Question-11195)\n\nConsider the following correct implementation of the insertion sort algorithm.",
            code: {
                content: `public static void insertionSort(int[] elements)
{
    for(int j = 1; j < elements.length; j++)
    {
        int temp = elements[j];
        int possibleIndex = j;
        while(possibleIndex > 0 && temp < elements[possibleIndex-1])
        {
            elements[possibleIndex] = elements[possibleIndex-1];
            possibleIndex--; // Line 10
        }
        elements[possibleIndex] = temp;
    }
}`,
                language: "java"
            }
        },
        code: "The following declaration and method call appear in a method in the same class as insertionSort.\n\nint[] arr = {4, 12, 4, 7, 19, 6};\ninsertionSort(arr);\n\nHow many times is the statement possibleIndex--; in line 10 of the method executed as a result of the call to insertionSort?",
        language: "java",
        options: [
            { text: "A. 2" },
            { text: "B. 3" },
            { text: "C. 4" },
            { text: "D. 5" },
            { text: "E. 6" }
        ],
        correctAnswer: 3,
        explanationEN: "Let's count possibleIndex-- executions:\n1) j=1: 12>4, no shifts\n2) j=2: 4 shifts once (past 12)\n3) j=3: 7 shifts once (past 12)\n4) j=4: 19>12, no shifts\n5) j=5: 6 shifts twice (past 19,12)\nTotal: 4 shifts (possibleIndex-- executions)",
        explanationCN: "讓我們計算possibleIndex--的執行次數：\n1) j=1：12>4，不移動\n2) j=2：4移動一次（越過12）\n3) j=3：7移動一次（越過12）\n4) j=4：19>12，不移動\n5) j=5：6移動兩次（越過19,12）\n總計：4次移動（possibleIndex--執行）"
    },
    {
        id: 32,
        question: {
            text: "(AP Topic Question-11198)\n\nConsider the following correct implementation of the selection sort algorithm.",
            code: {
                content: `public static void selectionSort(int[] elements)
{
    for(int j = 0; j < elements.length - 1; j++)
    {
        int minIndex = j;
        for(int k = j + 1; k < elements.length; k++)
        {
            if(elements[k] < elements[minIndex])
            {
                minIndex = k; // Line 11
            }
        }
        if(j != minIndex)
        {
            int temp = elements[j];
            elements[j] = elements[minIndex];
            elements[minIndex] = temp;
        }
    }
}`,
                language: "java"
            }
        },
        code: "The following declaration and method call appear in a method in the same class as selectionSort.\n\nint[] vals = {5, 10, 2, 1, 12};\nselectionSort(vals);\n\nHow many times is the statement minIndex = k; in line 11 of the method executed as a result of the call to selectionSort?",
        language: "java",
        options: [
            { text: "A. 0" },
            { text: "B. 1" },
            { text: "C. 2" },
            { text: "D. 3" },
            { text: "E. 4" }
        ],
        correctAnswer: 4,
        explanationEN: "For array [5,10,2,1,12], minIndex = k executes 4 times:\n1) First pass: k=1, minIndex stays at 0\n2) Second pass: k=2, minIndex changes to 2 (2 < 10)\n3) Third pass: k=3, minIndex changes to 3 (1 < 2)\n4) Fourth pass: k=4, minIndex stays at 3\nTotal: 4 executions of minIndex = k",
        explanationCN: "對於數組[5,10,2,1,12]，minIndex = k執行4次：\n1) 第一輪：k=1，minIndex保持在0\n2) 第二輪：k=2，minIndex變為2（2 < 10）\n3) 第三輪：k=3，minIndex變為3（1 < 2）\n4) 第四輪：k=4，minIndex保持在3\n總計：minIndex = k執行4次"
    },
    {
        id: 33,
        question: {
            text: "(AP Exam-11208)\n\nConsider the following two data structures for storing several million words.\n\nI. An array of words, not in any particular order\nII. An array of words, sorted in alphabetical order",
            code: {
                content: "",
                language: "java"
            }
        },
        code: "Which of the following statements most accurately describes the time needed for operations on these data structures?",
        language: "java",
        options: [
            { text: "A. Inserting a word is faster in II than in I." },
            { text: "B. Finding a given word is faster in I than in II." },
            { text: "C. Finding a given word is faster in II than in I." },
            { text: "D. Finding the longest word is faster in II than in I." },
            { text: "E. Finding the first word in alphabetical order is faster in I than in II." }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because:\n1) In an unsorted array (I), finding a word requires checking each element (O(n))\n2) In a sorted array (II), binary search can be used (O(log n))\n3) Other options are incorrect because:\n   - Insertion in sorted array is slower (need to maintain order)\n   - Finding longest word takes same time in both (must check all elements)\n   - Finding first alphabetical word is O(1) in sorted array, O(n) in unsorted",
        explanationCN: "選項C是正確的，因為：\n1) 在未排序數組(I)中，查找單詞需要檢查每個元素(O(n))\n2) 在排序數組(II)中，可以使用二分查找(O(log n))\n3) 其他選項不正確，因為：\n   - 在排序數組中插入更慢（需要維持順序）\n   - 查找最長單詞在兩種情況下都需要相同時間（必須檢查所有元素）\n   - 查找字母順序第一的單詞在排序數組中是O(1)，在未排序數組中是O(n)"
    },
    {
        id: 34,
        question: {
            text: "(2015 Practice Exam-11104)\n\nConsider the following code segment from an insertion sort program.",
            code: {
                content: `for (int j = 1; j < arr.length; j++)
{
    int insertItem = arr[j];
    int k = j - 1;
    
    while (k >= 0 && insertItem < arr[k])
    {
        arr[k + 1] = arr[k];
        k--;
    }
    arr[k + 1] = insertItem;
    /* end of for loop */
}`,
                language: "java"
            }
        },
        code: "Assume that array arr has been defined and initialized with the values [5, 4, 3, 2, 1]. What are the values in array arr after two passes of the for loop (i.e., when j = 2 at the point indicated by /* end of for loop */ )?",
        language: "java",
        options: [
            { text: "A. [2, 3, 4, 5, 1]" },
            { text: "B. [3, 2, 1, 4, 5]" },
            { text: "C. [3, 4, 5, 2, 1]" },
            { text: "D. [3, 5, 2, 3, 1]" },
            { text: "E. [5, 3, 4, 2, 1]" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's track the array after each pass:\n1) First pass (j=1):\n   - insertItem = 4\n   - Compare with 5, shift 5 right\n   - Place 4: [4,5,3,2,1]\n2) Second pass (j=2):\n   - insertItem = 3\n   - Compare with 5, shift 5 right\n   - Compare with 4, shift 4 right\n   - Place 3: [3,4,5,2,1]\nTherefore, after two passes, the array is [3,4,5,2,1]",
        explanationCN: "讓我們追蹤每一輪後的數組狀態：\n1) 第一輪 (j=1)：\n   - insertItem = 4\n   - 與5比較，5右移\n   - 放置4：[4,5,3,2,1]\n2) 第二輪 (j=2)：\n   - insertItem = 3\n   - 與5比較，5右移\n   - 與4比較，4右移\n   - 放置3：[3,4,5,2,1]\n因此，兩輪後數組為[3,4,5,2,1]"
    },
    {
        id: 35,
        question: {
            text: "(AP Course and Exam Description-11158)\n\nThe following sort method correctly sorts the integers in elements into ascending order",
            code: {
                content: `public static void sort(int[] elements)
{
    for (int j = 0; j < elements.length - 1; j++)
    {
        int index = j;
        for (int k = j + 1; k < elements.length; k++)
        {
            if (elements[k] < elements[index])
            {
                index = k;
            }
        }
        int temp = elements[j];
        elements[j] = elements[index];
        elements[index] = temp;
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following changes to the sort method would correctly sort the integers in elements into descending order?\n\nI. Replace line 9 with:\n   if (elements[k] > elements[index])\n\nII. Replace lines 15-17 with:\n    int temp = elements[index];\n    elements[index] = elements[j];\n    elements[j] = temp;\n\nIII. Replace line 3 with:\n     for (int j = elements.length - 1; j > 0; j--)\n     and replace line 7 with:\n     for (int k = j - 1; k >= 0; k--)",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. I and II only" },
            { text: "D. I and III only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 3,
        explanationEN: "To sort in descending order, we need options I and III. Option I changes the comparison to select larger elements, and option III changes the loop direction to build the array from right to left. Option II alone won't affect the sorting order.",
        explanationCN: "要按降序排序，我們需要選項I和III。選項I更改比較以選擇更大的元素，選項III更改循環方向以從右到左構建數組。單獨的選項II不會影響排序順序。"
    },
    {
        id: 36,
        question: {
            text: "(AP Exam-11324)\n\nConsider the static method selectSort shown below. Method selectSort is intended to sort an array into increasing order; however, it does not always work as intended.",
            code: {
                content: `// precondition: numbers.length > 0
// postcondition: numbers is sorted in increasing order
public static void selectSort(int[] numbers)
{
    int temp;
    for(int j = 0; j < numbers.length - 1; j++)             //Line 1
    {
        int pos = j;                                        //Line 2
        for(int k = j + 1; k < numbers.length; k++)         //Line 3
        {
            if(numbers[k] < numbers[pos])                  //Line 4
            {
                pos = k;                                   //Line 5
            }
        }
        temp = numbers[j];
        numbers[j] = numbers[pos];
        numbers[pos] = temp;
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following changes should be made so that selectSort will work as intended?",
        language: "java",
        options: [
            { text: "A. Line 1 should be changed to\nfor (int j = 0; j < numbers.length - 2; j++)" },
            { text: "B. Line 2 should be changed to\nint pos = j;" },
            { text: "C. Line 3 should be changed to\nfor (int k = 0; k < numbers.length; k++)" },
            { text: "D. Line 4 should be changed to\nif (numbers[k] > numbers[pos])" },
            { text: "E. Line 5 should be changed to\nk = pos;" }
        ],
        correctAnswer: 1,
        explanationEN: "The error in the selectSort method is that pos is initialized to 0 in each iteration. This means it always starts comparing with the first element instead of the current position j. To fix this, pos should be initialized to j so that we only look for the minimum element in the unsorted portion of the array. The other options are incorrect because:\nA) Changing the outer loop bound would miss the last comparison\nC) Starting k from 0 would recheck already sorted elements\nD) Using > would sort in descending order\nE) Setting k to pos would skip elements in the inner loop",
        explanationCN: "selectSort方法的錯誤在於每次迭代都將pos初始化為0。這意味著它總是從第一個元素開始比較，而不是從當前位置j開始。要修復這個問題，應該將pos初始化為j，這樣我們只在數組的未排序部分尋找最小元素。其他選項不正確，因為：\nA) 改變外層循環邊界會漏掉最後一次比較\nC) 從0開始k會重新檢查已經排序的元素\nD) 使用>會按降序排序\nE) 將k設置為pos會在內層循環中跳過元素"
    },
    {
        id: 37,
        question: {
            text: "(AP Exam-11341)\n\nConsider the following method.",
            code: {
                content: `public static void sort(String[] arr)
{
    for(int pass = arr.length - 1; pass >= 1; pass--)
    {
        String large = arr[0];
        int index = 0;
        for(int k = 0; k <= pass; k++)
        {
            if((arr[k].compareTo(large)) > 0)
            {
                large = arr[k];
                index = k;
            }
        }
        arr[index] = arr[pass];
        arr[pass] = large;
    }
}`,
                language: "java"
            }
        },
        code: "Assume arr is the following array.\n\n[\"Ann\" \"Mike\" \"Walt\" \"Lisa\" \"Shari\" \"Jose\" \"Mary\" \"Bill\"]\n\nWhat is the intermediate value of arr after two iterations of the outer for loop in the call sort(arr)?",
        language: "java",
        options: [
            { text: "A. [\"Ann\" \"Mike\" \"Walt\" \"Lisa\" \"Shari\" \"Jose\" \"Mary\" \"Bill\"]" },
            { text: "B. [\"Ann\" \"Mike\" \"Lisa\" \"Shari\" \"Jose\" \"Mary\" \"Bill\" \"Walt\"]" },
            { text: "C. [\"Ann\" \"Bill\" \"Jose\" \"Lisa\" \"Mary\" \"Mike\" \"Shari\" \"Walt\"]" },
            { text: "D. [\"Ann\" \"Mike\" \"Bill\" \"Lisa\" \"Mary\" \"Jose\" \"Shari\" \"Walt\"]" },
            { text: "E. [\"Walt\" \"Shari\" \"Ann\" \"Lisa\" \"Mike\" \"Jose\" \"Mary\" \"Bill\"]" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's track the array after each iteration:\n1) First pass (pass = 7):\n   - Finds largest element 'Walt'\n   - Swaps 'Walt' with last element -> [\"Ann\" \"Mike\" \"Lisa\" \"Shari\" \"Jose\" \"Mary\" \"Bill\" \"Walt\"]\n2) Second pass (pass = 6):\n   - Array stays the same as no larger element found\nTherefore, after two iterations, the array is [\"Ann\" \"Mike\" \"Lisa\" \"Shari\" \"Jose\" \"Mary\" \"Bill\" \"Walt\"]",
        explanationCN: "讓我們追蹤每次迭代後的數組狀態：\n1) 第一輪 (pass = 7)：\n   - 找到最大元素 'Walt'\n   - 將 'Walt' 與最後一個元素交換 -> [\"Ann\" \"Mike\" \"Lisa\" \"Shari\" \"Jose\" \"Mary\" \"Bill\" \"Walt\"]\n2) 第二輪 (pass = 6)：\n   - 數組保持不變，因為沒有找到更大的元素\n因此，兩次迭代後，數組為 [\"Ann\" \"Mike\" \"Lisa\" \"Shari\" \"Jose\" \"Mary\" \"Bill\" \"Walt\"]"
    },
    {
        id: 38,
        question: {
            text: "(2015 Practice Exam-11342)\n\nConsider the following sort method. This method correctly sorts the elements of array data into increasing order.",
            code: {
                content: `public static void sort(int[] data)
{
    for (int j = 0; j < data.length - 1; j++)
    {
        int m = j;
        for (int k = j + 1; k < data.length; k++)
        {
            if (data[k] < data[m])    /* Compare values */
            {
                m = k;
            }
        }
        int temp = data[m];           /* Assign to temp */
        data[m] = data[j];
        data[j] = temp;
    }
}`,
                language: "java"
            }
        },
        code: "Assume that sort is called with the array {6, 3, 2, 5, 4, 1}. What will the value of data be after three passes of the outer loop (i.e., when j = 2 at the point indicated by /* End of outer loop */ )?",
        language: "java",
        options: [
            { text: "A. {1, 2, 3, 4, 5, 6}" },
            { text: "B. {1, 2, 3, 5, 4, 6}" },
            { text: "C. {1, 2, 3, 6, 5, 4}" },
            { text: "D. {1, 3, 2, 4, 5, 6}" },
            { text: "E. {1, 3, 2, 5, 4, 6}" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's track the array after each pass:\n1) First pass (j=0):\n   - Finds smallest (1) and swaps with 6 -> [1,3,2,5,4,6]\n2) Second pass (j=1):\n   - Finds smallest remaining (2) and swaps with 3 -> [1,2,3,5,4,6]\n3) Third pass (j=2):\n   - 3 is already smallest remaining, no swap needed -> [1,2,3,6,5,4]\nTherefore, after three passes, the array is [1,2,3,6,5,4]",
        explanationCN: "讓我們追蹤每一輪後的數組狀態：\n1) 第一輪 (j=0)：\n   - 找到最小值(1)並與6交換 -> [1,3,2,5,4,6]\n2) 第二輪 (j=1)：\n   - 找到剩餘最小值(2)並與3交換 -> [1,2,3,5,4,6]\n3) 第三輪 (j=2)：\n   - 3已經是剩餘最小值，不需要交換 -> [1,2,3,6,5,4]\n因此，三輪後數組為[1,2,3,6,5,4]"
    },
    {
        id: 39,
        question: {
            text: "(2015 Practice Exam-11343)\n\nConsider the following sort method. This method correctly sorts the elements of array data into increasing order.",
            code: {
                content: `public static void sort(int[] data)
{
    for (int j = 0; j < data.length - 1; j++)
    {
        int m = j;
        for (int k = j + 1; k < data.length; k++)
        {
            if (data[k] < data[m])    /* Compare values */
            {
                m = k;
            }
        }
        int temp = data[m];           /* Assign to temp */
        data[m] = data[j];
        data[j] = temp;
    }
}`,
                language: "java"
            }
        },
        code: "Assume that sort is called with the array {1, 2, 3, 4, 5, 6}. How many times will the expression indicated by /* Compare values */ and the statement indicated by /* Assign to temp */ execute?",
        language: "java",
        options: [
            { text: "A. 15 0" },
            { text: "B. 15 5" },
            { text: "C. 15 6" },
            { text: "D. 21 5" },
            { text: "E. 21 6" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze:\n1) Compare values executes:\n   - j=0: 5 comparisons\n   - j=1: 4 comparisons\n   - j=2: 3 comparisons\n   - j=3: 2 comparisons\n   - j=4: 1 comparison\n   Total: 15 comparisons\n2) Assign to temp executes:\n   - Once per outer loop iteration\n   - 5 assignments total (j goes from 0 to 4)\nTherefore: 15 comparisons, 5 assignments",
        explanationCN: "讓我們分析：\n1) 比較值的執行次數：\n   - j=0：5次比較\n   - j=1：4次比較\n   - j=2：3次比較\n   - j=3：2次比較\n   - j=4：1次比較\n   總計：15次比較\n2) 賦值給temp的執行次數：\n   - 外層循環每次迭代執行一次\n   - 總共5次賦值（j從0到4）\n因此：15次比較，5次賦值"
    },
    {
        id: 40,
        question: {
            text: "(AP Exam-11344)\n\nThe following incomplete method is intended to sort its array parameter arr in increasing order.",
            code: {
                content: `// postcondition: arr is sorted in increasing order
public static void sortArray(int[] arr)
{
    int j, k;
    for(j = arr.length - 1; j > 0; j--)
    {
        int pos = j;
        for(/* missing code */)
        {
            if(arr[k] > arr[pos])
            {
                pos = k;
            }
        }
        swap(arr, j, pos);
    }
}`,
                language: "java"
            }
        },
        code: "Assume that swap(arr, j, pos) exchanges the values of arr[j] and arr[pos]. Which of the following could be used to replace /* missing code */ so that executing the code segment sorts the values in array arr?",
        language: "java",
        options: [
            { text: "A. k = j - 1; k > 0; k--" },
            { text: "B. k = j - 1; k >= 0; k--" },
            { text: "C. k = 1; k < arr.length; k++" },
            { text: "D. k = 1; k > arr.length; k++" },
            { text: "E. k = 0; k <= arr.length; k++" }
        ],
        correctAnswer: 1,
        explanationEN: "Option B is correct because:\n1) The outer loop processes from right to left (j starts at length-1)\n2) For each j, we need to find the largest element in positions 0 to j-1\n3) Therefore, k should:\n   - Start at j-1 (position before current j)\n   - Continue while k >= 0 (include first element)\n   - Decrement k (move towards start)\nOther options fail because:\nA) Misses index 0\nC,D,E) Wrong direction or bounds",
        explanationCN: "選項B是正確的，因為：\n1) 外層循環從右向左處理（j從length-1開始）\n2) 對於每個j，我們需要在0到j-1位置找到最大元素\n3) 因此，k應該：\n   - 從j-1開始（當前j之前的位置）\n   - 當k >= 0時繼續（包括第一個元素）\n   - 遞減k（向起始位置移動）\n其他選項錯誤因為：\nA) 漏掉了索引0\nC,D,E) 方向或邊界錯誤"
    }
]
