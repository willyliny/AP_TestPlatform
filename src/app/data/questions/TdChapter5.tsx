import { QuizQuestion } from "../commonTypes";

export const TdChapter5Questions: QuizQuestion[] = [
    {
        id: 1,
        question: {
            text: "(AP Topic Question-10844)\n\nThe Car class will contain two string attributes for a car's make and model. The class will also contain a constructor.",
            code: {
                content: `
public class Car
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
            { 
                text: "A.",
                code: {
                    content: `    public String make;
    public String model;
    public Car(String myMake, String myModel)
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `    public String make;
    public String model;
    private Car(String myMake, String myModel)
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `    private String make;
    private String model;
    public Car(String myMake, String myModel)
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `    public String make;
    private String model;
    private Car(String myMake, String myModel)
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `    private String make;
    private String model;
    private Car(String myMake, String myModel)
    { /* implementation not shown */ }`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is the most appropriate implementation because: 1) It uses private instance variables (make and model) which is good encapsulation practice to protect the data, 2) It provides a public constructor which allows other classes to create Car objects, 3) The constructor parameters (myMake and myModel) can be used to initialize the private instance variables.",
        explanationCN: "選項C是最合適的實現，因為：1) 它使用私有實例變量（make和model），這是保護數據的良好封裝實踐，2) 它提供了公共構造函數，允許其他類創建Car對象，3) 構造函數參數（myMake和myModel）可用於初始化私有實例變量。"
    },
    {
        id: 2,
        question: {
            text: "(AP Topic Question-10845)\n\nThe Date class below will contain three int attributes for day, month, and year, a constructor, and a setDate method. The setDate method is intended to be accessed outside the class.",
            code: {
                content: `
public class Date
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
            { 
                text: "A.",
                code: {
                    content: `    private int day;
    private int month;
    private int year;
    private Date()
    { /* implementation not shown */ }
    private void setDate(int d, int m, int y)
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `    private int day;
    private int month;
    private int year;
    public Date()
    { /* implementation not shown */ }
    private void setDate(int d, int m, int y)
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `    private int day;
    private int month;
    private int year;
    public Date()
    { /* implementation not shown */ }
    public void setDate(int d, int m, int y)
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `    public int day;
    public int month;
    public int year;
    private Date()
    { /* implementation not shown */ }
    private void setDate(int d, int m, int y)
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `    public int day;
    public int month;
    public int year;
    public Date()
    { /* implementation not shown */ }
    public void setDate(int d, int m, int y)
    { /* implementation not shown */ }`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is the most appropriate implementation because: 1) It uses private instance variables (day, month, year) which is good encapsulation practice to protect the data, 2) It provides a public constructor allowing other classes to create Date objects, 3) The setDate method is public as specified in the question requirements to be accessed outside the class.",
        explanationCN: "選項C是最合適的實現，因為：1) 它使用私有實例變量（day、month、year），這是保護數據的良好封裝實踐，2) 它提供了公共構造函數，允許其他類創建Date對象，3) setDate方法是公共的，符合題目要求可以在類外部訪問。"
    },
    {
        id: 3,
        question: {
            text: "(AP Topic Question-10846)\n\nThe Player class below will contain two int attributes and a constructor. The class will also contain a method getScore that can be accessed from outside the class.",
            code: {
                content: `
public class Player
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
            { 
                text: "A.",
                code: {
                    content: `    private int score;
    private int id;
    private Player(int playerScore, int playerID)
    { /* implementation not shown */ }
    private int getScore()
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `    private int score;
    private int id;
    public Player(int playerScore, int playerID)
    { /* implementation not shown */ }
    private int getScore()
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `    private int score;
    private int id;
    public Player(int playerScore, int playerID)
    { /* implementation not shown */ }
    public int getScore()
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `    public int score;
    public int id;
    public Player(int playerScore, int playerID)
    { /* implementation not shown */ }
    private int getScore()
    { /* implementation not shown */ }`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `    public int score;
    public int id;
    public Player(int playerScore, int playerID)
    { /* implementation not shown */ }
    public int getScore()
    { /* implementation not shown */ }`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is the most appropriate implementation because: 1) It uses private instance variables (score and id) which is good encapsulation practice to protect the data, 2) It provides a public constructor allowing other classes to create Player objects, 3) The getScore method is public as specified in the question requirements to be accessed from outside the class.",
        explanationCN: "選項C是最合適的實現，因為：1) 它使用私有實例變量（score和id），這是保護數據的良好封裝實踐，2) 它提供了公共構造函數，允許其他類創建Player對象，3) getScore方法是公共的，符合題目要求可以從類外部訪問。"
    },
    {
        id: 4,
        question: {
            text: "(AP Topic Question-10978)\n\nConsider the definition of the Person class below. The class uses the instance variable adult to indicate whether a person is an adult or not.",
            code: {
                content: `
public class Person
{
    private String name;
    private int age;
    private boolean adult;
    public Person(String n, int a)
    {
        name = n;
        age = a;
        if(age >= 18)
        {
            adult = true;
        }
        else
        {
            adult = false;
        }
    }
}
                `,
                language: "java"
            }
        },
        code: "Which of the following statements will create a Person object that represents an adult person?",
        language: "java",
        options: [
            { text: "A. Person p = new Person(\"Homer\", \"adult\");" },
            { text: "B. Person p = new Person(\"Homer\", 23);" },
            { text: "C. Person p = new Person(\"Homer\", \"23\");" },
            { text: "D. Person p = new Person(\"Homer\", true);" },
            { text: "E. Person p = new Person(\"Homer\", 17);" }
        ],
        correctAnswer: 1,
        explanationEN: "Looking at the Person constructor, it takes a String for the name and an int for the age. The person is considered an adult if age >= 18. Option B provides \"Homer\" as the name (String) and 23 as the age (int). Since 23 >= 18, this will create a Person object where adult is set to true.",
        explanationCN: "查看Person構造函數，它接受一個String類型的名字和一個int類型的年齡。當年齡 >= 18時，該人被視為成年人。選項B提供了\"Homer\"作為名字（String類型）和23作為年齡（int類型）。由於23 >= 18，這將創建一個adult設置為true的Person對象。"
    },
    {
        id: 5,
        question: {
            text: "(AP Topic Question-10979)\n\nConsider the following class definition. Each object of the class Item will store the item's name as itemName, the item's regular price, in dollars, as regPrice, and the discount that is applied to the regular price when the item is on sale as discountPercent. For example, a discount of 15% is stored in discountPercent as 0.15.",
            code: {
                content: `
public class Item
{
    private String itemName;
    private double regPrice;
    private double discountPercent;
    public Item(String name, double price, double discount)
    {
        itemName = name;
        regPrice = price;
        discountPercent = discount;
    }
    public Item(String name, double price)
    {
        itemName = name;
        regPrice = price;
        discountPercent = 0.25;
    }
    /* Other methods not shown */
}
                `,
                language: "java"
            }
        },
        code: "Which of the following code segments, found in a class other than Item, can be used to create an item with a regular price of $10 and a discount of 25%?\n\nI.   Item b = new Item(\"blanket\", 10.0, 0.25);\nII.  Item b = new Item(\"blanket\", 10.0);\nIII. Item b = new Item(\"blanket\", 0.25, 10.0);",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and II only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 3,
        explanationEN: "Let's analyze each statement:\nI. Item(\"blanket\", 10.0, 0.25) - CORRECT: Uses the first constructor with name=\"blanket\", price=10.0, and discount=0.25\nII. Item(\"blanket\", 10.0) - CORRECT: Uses the second constructor which automatically sets discount to 0.25\nIII. Item(\"blanket\", 0.25, 10.0) - INCORRECT: Wrong order of parameters, would set price=0.25 and discount=10.0\nTherefore, only statements I and II will create an item with the desired specifications.",
        explanationCN: "讓我們分析每個語句：\nI. Item(\"blanket\", 10.0, 0.25) - 正確：使用第一個構造函數，name=\"blanket\"，price=10.0，discount=0.25\nII. Item(\"blanket\", 10.0) - 正確：使用第二個構造函數，自動設置discount為0.25\nIII. Item(\"blanket\", 0.25, 10.0) - 錯誤：參數順序錯誤，會將price設為0.25，discount設為10.0\n因此，只有語句I和II會創建具有所需規格的商品。"
    },
    {
        id: 6,
        question: {
            text: "(AP Exam-11226)\n\nThe question refer to the following declarations.",
            code: {
                content: `
public class Point
{
    private double myX;
    private double myY;

    // postcondition: this Point has coordinates (0,0)
    public Point()
    { /* implementation not shown */ }

    // postcondition: this Point has coordinates (x,y)
    public Point(double x, double y)
    { /* implementation not shown */ }

    // other methods not shown
}

public class Circle
{
    private Point myCenter;
    private double myRadius;

    // postcondition: this Circle has center (0, 0) and radius 0.0
    public Circle()
    { /* implementation not shown */ }

    // postcondition: this Circle has the given center and radius
    public Circle(Point center, double radius)
    { /* implementation not shown */ }

    // other methods not shown
}
                `,
                language: "java"
            }
        },
        code: "In a client program which of the following correctly declares and initializes Circle circ with center at (29.5, 33.0) and radius 10.0?",
        language: "java",
        options: [
            { text: "A. Circle circ = new Circle(29.5, 33.0, 10.0);" },
            { text: "B. Circle circ = new Circle((29.5, 33.0), 10.0);" },
            { text: "C. Circle circ = new Circle(new Point(29.5, 33.0), 10.0);" },
            { text: "D. Circle circ = new Circle();\n   circ.myCenter = new Point(29.5, 33.0);\n   circ.myRadius = 10.0;" },
            { text: "E. Circle circ = new Circle();\n   circ.myCenter = new Point();\n   circ.myCenter.myX = 29.5;\n   circ.myCenter.myY = 33.0;\n   circ.myRadius = 10.0;" }
        ],
        correctAnswer: 2,
        explanationEN: "Looking at the Circle constructors, to create a Circle with a specific center and radius, we need to use the second constructor which takes a Point object and a radius. Option C correctly: 1) Creates a new Point object with coordinates (29.5, 33.0), 2) Passes this Point object and radius 10.0 to the Circle constructor. Options A and B use incorrect syntax. Options D and E attempt to access private instance variables directly, which violates encapsulation.",
        explanationCN: "查看Circle的構造函數，要創建具有特定中心和半徑的Circle，我們需要使用第二個構造函數，它接受一個Point對象和一個半徑。選項C正確地：1) 創建了一個坐標為(29.5, 33.0)的新Point對象，2) 將這個Point對象和半徑10.0傳遞給Circle構造函數。選項A和B使用了錯誤的語法。選項D和E嘗試直接訪問私有實例變量，這違反了封裝原則。"
    },
    {
        id: 7,
        question: {
            text: "(AP Topic Question-11376)\n\nConsider the following class definition.",
            code: {
                content: `
public class Tester
{
    private int num1;
    private int num2;
    /* missing constructor */
}
                `,
                language: "java"
            }
        },
        code: "The following statement appears in a method in a class other than Tester. It is intended to create a new Tester object t with its attributes set to 10 and 20.\n\nTester t = new Tester(10, 20);\n\nWhich of the following can be used to replace /* missing constructor */ so that the object t is correctly created?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `    public Tester(int first, int second)
    {
        num1 = first;
        num2 = second;
    }`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `    public Tester(int first, int second)
    {
        num1 = 1;
        num2 = 2;
    }`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `    public Tester(int first, int second)
    {
        first = 1;
        second = 2;
    }`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `    public Tester(int first, int second)
    {
        first = 10;
        second = 20;
    }`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `    public Tester(int first, int second)
    {
        first = num1;
        second = num2;
    }`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 0,
        explanationEN: "Option A is correct because: 1) It properly assigns the constructor parameters to the instance variables, 2) When called with Tester(10, 20), it will set num1 to 10 and num2 to 20. The other options are incorrect because: B uses fixed values 1 and 2, C and D modify the parameters instead of the instance variables, and E tries to assign uninitialized instance variables to the parameters (backwards assignment).",
        explanationCN: "選項A是正確的，因為：1) 它正確地將構造函數參數賦值給實例變量，2) 當使用Tester(10, 20)調用時，會將num1設為10，num2設為20。其他選項不正確，因為：B使用固定值1和2，C和D修改參數而不是實例變量，E試圖將未初始化的實例變量賦值給參數（反向賦值）。"
    },
    {
        id: 8,
        question: {
            text: "(AP Topic Question-11020)\n\nConsider the following Bugs class, which is intended to simulate variations in a population of bugs. The population is stored in the method's int attribute. The getPopulation method is intended to allow methods in other classes to access a Bugs object's population value; however, it does not work as intended.",
            code: {
                content: `
public class Bugs
{
    private int population;
    public Bugs(int p)
    {
        population = p;
    }
    public int getPopulation()
    {
        return p;
    }
}
                `,
                language: "java"
            }
        },
        code: "Which of the following best explains why the getPopulation method does NOT work as intended?",
        language: "java",
        options: [
            { text: "A. The getPopulation method should be declared as private." },
            { text: "B. The return type of the getPopulation method should be void." },
            { text: "C. The getPopulation method should have at least one parameter." },
            { text: "D. The variable population is not declared inside the getPopulation method." },
            { text: "E. The instance variable population should be returned instead of p, which is local to the constructor." }
        ],
        correctAnswer: 4,
        explanationEN: "The error is that getPopulation tries to return 'p', which is a parameter from the constructor and is not accessible in the getPopulation method. Instead, it should return the instance variable 'population' which stores the actual bug population value. The other options are incorrect because: A) public access is needed for other classes to use it, B) int return type is correct for getting a value, C) no parameters are needed as it returns an instance variable, D) population should be an instance variable, not local to the method.",
        explanationCN: "錯誤在於getPopulation嘗試返回'p'，這是構造函數的參數，在getPopulation方法中無法訪問。相反，它應該返回存儲實際蟲群數量的實例變量'population'。其他選項不正確，因為：A) 需要public訪問權限才能讓其他類使用，B) 獲取值時使用int返回類型是正確的，C) 返回實例變量不需要參數，D) population應該是實例變量，而不是方法的局部變量。"
    },
    {
        id: 9,
        question: {
            text: "(AP Topic Question-11041)\n\nConsider the following class definition.",
            code: {
                content: `
public class FishTank
{
    private double numGallons;
    private boolean saltWater;
    public FishTank(double gals, boolean sw)
    {
        numGallons = gals;
        saltWater = sw;
    }
    public double getNumGallons()
    {
        return numGallons;
    }
    public boolean isSaltWater()
    {
        if(saltWater)
        {
            return "Salt Water";
        }
        else
        {
            return "Fresh Water";
        }
    }
}
                `,
                language: "java"
            }
        },
        code: "Which of the following best explains the reason why the class will not compile?",
        language: "java",
        options: [
            { text: "A. The variable numGallons is not declared in the getNumGallons method." },
            { text: "B. The variable saltWater is not declared in the isSaltWater method." },
            { text: "C. The isSaltWater method does not return the value of an instance variable." },
            { text: "D. The value returned by the getNumGallons method is not compatible with the return type of the method." },
            { text: "E. The value returned by the isSaltWater method is not compatible with the return type of the method." }
        ],
        correctAnswer: 4,
        explanationEN: "The error is in the isSaltWater method. It is declared to return boolean but attempts to return String values (\"Salt Water\" and \"Fresh Water\"). This type mismatch will cause a compilation error. The other options are incorrect because: A) numGallons is correctly declared as an instance variable, B) saltWater is correctly declared as an instance variable, C) this is not the issue - returning instance variables is not required, D) getNumGallons correctly returns a double value matching its return type.",
        explanationCN: "錯誤出現在isSaltWater方法中。該方法聲明返回boolean類型，但卻試圖返回String值（\"Salt Water\"和\"Fresh Water\"）。這種類型不匹配會導致編譯錯誤。其他選項不正確，因為：A) numGallons正確地聲明為實例變量，B) saltWater正確地聲明為實例變量，C) 這不是問題所在 - 不一定要返回實例變量，D) getNumGallons正確地返回與其返回類型匹配的double值。"
    },
    {
        id: 10,
        question: {
            text: "(AP Topic Question-11058)\n\nConsider the following class definition. The class does not compile.",
            code: {
                content: `
public class Player
{
    private double score;
    public getScore()
    {
        return score;
    }
    // Constructor not shown
}
                `,
                language: "java"
            }
        },
        code: "The accessor method getScore is intended to return the score of a Player object.\n\nWhich of the following best explains why the class does not compile?",
        language: "java",
        options: [
            { text: "A. The getScore method should be declared as private." },
            { text: "B. The getScore method requires a parameter." },
            { text: "C. The return type of the getScore method needs to be defined as double." },
            { text: "D. The return type of the getScore method needs to be defined as String." },
            { text: "E. The return type of the getScore method needs to be defined as void." }
        ],
        correctAnswer: 2,
        explanationEN: "The error is that the getScore method is missing its return type declaration. Since it returns a double value (score), it should be declared as 'public double getScore()'. The other options are incorrect because: A) private access prevents use in other classes, B) accessor methods typically don't need parameters, D) String is incorrect as score is a double, E) void would not allow returning a value.",
        explanationCN: "錯誤在於getScore方法缺少返回類型聲明。由於它返回一個double值（score），應該聲明為'public double getScore()'。其他選項不正確，因為：A) private訪問權限阻止在其他類中使用，B) 訪問器方法通常不需要參數，D) String不正確因為score是double類型，E) void不允許返回值。"
    },
    {
        id: 11,
        question: {
            text: "(AP Topic Question-11009)\n\nConsider the following class definition.",
            code: {
                content: `
public class Password
{
    private String password;
    public Password(String pwd)
    {
        password = pwd;
    }
    public void reset(String new_pwd)
    {
        password = new_pwd;
    }
}
                `,
                language: "java"
            }
        },
        code: "Consider the following code segment, which appears in a method in a class other than Password. The code segment does not compile.\n\nPassword p = new Password(\"password\");\nSystem.out.println(\"The new password is \" + p.reset(\"password\"));\n\nWhich of the following best identifies the reason the code segment does not compile?",
        language: "java",
        options: [
            { text: "A. The code segment attempts to access the private variable password from outside the Password class." },
            { text: "B. The new password cannot be the same as the old password." },
            { text: "C. The Password class constructor is invoked incorrectly." },
            { text: "D. The reset method cannot be called from outside the Password class." },
            { text: "E. The reset method does not return a value that can be printed." }
        ],
        correctAnswer: 4,
        explanationEN: "The error occurs because the code tries to print the result of p.reset(), but reset is declared as void and doesn't return any value. The other options are incorrect because: A) The code doesn't try to access password directly, B) There's no restriction on password values, C) The constructor is called correctly with a String argument, D) The reset method is public and can be called from any class.",
        explanationCN: "錯誤發生是因為代碼試圖打印p.reset()的結果，但reset被聲明為void且不返回任何值。其他選項不正確，因為：A) 代碼沒有直接訪問password，B) 沒有對密碼值的限制，C) 構造函數使用String參數正確調用，D) reset方法是public的可以從任何類調用。"
    },
    {
        id: 12,
        question: {
            text: "(AP Topic Question-11015)\n\nConsider the following class definition.",
            code: {
                content: `
public class ItemInventory
{
    private int numItems;
    public ItemInventory(int num)
    {
        numItems = num;
    }
    public updateItems(int newNum)
    {
        numItems = newNum;
    }
}
                `,
                language: "java"
            }
        },
        code: "Which of the following best identifies the reason the class does not compile?",
        language: "java",
        options: [
            { text: "A. The constructor header is missing a return type." },
            { text: "B. The updateItems method is missing a return type." },
            { text: "C. The constructor should not have a parameter." },
            { text: "D. The updateItems method should not have a parameter." },
            { text: "E. The instance variable numItems should be public instead of private." }
        ],
        correctAnswer: 1,
        explanationEN: "The code does not compile because the updateItems method is missing a return type. In Java, all methods (except constructors) must have a return type declared. The constructor correctly has no return type because constructors never specify a return type. The parameter in both the constructor and updateItems method is appropriate, and the instance variable can be private for proper encapsulation.",
        explanationCN: "代碼無法編譯是因為updateItems方法缺少返回類型。在Java中，除了構造函數外，所有方法都必須聲明返回類型。構造函數正確地沒有返回類型，因為構造函數從不指定返回類型。構造函數和updateItems方法中的參數都是適當的，且實例變量可以是私有的以實現適當的封裝。"
    },
    {
        id: 13,
        question: {
            text: "(AP Topic Question-11278)\n\nIn the Toy class below, the raisePrice method is intended to increase the value of the instance variable price by the value of the parameter surcharge. The method does not work as intended.",
            code: {
                content: `
public class Toy
{
    private String name;
    private double price;
    public Toy(String n, double p)
    {
        name = n;
        price = p;
    }
    public void raisePrice(double surcharge)  // Line 12
    {
        return price + surcharge;  // Line 14
    }
}
                `,
                language: "java"
            }
        },
        code: "Which of the following changes should be made so that the class definition compiles without error and the method raisePrice works as intended?",
        language: "java",
        options: [
            { text: "A. Replace line 14 with surcharge += price;" },
            { text: "B. Replace line 14 with price += surcharge;" },
            { text: "C. Replace line 14 with return price += surcharge;" },
            { text: "D. Replace line 12 with public raisePrice(double surcharge);" },
            { text: "E. Replace line 12 with public double raisePrice(double surcharge);" }
        ],
        correctAnswer: 1,
        explanationEN: "The raisePrice method should increase the price by the surcharge amount. Option B (price += surcharge) correctly adds the surcharge to the price. The method is declared as void, so it shouldn't return a value. The other options are incorrect because: A) incorrectly adds price to surcharge, C) tries to return a value from a void method, D) missing return type, E) changes return type when no return is needed.",
        explanationCN: "raisePrice方法應該將價格增加surcharge金額。選項B（price += surcharge）正確地將surcharge加到price上。該方法被聲明為void，所以不應該返回值。其他選項不正確因為：A）錯誤地將price加到surcharge上，C）試圖從void方法返回值，D）缺少返回類型，E）改變了不需要的返回類型。"
    },
    {
        id: 14,
        question: {
            text: "(AP Topic Question-10990)\n\nConsider the following class, which uses the instance variable balance to represent a bank account balance.",
            code: {
                content: `
public class BankAccount
{
    private double balance;
    public double deposit(double amount)
    {
        /* missing code */
    }
}
                `,
                language: "java"
            }
        },
        code: "The deposit method is intended to increase the account balance by the deposit amount and then return the updated balance. Which of the following code segments should replace /* missing code */ so that the deposit method will work as intended?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `    amount = balance + amount;
    return amount;`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `    balance = amount;
    return amount;`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `    balance = amount;
    return balance;`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `    balance = balance + amount;
    return amount;`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `    balance = balance + amount;
    return balance;`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 4,
        explanationEN: "Option E correctly implements the deposit method by: 1) Adding the deposit amount to the existing balance (balance = balance + amount), 2) Returning the updated balance. The other options are incorrect because: A) modifies and returns amount instead of balance, B) overwrites balance with amount and returns amount, C) overwrites balance with amount, D) correctly updates balance but returns the deposit amount instead of the updated balance.",
        explanationCN: "選項E正確實現了存款方法，通過：1) 將存款金額加到現有餘額上（balance = balance + amount），2) 返回更新後的餘額。其他選項不正確，因為：A) 修改並返回amount而不是balance，B) 用amount覆蓋balance並返回amount，C) 用amount覆蓋balance，D) 正確更新了balance但返回存款金額而不是更新後的餘額。"
    },
    {
        id: 15,
        question: {
            text: "(AP Topic Question-11421)\n\nConsider the BankAccount class below.",
            code: {
                content: `
public class BankAccount
{
    private final String ACCOUNT_NUMBER;
    private double balance;
    public BankAccount(String acctNumber, double beginningBalance)
    {
        ACCOUNT_NUMBER = acctNumber;
        balance = beginningBalance;
    }
    public boolean withdraw(double withdrawAmount)
    {
        /* missing code */
    }
}
                `,
                language: "java"
            }
        },
        code: "The class contains the withdraw method, which is intended to update the instance variable balance under certain conditions and return a value indicating whether the withdrawal was successful. If subtracting withdrawAmount from balance would lead to a negative balance, balance is unchanged and the withdrawal is considered unsuccessful. Otherwise, balance is decreased by withdrawAmount and the withdrawal is considered successful.\n\nWhich of the following code segments can replace /* missing code */ to ensure that the withdraw method works as intended?\n\nI.   if(withdrawAmount > balance)\n    {\n        return \"Overdraft\";\n    }\n    else\n    {\n        balance -= withdrawAmount;\n        return true;\n    }\n\nII.  if(withdrawAmount > balance)\n    {\n        return false;\n    }\n    else\n    {\n        balance -= withdrawAmount;\n        return balance;\n    }\n\nIII. if(withdrawAmount > balance)\n    {\n        return false;\n    }\n    else\n    {\n        balance -= withdrawAmount;\n        return true;\n    }",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and II only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 2,
        explanationEN: "Let's analyze each code segment:\nI. INCORRECT: Returns \"Overdraft\" (String) when method should return boolean\nII. INCORRECT: Returns balance (double) in success case when method should return boolean\nIII. CORRECT: Returns false if withdrawal would cause negative balance, updates balance and returns true if successful\n\nOnly III correctly implements the requirements: returns boolean values and properly handles both successful and unsuccessful cases while maintaining the balance appropriately.",
        explanationCN: "讓我們分析每個代碼段：\nI. 錯誤：返回\"Overdraft\"（String類型）而方法應該返回boolean\nII. 錯誤：成功時返回balance（double類型）而方法應該返回boolean\nIII. 正確：如果取款會導致負餘額則返回false，成功時更新餘額並返回true\n\n只有III正確實現了要求：返回boolean值，並正確處理成功和失敗的情況，同時適當地維護餘額。"
    },
    {
        id: 16,
        question: {
            text: "(2014 Practice Exam -11228)\n\nConsider the following class declarations.",
            code: {
                content: `
public class Point
{
    private double x;   // x-coordinate
    private double y;   // y-coordinate

    public Point()
    {
        x = 0;
        y = 0;
    }

    public Point(double a, double b)
    {
        x = a;
        y = b;
    }

    // There may be instance variables, constructors, and methods that are not shown.
}

public class Circle
{
    private Point myCenter;
    private double myRadius;

    /** Constructs a circle where (a, b) is the center and r is the radius.
     */
    public Circle(double a, double b, double r)
    {
        /* missing code */
    }
}
                `,
                language: "java"
            }
        },
        code: "Which of the following replacements for /* missing code */ will correctly implement the Circle constructor?\n\nI.   center = new Point();\n     radius = r;\n\nII.  center = new Point(a, b);\n     radius = r;\n\nIII. center = new Point();\n     center.x = a;\n     center.y = b;\n     radius = r;",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. II and III only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 1,
        explanationEN: "Let's analyze each implementation:\nI. INCORRECT: Creates a Point at (0,0) instead of (a,b)\nII. CORRECT: Creates a Point at (a,b) using the Point constructor with parameters\nIII. INCORRECT: Attempts to access private instance variables x and y directly, which violates encapsulation\n\nOnly II correctly implements the constructor by creating a Point at the specified coordinates (a,b) and setting the radius. III violates encapsulation by trying to access private variables, and I creates the point at the wrong coordinates.",
        explanationCN: "讓我們分析每個實現：\nI. 錯誤：在(0,0)而不是(a,b)創建Point\nII. 正確：使用帶參數的Point構造函數在(a,b)創建Point\nIII. 錯誤：試圖直接訪問私有實例變量x和y，這違反了封裝原則\n\n只有II正確實現了構造函數，通過在指定坐標(a,b)創建Point並設置半徑。III違反了封裝原則，試圖訪問私有變量，而I在錯誤的坐標創建了點。"
    },
    {
        id: 17,
        question: {
            text: "(AP Course and Exam Description -11026)\n\nConsider the following class definition.",
            code: {
                content: `
public class Example
{
    private int x;
    // Constructor not shown.
}
                `,
                language: "java"
            }
        },
        code: "Which of the following is a correct header for a method of the Example class that would return the value of the private instance variable x so that it can be used in a class other than Example?",
        language: "java",
        options: [
            { text: "A. private int getX()" },
            { text: "B. private void getX()" },
            { text: "C. public int getX()" },
            { text: "D. public void getX()" },
            { text: "E. public void getX(int x)" }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because: 1) The method needs to be public to be accessed from other classes, 2) It needs to return an int to match the type of x, 3) No parameters are needed for a getter method. The other options are incorrect because: A) private access prevents use in other classes, B) void return type can't return x's value, D) void return type can't return x's value, E) parameter is unnecessary and void can't return x's value.",
        explanationCN: "選項C是正確的，因為：1) 方法需要是public才能從其他類訪問，2) 需要返回int以匹配x的類型，3) getter方法不需要參數。其他選項不正確，因為：A) private訪問權限阻止在其他類中使用，B) void返回類型不能返回x的值，D) void返回類型不能返回x的值，E) 參數不必要且void不能返回x的值。"
    },
    {
        id: 18,
        question: {
            text: "(AP Exam-11108)\n\nConsider the following class declaration.",
            code: {
                content: `
public class IntCell
{
    private int myStoredValue;
    // constructor not shown
    public int getValue()
    {
        return myStoredValue;
    }
    public String toString()
    {
        return "" + myStoredValue;
    }
}
                `,
                language: "java"
            }
        },
        code: "Assume that the following declaration appears in a client class.\n\nIntCell m = new IntCell();\n\nWhich of these statements can be used in the client class?\n\nI.   System.out.println(m.getValue());\nII.  System.out.println(m.myStoredValue);\nIII. System.out.println(m);",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. I and II" },
            { text: "E. I and III" }
        ],
        correctAnswer: 4,
        explanationEN: "Let's analyze each statement:\nI. CORRECT: getValue() is public and can be called from client class\nII. INCORRECT: myStoredValue is private and cannot be accessed directly from client class\nIII. CORRECT: println(m) will automatically call m.toString(), which is public\n\nTherefore, statements I and III are valid. Statement II violates encapsulation by attempting to access a private instance variable directly.",
        explanationCN: "讓我們分析每個語句：\nI. 正確：getValue()是public的，可以從客戶端類調用\nII. 錯誤：myStoredValue是私有的，不能從客戶端類直接訪問\nIII. 正確：println(m)會自動調用m.toString()，這是public的\n\n因此，語句I和III是有效的。語句II違反了封裝原則，試圖直接訪問私有實例變量。"
    },
    {
        id: 19,
        question: {
            text: "(2014 Practice Exam-11336)\n\nConsider the following partial class declaration.",
            code: {
                content: `
public class SomeClass
{
    private int myA;
    private int myB;
    private int myC;

    // Constructor(s) not shown

    public int getA()
    { return myA; }

    public void setB(int value)
    { myB = value; }
}
                `,
                language: "java"
            }
        },
        code: "Which of the following changes to SomeClass will allow other classes to access but not modify the value of myC?",
        language: "java",
        options: [
            { text: "A. Make myC public." },
            { 
                text: "B.",
                code: {
                    content: `Include the method:
public int getC()
{ return myC; }`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `Include the method:
private int getC()
{ return myC; }`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `Include the method:
public void getC(int x)
{ x = myC; }`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `Include the method:
private void getC(int x)
{ x = myC; }`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 1,
        explanationEN: "Option B is correct because it provides a public getter method that returns the value of myC while keeping myC private. This allows read-only access from other classes. The other options are incorrect because: A) Making myC public allows both access and modification, C) Private method can't be accessed from other classes, D) Void method with parameter doesn't return myC's value, E) Private and void method with parameter doesn't provide access from other classes.",
        explanationCN: "選項B是正確的，因為它提供了一個公共的getter方法來返回myC的值，同時保持myC的私有性。這允許其他類只讀訪問。其他選項不正確，因為：A) 使myC為public允許訪問和修改，C) 私有方法不能從其他類訪問，D) 帶參數的void方法不返回myC的值，E) 私有且帶參數的void方法不提供從其他類的訪問。"
    },
    {
        id: 20,
        question: {
            text: "(2015 Practice Exam-11147)\n\nConsider the following two methods, which appear within a single class.",
            code: {
                content: `
public static void changeIt(int[] arr, int val, String word)
{
    arr = new int[5];
    val = 0;
    word = word.substring(0, 5);

    for (int k = 0; k < arr.length; k++)
    {
        arr[k] = 0;
    }
}

public static void start()
{
    int[] nums = {1, 2, 3, 4, 5};
    int value = 6;
    String name = "blackboard";

    changeIt(nums, value, name);

    for (int k = 0; k < nums.length; k++)
    {
        System.out.print(nums[k] + " ");
    }
    System.out.print(value + " ");
    System.out.print(name);
}
                `,
                language: "java"
            }
        },
        code: "What is printed as a result of the call start()?",
        language: "java",
        options: [
            { text: "A. 0 0 0 0 0 0 black" },
            { text: "B. 0 0 0 0 0 6 blackboard" },
            { text: "C. 1 2 3 4 5 6 black" },
            { text: "D. 1 2 3 4 5 0 black" },
            { text: "E. 1 2 3 4 5 6 blackboard" }
        ],
        correctAnswer: 4,
        explanationEN: "Let's analyze what happens:\n1. In start(), we create nums={1,2,3,4,5}, value=6, and name=\"blackboard\"\n2. When calling changeIt:\n   - arr = new int[5] creates a new array, but doesn't affect nums (arrays are passed by reference, but reassignment doesn't affect original)\n   - val = 0 doesn't affect value (primitives are passed by value)\n   - word = word.substring(0,5) doesn't affect name (Strings are immutable)\n3. Therefore, the original values remain unchanged\n4. The output will be:\n   - nums values: \"1 2 3 4 5 \"\n   - value: \"6 \"\n   - name: \"blackboard\"",
        explanationCN: "讓我們分析發生了什麼：\n1. 在start()中，我們創建nums={1,2,3,4,5}，value=6，和name=\"blackboard\"\n2. 當調用changeIt時：\n   - arr = new int[5]創建了一個新數組，但不影響nums（數組是通過引用傳遞，但重新賦值不影響原始值）\n   - val = 0不影響value（基本類型是通過值傳遞）\n   - word = word.substring(0,5)不影響name（字符串是不可變的）\n3. 因此，原始值保持不變\n4. 輸出將是：\n   - nums的值：\"1 2 3 4 5 \"\n   - value的值：\"6 \"\n   - name的值：\"blackboard\""
    },
    {
        id: 21,
        question: {
            text: "(AP Exam-11227)\n\nThe question refer to the following declarations.",
            code: {
                content: `
public class Point
{
    private double myX;
    private double myY;

    // postcondition: this Point has coordinates (0,0)
    public Point()
    { /* implementation not shown */ }

    // postcondition: this Point has coordinates (x,y)
    public Point(double x, double y)
    { /* implementation not shown */ }

    // other methods not shown
}

public class Circle
{
    private Point myCenter;
    private double myRadius;

    // postcondition: this Circle has center (0, 0) and radius 0.0
    public Circle()
    { /* implementation not shown */ }

    // postcondition: this Circle has the given center and radius
    public Circle(Point center, double radius)
    { /* implementation not shown */ }

    // other methods not shown
}
                `,
                language: "java"
            }
        },
        code: "Which of the following would be the best specification for a Circle method isInside that determines whether a Point lies inside this Circle?",
        language: "java",
        options: [
            { text: "A. public boolean isInside()" },
            { text: "B. public void isInside(boolean found)" },
            { text: "C. public boolean isInside(Point p)" },
            { text: "D. public void isInside(Point p, boolean found)" },
            { text: "E. public boolean isInside(Point p, Point center, double radius)" }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is the best specification because:\n1) The method needs to be public to be called from other classes\n2) It should return a boolean to indicate whether the point is inside (true) or not (false)\n3) It needs a Point parameter to check if that point is inside\n4) It doesn't need center or radius parameters as these are already instance variables of the Circle class\n5) It doesn't need an output parameter (found) as the boolean return value serves this purpose",
        explanationCN: "選項C是最佳規範，因為：\n1) 該方法需要是public以便從其他類調用\n2) 它應該返回boolean來表示點是在圓內（true）還是不在（false）\n3) 它需要一個Point參數來檢查該點是否在內\n4) 它不需要center或radius參數，因為這些已經是Circle類的實例變量\n5) 它不需要輸出參數（found），因為boolean返回值已經服務於此目的"
    },
    {
        id: 22,
        question: {
            text: "(Previous Practice Question-11373)\n\nConsider the following class that stores information about temperature readings on various dates.",
            code: {
                content: `
public class TemperatureReading implements Comparable
{
    private double temperature;
    private int month, day, year;
    public int compareTo(Object obj)
    {
        TemperatureReading other = (TemperatureReading) obj;
        /* missing code */
    }
    // There may be instance variables, constructors and methods not shown.
}
                `,
                language: "java"
            }
        },
        code: "Consider the following code segments that are potential replacements for /* missing code */.\n\nI.   Double d1 = new Double(temperature);\n     Double d2 = new Double(other.temperature);\n     return d1.compareTo(d2);\n\nII.  if(temperature < other.temperature)\n         return -1;\n     else if(temperature == other.temperature)\n         return 0;\n     else\n         return 1;\n\nIII. return (int)(temperature - other.temperature);\n\nWhich of the code segments could be used to replace /* missing code */ so that compareTo can be used to order TemperatureReading objects by increasing temperature value?",
        language: "java",
        options: [
            { text: "A. II only" },
            { text: "B. I and II only" },
            { text: "C. I and III only" },
            { text: "D. II and III only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 4,
        explanationEN: "All three implementations are valid for ordering by increasing temperature:\n\nI. CORRECT: Creates Double objects and uses their compareTo method which returns negative for less than, 0 for equal, positive for greater than\n\nII. CORRECT: Explicitly implements the compareTo contract: returns -1 for less than, 0 for equal, 1 for greater than\n\nIII. CORRECT: Returns the difference cast to int, which will be negative if temperature < other.temperature, 0 if equal, and positive if greater\n\nAll three implementations satisfy the compareTo contract for ordering objects.",
        explanationCN: "所有三種實現都可以用於按溫度升序排序：\n\nI. 正確：創建Double對象並使用它們的compareTo方法，小於時返回負數，等於時返回0，大於時返回正數\n\nII. 正確：明確實現了compareTo約定：小於時返回-1，等於時返回0，大於時返回1\n\nIII. 正確：返回轉換為int的差值，如果temperature < other.temperature則為負，相等時為0，大於時為正\n\nAll three implementations satisfy the compareTo contract for ordering objects."
    },
    {
        id: 23,
        question: {
            text: "(AP Course and Exam Description-11374)\n\nConsider the following methods.",
            code: {
                content: `
public void changer(String x, int y)
{
    x = x + "peace";
    y = y * 2;
}

public void test()
{
    String s = "world";
    int n = 6;
    changer(s, n);
    /* End of method */
}
                `,
                language: "java"
            }
        },
        code: "When the call test() is executed, what are the values of s and n at the point indicated by /* End of method */?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: `s / n
world / 6`,
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: `s / n
worldpeace / 6`,
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `s / n
world / 12`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `s / n
worldpeace / 12`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: `s / n
peace / 12`,
                    language: "java"
                }
            }
        ],
        correctAnswer: 0,
        explanationEN: "The values remain unchanged because:\n1. For String parameter x:\n   - x = x + \"peace\" creates a new String but doesn't affect s (Strings are immutable)\n   - The original String s remains \"world\"\n2. For int parameter y:\n   - y = y * 2 modifies the local parameter y but doesn't affect n\n   - Primitive types are passed by value, so n remains 6\n3. Therefore at /* End of method */:\n   - s is still \"world\"\n   - n is still 6",
        explanationCN: "值保持不變，因為：\n1. 對於String參數x：\n   - x = x + \"peace\"創建了一個新的String但不影響s（字符串是不可變的）\n   - 原始String s保持為\"world\"\n2. 對於int參數y：\n   - y = y * 2修改了局部參數y但不影響n\n   - Primitive類型是按值傳遞的，所以n保持為6\n3. 因此在/* End of method */處：\n   - s仍然是\"world\"\n   - n仍然是6"
    },
    {
        id: 24,
        question: {
            text: "(AP Exam-11114)\n\nConsider the following instance variables and method that appear in a class representing student information.",
            code: {
                content: `
public class Student
{
    private int assignmentsCompleted;
    private double testAverage;
    public boolean isPassing()
    { /* implementation not shown */ }
}
                `,
                language: "java"
            }
        },
        code: "A student can pass a programming course if at least one of the following conditions is met:\n- The student has a test average that is greater than or equal to 90.\n- The student has a test average that is greater than or equal to 75 and has at least 4 completed assignments.\n\nConsider the following proposed implementations of the isPassing method.\n\nI.   if(testAverage >= 90)\n         return true;\n     if(testAverage >= 75 && assignmentsCompleted >= 4)\n         return true;\n     return false;\n\nII.  boolean pass = false;\n     if(testAverage >= 90)\n         pass = true;\n     if(testAverage >= 75 && assignmentsCompleted >= 4)\n         pass = true;\n     return pass;\n\nIII. return (testAverage >= 90) || (testAverage >= 75 && assignmentsCompleted >= 4);\n\nWhich of the implementations will correctly implement method isPassing?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. I and III only" },
            { text: "D. II and III only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 4,
        explanationEN: "All three implementations are correct because they all properly implement the logic for passing conditions:\n\nI. CORRECT: Uses sequential if statements with explicit returns\n- Returns true if average >= 90\n- Returns true if average >= 75 and assignments >= 4\n- Returns false otherwise\n\nII. CORRECT: Uses a boolean variable to track passing status\n- Sets pass to true if average >= 90\n- Sets pass to true if average >= 75 and assignments >= 4\n- Returns final status\n\nIII. CORRECT: Uses boolean expression with logical operators\n- Combines both conditions with OR (||)\n- Second condition uses AND (&&) for its two requirements\n\nAll implementations produce the same results for all possible input values.",
        explanationCN: "所有三種實現都是正確的，因為它們都正確實現了通過條件的邏輯：\n\nI. 正確：使用順序if語句和明確的返回\n- 如果平均分 >= 90則返回true\n- 如果平均分 >= 75且作業數 >= 4則返回true\n- 否則返回false\n\nII. 正確：使用布爾變量跟踪通過狀態\n- 如果平均分 >= 90則設置pass為true\n- 如果平均分 >= 75且作業數 >= 4則設置pass為true\n- 返回最終狀態\n\nIII. 正確：使用帶邏輯運算符的布爾表達式\n- 用OR (||)組合兩個條件\n- 第二個條件使用AND (&&)組合其兩個要求\n\nAll implementations produce the same results for all possible input values."
    },
    {
        id: 25,
        question: {
            text: "(AP Course and Exam Description-11385)\n\nDirections: Select the choice that best fits each statement. The following question(s) refer to the following incomplete class declaration.",
            code: {
                content: `
public class TimeRecord
{
    private int hours;
    private int minutes;  // 0 ≤ minutes < 60
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
}`,
                language: "java"
            }
        },
        code: "Which of the following can be used to replace /* missing code */ so that advance will correctly update the time?",
        language: "java",
        options: [
            { 
                text: "A.",
                code: {
                    content: "minutes = minutes % 60;",
                    language: "java"
                }
            },
            { 
                text: "B.",
                code: {
                    content: "minutes = minutes + hours % 60;",
                    language: "java"
                }
            },
            { 
                text: "C.",
                code: {
                    content: `hours = hours + minutes / 60;
minutes = minutes % 60;`,
                    language: "java"
                }
            },
            { 
                text: "D.",
                code: {
                    content: `hours = hours + minutes % 60;
minutes = minutes / 60;`,
                    language: "java"
                }
            },
            { 
                text: "E.",
                code: {
                    content: "hours = hours + minutes / 60;",
                    language: "java"
                }
            }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because:\n1. When minutes exceeds 60, we need to:\n   - Add the extra hours (minutes / 60) to hours\n   - Keep only the remaining minutes (minutes % 60)\n2. For example, if minutes becomes 125:\n   - 125 / 60 = 2 hours to add\n   - 125 % 60 = 5 minutes remaining",
        explanationCN: "選項C是正確的，因為：\n1. 當分鐘超過60時，我們需要：\n   - 將額外的小時數（minutes / 60）加到hours\n   - 只保留剩餘的分鐘數（minutes % 60）\n2. 例如，如果minutes變成125：\n   - 125 / 60 = 2小時要加\n   - 125 % 60 = 5分鐘剩餘"
    },
    {
        id: 26,
        question: {
            text: "(AP Exam-11399)\n\nConsider the following instance variables and incomplete method that are part of a class that represents an item. The variables years and months are used to represent the age of the item, and the value for months is always between 0 and 11, inclusive. Method updateAge is used to update these variables based on the parameter extraMonths that represents the number of months to be added to the age.",
            code: {
                content: `
public class Item
{
    private int years;
    private int months;  // 0 <= months <= 11
    // precondition: extraMonths >= 0
    public void updateAge(int extraMonths)
    {
        /* body of updateAge */
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following code segments could be used to replace /* body of updateAge */ so that the method will work as intended?",
        language: "java",
        options: [
            { text: "A. I only" },
            { text: "B. II only" },
            { text: "C. III only" },
            { text: "D. II and III only" },
            { text: "E. I, II, and III" }
        ],
        correctAnswer: 4,
        explanationEN: "All three implementations are correct:\n\nI. Correctly calculates:\n- yrs = number of complete years from extraMonths (extraMonths / 12)\n- mos = remaining months (extraMonths % 12)\n- Updates years and months appropriately\n\nII. Correctly:\n- Converts everything to months (years * 12 + months + extraMonths)\n- Extracts new years (totalMonths / 12)\n- Extracts new months (totalMonths % 12)\n\nIII. Correctly:\n- Adds extra months to current months\n- Calculates additional years from total months (totalMonths / 12)\n- Sets remaining months (totalMonths % 12)\n\nAll three implementations maintain the invariant that months stays between 0 and 11.",
        explanationCN: "所有三種實現都是正確的：\n\nI. 正確計算：\n- yrs = 從extraMonths得到的完整年數（extraMonths / 12）\n- mos = 剩餘月數（extraMonths % 12）\n- 適當更新年份和月份\n\nII. 正確：\n- 將所有轉換為月份（years * 12 + months + extraMonths）\n- 提取新的年份（totalMonths / 12）\n- 提取新的月份（totalMonths % 12）\n\nIII. 正確：\n- 將額外月份加到當前月份\n- 從總月數計算額外年份（totalMonths / 12）\n- 設置剩餘月份（totalMonths % 12）\n\n所有三種實現都保持了months在0到11之間的不變性。"
    },
    {
        id: 27,
        question: {
            text: "(AP Topic Question-11349)\n\nConsider the following class definition.",
            code: {
                content: `
public class Something
{
    private static int count = 0;
    public Something()
    {
        count += 5;
    }
    public static void increment()
    {
        count++;
    }
}`,
                language: "java"
            }
        },
        code: "The following code segment appears in a method in a class other than Something.\n\nSomething s = new Something();\nSomething.increment();\n\nWhich of the following best describes the behavior of the code segment?",
        language: "java",
        options: [
            { text: "A. The code segment does not compile because the increment method should be called on an object of the class Something, not on the class itself." },
            { text: "B. The code segment creates a Something object s. The class Something's static variable count is initially 0, then increased by 1." },
            { text: "C. The code segment creates a Something object s. The class Something's static variable count is initially 0, then increased by 5, then increased by 1." },
            { text: "D. The code segment creates a Something object s. After executing the code segment, the object s has a count value of 1." },
            { text: "E. The code segment creates a Something object s. After executing the code segment, the object s has a count value of 5." }
        ],
        correctAnswer: 2,
        explanationEN: "Option C is correct because:\n1. count is a static variable shared by all instances of Something\n2. When new Something() is called:\n   - The constructor executes and adds 5 to count (count = 5)\n3. When Something.increment() is called:\n   - The static method increment() adds 1 to count (count = 6)\n4. The final value of count is 6\n\nOptions A, D, and E are incorrect because they misunderstand static variables/methods. Option B is incorrect about the sequence of changes to count.",
        explanationCN: "選項C是正確的，因為：\n1. count是一個靜態變量，被所有Something實例共享\n2. 當調用new Something()時：\n   - 構造函數執行並將count加5（count = 5）\n3. 當調用Something.increment()時：\n   - 靜態方法increment()將count加1（count = 6）\n4. count的最終值是6\n\n選項A、D和E錯誤地理解了靜態變量/方法。選項B錯誤地描述了count的變化順序。"
    },
    {
        id: 28,
        question: {
            text: "(AP Topic Question-10882)\n\nConsider the following class definition.",
            code: {
                content: `
public class Element
{
    public static int max_value = 0;
    private int value;
    public Element(int v)
    {
        value = v;
        if(value > max_value)
        {
            max_value = value;
        }
    }
}`,
                language: "java"
            }
        },
        code: "The following code segment appears in a class other than Element.\n\nfor(int i = 0; i < 5; i++)\n{\n    int k = (int)(Math.random() * 10 + 1);\n    if(k >= Element.max_value)\n    {\n        Element e = new Element(k);\n    }\n}\n\nWhich of the following best describes the behavior of the code segment?",
        language: "java",
        options: [
            { text: "A. Exactly 5 Element objects are created." },
            { text: "B. Exactly 10 Element objects are created." },
            { text: "C. Between 0 and 5 Element objects are created, and Element.max_value is increased only for the first object created." },
            { text: "D. Between 1 and 5 Element objects are created, and Element.max_value is increased for every object created." },
            { text: "E. Between 1 and 5 Element objects are created, and Element.max_value is increased for at least one object created." }
        ],
        correctAnswer: 4,
        explanationEN: "Option E is correct because:\n1. The loop runs exactly 5 times\n2. Each time:\n   - k gets a random value between 1 and 10\n   - An Element object is created only if k >= max_value\n   - When created, max_value is updated if the new value is larger\n3. First Element will always be created (max_value starts at 0)\n4. Subsequent Elements are created only if k >= current max_value\n5. Therefore:\n   - At least 1 Element will be created (when max_value is 0)\n   - At most 5 Elements could be created\n   - max_value will increase at least once (first object)\n   - max_value may increase more times if larger values are generated",
        explanationCN: "選項E是正確的，因為：\n1. 循環正好執行5次\n2. 每次：\n   - k獲得1到10之間的隨機值\n   - 只有當k >= max_value時才創建Element對象\n   - 創建時，如果新值更大，則更新max_value\n3. 第一個Element一定會被創建（max_value初始為0）\n4. 後續Element只有在k >= 當前max_value時才會創建\n5. 因此：\n   - 至少會創建1個Element（當max_value為0時）\n   - 最多可能創建5個Element\n   - max_value至少會增加一次（第一個對象）\n   - 如果生成更大的值，max_value可能會增加多次"
    },
    {
        id: 29,
        question: {
            text: "(AP Topic Question-10883)\n\nConsider the following class definition.",
            code: {
                content: `
public class WordClass
{
    private final String word;
    private static String max_word = "";
    public WordClass(String s)
    {
        word = s;
        if(word.length() > max_word.length())
        {
            max_word = word;
        }
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following is a true statement about the behavior of WordClass objects?",
        language: "java",
        options: [
            { text: "A. A WordClass object can change the value of the variable word more than once." },
            { text: "B. Every time a WordClass object is created, the max_word variable is referenced." },
            { text: "C. Every time a WordClass object is created, the value of the max_word variable changes." },
            { text: "D. No two WordClass objects can have their word length equal to the length of max_word." },
            { text: "E. The value of the max_word variable cannot be changed once it has been initialized." }
        ],
        correctAnswer: 1,
        explanationEN: "Option B is correct because:\n1. Every time a new WordClass object is created:\n   - The constructor executes\n   - max_word.length() is referenced in the if condition\n   - This happens regardless of whether max_word is updated\n2. The other options are incorrect because:\n   - A is false: word is final and can't be changed after initialization\n   - C is false: max_word only changes if the new word is longer\n   - D is false: multiple objects can have words of the same length\n   - E is false: max_word is static but not final, so it can be changed",
        explanationCN: "選項B是正確的，因為：\n1. 每次創建新的WordClass對象時：\n   - 構造函數執行\n   - 在if條件中引用max_word.length()\n   - 無論max_word是否更新都會發生這種情況\n2. 其他選項不正確，因為：\n   - A錯誤：word是final的，初始化後不能改變\n   - C錯誤：只有當新word更長時max_word才會改變\n   - D錯誤：多個對象可以有相同長度的word\n   - E錯誤：max_word是static但不是final，所以可以改變"
    },
    {
        id: 30,
        question: {
            text: "(AP Topic Question-11117)\n\nConsider the following class definitions.",
            code: {
                content: `
public class Item
{
    private int ID;
    public Item(int id)
    {
        ID = id;
    }
    public int getID()
    {
        return ID;
    }
    public void addToCollection(ItemCollection c)
    {
        c.addItem(this);
    }
}

public class ItemCollection
{
    private int last_ID;
    public void addItem(Item i)
    {
        if(i.getID() == last_ID)
        {
            System.out.print("ID " + i.getID() + " rejected; ");
        }
        else
        {
            last_ID = i.getID();
            System.out.print("ID " + i.getID() + " accepted; ");
        }
    }
    // Constructor not shown.
}`,
                language: "java"
            }
        },
        code: "Consider the following code segment, which appears in a class other than Item or ItemCollection.\n\nItem i = new Item(23);\nItem j = new Item(32);\nItemCollection c = new ItemCollection();\ni.addToCollection(c);\nj.addToCollection(c);\nj.addToCollection(c);\ni.addToCollection(c);\n\nWhat is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. ID 23 accepted; ID 32 accepted; ID 32 rejected; ID 23 accepted;" },
            { text: "B. ID 23 accepted; ID 32 accepted; ID 32 rejected; ID 23 rejected;" },
            { text: "C. ID 23 accepted; ID 32 rejected; ID 32 rejected; ID 23 accepted;" },
            { text: "D. ID 23 accepted; ID 32 rejected; ID 32 rejected; ID 23 rejected;" },
            { text: "E. ID 23 accepted; ID 32 rejected; ID 32 accepted; ID 23 rejected;" }
        ],
        correctAnswer: 0,
        explanationEN: "Let's trace the execution:\n1. i.addToCollection(c):\n   - ID 23 is added, last_ID becomes 23\n   - Prints \"ID 23 accepted;\"\n2. j.addToCollection(c):\n   - ID 32 is different from last_ID (23), so it's accepted\n   - last_ID becomes 32\n   - Prints \"ID 32 accepted;\"\n3. j.addToCollection(c):\n   - ID 32 equals last_ID (32), so it's rejected\n   - Prints \"ID 32 rejected;\"\n4. i.addToCollection(c):\n   - ID 23 is different from last_ID (32), so it's accepted\n   - last_ID becomes 23\n   - Prints \"ID 23 accepted;\"",
        explanationCN: "讓我們追蹤執行過程：\n1. i.addToCollection(c)：\n   - ID 23被添加，last_ID變為23\n   - 打印「ID 23 accepted;」\n2. j.addToCollection(c)：\n   - ID 32與last_ID（23）不同，所以被接受\n   - last_ID變為32\n   - 打印「ID 32 accepted;」\n3. j.addToCollection(c)：\n   - ID 32等於last_ID（32），所以被拒絕\n   - 打印「ID 32 rejected;」\n4. i.addToCollection(c)：\n   - ID 23與last_ID（32）不同，所以被接受\n   - last_ID變為23\n   - 打印「ID 23 accepted;」"
    },
    {
        id: 31,
        question: {
            text: "(AP Topic Question-11401)\n\nConsider the following class definitions.",
            code: {
                content: `
public class MenuItem
{
    private double price;
    public MenuItem(double p)
    {
        price = p;
    }
    public double getPrice()
    {
        return price;
    }
    public void makeItAMeal()
    {
        Combo meal = new Combo(this);
        price = meal.getComboPrice();
    }
}

public class Combo
{
    private double comboPrice;
    public Combo(MenuItem item)
    {
        comboPrice = item.getPrice() + 1.5;
    }
    public double getComboPrice()
    {
        return comboPrice;
    }
}`,
                language: "java"
            }
        },
        code: "The following code segment appears in a class other than MenuItem or Combo.\n\nMenuItem one = new MenuItem(5.0);\none.makeItAMeal();\nSystem.out.println(one.getPrice());\n\nWhat, if anything, is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 1.5" },
            { text: "B. 5.0" },
            { text: "C. 6.5" },
            { text: "D. 8.0" },
            { text: "E. Nothing is printed because the code will not compile." }
        ],
        correctAnswer: 2,
        explanationEN: "Let's trace the execution:\n1. MenuItem one = new MenuItem(5.0)\n   - Creates a MenuItem with price = 5.0\n2. one.makeItAMeal()\n   - Creates a new Combo object with the MenuItem\n   - Combo constructor sets comboPrice to item.getPrice() + 1.5 = 5.0 + 1.5 = 6.5\n   - Updates the MenuItem's price to the combo price (6.5)\n3. System.out.println(one.getPrice())\n   - Prints the updated price value: 6.5\n\nTherefore, 6.5 is printed.",
        explanationCN: "讓我們追蹤執行過程：\n1. MenuItem one = new MenuItem(5.0)\n   - 創建一個價格為5.0的MenuItem\n2. one.makeItAMeal()\n   - 用MenuItem創建一個新的Combo對象\n   - Combo構造函數將comboPrice設置為item.getPrice() + 1.5 = 5.0 + 1.5 = 6.5\n   - 將MenuItem的價格更新為combo價格（6.5）\n3. System.out.println(one.getPrice())\n   - 打印更新後的價格值：6.5\n\n因此，打印出6.5。"
    },
    {
        id: 32,
        question: {
            text: "(AP Topic Question-11402)\n\nConsider the following class definitions.",
            code: {
                content: `
public class Class1
{
    private int val1;
    public Class1()
    {
        val1 = 1;
    }
    public void init()
    {
        Class2 c2 = new Class2();
        c2.init(this, val1);
    }
    public void update(int x)
    {
        val1 -= x;
    }
    public int getVal()
    {
        return val1;
    }
}

public class Class2
{
    private int val2;
    public Class2()
    {
        val2 = 2;
    }
    public void init(Class1 c, int y)
    {
        c.update(val2 + y);
    }
}`,
                language: "java"
            }
        },
        code: "The following code segment appears in a method in a class other than Class1 or Class2.\n\nClass1 c = new Class1();\nc.init();\nSystem.out.println(c.getVal());\n\nWhat, if anything, is printed as a result of executing the code segment?",
        language: "java",
        options: [
            { text: "A. 2" },
            { text: "B. 1" },
            { text: "C. 0" },
            { text: "D. -2" },
            { text: "E. Nothing is printed because the code segment does not compile." }
        ],
        correctAnswer: 3,
        explanationEN: "Let's trace the execution:\n1. Class1 c = new Class1();\n   - Creates a Class1 object with val1 = 1\n2. c.init()\n   - Creates a Class2 object with val2 = 2\n   - Calls c2.init(this, val1) passing the Class1 object and val1 (1)\n3. Inside c2.init(Class1 c, int y):\n   - Calls c.update(val2 + y)\n   - This means c.update(2 + 1)\n   - So c.update(3) is called\n4. Inside update(int x):\n   - val1 -= x means val1 = val1 - 3\n   - val1 becomes 1 - 3 = -2\n5. Finally, c.getVal() returns -2\n\nTherefore, -2 is printed.",
        explanationCN: "讓我們追蹤執行過程：\n1. Class1 c = new Class1();\n   - 創建一個Class1對象，val1 = 1\n2. c.init()\n   - 創建一個Class2對象，val2 = 2\n   - 調用c2.init(this, val1)，傳遞Class1對象和val1（1）\n3. 在c2.init(Class1 c, int y)內：\n   - 調用c.update(val2 + y)\n   - 即調用c.update(2 + 1)\n   - 所以調用c.update(3)\n4. 在update(int x)內：\n   - val1 -= x 意味著 val1 = val1 - 3\n   - val1變為1 - 3 = -2\n5. 最後，c.getVal()返回-2\n\n因此，打印出-2。"
    },
    {
        id: 33,
        question: {
            text: "(AP Topic Question-11010)\n\nConsider the following class declaration.",
            code: {
                content: `
public class Circle
{
    private double radius;
    public double computeArea()
    {
        private double pi = 3.14159;
        public double area = pi * radius * radius;
        return area;
    }
    // Constructor not shown.
}`,
                language: "java"
            }
        },
        code: "Which of the following best explains why the computeArea method will cause a compilation error?",
        language: "java",
        options: [
            { text: "A. Local variables declared inside a method cannot be declared as public or private." },
            { text: "B. Local variables declared inside a method must all be private." },
            { text: "C. Local variables declared inside a method must all be public." },
            { text: "D. Local variables used inside a method must be declared at the end of the method." },
            { text: "E. Local variables used inside a method must be declared before the method header." }
        ],
        correctAnswer: 0,
        explanationEN: "Option A is correct because local variables (variables declared inside a method) cannot have access modifiers like public or private. These modifiers are only used for class-level declarations. The error occurs because:\n1. 'private double pi = 3.14159' attempts to use private modifier on a local variable\n2. 'public double area = pi * radius * radius' attempts to use public modifier on a local variable\nLocal variables are only accessible within their method and don't need access modifiers.",
        explanationCN: "選項A是正確的，因為局部變量（在方法內部聲明的變量）不能有訪問修飾符，如public或private。這些修飾符只用於類級別的聲明。錯誤發生是因為：\n1. 'private double pi = 3.14159' 試圖在局部變量上使用private修飾符\n2. 'public double area = pi * radius * radius' 試圖在局部變量上使用public修飾符\n局部變量只在其方法內部可訪問，不需要訪問修飾符。"
    },
    {
        id: 34,
        question: {
            text: "(AP Topic Question-11014)\n\nConsider the following class definition.",
            code: {
                content: `
public class Info
{
    private String name;
    private int number;
    public Info(String n, int num)
    {
        name = n;
        number = num;
    }
    public void changeName(String newName)
    {
        name = newName;
    }
    public int addNum(int n)
    {
        num += n;
        return num;
    }
}`,
                language: "java"
            }
        },
        code: "Which of the following best explains why the class will not compile?",
        language: "java",
        options: [
            { text: "A. The class is missing an accessor method." },
            { text: "B. The instance variables name and number should be designated public instead of private." },
            { text: "C. The return type for the Info constructor is missing." },
            { text: "D. The variable name is not defined in the changeName method." },
            { text: "E. The variable num is not defined in the addNum method." }
        ],
        correctAnswer: 4,
        explanationEN: "Option E is correct because the addNum method tries to use a variable 'num' that doesn't exist. The error occurs because:\n1. The instance variable is named 'number', but the method tries to use 'num'\n2. 'num' was never declared in the method or class\n3. The line 'num += n' attempts to modify a non-existent variable\n\nTo fix this, the method should use 'number' instead of 'num' to refer to the instance variable.",
        explanationCN: "選項E是正確的，因為addNum方法試圖使用一個不存在的變量'num'。錯誤發生是因為：\n1. 實例變量名為'number'，但方法試圖使用'num'\n2. 'num'從未在方法或類中聲明\n3. 'num += n'試圖修改一個不存在的變量\n\n要修復這個問題，方法應該使用'number'而不是'num'來引用實例變量。"
    },
    {
        id: 35,
        question: {
            text: "(AP Topic Question-11426)\n\nThe class Worker is defined below. The class includes the method getEarnings, which is intended to return the total amount earned by the worker.",
            code: {
                content: `
public class Worker
{
    private double hourlyRate;
    private double hoursWorked;
    private double earnings;
    public Worker(double rate, double hours)
    {
        hourlyRate = rate;
        hoursWorked = hours;
    }
    private void calculateEarnings()
    {
        double earnings = 0.0;
        earnings += hourlyRate * hoursWorked;
    }
    public double getEarnings()
    {
        calculateEarnings();
        return earnings;
    }
}`,
                language: "java"
            }
        },
        code: "The following code segment appears in a method in a class other than Worker. The code segment is intended to print the value 800.0, but instead prints a different value because of an error in the Worker class.\n\nWorker bob = new Worker(20.0, 40.0);\nSystem.out.println(bob.getEarnings());\n\nWhich of the following best explains why an incorrect value is printed?",
        language: "java",
        options: [
            { text: "A. The private variables hourlyRate and hoursWorked are not properly initialized." },
            { text: "B. The private variables hourlyRate and hoursWorked should have been declared public." },
            { text: "C. The private method calculateEarnings should have been declared public." },
            { text: "D. The variable earnings in the calculateEarnings method is a local variable." },
            { text: "E. The variables hourlyRate and hoursWorked in the calculateEarnings method are local variables." }
        ],
        correctAnswer: 3,
        explanationEN: "Option D is correct because in calculateEarnings(), the method declares a local variable 'earnings' that shadows the instance variable of the same name. The error occurs because:\n1. The line 'double earnings = 0.0' creates a new local variable instead of using the instance variable\n2. The local variable is modified but disappears when the method ends\n3. The instance variable 'earnings' remains at its default value (0.0)\n4. When getEarnings() returns earnings, it returns the unmodified instance variable\n\nTo fix this, remove 'double' from the calculateEarnings method so it uses the instance variable instead of creating a local variable.",
        explanationCN: "選項D是正確的，因為在calculateEarnings()中，該方法聲明了一個局部變量'earnings'，它遮蔽了同名的實例變量。錯誤發生是因為：\n1. 'double earnings = 0.0'創建了一個新的局部變量，而不是使用實例變量\n2. 局部變量被修改但在方法結束時消失\n3. 實例變量'earnings'保持其默認值（0.0）\n4. 當getEarnings()返回earnings時，它返回未修改的實例變量\n\n要修復這個問題，從calculateEarnings方法中移除'double'，這樣它就會使用實例變量而不是創建局部變量。"
    },
    {
        id: 36,
        question: {
            text: "(2020 Practice Exam 1-11230)\n\nConsider the following class definition.",
            code: {
                content: `
public class Points
{
    private double num1;
    private double num2;
    public Points(int n1, int n2)  // Line 6
    {
        num1 = n1;  // Line 8
        num2 = n2;  // Line 9
    }
    public void incrementPoints(int value)  // Line 12
    {
        n1 += value;  // Line 14
        n2 += value;  // Line 15
    }
}`,
                language: "java"
            }
        },
        code: "The class does not compile. Which of the following identifies the error in the class definition?",
        language: "java",
        options: [
            { text: "A. In line 6, the Points constructor must have a void return type." },
            { text: "B. In lines 8 and 9, int values cannot be assigned to double variables." },
            { text: "C. In line 12, the incrementPoints method must have a non-void return type." },
            { text: "D. In lines 14 and 15, the variables n1 and n2 are not defined." },
            { text: "E. In lines 14 and 15, the variable value is not defined." }
        ],
        correctAnswer: 3,
        explanationEN: "Option D is correct because the incrementPoints method tries to use variables 'n1' and 'n2' that don't exist. The error occurs because:\n1. The instance variables are named 'num1' and 'num2'\n2. The method tries to use 'n1' and 'n2' which were never declared\n3. To fix this, the method should use 'num1' and 'num2' instead\n\nThe other options are incorrect because:\n- A: Constructors never have return types\n- B: int values can be implicitly converted to double\n- C: void return type is appropriate for this method\n- E: 'value' is properly defined as a parameter",
        explanationCN: "選項D是正確的，因為incrementPoints方法試圖使用不存在的變量'n1'和'n2'。錯誤發生是因為：\n1. 實例變量名為'num1'和'num2'\n2. 方法試圖使用從未聲明的'n1'和'n2'\n3. 要修復這個問題，方法應該使用'num1'和'num2'\n\n其他選項不正確，因為：\n- A：構造函數從不有返回類型\n- B：int值可以隱式轉換為double\n- C：void返回類型對這個方法是合適的\n- E：'value'作為參數正確定義"
    }
]
