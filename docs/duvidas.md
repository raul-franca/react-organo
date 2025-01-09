# React

### children
children é uma propriedade especial do React que permite passar elementos filhos para um componente.
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


# JavaScript

### .map()
.map retorna um novo array de elementos, baseado no que retornamos na função passada por callback.
```javascript
    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.map((item) => item * 2);
    console.log(newArr); // [2, 4, 6, 8, 10]
```

---
