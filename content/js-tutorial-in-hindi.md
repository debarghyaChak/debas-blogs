---
title: JavaScript tutorial for beginners in hindi
description: This is an easy JS tutorial in hindi
slug: js-tutorial-in-hindi
date: 2023-10-01
author: Debarghya Chakravarty
image: /blog1.webp
---

# Introduction

JavaScript एक बहुमुखी प्रोग्रामिंग भाषा है जिसका उपयोग वेब डेवलपमेंट के लिए व्यापक रूप से किया जाता है। इस ट्यूटोरियल में, हम जावास्क्रिप्ट की मूल बातें, इसकी सिंटैक्स और इसे अपनी परियोजनाओं में प्रभावी ढंग से उपयोग करने के तरीके का पता लगाएंगे। यह गाइड हिंदी बोलने वालों के लिए बनाया गया है, जिससे आपके लिए अवधारणाओं को समझना आसान हो जाएगा।

JavaScript is a versatile programming language that is widely used for web development. In this tutorial, we will explore the fundamentals of JavaScript, its syntax, and how to use it effectively in your projects. This guide is tailored for Hindi speakers, making it easier for you to grasp the concepts.

## What is JavaScript?

JavaScript एक उच्च-स्तरीय, गतिशील, अनटाइप्ड और व्याख्यायित प्रोग्रामिंग भाषा है। यह HTML और CSS के साथ वर्ल्ड वाइड वेब की मुख्य तकनीकों में से एक है। जावास्क्रिप्ट इंटरैक्टिव वेब पेजों को सक्षम बनाता है और वेब अनुप्रयोगों का एक अनिवार्य हिस्सा है।

JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript enables interactive web pages and is an essential part of web applications.

## Why Learn JavaScript?

जावास्क्रिप्ट सीखने के कई फायदे हैं:

1.  **लोकप्रियता (Popularity)**: जावास्क्रिप्ट दुनिया की सबसे लोकप्रिय प्रोग्रामिंग भाषाओं में से एक है।
2.  **बहुमुखी प्रतिभा (Versatility)**: इसका उपयोग फ्रंट-एंड और बैक-एंड दोनों डेवलपमेंट के लिए किया जा सकता है।
3.  **सामुदायिक समर्थन (Community Support)**: एक बड़े समुदाय का मतलब है कि आपकी मदद के लिए बहुत सारे संसाधन, लाइब्रेरी और फ्रेमवर्क उपलब्ध हैं।

There are many advantages to learning JavaScript:

1.  **Popularity**: JavaScript is one of the most popular programming languages in the world.
2.  **Versatility**: It can be used for both front-end and back-end development.
3.  **Community Support**: A large community means plenty of resources, libraries, and frameworks to help you.

## Setting Up Your Environment

जावास्क्रिप्ट में कोडिंग शुरू करने के लिए, आपको एक टेक्स्ट एडिटर और एक वेब ब्राउज़र की आवश्यकता है। कुछ लोकप्रिय टेक्स्ट एडिटर्स में विजुअल स्टूडियो कोड, सबलाइम टेक्स्ट और एटम शामिल हैं। आप अपने जावास्क्रिप्ट कोड को चलाने के लिए क्रोम, फ़ायरफ़ॉक्स या एज जैसे किसी भी आधुनिक वेब ब्राउज़र का उपयोग कर सकते हैं।

To start coding in JavaScript, you need a text editor and a web browser. Some popular text editors include Visual Studio Code, Sublime Text, and Atom. You can use any modern web browser like Chrome, Firefox, or Edge to run your JavaScript code.

## Basic Syntax

जावास्क्रिप्ट सिंटैक्स नियमों का समूह है जो सही ढंग से संरचित जावास्क्रिप्ट प्रोग्राम को परिभाषित करता है। यहाँ कुछ मूल तत्व दिए गए हैं:

JavaScript syntax is the set of rules that define a correctly structured JavaScript program. Here are some basic elements:

-   **Variables (चर)**: चरों को घोषित करने के लिए `let`, `const`, या `var` का उपयोग करें। Use `let`, `const`, or `var` to declare variables.

    ```javascript
    let name = "John"; // let is used for variables that can change
    const age = 30;     // const is used for constants (values that cannot be reassigned)
    var city = "Delhi"; // var is older way for variable declaration. Avoid using it now.
    console.log(name); // Output: John
    console.log(age); // Output: 30
    console.log(city) // Output: Delhi

    name = "Jane"
    console.log(name) // Output: Jane
    ```

-   **Data Types (डेटा प्रकार)**: जावास्क्रिप्ट में विभिन्न डेटा प्रकार हैं जैसे string, number, boolean, null, undefined, object, और symbol. JavaScript has various data types such as string, number, boolean, null, undefined, object, and symbol.

    ```javascript
    let message = "Hello, world!"; // String
    let count = 10;                // Number
    let isActive = true;         // Boolean
    let emptyValue = null;       // Null
    let notDefined;             // Undefined
    let person = { name: "John", age: 30 }; // Object
    ```

-   **Operators (ऑपरेटर)**: JavaScript में गणितीय, असाइनमेंट, तुलनात्मक और तार्किक ऑपरेटर होते हैं। JavaScript has mathematical, assignment, comparative, and logical operators.

    ```javascript
    let x = 10;
    let y = 5;
    let sum = x + y;       // Addition (+)
    let difference = x - y; // Subtraction (-)
    let product = x * y;    // Multiplication (*)
    let quotient = x / y;   // Division (/)
    let isEqual = x == y;   // Equality (==)
    let isGreater = x > y;  // Greater than (>)
    let andOperator = (x > 5) && (y < 10); // Logical AND (&&)
    console.log(sum) // Output: 15
    console.log(difference) // Output: 5
    console.log(product) // Output: 50
    console.log(quotient) // Output: 2
    console.log(isEqual) // Output: false
    console.log(isGreater) // Output: true
    console.log(andOperator) // Output: true
    ```

-   **Conditional Statements (शर्तिया बयान)**: `if`, `else if`, और `else` का उपयोग शर्तों के आधार पर कोड निष्पादित करने के लिए किया जाता है। `if`, `else if`, and `else` are used to execute code based on conditions.

    ```javascript
    let ageCheck = 20;
    if (ageCheck >= 18) {
      console.log("You are an adult.");
    } else {
      console.log("You are a minor.");
    }

    let marks = 75;
    if (marks >= 80) {
        console.log("Distinction")
    } else if (marks >= 60) {
        console.log("First Division")
    } else if (marks >= 45) {
        console.log("Second Division")
    } else {
        console.log("Fail")
    }
    ```

-   **Loops (लूप)**: `for` और `while` लूप का उपयोग कोड के एक ब्लॉक को बार-बार निष्पादित करने के लिए किया जाता है। `for` and `while` loops are used to execute a block of code repeatedly.

    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log("Number: " + i);
    }

    let counter = 0;
    while (counter < 3) {
      console.log("Counter: " + counter);
      counter++;
    }
    ```

-   **Functions (फंक्शन)**: फ़ंक्शंस कोड के पुन: प्रयोज्य ब्लॉक होते हैं। Functions are reusable blocks of code.

    ```javascript
    function greet(name) {
      return "Hello, " + name + "!";
    }

    let greeting = greet("Alice");
    console.log(greeting); // Output: Hello, Alice!
    ```

## Working with the DOM (Document Object Model)

जावास्क्रिप्ट का उपयोग HTML तत्वों को गतिशील रूप से हेरफेर करने के लिए किया जा सकता है। JavaScript can be used to dynamically manipulate HTML elements.

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <p id="myParagraph">This is a paragraph.</p>
    <button onclick="changeText()">Change Text</button>

    <script>
        function changeText() {
            let paragraph = document.getElementById("myParagraph");
            paragraph.textContent = "Text has been changed!";
        }
    </script>
</body>
</html>