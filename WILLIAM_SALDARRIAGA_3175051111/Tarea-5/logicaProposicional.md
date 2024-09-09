# Ejercicios de Lógica proposicional

### 1. true || true || false && true || false && true && true || false
#### Desarrollo
true || true || false || false && true && true || false

true || true || false || false || false

true

#### Resultado

> Resultado: true

#### Verificación
 ```javascript
    console.log((true || true || false && true || false && true && true || false));
 ```

### 2. true && (false || false && (true && (true || false && true))) || false && (true || false)

#### Desarrollo

true && (false || false && (true && (true || false && true))) || false && (true || false)

true && (false || false && (true && (true || false))) || false && (true || false)

true && (false || false && (true && true)) || false && (true || false)

true && (false || false && true) || false && (true || false)

true && (false || false ) || false && (true || false)

true && false || false && (true || false)

true && false || false && true

false || false && true

false || false

false

#### Resultado

>Resultado: false

#### Verificación

 ```javascript
    console.log((true && (false || false && (true && (true || false && true))) || false && (true || false)));
 ```

### 3.  !(!true && (false || false && !!!true || (true && !false))) || false && true

#### Desarrollo

!(!true && (false || false && !!!true || (true && !false))) || false && true

!(!true && (false || false && !!!true || true)) || false && true

!(!true && (false || false || true)) || false && true

!(!true && true) || false && true

!(false) || false && true

true || false && true

true || false

true

#### Resultado

>Resultado: true

#### Verificación

```javascript
    console.log((!(!true && (false || false && !!!true || (true && !false))) || false && true));
```
