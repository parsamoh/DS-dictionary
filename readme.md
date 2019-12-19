# 1. Dictinery with trie data sturcuture

This is a little project for data structure students

## 1.1. 💾 Table of contents

<!-- TOC -->autoauto- [1. Dictinery with trie data sturcuture](#1-dictinery-with-trie-data-sturcuture)auto    - [1.1. 💾 Table of contents](#11-💾-table-of-contents)auto    - [1.2. ⛩About](#12-⛩about)auto    - [1.3. 🎯Parts of solution](#13-🎯parts-of-solution)auto        - [1.3.1. 🎗Hint](#131-🎗hint)auto    - [1.4. 🔗 Links](#14-🔗-links)auto    - [1.5. ⭐️Additional score](#15-⭐️additional-score)auto    - [1.6. 📦Data](#16-📦data)autoauto<!-- /TOC -->[TOC]

## 1.2. ⛩About

we want to make a straightforward English to Persian dictionary that uses the trie data structure for saving data and finding them.

![Mobile](/Users/parsa199/study/dictionery/Mobile.jpg)

## 1.3. 🎯Parts of solution

First of all, you have to add words in the JSON file to a **trie Data structure** .then you should use a listener on your input text-box whenever somebody adds a letter you have to move on trie tree and print nearest nodes that their isEndOfWord flag is true.

🚨 Alert: using 3rd-party libraries is not allowed.

```json
[
  {
    "english": "a few",
    "farsi": "کمي"
  },
  {
    "english": "a great deal of",
    "farsi": "يک دنيا"
  },
  {
    "english": "a handful",
    "farsi": "يک مشت"
  },
  {
    "english": "a la garconne",
    "farsi": "آلاگارسن"
  }
  //...
]
```

### 1.3.1. 🎗Hint

All of them are exactly like a simple trie tree. You need to add a variable for saving the meaning of the word if its isEndOfWord flag is true.

## 1.4. 🔗 Links

[https://en.wikipedia.org/wiki/Trie](https://en.wikipedia.org/wiki/Trie)

https://www.geeksforgeeks.org/trie-insert-and-search/

## 1.5. ⭐️Additional score

add persian to english dictionary [ ]

## 1.6. 📦Data

the data you need to work on is accessible in two JSON and CSV format.

[data.zip]: ./data.zip
