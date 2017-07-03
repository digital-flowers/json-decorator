# classy-decorator
Dynamically generate toJSON serialization method for javascript ES6 classes ;)

install

```bash
npm i json-decorator --save
```
very easy to use
```javascript
import json from "json-decorator";

@json("b","d") // pass the property names that you want to ignore
class Clazz {
    constructor(a,b,c,d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}

console.log(JSON.stringify(new Clazz(1,2,3,4))); // '{"a":1,"c":3}'  

```