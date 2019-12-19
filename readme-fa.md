# پروژه پایانی ساختمان داده

## فهرست مطالب

[TOC]

## موضوع پروژه

میخواهیم دیکشنری ای انگلیسی به فارسی بسازیم، به شکلی که یک ورودی داشته باشد که به هنگام تایپ کردن کلمه مورد نظر در هر لحظه نزدیک ترین کلمات ممکن را به همراه معنی آن نمایش دهد.

![Mobile](./Mobile.jpg)

## روش حل

دیتایی به شکل زیر در قالب فایل json به شما داده میشود. ابتدا شما باید این ورودی را در داده ساختار trie ذخیره کنید، پس از آن با کمک یک listener روی ورودی search هر زمان که حرف جدید وارد شد با حرکت کردن رو درخت tire میتوان کلمات مورد نظر ر ا پیدا کرد.

 **هشدار :‌ استفاده از کتابخانه های آماده مجاز نیست.**

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

### راهنمایی

میتوان در هر راس trie علاوه بر isEndOfWord یک متغییر دیگر هم نگه داشت که معنی آن کلمه که به آن رسیده ایم است.

## نمره اضافی

دیکشنری شما علاوه بر انگلیسی به فارسی از فارسی به انگلیسی نیز پشتیبانی کند.

## دیتای مورد نیاز

دیتای مورد نیاز در دو فرمت csv و json در اختیار شما قرار گرفته است.

[Data.zip](https://github.com/parsamoh/DS-dictionary/raw/master/data.zip)
