import { QuizQuestion } from "../commonTypes";

export const TdChapter6Questions: QuizQuestion[] = [
    {
        id: 1,
        question: {
            text: "(AP Topic Question-10980)\n\nConsider the following method.",
            code: {
                content: `
public void changeIt(int[] arr, int index, int newValue)
{
    arr[index] += newValue;
}
                `,
                language: "java"
            }
        },
        code: "Which of the following code segments, if located in a method in the same class as changeIt, will cause the array myArray to contain [0, 5, 0, 0]?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `int[] myArray = new int[4];
changeIt(myArray, 1, 5);`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `int[] myArray = new int[4];
changeIt(myArray, 2, 5);`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `int[] myArray = new int[4];
changeIt(myArray, 5, 1);`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `int[] myArray = new int[5];
changeIt(myArray, 1, 4);`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `int[] myArray = new int[5];
changeIt(myArray, 1, 5);`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 0,
        explanationEN: "Option A is correct because: 1) new int[4] creates an array of length 4 initialized to [0,0,0,0], 2) changeIt(myArray, 1, 5) adds 5 to the element at index 1, resulting in [0,5,0,0]. The other options are incorrect because: B) modifies index 2, C) tries to access invalid index 5, D&E) create arrays of wrong length 5.",
        explanationCN: "選項A是正確的，因為：1) new int[4]創建一個長度為4的數組並初始化為[0,0,0,0]，2) changeIt(myArray, 1, 5)將索引1處的元素加5，結果為[0,5,0,0]。其他選項不正確，因為：B) 修改索引2，C) 嘗試訪問無效的索引5，D和E) 創建了錯誤長度5的數組。"
    },
    {
        id: 2,
        question: {
            text: "(AP Topic Question-11237)\n\nConsider the following method.",
            code: {
                content: `
public static int getValue(int[] data, int j, int k)
{
    return data[j] + data[k];
}
            `,
                language: "java"
            }
        },
        code: "Which of the following code segments, when appearing in another method in the same class as getValue, will print the value 70?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `int arr = {40, 30, 20, 10, 0};
System.out.println(getValue(arr, 1, 2));`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `int[] arr = {40, 30, 20, 10, 0};
System.out.println(getValue(arr, 1, 2));`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `int[] arr = {50, 40, 30, 20, 10};
System.out.println(getValue(arr, 1, 2));`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `int arr = {40, 30, 20, 10, 0};
System.out.println(getValue(arr, 2, 1));`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `int arr = {50, 40, 30, 20, 10};
System.out.println(getValue(arr, 2, 1));`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 2,
        explanationEN: "Option B is correct because: 1) It correctly declares an array using int[] arr, 2) The array {40, 30, 20, 10, 0} with getValue(arr, 1, 2) will return data[1] + data[2] = 30 + 20 = 50. The other options are incorrect because: A) incorrect array declaration syntax, C) wrong values in array, D) incorrect array declaration and wrong indices, E) wrong values and indices.",
        explanationCN: "選項B是正確的，因為：1) 正確使用int[] arr聲明數組，2) 數組{40, 30, 20, 10, 0}使用getValue(arr, 1, 2)將返回data[1] + data[2] = 30 + 20 = 50。其他選項不正確，因為：A) 數組聲明語法錯誤，C) 數組值錯誤，D) 數組聲明錯誤且索引錯誤，E) 值和索引都錯誤。"
    },
    {
        id: 3,
        question: {
            text: "(AP Topic Question-11218)\n\nConsider the following method.",
            code: {
                content: `
public int[] addNum(int[] array, int first, int second, int num)
{
    int[] newArray = new int[array.length];
    newArray[first] = array[first] + num;
    newArray[second] = array[second] + num;
    return newArray;
}
            `,
                language: "java"
            }
        },
        code: "Which of the following code segments, appearing in the same class as the addNum method, will result in array2 having the contents {0, 0, 13, 0, 9, 0, 0}?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `int[] array1 = {5, 2, 8, 6, 4, 3, 9};
int[] array2 = addNum(array1, 2, 4, 5);`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `int[] array1 = {-5, -5, 13, 0, 9, 0, 0};
int[] array2 = addNum(array1, 2, 4, 5);`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `int[] array1 = {5, 2, 8, 6, 4, 3, 9};
int[] array2 = addNum(array1, 3, 5, 5);`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `int[] array1 = {5, 8, 2, 4, 6, 3, 9};
int[] array2 = addNum(array1, 2, 4, 5);`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `int[] array1 = {0, -5, 8, 0, 9, 0, 0};
int[] array2 = addNum(array1, 2, 4, 5);`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 0,
        explanationEN: "Option B is correct because: 1) The addNum method creates a new array of the same length initialized to all zeros, 2) Then it only modifies elements at indices first and second by adding num to the values from the original array, 3) With array1 = {-5, -5, 13, 0, 9, 0, 0} and addNum(array1, 2, 4, 5), the new array will keep 13 at index 2 and 9 at index 4, resulting in {0, 0, 13, 0, 9, 0, 0}.",
        explanationCN: "選項B是正確的，因為：1) addNum方法創建一個相同長度的新數組並初始化為全0，2) 然後它只修改first和second索引處的元素，將num加到原數組的對應值上，3) 使用array1 = {-5, -5, 13, 0, 9, 0, 0}和addNum(array1, 2, 4, 5)，新數組將在索引2保持13，在索引4保持9，結果為{0, 0, 13, 0, 9, 0, 0}。"
    },
    {
        id: 4,
        question: {
            text: "(AP Exam-10898)\n\nThe following question is based on the following incomplete declaration of the class BoundedIntArray and its constructor definitions.\n\nA BoundedIntArray represents an indexed list of integers. In a BoundedIntArray the user can specify a size, in which case the indices range from 0 to size - 1. The user can also specify the lowest index, low, in which case the indices can range from low to low + size - 1.",
            code: {
                content: `
public class BoundedIntArray
{
    private int[] myItems; // storage for the list
    private int myLowIndex; // lowest index

    public BoundedIntArray(int size)
    {
        myItems = new int[size];
        myLowIndex = 0;
    }

    public BoundedIntArray(int size, int low)
    {
        myItems = new int[size];
        myLowIndex = low;
    }

    // other methods not shown
}`,
                language: "java"
            }
        },
        code: "Consider the following statements.\n\nBoundedIntArray arr1 = new BoundedIntArray(100, 5);\nBoundedIntArray arr2 = new BoundedIntArray(100);\n\nWhich of the following best describes arr1 and arr2 after these statements?",
        language: "java",
        options: [
            { text: "A. arr1 and arr2 both represent lists of integers indexed from 0 to 99." },
            { text: "B. arr1 and arr2 both represent lists of integers indexed from 5 to 104." },
            { text: "C. arr1 represents a list of integers indexed from 0 to 104, and arr2 represents a list of integers indexed from 0 to 99." },
            { text: "D. arr1 represents a list of integers indexed from 5 to 99, and arr2 represents a list of integers indexed from 0 to 99." },
            { text: "E. arr1 represents a list of integers indexed from 5 to 104, and arr2 represents a list of integers indexed from 0 to 99." }
        ],
        correctAnswer: 4,
        explanationEN: "Option E is correct because: 1) For arr1 = new BoundedIntArray(100, 5): size is 100 and low index is 5, so indices range from 5 to 5+100-1 = 104, 2) For arr2 = new BoundedIntArray(100): size is 100 and default low index is 0, so indices range from 0 to 99. The other options are incorrect because they either misinterpret the size parameter or the effect of the low index parameter.",
        explanationCN: "選項E是正確的，因為：1) 對於arr1 = new BoundedIntArray(100, 5)：大小為100且最低索引為5，所以索引範圍從5到5+100-1 = 104，2) 對於arr2 = new BoundedIntArray(100)：大小為100且默認最低索引為0，所以索引範圍從0到99。其他選項不正確，因為它們要麼誤解了size參數，要麼誤解了low索引參數的效果。"
    },
    {
        id: 5,
        question: {
            text: "(AP Exam-10899)\n\nWhich of the following is the best reason for declaring the data fields myItems and myLowIndex to be private rather than public?",
            code: {
                content: "",
                language: "java"
            }
        },
        code: "",
        language: "java",
        options: [
            { text: "A. This permits BoundedIntArray objects to be initialized and modified." },
            { text: "B. This permits BoundedIntArray methods to be written and tested before code that uses a BoundedIntArray is written." },
            { text: "C. This helps to prevent clients of the BoundedIntArray class from writing code that would need to be modified if the implementation of BoundedIntArray were changed." },
            { text: "D. This prevents compile-time errors whenever public methods are called that access the private data fields." },
            { text: "E. This prevents run-time errors whenever public methods are called that access the private data fields." }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because encapsulation (making data fields private) helps maintain the independence between the class implementation and client code. If the internal implementation changes, client code that only uses public methods won't need modification. The other options are incorrect because: A) Access modifiers don't affect object initialization, B) Testing can be done regardless of access modifiers, D) Private fields don't prevent compile-time errors in public methods, E) Private fields don't prevent run-time errors in public methods.",
        explanationCN: "選項C是正確的，因為封裝（將數據字段設為私有）有助於維護類實現和客戶端代碼之間的獨立性。如果內部實現發生變化，只使用公共方法的客戶端代碼不需要修改。其他選項不正確，因為：A) 訪問修飾符不影響對象初始化，B) 無論訪問修飾符如何都可以進行測試，D) 私有字段不會阻止公共方法中的編譯時錯誤，E) 私有字段不會阻止公共方法中的運行時錯誤。"
    },
    {
        id: 6,
        question: {
            text: "(AP Exam-10925)\n\nConsider the following two methods that appear within a single class.",
            code: {
                content: `
public void changeIt(int[] list, int num)
{
    list = new int[5];
    num = 0;
    for(int x = 0; x < list.length; x++)
        list[x] = 0;
}

public void start()
{
    int[] nums = {1, 2, 3, 4, 5};
    int value = 6;
    changeIt(nums, value);
    for(int x = 0; x < nums.length; x++)
        System.out.print(nums[x] + " ");
    System.out.print(value);
}
            `,
                language: "java"
            }
        },
        code: "What is printed as a result of the call start()?",
        language: "java",
        options: [
            { text: "A. 0 0 0 0 0 0" },
            { text: "B. 0 0 0 0 0 6" },
            { text: "C. 1 2 3 4 5 6" },
            { text: "D. 1 2 3 4 5 0" },
            { text: "E. changeIt will throw an exception." }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because: 1) In Java, arrays are passed by reference but reassignment in a method doesn't affect the original reference, 2) When changeIt(nums, value) is called, the line 'list = new int[5]' creates a new array but doesn't affect nums, 3) Similarly, 'num = 0' doesn't affect value because primitives are passed by value, 4) Therefore, nums and value remain unchanged, and the output will be '1 2 3 4 5 6'.",
        explanationCN: "選項C是正確的，因為：1) 在Java中，數組是通過引用傳遞的，但在方法中重新賦值不會影響原始引用，2) 當調用changeIt(nums, value)時，'list = new int[5]'創建了一個新數組但不影響nums，3) 同樣，'num = 0'不會影響value因為基本類型是按值傳遞的，4) 因此，nums和value保持不變，輸出將是'1 2 3 4 5 6'。"
    },
    {
        id: 7,
        question: {
            text: "(AP Course and Exam Description-11384)\n\nDirections: Select the choice that best fits each statement. The following question(s) refer to the following incomplete class declaration.",
            code: {
                content: `
public class TimeRecord
{
    private int hours;
    private int minutes; // 0 ≤ minutes < 60

    /** Constructs a TimeRecord object.
     *  @param h the number of hours
     *       Precondition: h ≥ 0
     *  @param m the number of minutes
     *       Precondition: 0 ≤ m < 60
     */
    public TimeRecord(int h, int m)
    {
        hours = h;
        minutes = m;
    }

    /** @return the number of hours
     */
    public int getHours()
    { /* implementation not shown */ }

    /** @return the number of minutes
     *  Postcondition: 0 ≤ minutes < 60
     */
    public int getMinutes()
    { /* implementation not shown */ }

    /** Adds h hours and m minutes to this TimeRecord.
     *  @param h the number of hours
     *       Precondition: h ≥ 0
     *  @param m the number of minutes
     *       Precondition: m ≥ 0
     */
    public void advance(int h, int m)
    {
        hours = hours + h;
        minutes = minutes + m;
        /* missing code */
    }

    // Other methods not shown
}`,
                language: "java"
            }
        },
        code: "Consider the following declaration that appears in a class other than TimeRecord.\n\nTimeRecord[] timeCards = new TimeRecord[100];\n\nAssume that timeCards has been initialized with TimeRecord objects. Consider the following code segment that is intended to compute the total of all the times stored in timeCards.\n\nTimeRecord total = new TimeRecord(0,0);\nfor (int k = 0; k < timeCards.length; k++)\n{\n    /* missing expression */;\n}\n\nWhich of the following can be used to replace /* missing expression */ so that the code segment will work as intended?",
        language: "java",
        options: [
            { text: "A. timeCards[k].advance()" },
            { text: "B. total += timeCards[k].advance()" },
            { text: "C. total.advance(timeCards[k].hours, timeCards[k].minutes)" },
            { text: "D. total.advance(timeCards[k].getHours(), timeCards[k].getMinutes())" },
            { text: "E. timeCards[k].advance(timeCards[k].getHours(), timeCards[k].getMinutes())" }
        ],
        correctAnswer: 3,
        explanationEN: "Option D is correct because: 1) It correctly uses the advance method to add hours and minutes to the total, 2) It properly accesses the hours and minutes through the public getter methods instead of trying to access private variables directly, 3) The advance method is called on the total object, which is what we want to accumulate the times into. The other options are incorrect because: A) advance needs parameters, B) can't use += with void method, C) tries to access private variables directly, E) advances each timeCard instead of the total.",
        explanationCN: "選項D是正確的，因為：1) 它正確使用advance方法來將小時和分鐘加到總數中，2) 它通過公共getter方法正確訪問小時和分鐘，而不是試圖直接訪問私有變量，3) advance方法在total對象上調用，這正是我們想要累積時間的對象。其他選項不正確，因為：A) advance需要參數，B) 不能對void方法使用+=，C) 試圖直接訪問私有變量，E) 更新每個timeCard而不是total。"
    },
    {
        id: 8,
        question: {
            text: "(AP Topic Question-11012)\n\nThe method countTarget below is intended to return the number of times the value target appears in the array arr. The method may not work as intended.",
            code: {
                content: `
public int countTarget(int[] arr, int target)
{
    int count = 0;
    for(int j = 0; j <= arr.length; j++) // line 4
    {
        if(arr[j] == target)
        {
            count++;
        }
    }
    return count;
}`,
                language: "java"
            }
        },
        code: "Which of the following changes, if any, can be made to line 4 so that the method will work as intended?",
        language: "java",
        options: [
            { text: "A. Changing int j = 0; to int j = 1;" },
            { text: "B. Changing j <= arr.length; to j < arr.length;" },
            { text: "C. Changing j <= arr.length; to j < arr.length - 1;" },
            { text: "D. Changing j <= arr.length; to j < arr.length + 1;" },
            { text: "E. No change is necessary; the method works correctly as is." }
        ],
        correctAnswer: 1,
        explanationEN: "Option B is correct because: 1) Array indices in Java run from 0 to length-1, 2) The current condition j <= arr.length will cause an ArrayIndexOutOfBoundsException when j equals arr.length, 3) Changing to j < arr.length ensures we only access valid array indices. The other options are incorrect because: A) would miss the first element, C) would miss the last element, D) would still cause an exception, E) current code will throw an exception.",
        explanationCN: "選項B是正確的，因為：1) Java中的數組索引從0到length-1，2) 當前條件j <= arr.length會在j等於arr.length時導致ArrayIndexOutOfBoundsException，3) 改為j < arr.length確保我們只訪問有效的數組索引。其他選項不正確，因為：A) 會漏掉第一個元素，C) 會漏掉最後一個元素，D) 仍會導致異常，E) 當前代碼會拋出異常。"
    },
    {
        id: 9,
        question: {
            text: "(AP Topic Question-11016)\n\nConsider the following code segment, which is intended to print the sum of all elements of an array.",
            code: {
                content: `
int[] arr = {10, 5, 1, 20, 6, 25};
int sum = 0;
for(int k = 0; k < arr.length; k++)
{
    sum += arr[k];
}
System.out.println("The sum is " + sum);`,
                language: "java"
            }
        },
        code: "A runtime error occurs when the code segment is executed. Which of the following changes should be made so that the code segment works as intended?",
        language: "java",
        options: [
            { text: "A. The for loop header should be replaced with for(int k = 0; k < arr.length; k++)." },
            { text: "B. The for loop header should be replaced with for(int k = 0; k <= arr.length; k--)." },
            { text: "C. The for loop header should be replaced with for(int k = 1; k <= arr.length-1; k++)." },
            { text: "D. The statement in the body of the for loop should be replaced with sum += arr[0]." },
            { text: "E. The statement in the body of the for loop should be replaced with sum += arr[k - 1]." }
        ],
        correctAnswer: 0,
        explanationEN: "Option A is correct because it's actually the same as the original code and would work correctly. The premise of the question stating that a runtime error occurs is incorrect - the original code is perfectly valid. The other options are incorrect because: B) would cause infinite loop and array bounds error, C) would miss first element, D) would only add first element repeatedly, E) would cause array bounds error for k=0.",
        explanationCN: "選項A是正確的，因為它實際上與原始代碼相同且可以正確工作。題目中說會發生運行時錯誤的前提是不正確的 - 原始代碼完全有效。其他選項不正確，因為：B) 會導致無限循環和數組越界錯誤，C) 會漏掉第一個元素，D) 只會重複添加第一個元素，E) 當k=0時會導致數組越界錯誤。"
    },
    {
        id: 10,
        question: {
            text: "(AP Topic Question-11159)\n\nConsider the following code segment.",
            code: {
                content: `
int[] arr = {1, 2, 3, 4, 5, 6, 7};
for(int i = 1; i < arr.length; i += 2)
{
    arr[i] = arr[i - 1];
}`,
                language: "java"
            }
        },
        code: "Which of the following represents the contents of the array arr after the code segment is executed?",
        language: "java",
        options: [
            { text: "A. {0, 1, 2, 3, 4, 5, 6}" },
            { text: "B. {1, 1, 1, 1, 1, 1, 1}" },
            { text: "C. {1, 1, 3, 3, 5, 5, 7}" },
            { text: "D. {1, 2, 3, 4, 5, 6, 7}" },
            { text: "E. {2, 2, 4, 4, 6, 6, 7}" }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because: 1) The loop starts at i=1 and increments by 2, so it affects indices 1,3,5, 2) For i=1: arr[1] becomes arr[0]=1, 3) For i=3: arr[3] becomes arr[2]=3, 4) For i=5: arr[5] becomes arr[4]=5, 5) Final array is {1,1,3,3,5,5,7}. The other options show incorrect patterns that don't match how the loop modifies the array.",
        explanationCN: "選項C是正確的，因為：1) 循環從i=1開始並每次加2，所以影響索引1,3,5，2) 當i=1時：arr[1]變成arr[0]=1，3) 當i=3時：arr[3]變成arr[2]=3，4) 當i=5時：arr[5]變成arr[4]=5，5) 最終數組是{1,1,3,3,5,5,7}。其他選項顯示的模式與循環修改數組的方式不符。"
    },
    {
        id: 11,
        question: {
            text: "(AP Topic Question-11405)\n\nConsider the following code segment.",
            code: {
                content: `
int[] arr = {3, 1, 0, 4, 2};
for(int j = 0; j < arr.length; j++)
{
    System.out.print(arr[j] + j + " ");
}`,
                language: "java"
            }
        },
        code: "What, if anything, is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 3 1 0 4 2" },
            { text: "B. 3 2 2 7 6" },
            { text: "C. 6 2 0 8 4" },
            { text: "D. 7 2 3 6 2" },
            { text: "E. Nothing is printed, because an ArrayIndexOutOfBoundsException is thrown." }
        ],
        correctAnswer: 1,
        explanationEN: "Option B is correct because: 1) For each index j, the code prints arr[j] + j, 2) When j=0: 3+0=3, 3) When j=1: 1+1=2, 4) When j=2: 0+2=2, 5) When j=3: 4+3=7, 6) When j=4: 2+4=6, 7) So the output is '3 2 2 7 6'. The other options either show the original array values or incorrect calculations.",
        explanationCN: "選項B是正確的，因為：1) 對於每個索引j，代碼打印arr[j] + j，2) 當j=0時：3+0=3，3) 當j=1時：1+1=2，4) 當j=2時：0+2=2，5) 當j=3時：4+3=7，6) 當j=4時：2+4=6，7) 所以輸出是'3 2 2 7 6'。其他選項要麼顯示原始數組值，要麼計算錯誤。"
    },
    {
        id: 12,
        question: {
            text: "(AP Topic Question-10855)\n\nConsider the following method.",
            code: {
                content: `
public static void addOneToEverything(int[] numbers)
{
    for(int j = 0; j < numbers.length; j++)
    {
        numbers[j]++;
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following code segments, if any, can be used to replace the body of the method so that numbers will contain the same values?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. I and III only" },
            { text: "C. II and III only" },
            { text: "D. I, II, and III" },
            { text: "E. None of the code segments will return an equivalent result." }
        ],
        correctAnswer: 4,
        explanationEN: "Option E is correct because none of the suggested replacements would work correctly:\n\n1) Code segment I (for(int num: numbers) { num++; }) uses a for-each loop where num is just a copy of each array element, so incrementing num doesn't modify the array\n\n2) Code segment II (for(int num: numbers) { num[j]++; }) is syntactically incorrect as num is an int, not an array\n\n3) Code segment III (for(int num: numbers) { numbers[num]++; }) tries to use the array values as indices, which would cause incorrect modifications and likely an ArrayIndexOutOfBoundsException\n\nThe original implementation is the correct way to increment each element in the array.",
        explanationCN: "選項E是正確的，因為所有建議的替換方案都不能正確工作：\n\n1) 代碼段I (for(int num: numbers) { num++; }) 使用for-each循環，其中num只是每個數組元素的副本，所以增加num不會修改數組\n\n2) 代碼段II (for(int num: numbers) { num[j]++; }) 是錯誤的，因為num是int類型，不是數組\n\n3) 代碼段III (for(int num: numbers) { numbers[num]++; }) 試圖將數組值用作索引，這會導致錯誤的修改，並可能導致ArrayIndexOutOfBoundsException\n\n原始實現才是增加數組中每個元素的正確方式。"
    },
    {
        id: 13,
        question: {
            text: "(AP Topic Question-11043)\n\nConsider the following code segment below, where arr is a one-dimensional array of integers.",
            code: {
                content: `
int sum = 0;
for(int n: arr)
{
    sum = sum + 2 * n;
}
System.out.print(sum);`,
                language: "java"
            }
        },
        code: "Which of the following code segments will produce the same output as the code segment above?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `int sum = 0;
for(int k = 0; k < arr.length; k++)
{
    sum = sum + 2 * k;
}
System.out.print(sum);`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `int sum = 0;
for(int k = 0; k <= arr.length; k++)
{
    sum = sum + 2 * k;
}
System.out.print(sum);`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `int sum = 0;
for(int k = 1; k <= arr.length; k++)
{
    sum = sum + 2 * k;
}
System.out.print(sum);`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `int sum = 0;
for(int k = 0; k < arr.length; k++)
{
    sum = sum + 2 * arr[k];
}
System.out.print(sum);`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `int sum = arr[0];
for(int k = 1; k <= arr.length; k++)
{
    sum = sum + 2 * arr[k];
}
System.out.print(sum);`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 3,
        explanationEN: "Option D is correct because: 1) The original code uses a for-each loop to iterate through each element n in arr and adds 2 * n to sum, 2) Option D achieves the same result by using a standard for loop to access each element arr[k] and adds 2 * arr[k] to sum. The other options are incorrect because: A) multiplies by the index k instead of the array element, B) uses incorrect loop bounds and multiplies by index, C) starts at 1 and multiplies by index, E) incorrectly initializes sum and has wrong loop bounds.",
        explanationCN: "選項D是正確的，因為：1) 原始代碼使用for-each循環遍歷arr中的每個元素n並將2 * n加到sum中，2) 選項D通過使用標準for循環訪問每個元素arr[k]並將2 * arr[k]加到sum中來實現相同的結果。其他選項不正確，因為：A) 用索引k而不是數組元素相乘，B) 使用錯誤的循環邊界並與索引相乘，C) 從1開始並與索引相乘，E) 錯誤地初始化sum並有錯誤的循環邊界。"
    },
    {
        id: 14,
        question: {
            text: "(AP Topic Question-11397)\n\nConsider the following code segment.",
            code: {
                content: `
int[] arr = {1, 2, 4, 0, 3};
for(int i: arr)
{
    System.out.print(i);
}`,
                language: "java"
            }
        },
        code: "Which of the following code segments will produce the same output as the code segment above?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. I and II only" },
            { text: "D. I and III only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 1,
        explanationEN: "Option B (II only) is correct because:\n\n1) The original code uses a for-each loop to iterate through arr and print each element directly\n\n2) Code segment I (for(int i: arr) { System.out.print(arr[i]); }) is incorrect because it tries to use the element values as indices into the array, which would print different values and likely cause an ArrayIndexOutOfBoundsException\n\n3) Code segment II (for(int i = 0; i < arr.length; i++) { System.out.print(i); }) correctly iterates through the array indices and prints each element\n\n4) Code segment III (for(int i = 0; i < arr.length; i++) { System.out.print(arr[i]); }) is incorrect because it prints the array elements at each index, which would print the same values as the original code\n\nOnly code segment II will produce the same output as the original code.",
        explanationCN: "選項B（僅II）是正確的，因為：\n\n1) 原始代碼使用for-each循環遍歷arr並直接打印每個元素\n\n2) 代碼段I (for(int i: arr) { System.out.print(arr[i]); }) 是錯誤的，因為它試圖將元素值用作數組的索引，這會打印不同的值，並可能導致ArrayIndexOutOfBoundsException\n\n3) 代碼段II (for(int i = 0; i < arr.length; i++) { System.out.print(i); }) 正確地遍歷數組索引並打印每個元素\n\n4) 代碼段III (for(int i = 0; i < arr.length; i++) { System.out.print(arr[i]); }) 是錯誤的，因為它打印每個索引處的數組元素，這會打印與原始代碼相同的值\n\n只有代碼段II會產生與原始代碼相同的輸出。"
    },
    {
        id: 15,
        question: {
            text: "(AP Course and Exam Description-10835)\n\nConsider the following method.",
            code: {
                content: `
/** Precondition: arr contains only positive values.
 */
public static void doSome(int[] arr, int lim)
{
    int v = 0;
    int k = 0;
    while (k < arr.length && arr[k] < lim)
    {
        if (arr[k] > v)
        {
            v = arr[k];  /* Statement S */
        }
        k++;  /* Statement T */
    }
}
    
/*

    I. lim=5, S executes 0 times, T executes 5 times
    II. lim=7, S executes 4 times, T executes 9 times
    III. lim=3, S executes 5 times, T executes 2 times

*/

`,
                language: "java"
            }
        },
        code: "Assume that doSome is called and executes without error. Which of the following are possible combinations for the value of lim, the number of times Statement S is executed, and the number of times Statement T is executed?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and III only" },
            { text: "E. II and III only" }
        ],
        correctAnswer: 1,
        explanationEN: "Option A (I only) is correct because:\n\n1) For combination I (lim=5, S executes 0 times, T executes 5 times):\n   - If all array elements are >= 5, the while loop will stop immediately (arr[k] < lim is false)\n   - Statement S never executes because arr[k] is never < lim\n   - Statement T never executes because the loop condition fails immediately\n\n2) Combination II (lim=7, S executes 4 times, T executes 9 times) is impossible because:\n   - T must execute the same number of times as the loop iterates\n   - S executes only when arr[k] > v is true\n   - The numbers don't align with possible array traversal patterns\n\n3) Combination III (lim=3, S executes 5 times, T executes 2 times) is impossible because:\n   - T must execute at least as many times as S (since T is the loop increment)\n   - It's impossible for S to execute more times than T",
        explanationCN: "選項A（僅I）是正確的，因為：\n\n1) 對於組合I（lim=5，S執行0次，T執行5次）：\n   - 如果所有數組元素都 >= 5，while循環將立即停止（arr[k] < lim為假）\n   - 語句S從不執行，因為arr[k]永遠不小於lim\n   - 語句T從不執行，因為循環條件立即失敗\n\n2) 組合II（lim=7，S執行4次，T執行9次）是不可能的，因為：\n   - T必須執行與循環迭代相同的次數\n   - S只在arr[k] > v為真時執行\n   - 這些數字與可能的數組遍歷模式不符\n\n3) 組合III（lim=3，S執行5次，T執行2次）是不可能的，因為：\n   - T必須執行至少與S相同的次數（因為T是循環增量）\n   - S不可能執行比T更多的次數"
    },
    {
        id: 16,
        question: {
            text: "(AP Course and Exam Description-10864)\n\nIn the following code segment, assume that the string str has been properly declared and initialized. The code segment is intended to print the number of strings in the array animals that have str as a substring.",
            code: {
                content: `
String[] animals = {"horse", "cow", "goat", "dog", "cat", "mouse"};
int count = 0;
for (int i = 0; i <= animals.length; i++)
{
    if (animals[i].indexOf(str) >= 0)
    {
        count++;
    }
}
System.out.println(count);`,
                language: "java"
            }
        },
        code: "The code segment does not work as intended. Which of the following changes should be made so the code segment works as intended?",
        language: "java",
        options: [
            { text: "A. The Boolean expression in the for loop header should be changed to i < animals.length." },
            { text: "B. The Boolean expression in the for loop header should be changed to i < animals.length - 1." },
            { text: "C. The Boolean expression in the for loop header should be changed to i < animals[i].length." },
            { text: "D. The condition in the if statement should be changed to animals[i].equals(str)." },
            { text: "E. The condition in the if statement should be changed to animals[i].substring(str)." }
        ],
        correctAnswer: 0,
        explanationEN: "Option A is correct because:\n1) The current loop condition i <= animals.length will cause an ArrayIndexOutOfBoundsException when i equals animals.length\n2) Array indices in Java run from 0 to length-1\n3) Changing to i < animals.length ensures we only access valid array indices\n\nThe other options are incorrect because:\nB) Would miss checking the last element\nC) Would use the wrong length (string length instead of array length)\nD) Would only count exact matches, not substrings\nE) substring() method doesn't work this way and would cause compilation error",
        explanationCN: "選項A是正確的，因為：\n1) 當前循環條件i <= animals.length會在i等於animals.length時導致ArrayIndexOutOfBoundsException\n2) Java中的數組索引從0到length-1\n3) 改為i < animals.length確保我們只訪問有效的數組索引\n\n其他選項不正確，因為：\nB) 會漏掉檢查最後一個元素\nC) 會使用錯誤的長度（字符串長度而不是數組長度）\nD) 只會計算完全匹配，而不是子字符串\nE) substring()方法不是這樣工作的，會導致編譯錯誤"
    },
    {
        id: 17,
        question: {
            text: "(2014 Practice Exam-11115)\n\nConsider the following method, isSorted, which is intended to return true if an array of integers is sorted in nondecreasing order and to return false otherwise.",
            code: {
                content: `
/** @param data an array of integers
 *  @return true if the values in the array appear in sorted (nondecreasing) order
 */
public static boolean isSorted(int[] data)
{
    /* missing code */
}
    
/*
I.
for(int k = 1; k < data.length; k++)
{
    if(data[k-1] > data[k])
        return false;
}
return true;

II.
for(int k = 0; k < data.length; k++)
{
    if(data[k] > data[k + 1])
        return false;
}
return true;

III.
for(int k = 0; k < data.length - 1; k++)
{
    if(data[k] > data[k + 1])
        return false;
    else
        return true;
}
        
*/
`,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* missing code */ so that isSorted will work as intended?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and II only" },
            { text: "E. I and III only" }
        ],
        correctAnswer: 0,
        explanationEN: "Option C (III only) is correct because:\n1) Code segment III correctly:\n   - Uses proper bounds (k < data.length - 1)\n   - Compares adjacent elements (data[k] > data[k + 1])\n   - Returns false when out of order\n   - Returns true only after checking all elements\n\nThe other options are incorrect because:\nI) Starts at k=1 and uses k-1, which could miss first element comparison\nII) Uses incorrect bounds that would cause ArrayIndexOutOfBoundsException\n   when checking data[k + 1] at the last element",
        explanationCN: "選項C（僅III）是正確的，因為：\n1) 代碼段III正確地：\n   - 使用適當的邊界（k < data.length - 1）\n   - 比較相鄰元素（data[k] > data[k + 1]）\n   - 當順序錯誤時返回false\n   - 只有在檢查所有元素後才返回true\n\n其他選項不正確，因為：\nI) 從k=1開始並使用k-1，可能會漏掉第一個元素的比較\nII) 使用錯誤的邊界，在檢查最後一個元素的data[k + 1]時會導致ArrayIndexOutOfBoundsException"
    },
    {
        id: 18,
        question: {
            text: "(2014 Practice Exam-11236)\n\nConsider the following code segment.",
            code: {
                content: `
int[] arr = {4, 2, 9, 7, 3};
for(int k: arr)
{
    k = k + 10;
    System.out.print(k + " ");
}
for(int k: arr)
    System.out.print(k + " ");`,
                language: "java"
            }
        },
        code: "What is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 0 1 2 3 4 0 1 2 3 4" },
            { text: "B. 4 2 9 7 3 4 2 9 7 3" },
            { text: "C. 10 11 12 13 14 0 1 2 3 4" },
            { text: "D. 14 12 19 17 13 4 2 9 7 3" },
            { text: "E. 14 12 19 17 13 14 12 19 17 13" }
        ],
        correctAnswer: 3,
        explanationEN: "Option D is correct because:\n1) In the first for-each loop:\n   - k gets each value from arr but is a separate variable\n   - k + 10 is printed for each element (4+10=14, 2+10=12, etc.)\n   - The original array is not modified because k is a copy\n2) In the second for-each loop:\n   - The original, unmodified array values are printed\n   - Output is: 14 12 19 17 13 4 2 9 7 3",
        explanationCN: "選項D是正確的，因為：\n1) 在第一個for-each循環中：\n   - k獲取arr中的每個值但是一個獨立的變量\n   - 對每個元素打印k + 10（4+10=14，2+10=12等）\n   - 原始數組不會被修改因為k是一個副本\n2) 在第二個for-each循環中：\n   - 打印原始的、未修改的數組值\n   - 輸出是：14 12 19 17 13 4 2 9 7 3"
    },
    {
        id: 19,
        question: {
            text: "(AP Course and Exam Description-11348)\n\nConsider an integer array, nums, which has been declared and initialized with one or more integer values.",
            code: {
                content: `
I.
int k = 0;
while(k < nums.length)
{
    nums[k] = nums[k] * nums[k];
}

II.
for(int k = 0; k < nums.length; k++)
{
    nums[k] = nums[k] * nums[k];
}

III.
for(int n: nums)
{
    n = n * n;
}`,
                language: "java"
            }
        },
        code: "Which of the following code segments updates nums so that each element contains the square of its original value?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. I and II only" },
            { text: "C. I and III only" },
            { text: "D. II and III only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 0,
        explanationEN: "Option B (I and II only) is correct because:\n1) Code segment I would work except it's missing k++ in the while loop\n2) Code segment II correctly:\n   - Uses proper array indexing to modify elements\n   - Has correct loop bounds and increment\n3) Code segment III doesn't work because:\n   - In a for-each loop, n is a copy of each element\n   - Modifying n doesn't affect the original array\n\nTherefore, only II will actually update the array correctly.",
        explanationCN: "選項B（I和II）是正確的，因為：\n1) 代碼段I本來可以工作，但缺少while循環中的k++\n2) 代碼段II正確地：\n   - 使用正確的數組索引來修改元素\n   - 有正確的循環邊界和增量\n3) 代碼段III不能工作，因為：\n   - 在for-each循環中，n是每個元素的副本\n   - 修改n不會影響原始數組\n\n因此，只有II會正確地更新數組。"
    },
    {
        id: 20,
        question: {
            text: "(AP Topic Question-11102)\n\nThe code segment below is intended to print the length of the shortest string in the array wordArray. Assume that wordArray contains at least one element.",
            code: {
                content: `
int shortest = /* missing value */;
for(String word: wordArray)
{
    if(word.length() < shortest)
    {
        shortest = word.length();
    }
}
System.out.println(shortest);`,
                language: "java"
            }
        },
        code: "Which of the following should be used as the initial value assigned to shortest so that the code segment works as intended?",
        language: "java",
        options: [
            { text: "A. Integer.MAX_VALUE" },
            { text: "B. Integer.MIN_VALUE" },
            { text: "C. 0" },
            { text: "D. word.length()" },
            { text: "E. wordArray.length" }
        ],
        correctAnswer: 0,
        explanationEN: "Option A (Integer.MAX_VALUE) is correct because:\n1) To find the minimum length, we need to start with a value that's guaranteed to be larger than any possible string length\n2) Integer.MAX_VALUE ensures that the first comparison will always make shortest equal to the first string's length\n3) Subsequent comparisons will correctly update shortest if a shorter string is found\n\nThe other options are incorrect because:\nB) MIN_VALUE would never be replaced as it's smaller than any length\nC) 0 would never be replaced as no string can have negative length\nD) word isn't defined at initialization\nE) Array length isn't related to string lengths",
        explanationCN: "選項A（Integer.MAX_VALUE）是正確的，因為：\n1) 要找到最小長度，我們需要從一個保證比任何可能的字符串長度都大的值開始\n2) Integer.MAX_VALUE確保第一次比較一定會使shortest等於第一個字符串的長度\n3) 後續比較如果找到更短的字符串會正確更新shortest\n\n其他選項不正確，因為：\nB) MIN_VALUE永遠不會被替換，因為它比任何長度都小\nC) 0永遠不會被替換，因為沒有字符串可以有負長度\nD) 在初始化時word未定義\nE) 數組長度與字符串長度無關"
    },
    {
        id: 21,
        question: {
            text: "(AP Topic Question-11148)\n\nOn Sunday night, a meteorologist records predicted daily high temperatures, in degrees Fahrenheit, for the next seven days. At the end of each day, the meteorologist records the actual daily high temperature, in degrees Fahrenheit. At the end of the seven-day period, the meteorologist would like to find the greatest absolute difference between a predicted temperature and a corresponding actual temperature.\n\nConsider the following method, which is intended to return the greatest absolute difference between any pair of corresponding elements in the int arrays pred and act.",
            code: {
                content: `
/** Precondition: pred and act have the same non-zero length. */
public static int diff(int[] pred, int[] act)
{
    int num = Integer.MIN_VALUE;
    for(int i = 0; i < pred.length; i++)
    {
        /* missing code */
    }
    return num;
}`,
                language: "java"
            }
        },
        code: "Which of the following code segments can be used to replace /* missing code */ so that diff will work as intended?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `if (pred[i] < act[i])
{
    num = act[i] - pred[i];
}`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `if (pred[i] > act[i])
{
    num = pred[i] - act[i];
}`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `if (pred[i] - act[i] > num)
{
    num = pred[i] - act[i];
}`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `if (Math.abs(pred[i] - act[i]) < num)
{
    num = Math.abs(pred[i] - act[i]);
}`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `if (Math.abs(pred[i] - act[i]) > num)
{
    num = Math.abs(pred[i] - act[i]);
}`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 4,
        explanationEN: "Option E is correct because:\n1) We need to find the greatest absolute difference between predicted and actual temperatures\n2) Math.abs(pred[i] - act[i]) correctly calculates the absolute difference between corresponding elements\n3) The if condition checks if the current difference is greater than the previous maximum\n4) num is initialized to Integer.MIN_VALUE to ensure the first difference will be stored\n\nThe other options are incorrect because:\nA) Only handles cases where predicted is less than actual\nB) Only handles cases where predicted is greater than actual\nC) Doesn't use absolute value, so negative differences are ignored\nD) Uses < instead of >, so it finds the minimum difference instead of maximum",
        explanationCN: "選項E是正確的，因為：\n1) 我們需要找到預測溫度和實際溫度之間的最大絕對差值\n2) Math.abs(pred[i] - act[i])正確計算對應元素之間的絕對差值\n3) if條件檢查當前差值是否大於先前的最大值\n4) num初始化為Integer.MIN_VALUE以確保第一個差值會被存儲\n\n其他選項不正確，因為：\nA) 只處理預測值小於實際值的情況\nB) 只處理預測值大於實際值的情況\nC) 不使用絕對值，所以忽略了負差值\nD) 使用<而不是>，所以找到的是最小差值而不是最大差值"
    },
    {
        id: 22,
        question: {
            text: "(AP Topic Question-11149)\n\nConsider the following incomplete method, which is intended to return the longest string in the string array words. Assume that the array contains at least one element.",
            code: {
                content: `
public static String longestWord(String[] words)
{
    /* missing declaration and initialization */
    for(int k = 1; k < words.length; k++)
    {
        if(words[k].length() > longest.length())
        {
            longest = words[k];
        }
    }
    return longest;
}`,
                language: "java"
            }
        },
        code: "Which of the following can replace /* missing declaration and initialization */ so that the method will work as intended?",
        language: "java",
        options: [
            { text: "A. int longest = 0;" },
            { text: "B. int longest = words[0].length();" },
            { text: "C. String longest = \"\";" },
            { text: "D. String longest = words[0];" },
            { text: "E. String longest = words[1];" }
        ],
        correctAnswer: 3,
        explanationEN: "Option D is correct because:\n1) The method needs to track the longest string found so far, not just its length\n2) The variable longest must be of type String since it's being returned\n3) Initializing with words[0] gives us a valid starting point\n4) The loop starts at k=1 and compares each subsequent string with the current longest\n\nThe other options are incorrect because:\nA) Wrong type (int instead of String)\nB) Only stores length, not the actual string\nC) Empty string would be shorter than any non-empty string\nE) Starts at index 1, missing potential longest string at index 0",
        explanationCN: "選項D是正確的，因為：\n1) 該方法需要跟踪迄今為止找到的最長字符串，而不僅僅是其長度\n2) 變量longest必須是String類型，因為它要被返回\n3) 用words[0]初始化給我們一個有效的起點\n4) 循環從k=1開始，將每個後續字符串與當前最長的進行比較\n\n其他選項不正確，因為：\nA) 類型錯誤（int而不是String）\nB) 只存儲長度，而不是實際的字符串\nC) 空字符串會比任何非空字符串短\nE) 從索引1開始，可能錯過索引0處的最長字符串"
    },
    {
        id: 23,
        question: {
            text: "(AP Topic Question-11232)\n\nConsider the following method, which is intended to return the average (arithmetic mean) of the values in an integer array. Assume the array contains at least one element.",
            code: {
                content: `
public static double findAvg(double[] values)
{
    double sum = 0.0;
    for(double val: values)
    {
        sum += val;
    }
    return sum / values.length;
}`,
                language: "java"
            }
        },
        code: "Which of the following preconditions, if any, must be true about the array values so that the method works as intended?",
        language: "java",
        options: [
            { text: "A. The array values must be sorted in ascending order." },
            { text: "B. The array values must be sorted in descending order." },
            { text: "C. The array values must have only one mode." },
            { text: "D. The array values must not contain values whose sum is not 0." },
            { text: "E. No precondition is necessary; the method will always work as intended." }
        ],
        correctAnswer: 4,
        explanationEN: "Option E is correct because:\n1) The method correctly calculates the average by:\n   - Initializing sum to 0.0\n   - Adding each value to sum using a for-each loop\n   - Dividing by the array length\n2) No special conditions are needed because:\n   - Order doesn't matter for calculating an average\n   - The mode (most frequent value) is irrelevant\n   - The sum can be any value\n   - Division by length works for any non-empty array\n\nThe other options suggest unnecessary restrictions that don't affect the average calculation.",
        explanationCN: "選項E是正確的，因為：\n1) 該方法通過以下方式正確計算平均值：\n   - 將sum初始化為0.0\n   - 使用for-each循環將每個值加到sum中\n   - 除以數組長度\n2) 不需要特殊條件，因為：\n   - 順序對計算平均值沒有影響\n   - 眾數（最頻繁的值）無關\n   - 總和可以是任何值\n   - 除以長度對任何非空數組都有效\n\n其他選項建議了不必要的限制，這些限制不會影響平均值的計算。"
    },
    {
        id: 24,
        question: {
            text: "(AP Topic Question-11398)\n\nThe twoInARow method below is intended to return true if any two consecutive elements of the parameter arr are equal in value and return false otherwise.",
            code: {
                content: `
public boolean twoInARow(int[] arr)
{
    /* missing loop header */
    {
        if(arr[k] == arr[k + 1])
        {
            return true;
        }
    }
    return false;
}`,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* missing loop header */ so that the method will work as intended?",
        language: "java",
        options: [
            { text: "A. for (int k = 0; k < arr.length - 1; k++)" },
            { text: "B. for (int k = 0; k < arr.length; k++)" },
            { text: "C. for (int k = 1; k < arr.length; k++)" },
            { text: "D. for (int k = arr.length - 1; k >= 0; k--)" },
            { text: "E. for (int k = arr.length - 1; k > 0; k--)" }
        ],
        correctAnswer: 0,
        explanationEN: "Option A is correct because:\n1) The method needs to compare adjacent elements (arr[k] and arr[k + 1])\n2) To avoid ArrayIndexOutOfBoundsException:\n   - Must start at index 0\n   - Must stop before the last element (length - 1)\n   - This ensures k+1 is always valid\n\nThe other options are incorrect because:\nB) Would cause ArrayIndexOutOfBoundsException at last iteration\nC) Would miss comparing first two elements\nD) Would cause ArrayIndexOutOfBoundsException when accessing k+1\nE) Would cause ArrayIndexOutOfBoundsException when accessing k+1",
        explanationCN: "選項A是正確的，因為：\n1) 該方法需要比較相鄰元素（arr[k]和arr[k + 1]）\n2) 為了避免ArrayIndexOutOfBoundsException：\n   - 必須從索引0開始\n   - 必須在最後一個元素之前停止（length - 1）\n   - 這確保k+1始終有效\n\n其他選項不正確，因為：\nB) 在最後一次迭代時會導致ArrayIndexOutOfBoundsException\nC) 會漏掉比較前兩個元素\nD) 訪問k+1時會導致ArrayIndexOutOfBoundsException\nE) 訪問k+1時會導致ArrayIndexOutOfBoundsException"
    },
    {
        id: 25,
        question: {
            text: "(AP Exam-10858)\n\nConsider the following method. Method allEven is intended to return true if all elements in array arr are even numbers; otherwise, it should return false.",
            code: {
                content: `
public boolean allEven(int[] arr)
{
    boolean isEven = /* expression */;
    for(int k = 0; k < arr.length; k++)
    {
        /* loop body */
    }
    return isEven;
}`,
                language: "java"
            }
        },
        code: "Which of the following replacements for /* expression */ and /* loop body */ should be used so that method allEven will work as intended?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `/* expression */     /* loop body */
false               if ((arr[k] % 2) == 0)
                       isEven = true;`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `/* expression */     /* loop body */
false               if ((arr[k] % 2) != 0)
                       isEven = false;
                    else
                       isEven = true;`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `/* expression */     /* loop body */
true                if ((arr[k] % 2) != 0)
                       isEven = false;`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `/* expression */     /* loop body */
true                if ((arr[k] % 2) != 0)
                       isEven = false;
                    else
                       isEven = true;`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `/* expression */     /* loop body */
true                if ((arr[k] % 2) == 0)
                       isEven = false;
                    else
                       isEven = true;`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because:\n1) Initialize isEven as true (assume all numbers are even until we find an odd one)\n2) Check each number, and if we find an odd number (arr[k] % 2 != 0):\n   - Set isEven to false (we found a counter-example)\n   - Once set to false, it stays false\n3) If we never find an odd number, isEven remains true\n\nThe other options are incorrect because:\nA) Starts with false and only sets to true, missing cases with all even numbers\nB) Resets isEven on each iteration, losing previous results\nD) Unnecessarily sets isEven to true for even numbers\nE) Has incorrect logic that sets isEven to false for even numbers",
        explanationCN: "選項C是正確的，因為：\n1) 將isEven初始化為true（假設所有數字都是偶數，直到找到奇數）\n2) 檢查每個數字，如果找到奇數（arr[k] % 2 != 0）：\n   - 將isEven設為false（我們找到了反例）\n   - 一旦設為false，就保持false\n3) 如果從未找到奇數，isEven保持true\n\n其他選項不正確，因為：\nA) 從false開始並只設為true，會漏掉全是偶數的情況\nB) 在每次迭代時重置isEven，丟失之前的結果\nD) 不必要地為偶數設置isEven為true\nE) 邏輯錯誤，為偶數設置isEven為false"
    },
    {
        id: 26,
        question: {
            text: "(2014 Practice Exam-10867)\n\nConsider the following incomplete method that is intended to return an array that contains the contents of its first array parameter followed by the contents of its second array parameter.",
            code: {
                content: `
public static int[] append(int[] a1, int[] a2)
{
    int[] result = new int[a1.length + a2.length];
    
    for (int j = 0; j < a1.length; j++)
        result[j] = a1[j];
        
    for (int k = 0; k < a2.length; k++)
        result[/* index */] = a2[k];
        
    return result;
}`,
                language: "java"
            }
        },
        code: "Which of the following expressions can be used to replace /* index */ so that append will work as intended?",
        language: "java",
        options: [
            { text: "A. j" },
            { text: "B. k" },
            { text: "C. k + a1.length - 1" },
            { text: "D. k + a1.length" },
            { text: "E. k + a1.length + 1" }
        ],
        correctAnswer: 3,
        explanationEN: "Option D is correct because:\n1) The first loop copies a1 into positions 0 to a1.length-1\n2) The second loop needs to copy a2 starting at position a1.length\n3) k + a1.length gives us the correct positions:\n   - When k=0: a1.length (first position after a1)\n   - When k=1: a1.length+1 (second position after a1)\n   etc.\n\nThe other options are incorrect because:\nA) Would overwrite the first part of the array\nB) Would overwrite the beginning of the array\nC) Would skip a position\nE) Would leave a gap in the array",
        explanationCN: "選項D是正確的，因為：\n1) 第一個循環將a1複製到位置0到a1.length-1\n2) 第二個循環需要從位置a1.length開始複製a2\n3) k + a1.length給出正確的位置：\n   - 當k=0時：a1.length（a1之後的第一個位置）\n   - 當k=1時：a1.length+1（a1之後的第二個位置）\n   等等\n\n其他選項不正確，因為：\nA) 會覆蓋數組的第一部分\nB) 會覆蓋數組的開始部分\nC) 會跳過一個位置\nE) 會在數組中留下空隙"
    },
    {
        id: 27,
        question: {
            text: "(2014 Practice Exam-10873)\n\nConsider the following method.",
            code: {
                content: `
public static void arrayMethod(int nums[])
{
    int j = 0;
    int k = nums.length - 1;
    
    while (j < k)
    {
        int x = nums[j];
        nums[j] = nums[k];
        nums[k] = x;
        j++;
        k--;
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following describes what the method arrayMethod() does to the array nums?",
        language: "java",
        options: [
            { text: "A. The array nums is unchanged." },
            { text: "B. The first value in nums is copied to every location in the array." },
            { text: "C. The last value in nums is copied to every location in the array." },
            { text: "D. The method generates an ArrayIndexOutOfBoundsException." },
            { text: "E. The contents of the array nums are reversed." }
        ],
        correctAnswer: 4,
        explanationEN: "Option E is correct because:\n1) The method uses two pointers (j and k) starting from opposite ends of the array\n2) In each iteration:\n   - It swaps elements at positions j and k\n   - j moves forward, k moves backward\n   - Continues until pointers meet\n3) This is a standard array reversal algorithm\n\nThe other options are incorrect because:\nA) The array is modified\nB) Elements are swapped, not copied\nC) Elements are swapped, not copied\nD) The bounds checking is correct (j < k prevents out of bounds)",
        explanationCN: "選項E是正確的，因為：\n1) 該方法使用兩個指針（j和k）從數組的相對端開始\n2) 在每次迭代中：\n   - 交換位置j和k的元素\n   - j向前移動，k向後移動\n   - 直到指針相遇為止\n3) 這是標準的數組反轉算法\n\n其他選項不正確，因為：\nA) 數組被修改了\nB) 元素是交換的，不是複製的\nC) 元素是交換的，不是複製的\nD) 邊界檢查是正確的（j < k防止越界）"
    },
    {
        id: 28,
        question: {
            text: "(AP Exam-10903)\n\nConsider the following instance variable and incomplete method. The method calcTotal is intended to return the sum of all values in vals.",
            code: {
                content: `
private int[] vals;
public int calcTotal()
{
    int total = 0;
    /* missing code */
    return total;
}

I.
for(int pos = 0; pos < vals.length; pos++)
{
    total += vals[pos];
}

II.
for(int pos = vals.length; pos > 0; pos--)
{
    total += vals[pos];
}

III.
int pos = 0;
while(pos < vals.length)
{
    total += vals[pos];
    pos++;
}`,
                language: "java"
            }
        },
        code: "Which of the code segments shown below can be used to replace /* missing code */ so that calcTotal will work as intended?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and III" },
            { text: "E. II and III" }
        ],
        correctAnswer: 3,
        explanationEN: "Option D (I and III) is correct because:\n1) Code segment I correctly:\n   - Iterates through all array indices\n   - Adds each element to total\n2) Code segment III correctly:\n   - Uses while loop to iterate through array\n   - Adds each element to total\n   - Increments position\n\nCode segment II is incorrect because:\n- Starts at vals.length which is out of bounds\n- Would cause ArrayIndexOutOfBoundsException\n\nBoth I and III achieve the same result using different loop structures.",
        explanationCN: "選項D（I和III）是正確的，因為：\n1) 代碼段I正確地：\n   - 遍歷所有數組索引\n   - 將每個元素加到total中\n2) 代碼段III正確地：\n   - 使用while循環遍歷數組\n   - 將每個元素加到total中\n   - 增加位置\n\n代碼段II不正確，因為：\n- 從vals.length開始，這超出了邊界\n- 會導致ArrayIndexOutOfBoundsException\n\nI和III使用不同的循環結構達到相同的結果。"
    },
    {
        id: 29,
        question: {
            text: "(AP Course and Exam Description-10928)\n\nConsider the following instance variable and method.",
            code: {
                content: `
private int[] array;

/** Precondition: array.length > 0
 */
public int checkArray()
{
    int loc = array.length / 2;
    for (int k = 0; k < array.length; k++)
    {
        if (array[k] > array[loc])
        {
            loc = k;
        }
    }
    return loc;
}`,
                language: "java"
            }
        },
        code: "Which of the following is the best postcondition for checkArray?",
        language: "java",
        options: [
            { text: "A. Returns the index of the first element in array array whose value is greater than array[loc]" },
            { text: "B. Returns the index of the last element in array array whose value is greater than array[loc]" },
            { text: "C. Returns the largest value in array array" },
            { text: "D. Returns the index of the largest value in array array" },
            { text: "E. Returns the index of the largest value in the second half of array array" }
        ],
        correctAnswer: 3,
        explanationEN: "Option D is correct because:\n1) The method:\n   - Starts with loc at the middle of the array\n   - Compares each element with array[loc]\n   - Updates loc whenever a larger value is found\n2) After the loop:\n   - loc contains the index of the largest value found\n   - All elements have been compared\n\nThe other options are incorrect because:\nA) It finds the largest value, not just the first greater than array[loc]\nB) It keeps track of any larger value, not just the last one\nC) It returns an index, not the value itself\nE) It checks the entire array, not just the second half",
        explanationCN: "選項D是正確的，因為：\n1) 該方法：\n   - 從數組中間的loc開始\n   - 將每個元素與array[loc]比較\n   - 當找到更大的值時更新loc\n2) 循環結束後：\n   - loc包含找到的最大值的索引\n   - 所有元素都被比較過\n\n其他選項不正確，因為：\nA) 它找到最大值，而不僅僅是第一個大於array[loc]的值\nB) 它跟踪任何更大的值，而不僅僅是最後一個\nC) 它返回索引，而不是值本身\nE) 它檢查整個數組，而不僅僅是後半部分"
    },
    {
        id: 30,
        question: {
            text: "(2015 Practice Exam-10963)\n\nConsider the following incomplete method that is intended to return a string formed by concatenating elements from the parameter words. The elements to be concatenated start with startIndex and continue through the last element of words and should appear in reverse order in the resulting string.",
            code: {
                content: `
/** Precondition: words.length > 0;
 *               startIndex >= 0
 */
public static String concatWords(String[] words, int startIndex)
{
    String result = "";
    /* missing code */
    return result;
}
    
/*
I. 
for(int k = startIndex; k < words.length; k++)
{
    result += words[k] + words[words.length - k - 1];
}

II.
int k = words.length - 1;
while( k >= startIndex)
{
    result += words[k];
    k--;
}

III.
String[] temp = new String[words.length];
for(int k = 0; k <= words.length / 2; k++)
{
    temp[k] = words[words.length - k - 1];
    temp[words.length - k - 1] = words[k];
}
for(int k = 0; k < temp.length - startIndex; k++)
{
    result += temp[k];
}
*/
`,
                language: "java"
            }
        },
        code: "For example, the following code segment uses a call to the concatWords method.\n\nString[] things = {\"Bear\", \"Apple\", \"Gorilla\", \"House\", \"Car\"};\nSystem.out.println(concatWords(things, 2));\n\nWhen the code segment is executed, the string \"CarHouseGorilla\" is printed.\n\nWhich of these code segments can be used to replace /* missing code */ so that concatWords will work as intended?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and II" },
            { text: "E. II and III" }
        ],
        correctAnswer: 4,
        explanationEN: "Option B (II only) is correct because:\n1) Code segment II correctly:\n   - Starts at the end of the array (words.length - 1)\n   - Iterates backwards until reaching startIndex\n   - Concatenates each word in reverse order\n2) The other segments are incorrect because:\n   - Segment I tries to concatenate words in wrong order and uses invalid array indices\n   - Segment III creates unnecessary temporary array and has complex logic that doesn't achieve the desired result\n3) Given the example:\n   - startIndex = 2 means start with \"Gorilla\"\n   - Elements should appear in reverse order\n   - Expected output \"CarHouseGorilla\" is achieved by segment II",
        explanationCN: "選項B（僅II）是正確的，因為：\n1) 代碼段II正確地：\n   - 從數組末尾開始（words.length - 1）\n   - 向後迭代直到達到startIndex\n   - 按逆序連接每個單詞\n2) 其他段不正確，因為：\n   - 段I嘗試以錯誤的順序連接單詞並使用無效的數組索引\n   - 段III創建不必要的臨時數組並具有無法達到所需結果的複雜邏輯\n3) 根據示例：\n   - startIndex = 2表示從\"Gorilla\"開始\n   - 元素應該按逆序出現\n   - 段II實現了預期輸出\"CarHouseGorilla\""
    },
    {
        id: 31,
        question: {
            text: "(2015 Practice Exam-11032)\n\nConsider the problem of finding the maximum value in an array of integers. The following code segments are proposed solutions to the problem. Assume that the variable arr has been defined as an array of int values and has been initialized with one or more values.",
            code: {
                content: `
I.
int max = Integer.MIN_VALUE;
for (int value : arr)
{
    if (max < value)
    {
        max = value;
    }
}

II.
int max = 0;
boolean first = true;
for (int value : arr)
{
    if (first)
    {
        max = value;
        first = false;
    }
    else if (max < value)
    {
        max = value;
    }
}

III.
int max = arr[0];
for (int k = 1; k < arr.length; k++)
{
    if (max < arr[k])
    {
        max = arr[k];
    }
}`,
                language: "java"
            }
        },
        code: "Which of the code segments will always correctly assign the maximum element of the array to the variable max?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. II and III only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 4,
        explanationEN: "Option E (I, II, and III) is correct because all three code segments will correctly find the maximum value:\n\n1) Code segment I:\n   - Initializes max to Integer.MIN_VALUE (smallest possible integer)\n   - Uses for-each loop to compare each value\n   - Updates max when a larger value is found\n   - Works correctly even with all negative numbers\n\n2) Code segment II:\n   - Uses first boolean flag to initialize max with first element\n   - Then compares remaining elements\n   - Updates max when a larger value is found\n   - Works correctly for any array of numbers\n\n3) Code segment III:\n   - Initializes max with first element arr[0]\n   - Loops through remaining elements starting from index 1\n   - Updates max when a larger value is found\n   - Works correctly for any array of numbers\n\nAll three approaches will correctly find the maximum value, just using different initialization strategies and loop structures.",
        explanationCN: "選項E（I、II和III）是正確的，因為所有三個代碼段都能正確找到最大值：\n\n1) 代碼段I：\n   - 將max初始化為Integer.MIN_VALUE（最小可能整數）\n   - 使用for-each循環比較每個值\n   - 當找到更大的值時更新max\n   - 即使對於全是負數的情況也能正確工作\n\n2) 代碼段II：\n   - 使用first布爾標誌初始化max為第一個元素\n   - 然後比較剩餘元素\n   - 當找到更大的值時更新max\n   - 對任何數字數組都能正確工作\n\n3) 代碼段III：\n   - 用第一個元素arr[0]初始化max\n   - 從索引1開始循環遍歷剩餘元素\n   - 當找到更大的值時更新max\n   - 對任何數字數組都能正確工作\n\n所有三種方法都能正確找到最大值，只是使用了不同的初始化策略和循環結構。"
    },
    {
        id: 32,
        question: {
            text: "(AP Course and Exam Description-11035)\n\nConsider the following instance variable nums and method findLongest with line numbers added for reference. Method findLongest is intended to find the longest consecutive block of the value target occurring in the array nums; however, findLongest does not work as intended.",
            code: {
                content: `
private int[] nums;

public int findLongest(int target)
{
    int lenCount = 0;
    int maxLen = 0;

    for (int val : nums)
    {
        if (val == target)
        {
            lenCount++;
        }
        else
        {
            if (lenCount > maxLen)
            {
                maxLen = lenCount;
            }
        }
    }
    if (lenCount > maxLen)
    {
        maxLen = lenCount;
    }
    return maxLen;
}`,
                language: "java"
            }
        },
        code: "For example, if the array nums contains the values [7, 10, 10, 15, 15, 15, 15, 10, 10, 15, 10, 10], the call findLongest(10) should return 3, the length of the longest consecutive block of 10s.\n\nWhich of the following best describes the value returned by a call to findLongest?",
        language: "java",
        options: [
            { text: "A. It is the length of the shortest consecutive block of the value target in nums." },
            { text: "B. It is the length of the array nums." },
            { text: "C. It is the number of occurrences of the value target in nums." },
            { text: "D. It is the length of the first consecutive block of the value target in nums." },
            { text: "E. It is the length of the last consecutive block of the value target in nums." }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because the method actually counts all occurrences of target rather than consecutive blocks. This happens because:\n\n1) The method never resets lenCount to 0 when a non-target value is found\n2) This means lenCount accumulates all occurrences of target throughout the array\n3) For the example array [7, 10, 10, 15, 15, 15, 15, 10, 10, 15, 10, 10]:\n   - When target is 10, lenCount will be 6 (total number of 10s)\n   - It should return 3 (length of longest consecutive block)\n   - The method fails to track consecutive sequences\n\nThe other options are incorrect because:\nA) It doesn't track block lengths at all\nB) It doesn't count array length\nD) It doesn't specifically track the first block\nE) It doesn't specifically track the last block",
        explanationCN: "選項C是正確的，因為該方法實際上計算了目標值的所有出現次數，而不是連續塊。這是因為：\n\n1) 當找到非目標值時，方法從未將lenCount重置為0\n2) 這意味著lenCount累積了數組中目標值的所有出現次數\n3) 對於示例數組[7, 10, 10, 15, 15, 15, 15, 10, 10, 15, 10, 10]：\n   - 當目標是10時，lenCount將為6（10的總出現次數）\n   - 應該返回3（最長連續塊的長度）\n   - 該方法未能跟踪連續序列\n\n其他選項不正確，因為：\nA) 它根本不跟踪塊長度\nB) 它不計算數組長度\nD) 它不特別跟踪第一個塊\nE) 它不特別跟踪最後一個塊"
    },
    {
        id: 33,
        question: {
            text: "(AP Course and Exam Description-11036)\n\nConsider the following instance variable nums and method findLongest with line numbers added for reference. Method findLongest is intended to find the longest consecutive block of the value target occurring in the array nums; however, findLongest does not work as intended.",
            code: {
                content: `
private int[] nums;

public int findLongest(int target)
{
    int lenCount = 0;
    int maxLen = 0;

    for (int val : nums)
    {
        if (val == target)
        {
            lenCount++;
        }
        else
        {
            if (lenCount > maxLen)
            {
                maxLen = lenCount;
            }
        }
    }
    if (lenCount > maxLen)
    {
        maxLen = lenCount;
    }
    return maxLen;
}`,
                language: "java"
            }
        },
        code: "Which of the following changes should be made so that findLongest will work as intended?",
        language: "java",
        options: [
            { text: "A. Insert the statement lenCount = 0; between lines 2 and 3." },
            { text: "B. Insert the statement lenCount = 0; between lines 8 and 9." },
            { text: "C. Insert the statement lenCount = 0; between lines 10 and 11." },
            { text: "D. Insert the statement lenCount = 0; between lines 11 and 12." },
            { text: "E. Insert the statement lenCount = 0; between lines 12 and 13." }
        ],
        correctAnswer: 4,
        explanationEN: "Option E is correct because:\n1) The main issue with the current code is that it doesn't reset lenCount when a non-target value is found\n2) This causes lenCount to accumulate all occurrences of target instead of counting consecutive occurrences\n3) Adding lenCount = 0; between lines 12 and 13 (in the else block after updating maxLen) will:\n   - Reset the counter after each non-target value\n   - Allow proper tracking of consecutive sequences\n   - Ensure maxLen captures the longest consecutive sequence\n\nThe other options are incorrect because:\nA) Would reset counter before the loop starts (already initialized)\nB) Would reset counter before checking if current value matches target\nC) Would reset counter before updating maxLen, losing the current sequence length\nD) Would reset counter after updating maxLen but before finishing the if block",
        explanationCN: "選項E是正確的，因為：\n1) 當前代碼的主要問題是在找到非目標值時沒有重置lenCount\n2) 這導致lenCount累積所有目標值的出現次數，而不是計算連續出現次數\n3) 在第12和13行之間（else塊中更新maxLen後）添加lenCount = 0;將：\n   - 在每個非目標值後重置計數器\n   - 允許正確跟踪連續序列\n   - 確保maxLen捕獲最長的連續序列\n\n其他選項不正確，因為：\nA) 會在循環開始前重置計數器（已經初始化）\nB) 會在檢查當前值是否匹配目標之前重置計數器\nC) 會在更新maxLen之前重置計數器，丟失當前序列長度\nD) 會在更新maxLen之後但在完成if塊之前重置計數器"
    },
    {
        id: 34,
        question: {
            text: "(2015 Practice Exam-11037)\n\nConsider the following instance variable and method.",
            code: {
                content: `
private int[] arr;

/** Precondition: arr.length > 0
 *  @return the largest value in array arr
 */
public int findMax()
{
    int maxVal = 0;
    for (int val : arr)
    {
        if (val > maxVal)
        {
            maxVal = val;
        }
    }
    return maxVal;
}`,
                language: "java"
            }
        },
        code: "Method findMax is intended to return the largest value in the array arr. Which of the following best describes the conditions under which the method findMax will not work as intended?",
        language: "java",
        options: [
            { text: "A. The largest value in arr occurs only once and is in arr[0]." },
            { text: "B. The largest value in arr occurs only once and is in arr[arr.length - 1]." },
            { text: "C. The largest value in arr is negative." },
            { text: "D. The largest value in arr is zero." },
            { text: "E. The largest value in arr occurs more than once." }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because:\n1) The method initializes maxVal to 0\n2) When all values in the array are negative, no value will be greater than the initial maxVal of 0\n3) This means the method will incorrectly return 0 instead of the actual largest negative value\n\nThe other options are incorrect because:\nA) Position of the largest value doesn't affect the result\nB) Position of the largest value doesn't affect the result\nD) If the largest value is 0, the method will work correctly (coincidentally)\nE) Frequency of the largest value doesn't affect the result",
        explanationCN: "選項C是正確的，因為：\n1) 該方法將maxVal初始化為0\n2) 當數組中所有值都是負數時，沒有值會大於初始的maxVal值0\n3) 這意味著方法會錯誤地返回0，而不是實際的最大負數值\n\n其他選項不正確，因為：\nA) 最大值的位置不影響結果\nB) 最大值的位置不影響結果\nD) 如果最大值是0，方法會正確工作（巧合）\nE) 最大值出現的頻率不影響結果"
    },
    {
        id: 35,
        question: {
            text: "(AP Exam-11038)\n\nThe following incomplete method is intended to return the largest integer in the array numbers.",
            code: {
                content: `
// precondition: numbers.length > 0
public static int findMax(int[] numbers)
{
    int posOfMax = 0;
    for(int index = 1; index < numbers.length; index++)
    {
        if( /*condition*/ )
        {
            /* statement */
        }
    }
    return numbers[posOfMax];
}`,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* condition */ and /* statement */ so that findMax will work as intended?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `/* condition */               /* statement */
numbers[index] >
numbers[posOfMax]           posOfMax = numbers[index];`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `/* condition */               /* statement */
numbers[index] >
numbers[posOfMax]           posOfMax = index;`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `/* condition */               /* statement */
numbers[index] > posOfMax   posOfMax = numbers[index];`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `/* condition */               /* statement */
numbers[index] < posOfMax   posOfMax = numbers[index];`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `/* condition */               /* statement */
numbers[index] <
numbers[posOfMax]           posOfMax = index;`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 1,
        explanationEN: "Option B is correct because:\n1) The method needs to track the position of the maximum value (posOfMax)\n2) The condition numbers[index] > numbers[posOfMax] correctly compares the current element with the current maximum\n3) When a larger value is found, posOfMax = index correctly updates the position of the maximum\n\nThe other options are incorrect because:\nA) Assigns the value instead of the position to posOfMax\nC) Compares array value with position, which is logically incorrect\nD) Uses < instead of > and assigns value instead of position\nE) Uses < instead of > which would find minimum instead of maximum",
        explanationCN: "選項B是正確的，因為：\n1) 該方法需要跟踪最大值的位置（posOfMax）\n2) 條件numbers[index] > numbers[posOfMax]正確地比較當前元素與當前最大值\n3) 當找到更大的值時，posOfMax = index正確地更新最大值的位置\n\n其他選項不正確，因為：\nA) 將值而不是位置賦給posOfMax\nC) 將數組值與位置比較，這在邏輯上是錯誤的\nD) 使用<而不是>，並且賦值而不是賦位置\nE) 使用<而不是>，這會找到最小值而不是最大值"
    },
    {
        id: 36,
        question: {
            text: "(AP Exam-11039)\n\nConsider the following incomplete method. Method findNext is intended to return the index of the first occurrence of the value val beyond the position start in array arr.",
            code: {
                content: `
// returns index of first occurrence of val in arr
// after position start;
// returns arr.length if val is not found
public int findNext(int[] arr, int val, int start)
{
    int pos = start + 1;
    while( /* condition */ )
        pos++;
    return pos;
}`,
                language: "java"
            }
        },
        code: "For example, consider the following code segment.\n\nint[] arr = {11, 22, 100, 33, 100, 11, 44, 100};\nSystem.out.println(findNext(arr, 100, 2));\n\nThe execution of the code segment should result in the value 4 being printed.\n\nWhich of the following expressions could be used to replace /* condition */ so that findNext will work as intended?",
        language: "java",
        options: [
            { text: "A. (pos < arr.length) && (arr[pos] != val)" },
            { text: "B. (arr[pos] != val) && (pos < arr.length)" },
            { text: "C. (pos < arr.length) || (arr[pos] != val)" },
            { text: "D. (arr[pos] == val) && (pos < arr.length)" },
            { text: "E. (pos < arr.length) || (arr[pos] == val)" }
        ],
        correctAnswer: 0,
        explanationEN: "Option A is correct because:\n1) The condition needs to continue searching while:\n   - pos is within array bounds (pos < arr.length)\n   - AND the current element is not the target value (arr[pos] != val)\n2) The loop will stop when either:\n   - We reach the end of the array\n   - OR we find the target value\n3) For the example:\n   - Starting at index 2 (where 100 is)\n   - Next 100 is at index 4\n   - Loop stops when pos=4, returning correct index\n\nThe other options are incorrect because:\nB) Wrong order of conditions could cause array bounds error\nC) OR operator would continue loop even after array bounds\nD) Wrong comparison (==) would skip target value\nE) OR operator with wrong comparison would cause incorrect behavior",
        explanationCN: "選項A是正確的，因為：\n1) 條件需要在以下情況下繼續搜索：\n   - pos在數組範圍內（pos < arr.length）\n   - 且當前元素不是目標值（arr[pos] != val）\n2) 循環會在以下情況停止：\n   - 到達數組末尾\n   - 或找到目標值\n3) 對於示例：\n   - 從索引2開始（100所在位置）\n   - 下一個100在索引4\n   - 當pos=4時循環停止，返回正確索引\n\n其他選項不正確，因為：\nB) 條件順序錯誤可能導致數組越界錯誤\nC) OR運算符會在超出數組範圍後仍繼續循環\nD) 錯誤的比較（==）會跳過目標值\nE) OR運算符配合錯誤的比較會導致不正確的行為"
    },
    {
        id: 37,
        question: {
            text: "(Previous Practice Question-11110)\n\nConsider the following method that is intended to return true if an array of integers is arranged in decreasing order and return false otherwise.",
            code: {
                content: `
/** @param nums an array of integers
 *  @return true if the values in the array appear in
 *  decreasing order
 *  false otherwise
 */
public static boolean isDecreasing(int[] nums)
{
    /* missing code */
}

/*
I.
for(int k = 0; k < nums.length; k++)
{
    if(nums[k] <= nums[k + 1])
        return false;
}
return true;

II.
for(int k = 1; k < nums.length; k++)
{
    if(nums[k - 1] <= nums[k])
        return false;
}
return true;

III.
for(int k = 0; k < nums.length - 1; k++)
{
    if(nums[k] <= nums[k + 1])
        return false;
    else
        return true;
}
return true;
*/`,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* missing code */ so that isDecreasing will work as intended?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and III" },
            { text: "E. II and III" }
        ],
        correctAnswer: 1,
        explanationEN: "Option B (II only) is correct because:\n1) Code segment II correctly:\n   - Starts at index 1 and compares with previous element\n   - Returns false if any pair is not in decreasing order\n   - Returns true only after checking all elements\n   - Uses proper array bounds\n\nThe other segments are incorrect because:\nI) Would cause ArrayIndexOutOfBoundsException when k+1 reaches nums.length\nIII) Returns true after checking only the first pair of elements due to the else clause\n\nA decreasing sequence requires that each element be larger than the next element. Code segment II properly implements this by checking nums[k-1] <= nums[k] for violation of the decreasing order requirement.",
        explanationCN: "選項B（僅II）是正確的，因為：\n1) 代碼段II正確地：\n   - 從索引1開始並與前一個元素比較\n   - 如果任何一對不是降序就返回false\n   - 只有在檢查所有元素後才返回true\n   - 使用正確的數組邊界\n\n其他段不正確，因為：\nI) 當k+1達到nums.length時會導致ArrayIndexOutOfBoundsException\nIII) 由於else子句的存在，在只檢查第一對元素後就返回true\n\n降序序列要求每個元素都大於下一個元素。代碼段II通過檢查nums[k-1] <= nums[k]來正確實現這一點，以發現違反降序要求的情況。"
    },
    {
        id: 38,
        question: {
            text: "(AP Exam-11124)\n\nConsider the following data field and method.",
            code: {
                content: `
private int[] seq;
// precondition: seq.length > 0
public int lenIncreasing()
{
    int k = 1;
    while((k < seq.length) && (seq[k - 1] < seq[k]))
    {
        k++;
    }
    // assertion
    return k;
}`,
                language: "java"
            }
        },
        code: "Which of the following assertions is true when execution reaches the line // assertion in lenIncreasing?",
        language: "java",
        options: [
            { text: "A. (k == seq.length) && (seq[k - 1] >= seq[k])" },
            { text: "B. (k == seq.length) || (seq[k - 1] >= seq[k])" },
            { text: "C. (k < seq.length) && (seq[k - 1] < seq[k])" },
            { text: "D. (k < seq.length) || (seq[k - 1] < seq[k])" },
            { text: "E. (k == seq.length) || (seq[k - 1] == seq[k])" }
        ],
        correctAnswer: 1,
        explanationEN: "Option B is correct because:\n1) The while loop continues as long as k < seq.length AND seq[k-1] < seq[k]\n2) The loop terminates when either:\n   - k reaches seq.length (end of array) OR\n   - seq[k-1] >= seq[k] (sequence stops increasing)\n3) Therefore, when reaching the assertion, the opposite of the while condition must be true:\n   (k == seq.length) OR (seq[k-1] >= seq[k])",
        explanationCN: "選項B是正確的，因為：\n1) while循環在k < seq.length且seq[k-1] < seq[k]時繼續\n2) 循環在以下情況終止：\n   - k達到seq.length（數組結束）或\n   - seq[k-1] >= seq[k]（序列停止增加）\n3) 因此，當到達斷言時，while條件的相反必須為真：\n   (k == seq.length)或(seq[k-1] >= seq[k])"
    },
    {
        id: 39,
        question: {
            text: "(AP Course and Exam Description-11164)\n\nConsider the following instance variable and method.",
            code: {
                content: `
private int[] numbers;

/** Precondition: numbers contains int values in no particular order.
 */
public int mystery(int num)
{
    for (int k = numbers.length - 1; k >= 0; k--)
    {
        if (numbers[k] < num)
        {
            return k;
        }
    }
    return -1;
}`,
                language: "java"
            }
        },
        code: "Which of the following best describes the contents of numbers after the following statement has been executed?\n\nint m = mystery(n);",
        language: "java",
        options: [
            { text: "A. All values in positions 0 through m are less than n." },
            { text: "B. All values in positions m+1 through numbers.length-1 are less than n." },
            { text: "C. All values in positions m+1 through numbers.length-1 are greater than or equal to n." },
            { text: "D. The smallest value is at position m." },
            { text: "E. The largest value that is smaller than n is at position m." }
        ],
        correctAnswer: 2,
        explanationEN: "Option E is correct because:\n1) The method searches from right to left (highest index to lowest)\n2) It returns the index of the first element found that is less than num\n3) Since it searches from right to left, this will be the rightmost (largest index) element that is less than num\n4) Therefore, the value at position m is the largest value that is smaller than n",
        explanationCN: "選項E是正確的，因為：\n1) 該方法從右到左搜索（從最高索引到最低索引）\n2) 它返回找到的第一個小於num的元素的索引\n3) 由於是從右到左搜索，這將是最右邊（最大索引）的小於num的元素\n4) 因此，位置m的值是小於n的最大值"
    },
    {
        id: 40,
        question: {
            text: "(2015 Practice Exam-11169)\n\nConsider the following instance variable and method.",
            code: {
                content: `
private int[] numbers;

public void mystery(int x)
{
    for(int k = 1; k < numbers.length; k = k + x)
    {
        numbers[k] = numbers[k - 1] + x;
    }
}`,
                language: "java"
            }
        },
        code: "Assume that numbers has been initialized with the following values.\n\n{17, 34, 21, 42, 15, 69, 48, 25, 39}\n\nWhich of the following represents the order of the values in numbers as a result of the call mystery(3)?",
        language: "java",
        options: [
            { text: "A. {17, 20, 21, 42, 45, 69, 48, 51, 39}" },
            { text: "B. {17, 20, 23, 26, 29, 32, 35, 38, 41}" },
            { text: "C. {17, 37, 21, 42, 18, 69, 48, 28, 39}" },
            { text: "D. {20, 23, 21, 42, 45, 69, 51, 54, 39}" },
            { text: "E. {20, 34, 21, 45, 15, 69, 51, 25, 39}" }
        ],
        correctAnswer: 0,
        explanationEN: "Option E is correct because:\n1) With x=3, the loop will modify indices 1,4,7\n2) For each modified position:\n   - numbers[1] = numbers[0] + 3 = 17 + 3 = 20\n   - numbers[4] = numbers[3] + 3 = 42 + 3 = 45\n   - numbers[7] = numbers[6] + 3 = 48 + 3 = 51\n3) All other elements remain unchanged",
        explanationCN: "選項E是正確的，因為：\n1) 當x=3時，循環將修改索引1,4,7\n2) 對於每個被修改的位置：\n   - numbers[1] = numbers[0] + 3 = 17 + 3 = 20\n   - numbers[4] = numbers[3] + 3 = 42 + 3 = 45\n   - numbers[7] = numbers[6] + 3 = 48 + 3 = 51\n3) 所有其他元素保持不變"
    },
    {
        id: 41,
        question: {
            text: "(2014 Practice Exam-11172)\n\nConsider the following method.",
            code: {
                content: `
public void mystery(int[] data)
{
    for (int k = 0; k < data.length - 1; k++)
        data[k + 1] = data[k] + data[k + 1];
}`,
                language: "java"
            }
        },
        code: "The following code segment appears in another method in the same class.\n\nint[] values = {5, 2, 1, 3, 8};\nmystery(values);\nfor (int v : values)\n    System.out.print(v + \" \");\nSystem.out.println();\n\nWhat is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 5 2 1 3 8" },
            { text: "B. 5 7 3 4 11" },
            { text: "C. 5 7 8 11 19" },
            { text: "D. 7 3 4 11 8" },
            { text: "E. Nothing is printed because an ArrayIndexOutOfBoundsException is thrown during the execution of method mystery." }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because:\n1) The method modifies the array from left to right, where each element becomes the sum of itself and the previous element\n2) Step by step:\n   - Original: {5, 2, 1, 3, 8}\n   - After k=0: {5, 7, 1, 3, 8}\n   - After k=1: {5, 7, 8, 3, 8}\n   - After k=2: {5, 7, 8, 11, 8}\n   - After k=3: {5, 7, 8, 11, 19}\n3) The final array is printed: 5 7 8 11 19",
        explanationCN: "選項C是正確的，因為：\n1) 該方法從左到右修改數組，每個元素變成自己和前一個元素的和\n2) 步驟分解：\n   - 原始：{5, 2, 1, 3, 8}\n   - k=0後：{5, 7, 1, 3, 8}\n   - k=1後：{5, 7, 8, 3, 8}\n   - k=2後：{5, 7, 8, 11, 8}\n   - k=3後：{5, 7, 8, 11, 19}\n3) 最終打印數組：5 7 8 11 19"
    },
    {
        id: 42,
        question: {
            text: "(2015 Practice Exam-11173)\n\nConsider the following method.",
            code: {
                content: `
/** Precondition: arr.length > 0 */
public static int mystery(int[] arr)
{
    int index = 0;
    int count = 0;
    int m = -1;
    
    for (int outer = 0; outer < arr.length; outer++)
    {
        count = 0;
        for (int inner = outer + 1; inner < arr.length; inner++)
        {
            if (arr[outer] == arr[inner])
            {
                count++;
            }
        }
        if (count > m)
        {
            index = outer;
            m = count;
        }
    }
    return index;
}`,
                language: "java"
            }
        },
        code: "Assume that nums has been declared and initialized as an array of integer values.\nWhich of the following best describes the value returned by the call mystery(nums)?",
        language: "java",
        options: [
            { text: "A. The maximum value that occurs in nums" },
            { text: "B. An index of the maximum value that occurs in nums" },
            { text: "C. The number of times that the maximum value occurs in nums" },
            { text: "D. A value that occurs most often in nums" },
            { text: "E. An index of a value that occurs most often in nums" }
        ],
        correctAnswer: 4,
        explanationEN: "Option E is correct because:\n1) The method uses nested loops to count occurrences of each element\n2) For each element (outer loop):\n   - Counts how many times it appears in the rest of the array (inner loop)\n   - Updates index and m if current count is higher than previous maximum\n3) The index variable stores the position of the element with the highest count\n4) Therefore, it returns the index of the most frequent value (mode)",
        explanationCN: "選項E是正確的，因為：\n1) 該方法使用嵌套循環來計算每個元素的出現次數\n2) 對於每個元素（外循環）：\n   - 計算它在數組其餘部分出現的次數（內循環）\n   - 如果當前計數高於之前的最大值，則更新index和m\n3) index變量存儲具有最高計數的元素的位置\n4) 因此，它返回最頻繁出現值（眾數）的索引"
    },
    {
        id: 43,
        question: {
            text: "(AP Exam-11179)\n\nThe question refer to the following data field and method.",
            code: {
                content: `
private int[] arr;
// precondition: arr.length > 0
public void mystery()
{
    int s1 = 0;
    int s2 = 0;
    for(int k = 0; k < arr.length; k++)
    {
        int num = arr[k];
        if((num > 0) && (num % 2 == 0))
            s1 += num;
        else if(num < 0)
            s2 += num;
    }
    System.out.println(s1);
    System.out.println(s2);
}`,
                language: "java"
            }
        },
        code: "Which of the following best describes the value of s1 output by the method mystery?",
        language: "java",
        options: [
            { text: "A. The sum of all positive values in arr" },
            { text: "B. The sum of all positive even values in arr" },
            { text: "C. The sum of all positive odd values in arr" },
            { text: "D. The sum of all values greater than 2 in arr" },
            { text: "E. The sum of all values less than 2 in arr" }
        ],
        correctAnswer: 1,
        explanationEN: "Option B is correct because:\n1) The method calculates s1 by adding numbers that satisfy two conditions:\n   - num > 0 (positive numbers)\n   - num % 2 == 0 (even numbers)\n2) The && operator means both conditions must be true\n3) Therefore, s1 represents the sum of all positive even values in the array",
        explanationCN: "選項B是正確的，因為：\n1) 該方法通過添加滿足兩個條件的數字來計算s1：\n   - num > 0（正數）\n   - num % 2 == 0（偶數）\n2) &&運算符意味著兩個條件都必須為真\n3) 因此，s1代表數組中所有正偶數的總和"
    },
    {
        id: 44,
        question: {
            text: "(AP Exam-11180)\n\nThe question refer to the following data field and method.",
            code: {
                content: `
private int[] arr;
// precondition: arr.length > 0
public void mystery()
{
    int s1 = 0;
    int s2 = 0;
    for(int k = 0; k < arr.length; k++)
    {
        int num = arr[k];
        if((num > 0) && (num % 2 == 0))
            s1 += num;
        else if(num < 0)
            s2 += num;
    }
    System.out.println(s1);
    System.out.println(s2);
}`,
                language: "java"
            }
        },
        code: "Which of the following best describes the value of s2 output by the method mystery?",
        language: "java",
        options: [
            { text: "A. The sum of all positive values in arr" },
            { text: "B. The sum of all positive even values in arr" },
            { text: "C. The sum of all negative values in arr" },
            { text: "D. The sum of all negative even values in arr" },
            { text: "E. The sum of all negative odd values in arr" }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because:\n1) The method calculates s2 in the else if(num < 0) block\n2) This condition only checks if the number is negative\n3) Unlike s1, there is no check for even/odd\n4) Therefore, s2 represents the sum of all negative values in the array",
        explanationCN: "選項C是正確的，因為：\n1) 該方法在else if(num < 0)塊中計算s2\n2) 這個條件只檢查數字是否為負數\n3) 與s1不同，沒有檢查奇偶性\n4) 因此，s2代表數組中所有負數的總和"
    },
    {
        id: 45,
        question: {
            text: "(2014 Practice Exam-11181)\n\nConsider the following method.",
            code: {
                content: `
public static int mystery(int[] arr)
{
    int x = 0;
    for (int k = 0; k < arr.length; k = k + 2)
        x = x + arr[k];
    return x;
}`,
                language: "java"
            }
        },
        code: "Assume that the array nums has been declared and initialized as follows.\n\nint[] nums = {3, 6, 1, 0, 1, 4, 2};\n\nWhat value will be returned as a result of the call mystery(nums)?",
        language: "java",
        options: [
            { text: "A. 5" },
            { text: "B. 6" },
            { text: "C. 7" },
            { text: "D. 10" },
            { text: "E. 17" }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because:\n1) The method adds elements at even indices (k = k + 2)\n2) For nums = {3, 6, 1, 0, 1, 4, 2}:\n   - k=0: x += nums[0] = 3\n   - k=2: x += nums[2] = 3 + 1 = 4\n   - k=4: x += nums[4] = 4 + 1 = 5\n   - k=6: x += nums[6] = 5 + 2 = 7\n3) Therefore, the method returns 7",
        explanationCN: "選項C是正確的，因為：\n1) 該方法添加偶數索引處的元素（k = k + 2）\n2) 對於nums = {3, 6, 1, 0, 1, 4, 2}：\n   - k=0：x += nums[0] = 3\n   - k=2：x += nums[2] = 3 + 1 = 4\n   - k=4：x += nums[4] = 4 + 1 = 5\n   - k=6：x += nums[6] = 5 + 2 = 7\n3) 因此，方法返回7"
    },
    {
        id: 46,
        question: {
            text: "(2014 Practice Exam-11215)\n\nConsider the following code segment.",
            code: {
                content: `
int[] arr = {7, 2, 5, 3, 0, 10};
for (int k = 0; k < arr.length - 1; k++)
{
    if (arr[k] > arr[k + 1])
        System.out.print(k + " " + arr[k] + " ");
}`,
                language: "java"
            }
        },
        code: "What will be printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 0 2 2 3 3 0" },
            { text: "B. 0 7 2 5 3 3" },
            { text: "C. 0 7 2 5 5 10" },
            { text: "D. 1 7 3 5 4 3" },
            { text: "E. 7 2 5 3 3 0" }
        ],
        correctAnswer: 1,
        explanationEN: "Option A is correct because:\n1) The code prints k and arr[k] when arr[k] > arr[k+1]\n2) For arr = {7, 2, 5, 3, 0, 10}:\n   - k=0: 7>2, prints \"0 2 \"\n   - k=1: 2<5, no print\n   - k=2: 5>3, prints \"2 3 \"\n   - k=3: 3>0, prints \"3 0 \"\n   - k=4: 0<10, no print\n3) Final output is \"0 2 2 3 3 0\"",
        explanationCN: "選項A是正確的，因為：\n1) 當arr[k] > arr[k+1]時，代碼打印k和arr[k]\n2) 對於arr = {7, 2, 5, 3, 0, 10}：\n   - k=0：7>2，打印\"0 2 \"\n   - k=1：2<5，不打印\n   - k=2：5>3，打印\"2 3 \"\n   - k=3：3>0，打印\"3 0 \"\n   - k=4：0<10，不打印\n3) 最終輸出是\"0 2 2 3 3 0\""
    },
    {
        id: 47,
        question: {
            text: "(AP Course and Exam Description-11217)\n\nConsider the following instance variable, arr, and incomplete method, partialSum. The method is intended to return an integer array sum such that for all k, sum[k] is equal to arr[0] + arr[1] + ... + arr[k]. For instance, if arr contains the values {1, 4, 1, 3}, the array sum will contain the values {1, 5, 6, 9}.",
            code: {
                content: `
private int[] arr;
public int[] partialSum()
{
    int[] sum = new int[arr.length];
    for (int j = 0; j < sum.length; j++)
    {
        sum[j] = 0;
    }
    /* missing code */
    return sum;
}

Implementation 1
for (int j = 0; j < arr.length; j++)
{
    sum[j] = sum[j - 1] + arr[j];
}

Implementation 2
for (int j = 0; j < arr.length; j++)
{
    for (int k = 0; k <= j; k++)
    {
        sum[j] = sum[j] + arr[k];
    }
}`,
                language: "java"
            }
        },
        code: "The following two implementations of /* missing code */ are proposed so that partialSum will work as intended.\n\nWhich of the following statements is true?",
        language: "java",
        options: [
            { text: "A. Both implementations work as intended, but implementation 1 is faster than implementation 2." },
            { text: "B. Both implementations work as intended, but implementation 2 is faster than implementation 1." },
            { text: "C. Both implementations work as intended and are equally fast." },
            { text: "D. Implementation 1 does not work as intended, because it will cause an ArrayIndexOutOfBoundsException." },
            { text: "E. Implementation 2 does not work as intended, because it will cause an ArrayIndexOutOfBoundsException." }
        ],
        correctAnswer: 1,
        explanationEN: "Option D is correct because:\n1) Implementation 1 has a critical flaw:\n   - When j=0, it tries to access sum[j-1] which is sum[-1]\n   - This causes an ArrayIndexOutOfBoundsException\n2) Implementation 2 works correctly:\n   - Uses nested loops to calculate running sums\n   - For each j, adds up all elements from index 0 to j\n   - No array bounds issues\n3) While Implementation 2 is less efficient (O(n²) vs O(n)), it would work correctly\n\nThe other options are incorrect because:\nA,B,C) Implementation 1 doesn't work at all due to the exception\nE) Implementation 2 works without array bounds issues",
        explanationCN: "選項D是正確的，因為：\n1) 實現1有一個關鍵缺陷：\n   - 當j=0時，它試圖訪問sum[j-1]，即sum[-1]\n   - 這會導致ArrayIndexOutOfBoundsException\n2) 實現2正確工作：\n   - 使用嵌套循環計算運行總和\n   - 對於每個j，加上從索引0到j的所有元素\n   - 沒有數組邊界問題\n3) 雖然實現2效率較低（O(n²) vs O(n)），但它能正確工作\n\n其他選項不正確，因為：\nA,B,C) 實現1由於異常而完全無法工作\nE) 實現2沒有數組邊界問題"
    },
    {
        id: 48,
        question: {
            text: "(2014 Practice Exam-11251)\n\nAssume that the array arr has been defined and initialized as follows.",
            code: {
                content: `
int[] arr = /* initial values for the array */;

// Which of the following will correctly print all of the odd integers 
// contained in arr but none of the even integers contained in arr?`,
                language: "java"
            }
        },
        code: "Which of the following will correctly print all of the odd integers contained in arr but none of the even integers contained in arr?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `for (int x : arr)
    if (x % 2 != 0)
        System.out.println(x);`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `for (int k = 1; k < arr.length; k++)
    if (arr[k] % 2 != 0)
        System.out.println(arr[k]);`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `for (int x : arr)
    if (x % 2 == 0)
        System.out.println(arr[x]);`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `for (int k = 0; k < arr.length; k++)
    if (arr[k] % 2 != 0)
        System.out.println(k);`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `for (int x : arr)
    if (arr[x] % 2 != 0)
        System.out.println(arr[x]);`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 0,
        explanationEN: "Option A is correct because:\n1) It uses a for-each loop to iterate through all elements in arr\n2) The condition x % 2 != 0 correctly identifies odd numbers\n3) It prints the actual values (x) rather than indices\n\nThe other options are incorrect because:\nB) Starts at index 1, missing the first element\nC) Uses element values as indices and prints even numbers\nD) Prints indices instead of values\nE) Incorrectly uses element values as indices, which could cause ArrayIndexOutOfBoundsException",
        explanationCN: "選項A是正確的，因為：\n1) 它使用for-each循環遍歷arr中的所有元素\n2) 條件x % 2 != 0正確識別奇數\n3) 它打印實際值（x）而不是索引\n\n其他選項不正確，因為：\nB) 從索引1開始，漏掉了第一個元素\nC) 將元素值用作索引並打印偶數\nD) 打印索引而不是值\nE) 錯誤地將元素值用作索引，可能導致ArrayIndexOutOfBoundsException"
    }
]
