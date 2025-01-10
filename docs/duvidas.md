# React

### children
 **children** é uma propriedade especial do React que permite passar elementos filhos para um componente.
```javascript
    const Button = ({ children }) => {
        return (
            <button>{children}</button>
        );
    }

    const App = () => {
        return (
            <Button>Click me</Button>
        );
    }
```

### useState
 **useState** é um hook do React que permite adicionar estado a um componente funcional.
```javascript
   const [text, setText] = useState("");
   setText("Hello World");
   console.log(text); // Hello World
```

# JavaScript

### .map()
**.map** retorna um novo array de elementos, baseado no que retornamos na função passada por callback.
```javascript
    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.map((item) => item * 2);
    console.log(newArr); // [2, 4, 6, 8, 10]
```
### .filter()
**.filter** retorna um novo array com todos os elementos que passaram no teste da função passada por callback.
```javascript
    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.filter((item) => item % 2 === 0);
    console.log(newArr); // [2, 4]
```
---
