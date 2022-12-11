#sample UML diagram for CS102 by Monique Barrios <br>
#monbarri@uat.edu

Create a diagram with 2 classes. Those classes need 3 attributes, 3 methods

```mermaid
    classDiagram
    class Shape{
        length
        width
        getLength()
        setLength()
        getWidth()
        setWidth()
    }

   class ShapeSig{
        -length : int
        -width : int
        +getLength() : int
        +setLength(n : int) : void
        +getWidth() :int
        #setWidth(n : int)
    }
```
Attributes come before properties or methods<br>
\+ public, \- private, \# protected
```mermaid
    classDiagram
    class Superclass{
        
    }

   class Subclass1{
        
    }

    class Subclass2{
        
    }

    Superclass --|> Subclass1
    Superclass <|-- Subclass2
```