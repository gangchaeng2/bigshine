---
path: "/js-class"
date: "2019-07-10"
title: "js-class"
description: "안녕하세요 네번째 포스트 입니다."
tags: ['js', 'class']
---

1\. Class 정의
------------

JavaScript class는 **ECMAScript 6(ES6)**을 통해 소개되었으며, 기존 prototype 기반의 상속 보다 명료하게 사용할 수 있습니다.

Class 문법은 새로운 객체지향 상속 모델을 제공하는 것은 아닙니다. JavaScript class는 객체를 생성하고 상속을 다루는데 있어 훨씬 더 단순하고 명확한 문법을 제공합니다.

Class는 사실 함수입니다. 함수를 함수 표현식과 함수 선언으로 정의할 수 있듯이 class 문법도 class 표현식과 class 선언 두 가지 방법을 제공합니다.

2\. Class 선언
------------

```js
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

`함수 선언과 클래스 선언의 중요한 차이점은 함수 선언의 경우 호이스팅이 일어나지만, 클래스 선언의 경우 그렇지 않다. 즉 클래스를 사용하기 위해서는 클래스를 먼저 선언해야 하며 그렇지 않은 경우 에러를 발생 시킨다.`

3\. Class의 구성
-------------

* Constructor (생성자) : 객체를 생성하고 초기화를 시키는 특수한 메소드로 클래스 내에 하나의 생성자만 존재
* Property : 클래스 안에 있는 변수들을 말한다. **(반드시 Constructor 내에 정의되어야 한다.)** 인스턴스화 후 인스턴스명.변수명 / 클래스 내부에서 접근 시 this.변수명
* Static Methods : 정적 메소드로 클래스의 인스턴스화(객체화) 없이 호출이 가능하며 클래스의 인스턴스에서는 호출할 수 없습니다.



